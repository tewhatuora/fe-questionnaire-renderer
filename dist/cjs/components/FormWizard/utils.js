"use strict";
/* eslint-disable no-underscore-dangle */
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildInitialValues = exports.getCurrentPageInputs = exports.filterEnabledAndAddRepeat = exports.filterEnabledItems = void 0;
var tslib_1 = require("tslib");
var lodash_get_1 = tslib_1.__importDefault(require("lodash.get"));
var lodash_set_1 = tslib_1.__importDefault(require("lodash.set"));
var types_1 = require("../../types");
var constants_1 = require("../../types/constants");
var fhir_1 = require("../../types/fhir");
var enableWhen_1 = tslib_1.__importDefault(require("../../utils/enableWhen"));
var extensions_1 = require("../../utils/extensions");
var questionnaire_1 = require("../../utils/questionnaire");
function filterEnabledItems(values, quest) {
    return quest.filter(function (i) {
        return (!i.enableWhen ||
            (i.enableWhen && (0, enableWhen_1.default)(values, i.enableWhen, i.enableBehavior)));
    });
}
exports.filterEnabledItems = filterEnabledItems;
function filterEnabledAndAddRepeat(values, quest) {
    return filterEnabledItems(values, quest);
}
exports.filterEnabledAndAddRepeat = filterEnabledAndAddRepeat;
function getCurrentPageInputs(params, values, quest) {
    var _a;
    var stepId = params.stepId, pageId = params.pageId;
    if (!quest || !quest.item)
        return [];
    var currentStep = (_a = quest.item) === null || _a === void 0 ? void 0 : _a.find(function (i) { return (0, questionnaire_1.getUrlSection)(i.linkId) === stepId; });
    if (currentStep) {
        if (!pageId || !currentStep.item) {
            return filterEnabledItems(values, currentStep.item || quest.item);
        }
        var currentPage = currentStep.item.find(function (i) { return (0, questionnaire_1.getUrlSection)(i.linkId) === pageId; });
        if (currentPage && currentPage.item)
            return filterEnabledItems(values, currentPage.item);
        return filterEnabledItems(values, currentStep.item);
    }
    return [];
}
exports.getCurrentPageInputs = getCurrentPageInputs;
function getDefaultValue(item) {
    var hasInit = item.initial && item.initial.length > 0;
    // If the item is not repeatable returns the first of the initial values or a default
    switch (item.type) {
        case fhir_1.Questionnaire_ItemTypeKind._boolean:
            return hasInit
                ? item.initial[0].valueBoolean || ''
                : '';
        case fhir_1.Questionnaire_ItemTypeKind._reference:
            return hasInit
                ? Object.values(item.initial[0])[0]
                : '';
        case fhir_1.Questionnaire_ItemTypeKind._string:
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
                if ((0, extensions_1.isExtension)(i, types_1.Extensions.checkboxGroupWithNoOption)) {
                    var id = "".concat(i.linkIdWithParent, "_noOption");
                    var val_1 = formData ? (0, lodash_get_1.default)(formData, id) || '' : undefined;
                    (0, lodash_set_1.default)(values, id, val_1 === undefined ? getDefaultValue(i) : val_1);
                }
            }
            var val = formData && i.linkIdWithParent
                ? (0, lodash_get_1.default)(formData, i.linkIdWithParent)
                : undefined;
            (0, lodash_set_1.default)(values, i.linkIdWithParent || '', val === undefined ? getDefaultValue(i) : val);
        }
        else {
            getInitialValues(values, i.item, formData);
        }
    });
    return values;
}
function buildInitialValues(quest, formData) {
    var _a;
    if (!quest || !quest.item)
        return {};
    var initialValues = (_a = {},
        _a[constants_1.privacyAgreementAcceptedKey] = false,
        _a);
    return getInitialValues(initialValues, quest.item, formData);
}
exports.buildInitialValues = buildInitialValues;
//# sourceMappingURL=utils.js.map