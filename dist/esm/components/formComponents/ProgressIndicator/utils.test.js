import { __awaiter, __generator } from "tslib";
import { testQuestionnaire } from '../../../testHelpers/testUtils';
import { getStepPageIds, getTitlePage } from './utils';
it('get an array of step and page ids', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        expect(getStepPageIds(testQuestionnaire).length).toEqual(4);
        expect(getStepPageIds(testQuestionnaire)).toEqual([
            'step1',
            'step2',
            'step3',
            'step4'
        ]);
        return [2 /*return*/];
    });
}); });
it('gets the title of a page', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        expect(getTitlePage({ stepId: 'step1' }, {})).toEqual(null);
        expect(getTitlePage({ stepId: 'step1' }, testQuestionnaire)).toEqual('Step 1');
        expect(getTitlePage({ stepId: 'step1', pageId: 'page1' }, testQuestionnaire)).toEqual('Page 1');
        return [2 /*return*/];
    });
}); });
//# sourceMappingURL=utils.test.js.map