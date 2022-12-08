"use strict";
/* eslint-disable no-underscore-dangle */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var dayjs_1 = tslib_1.__importDefault(require("dayjs"));
var lodash_get_1 = tslib_1.__importDefault(require("lodash.get"));
var types_1 = require("../types");
var fhir_1 = require("../types/fhir");
var extensions_1 = require("./extensions");
var utils_1 = require("./utils");
function createAnswerObject(val, input) {
    switch (input.type) {
        case fhir_1.Questionnaire_ItemTypeKind._boolean:
            return { valueBoolean: val };
        case fhir_1.Questionnaire_ItemTypeKind._choice:
            return { valueString: val };
        case fhir_1.Questionnaire_ItemTypeKind._date:
            return { valueDate: val };
        case fhir_1.Questionnaire_ItemTypeKind._openChoice:
            if ((0, extensions_1.isExtension)(input, types_1.Extensions.soloCheckboxExtension)) {
                return { valueBoolean: val };
            }
            return { valueString: val ? val.join(', ') : val };
        case fhir_1.Questionnaire_ItemTypeKind._string:
            if ((0, extensions_1.isPhoneExtension)(input))
                return { valueString: val.number };
            return { valueString: val };
        case fhir_1.Questionnaire_ItemTypeKind._text:
            return { valueString: val };
        default:
            return undefined;
    }
}
function createAnswers(item, formData) {
    return item.reduce(function (acc, cur) {
        var _a;
        var common = tslib_1.__assign({ linkId: cur.linkId }, (cur.text ? { text: cur.text } : undefined));
        // If it's a group of items, create new answers
        // Repeatable group items are represented with multiple items with the same linkId
        if (cur.item) {
            var newItems = createAnswers(cur.item, formData);
            if (newItems.length === 0)
                return acc;
            return tslib_1.__spreadArray(tslib_1.__spreadArray([], acc, true), [
                tslib_1.__assign(tslib_1.__assign({}, common), { item: newItems })
            ], false);
        }
        // If it's not a group of items and the linkId already exists, returns (for repeatable items)
        if (acc.find(function (a) { return a.linkId === cur.linkId; }))
            return acc;
        // If the item is repeatable, gets the array of answers
        var val = (0, lodash_get_1.default)(formData, cur.repeats
            ? ((_a = cur.linkIdWithParent) === null || _a === void 0 ? void 0 : _a.split('.').slice(0, -1)) || ''
            : cur.linkIdWithParent || '');
        // If the item is a repeatable one, creates an array of answers
        var value = cur.repeats
            ? val.map(function (v) { return createAnswerObject(v, cur); })
            : createAnswerObject(val, cur);
        if (!value)
            return acc;
        return tslib_1.__spreadArray(tslib_1.__spreadArray([], acc, true), [
            tslib_1.__assign(tslib_1.__assign({}, common), { answer: cur.repeats ? value : [value] })
        ], false);
    }, []);
}
function transformFormValues(questionnaire, formData) {
    var answers = questionnaire && questionnaire.item
        ? { item: createAnswers(questionnaire.item, formData) }
        : { item: [] };
    return tslib_1.__assign({ resourceType: 'QuestionnaireResponse', questionnaire: (questionnaire === null || questionnaire === void 0 ? void 0 : questionnaire.url) || '', status: fhir_1.QuestionnaireResponseStatusKind._completed, subject: {
            type: 'Patient',
            identifier: {
                system: 'https://xxx',
                use: fhir_1.IdentifierUseKind._official,
                value: 'xxx'
            },
            display: 'Carey Carrington'
        }, encounter: {
            reference: 'Encounter/{{T-EncounterId}}'
        }, authored: (0, dayjs_1.default)().format(utils_1.API_DATE_FORMAT), author: {
            type: 'Practitioner',
            identifier: {
                system: 'https://xxx',
                use: fhir_1.IdentifierUseKind._official,
                value: 'xxx'
            },
            display: 'Dottie McStuffins'
        }, source: {
            type: 'Patient',
            identifier: {
                system: 'https://xxx',
                use: fhir_1.IdentifierUseKind._official,
                value: 'xxx'
            },
            display: 'Carey Carrington'
        } }, answers);
}
exports.default = transformFormValues;
//# sourceMappingURL=createQuestionnaireResponse.js.map