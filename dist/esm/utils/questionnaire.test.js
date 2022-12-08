/* eslint-disable no-underscore-dangle */
import { __awaiter, __generator } from "tslib";
import { testQuestionnaire } from '../testHelpers/testUtils';
import { buildPageUrl, getUrlSection } from './questionnaire';
it('builds the next or previous page URL', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        expect(buildPageUrl({ params: {}, isNext: false })).toEqual(undefined);
        expect(buildPageUrl({
            params: { stepId: 'step1' },
            isNext: false,
            formData: {},
            questionnaire: testQuestionnaire
        })).toEqual(undefined);
        expect(buildPageUrl({
            params: { stepId: 'step1' },
            isNext: true,
            formData: {},
            questionnaire: testQuestionnaire
        })).toEqual('form/step2/');
        expect(buildPageUrl({
            params: { stepId: 'step2' },
            isNext: false,
            formData: {},
            questionnaire: testQuestionnaire
        })).toEqual('form/step1/page1');
        expect(buildPageUrl({
            params: { stepId: 'step2' },
            isNext: true,
            formData: {},
            questionnaire: testQuestionnaire
        })).toEqual(undefined);
        expect(buildPageUrl({
            params: { stepId: 'step2' },
            isNext: true,
            formData: { step1: { step1_page1: { step1_page1_input1: true } } },
            questionnaire: testQuestionnaire
        })).toEqual('form/step3/');
        return [2 /*return*/];
    });
}); });
it('gets the url section out of a linkId', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        expect(getUrlSection('step1')).toEqual('step1');
        expect(getUrlSection('step1.page1')).toEqual('page1');
        expect(getUrlSection('step1.page1.input1')).toEqual('input1');
        return [2 /*return*/];
    });
}); });
//# sourceMappingURL=questionnaire.test.js.map