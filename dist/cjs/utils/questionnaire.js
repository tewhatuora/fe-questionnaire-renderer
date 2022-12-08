"use strict";
/* eslint-disable no-underscore-dangle,@typescript-eslint/no-use-before-define */
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildPageUrl = exports.getUrlSection = void 0;
var tslib_1 = require("tslib");
var QuestionnaireRenderer_1 = require("../QuestionnaireRenderer");
var fhir_1 = require("../types/fhir");
var enableWhen_1 = tslib_1.__importDefault(require("./enableWhen"));
// Splits the linkId to create URL sections
function getUrlSection(linkId) {
    if (!linkId)
        return '';
    var split = linkId.split('.');
    return split[split.length - 1];
}
exports.getUrlSection = getUrlSection;
// Builds the next or previous url page based on the current ones
function buildPageUrl(props) {
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
exports.buildPageUrl = buildPageUrl;
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
            var enabled = (0, enableWhen_1.default)(formData, newPage.enableWhen, newPage.enableBehavior);
            if (!enabled) {
                return buildPageUrl(tslib_1.__assign(tslib_1.__assign({}, props), { params: { stepId: stepId, pageId: getUrlSection(newPage.linkId) } }));
            }
        }
        var pagePath = newPage && newPage.item ? getUrlSection(newPage.linkId) : '';
        return (0, QuestionnaireRenderer_1.questionnaireFormPath)("".concat(getUrlSection(currentStep.linkId), "/").concat(pagePath));
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
        return buildPageUrl(tslib_1.__assign(tslib_1.__assign({}, props), { params: newParams }));
    };
    var currentStepInd = questionnaire.item.findIndex(function (i) { return getUrlSection(i.linkId) === stepId; });
    // If the form has more steps to be displayed
    if (hasMoreItems(questionnaire, currentStepInd, isNext)) {
        var ns = questionnaire.item[currentStepInd + (isNext ? 1 : -1)];
        // Skip items that are not groups
        var toSkip = ns.type !== fhir_1.Questionnaire_ItemTypeKind._group;
        // Skip the disabled items
        if (ns.enableWhen && !toSkip) {
            toSkip = !(0, enableWhen_1.default)(formData, ns.enableWhen, ns.enableBehavior);
        }
        if (toSkip) {
            return buildHelp({ stepId: getUrlSection(ns.linkId) });
        }
        // Gets the first or last page in the new step and check if it's enabled
        var page = ns.item[isNext ? 0 : ns.item.length - 1];
        if (page === null || page === void 0 ? void 0 : page.enableWhen) {
            var enabled = (0, enableWhen_1.default)(formData, page.enableWhen, page.enableBehavior);
            if (!enabled) {
                return buildHelp({
                    stepId: getUrlSection(ns.linkId),
                    pageId: getUrlSection(page.linkId)
                });
            }
        }
        return (0, QuestionnaireRenderer_1.questionnaireFormPath)("".concat(getUrlSection(ns.linkId), "/").concat(page && page.item && ns.item ? getUrlSection(page.linkId) : ''));
    }
    return undefined;
}
//# sourceMappingURL=questionnaire.js.map