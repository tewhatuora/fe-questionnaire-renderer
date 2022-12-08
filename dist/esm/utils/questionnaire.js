/* eslint-disable no-underscore-dangle,@typescript-eslint/no-use-before-define */
import { __assign } from "tslib";
import { questionnaireFormPath } from '../QuestionnaireRenderer';
import { Questionnaire_ItemTypeKind } from '../types/fhir';
import verifyEnableWhen from './enableWhen';
// Splits the linkId to create URL sections
export function getUrlSection(linkId) {
    if (!linkId)
        return '';
    var split = linkId.split('.');
    return split[split.length - 1];
}
// Builds the next or previous url page based on the current ones
export function buildPageUrl(props) {
    var formData = props.formData, params = props.params, questionnaire = props.questionnaire;
    var stepId = params.stepId;
    if (!questionnaire || !questionnaire.item || !formData)
        return undefined;
    var currentStep = questionnaire.item.find(function (i) { return getUrlSection(i.linkId) === stepId; });
    // If the current step has pages to be iterated over
    if (currentStep && currentStep.item) {
        var nextPageUrl = getNewPageUrl(currentStep, props);
        if (nextPageUrl)
            return nextPageUrl;
    }
    // If the app has to find the next or previous step
    var newStepUrl = getNewStepUrl(questionnaire, props);
    if (newStepUrl)
        return newStepUrl;
    return undefined;
}
// Returns if more items are available in a given group
function hasMoreItems(group, index, isNext) {
    var currentIndexExists = index > -1;
    var items = (group.item && group.item.length) || 0;
    var notLast = isNext && index < items - 1;
    var notFirst = !isNext && index > 0;
    return currentIndexExists && items && (notLast || notFirst);
}
// If the current step has pages that could be eligible for next or previous
function getNewPageUrl(currentStep, props) {
    var isNext = props.isNext, formData = props.formData, params = props.params;
    var stepId = params.stepId, pageId = params.pageId;
    if (!currentStep.item || !formData)
        return undefined;
    var currentPageInd = currentStep.item.findIndex(function (i) { return getUrlSection(i.linkId) === pageId; });
    // If the page is defined and either not the first one or the last one
    if (hasMoreItems(currentStep, currentPageInd, isNext)) {
        // Previous or next page in the step
        var newPage = currentStep.item[currentPageInd + (isNext ? 1 : -1)];
        // Check if the page is enabled or loop the function to find the next available one
        if (newPage.item && newPage.enableWhen) {
            var enabled = verifyEnableWhen(formData, newPage.enableWhen, newPage.enableBehavior);
            if (!enabled) {
                return buildPageUrl(__assign(__assign({}, props), { params: { stepId: stepId, pageId: getUrlSection(newPage.linkId) } }));
            }
        }
        var pagePath = newPage && newPage.item ? getUrlSection(newPage.linkId) : '';
        return questionnaireFormPath("".concat(getUrlSection(currentStep.linkId), "/").concat(pagePath));
    }
    return undefined;
}
// If the app has to find the next or previous step
function getNewStepUrl(questionnaire, props) {
    var isNext = props.isNext, formData = props.formData, params = props.params;
    var stepId = params.stepId;
    if (!questionnaire.item || !formData)
        return undefined;
    var buildHelp = function (newParams) {
        return buildPageUrl(__assign(__assign({}, props), { params: newParams }));
    };
    var currentStepInd = questionnaire.item.findIndex(function (i) { return getUrlSection(i.linkId) === stepId; });
    // If the form has more steps to be displayed
    if (hasMoreItems(questionnaire, currentStepInd, isNext)) {
        var ns = questionnaire.item[currentStepInd + (isNext ? 1 : -1)];
        // Skip items that are not groups
        var toSkip = ns.type !== Questionnaire_ItemTypeKind._group;
        // Skip the disabled items
        if (ns.enableWhen && !toSkip) {
            toSkip = !verifyEnableWhen(formData, ns.enableWhen, ns.enableBehavior);
        }
        if (toSkip) {
            return buildHelp({ stepId: getUrlSection(ns.linkId) });
        }
        // Gets the first or last page in the new step and check if it's enabled
        var page = ns.item[isNext ? 0 : ns.item.length - 1];
        if (page === null || page === void 0 ? void 0 : page.enableWhen) {
            var enabled = verifyEnableWhen(formData, page.enableWhen, page.enableBehavior);
            if (!enabled) {
                return buildHelp({
                    stepId: getUrlSection(ns.linkId),
                    pageId: getUrlSection(page.linkId)
                });
            }
        }
        return questionnaireFormPath("".concat(getUrlSection(ns.linkId), "/").concat(page && page.item && ns.item ? getUrlSection(page.linkId) : ''));
    }
    return undefined;
}
//# sourceMappingURL=questionnaire.js.map