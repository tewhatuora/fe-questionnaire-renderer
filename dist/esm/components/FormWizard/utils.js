/* eslint-disable no-underscore-dangle */
import get from 'lodash.get';
import set from 'lodash.set';
import { Extensions } from '../../types';
import { privacyAgreementAcceptedKey } from '../../types/constants';
import { Questionnaire_ItemTypeKind } from '../../types/fhir';
import verifyEnableWhen from '../../utils/enableWhen';
import { isExtension } from '../../utils/extensions';
import { getUrlSection } from '../../utils/questionnaire';
export function filterEnabledItems(values, quest) {
    return quest.filter(function (i) {
        return (!i.enableWhen ||
            (i.enableWhen && verifyEnableWhen(values, i.enableWhen, i.enableBehavior)));
    });
}
export function filterEnabledAndAddRepeat(values, quest) {
    return filterEnabledItems(values, quest);
}
export function getCurrentPageInputs(params, values, quest) {
    var _a;
    var stepId = params.stepId, pageId = params.pageId;
    if (!quest || !quest.item)
        return [];
    var currentStep = (_a = quest.item) === null || _a === void 0 ? void 0 : _a.find(function (i) { return getUrlSection(i.linkId) === stepId; });
    if (currentStep) {
        if (!pageId || !currentStep.item) {
            return filterEnabledItems(values, currentStep.item || quest.item);
        }
        var currentPage = currentStep.item.find(function (i) { return getUrlSection(i.linkId) === pageId; });
        if (currentPage && currentPage.item)
            return filterEnabledItems(values, currentPage.item);
        return filterEnabledItems(values, currentStep.item);
    }
    return [];
}
function getDefaultValue(item) {
    var hasInit = item.initial && item.initial.length > 0;
    // If the item is not repeatable returns the first of the initial values or a default
    switch (item.type) {
        case Questionnaire_ItemTypeKind._boolean:
            return hasInit
                ? item.initial[0].valueBoolean || ''
                : '';
        case Questionnaire_ItemTypeKind._reference:
            return hasInit
                ? Object.values(item.initial[0])[0]
                : '';
        case Questionnaire_ItemTypeKind._string:
            return hasInit
                ? item.initial[0].valueString || ''
                : '';
        default:
            return '';
    }
}
function getInitialValues(values, items, formData) {
    items.forEach(function (i) {
        if (!i.item) {
            if (i.extension) {
                if (isExtension(i, Extensions.checkboxGroupWithNoOption)) {
                    var id = "".concat(i.linkIdWithParent, "_noOption");
                    var val_1 = formData ? get(formData, id) || '' : undefined;
                    set(values, id, val_1 === undefined ? getDefaultValue(i) : val_1);
                }
            }
            var val = formData && i.linkIdWithParent
                ? get(formData, i.linkIdWithParent)
                : undefined;
            set(values, i.linkIdWithParent || '', val === undefined ? getDefaultValue(i) : val);
        }
        else {
            getInitialValues(values, i.item, formData);
        }
    });
    return values;
}
export function buildInitialValues(quest, formData) {
    var _a;
    if (!quest || !quest.item)
        return {};
    var initialValues = (_a = {},
        _a[privacyAgreementAcceptedKey] = false,
        _a);
    return getInitialValues(initialValues, quest.item, formData);
}
//# sourceMappingURL=utils.js.map