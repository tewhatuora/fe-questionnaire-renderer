"use strict";
/* eslint-disable no-underscore-dangle */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var testUtils_1 = require("../testHelpers/testUtils");
var questionnaire_1 = require("./questionnaire");
it('builds the next or previous page URL', function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        expect((0, questionnaire_1.buildPageUrl)({ params: {}, isNext: false })).toEqual(undefined);
        expect((0, questionnaire_1.buildPageUrl)({
            params: { stepId: 'step1' },
            isNext: false,
            formData: {},
            questionnaire: testUtils_1.testQuestionnaire
        })).toEqual(undefined);
        expect((0, questionnaire_1.buildPageUrl)({
            params: { stepId: 'step1' },
            isNext: true,
            formData: {},
            questionnaire: testUtils_1.testQuestionnaire
        })).toEqual('form/step2/');
        expect((0, questionnaire_1.buildPageUrl)({
            params: { stepId: 'step2' },
            isNext: false,
            formData: {},
            questionnaire: testUtils_1.testQuestionnaire
        })).toEqual('form/step1/page1');
        expect((0, questionnaire_1.buildPageUrl)({
            params: { stepId: 'step2' },
            isNext: true,
            formData: {},
            questionnaire: testUtils_1.testQuestionnaire
        })).toEqual(undefined);
        expect((0, questionnaire_1.buildPageUrl)({
            params: { stepId: 'step2' },
            isNext: true,
            formData: { step1: { step1_page1: { step1_page1_input1: true } } },
            questionnaire: testUtils_1.testQuestionnaire
        })).toEqual('form/step3/');
        return [2 /*return*/];
    });
}); });
it('gets the url section out of a linkId', function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        expect((0, questionnaire_1.getUrlSection)('step1')).toEqual('step1');
        expect((0, questionnaire_1.getUrlSection)('step1.page1')).toEqual('page1');
        expect((0, questionnaire_1.getUrlSection)('step1.page1.input1')).toEqual('input1');
        return [2 /*return*/];
    });
}); });
//# sourceMappingURL=questionnaire.test.js.map