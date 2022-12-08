"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var testUtils_1 = require("../../../testHelpers/testUtils");
var utils_1 = require("./utils");
it('get an array of step and page ids', function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        expect((0, utils_1.getStepPageIds)(testUtils_1.testQuestionnaire).length).toEqual(4);
        expect((0, utils_1.getStepPageIds)(testUtils_1.testQuestionnaire)).toEqual([
            'step1',
            'step2',
            'step3',
            'step4'
        ]);
        return [2 /*return*/];
    });
}); });
it('gets the title of a page', function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        expect((0, utils_1.getTitlePage)({ stepId: 'step1' }, {})).toEqual(null);
        expect((0, utils_1.getTitlePage)({ stepId: 'step1' }, testUtils_1.testQuestionnaire)).toEqual('Step 1');
        expect((0, utils_1.getTitlePage)({ stepId: 'step1', pageId: 'page1' }, testUtils_1.testQuestionnaire)).toEqual('Page 1');
        return [2 /*return*/];
    });
}); });
//# sourceMappingURL=utils.test.js.map