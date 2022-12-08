/* eslint-disable no-underscore-dangle */
import { __assign, __spreadArray } from "tslib";
import dayjs from 'dayjs';
import get from 'lodash.get';
import { Extensions } from '../types';
import { IdentifierUseKind, Questionnaire_ItemTypeKind, QuestionnaireResponseStatusKind } from '../types/fhir';
import { isExtension, isPhoneExtension } from './extensions';
import { API_DATE_FORMAT } from './utils';
function createAnswerObject(val, input) {
    switch (input.type) {
        case Questionnaire_ItemTypeKind._boolean:
            return { valueBoolean: val };
        case Questionnaire_ItemTypeKind._choice:
            return { valueString: val };
        case Questionnaire_ItemTypeKind._date:
            return { valueDate: val };
        case Questionnaire_ItemTypeKind._openChoice:
            if (isExtension(input, Extensions.soloCheckboxExtension)) {
                return { valueBoolean: val };
            }
            return { valueString: val ? val.join(', ') : val };
        case Questionnaire_ItemTypeKind._string:
            if (isPhoneExtension(input))
                return { valueString: val.number };
            return { valueString: val };
        case Questionnaire_ItemTypeKind._text:
            return { valueString: val };
        default:
            return undefined;
    }
}
function createAnswers(item, formData) {
    return item.reduce(function (acc, cur) {
        var _a;
        var common = __assign({ linkId: cur.linkId }, (cur.text ? { text: cur.text } : undefined));
        // If it's a group of items, create new answers
        // Repeatable group items are represented with multiple items with the same linkId
        if (cur.item) {
            var newItems = createAnswers(cur.item, formData);
            if (newItems.length === 0)
                return acc;
            return __spreadArray(__spreadArray([], acc, true), [
                __assign(__assign({}, common), { item: newItems })
            ], false);
        }
        // If it's not a group of items and the linkId already exists, returns (for repeatable items)
        if (acc.find(function (a) { return a.linkId === cur.linkId; }))
            return acc;
        // If the item is repeatable, gets the array of answers
        var val = get(formData, cur.repeats
            ? ((_a = cur.linkIdWithParent) === null || _a === void 0 ? void 0 : _a.split('.').slice(0, -1)) || ''
            : cur.linkIdWithParent || '');
        // If the item is a repeatable one, creates an array of answers
        var value = cur.repeats
            ? val.map(function (v) { return createAnswerObject(v, cur); })
            : createAnswerObject(val, cur);
        if (!value)
            return acc;
        return __spreadArray(__spreadArray([], acc, true), [
            __assign(__assign({}, common), { answer: cur.repeats ? value : [value] })
        ], false);
    }, []);
}
export default function transformFormValues(questionnaire, formData) {
    var answers = questionnaire && questionnaire.item
        ? { item: createAnswers(questionnaire.item, formData) }
        : { item: [] };
    return __assign({ resourceType: 'QuestionnaireResponse', questionnaire: (questionnaire === null || questionnaire === void 0 ? void 0 : questionnaire.url) || '', status: QuestionnaireResponseStatusKind._completed, subject: {
            type: 'Patient',
            identifier: {
                system: 'https://xxx',
                use: IdentifierUseKind._official,
                value: 'xxx'
            },
            display: 'Carey Carrington'
        }, encounter: {
            reference: 'Encounter/{{T-EncounterId}}'
        }, authored: dayjs().format(API_DATE_FORMAT), author: {
            type: 'Practitioner',
            identifier: {
                system: 'https://xxx',
                use: IdentifierUseKind._official,
                value: 'xxx'
            },
            display: 'Dottie McStuffins'
        }, source: {
            type: 'Patient',
            identifier: {
                system: 'https://xxx',
                use: IdentifierUseKind._official,
                value: 'xxx'
            },
            display: 'Carey Carrington'
        } }, answers);
}
//# sourceMappingURL=createQuestionnaireResponse.js.map