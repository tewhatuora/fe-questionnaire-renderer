/* eslint-disable no-underscore-dangle */
import { __awaiter, __generator } from "tslib";
import { testQuestionnaire } from '../../testHelpers/testUtils';
import { Questionnaire_ItemTypeKind } from '../../types/fhir';
import { findFirstPage } from './firstPageUtils';
it('returns the first page', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        expect(findFirstPage({})).toEqual('');
        expect(findFirstPage({
            item: [
                {
                    linkId: 'step1.page1.input3',
                    type: Questionnaire_ItemTypeKind._string
                }
            ]
        })).toEqual('form/input3');
        expect(findFirstPage(testQuestionnaire)).toEqual('form/step1/page1');
        return [2 /*return*/];
    });
}); });
//# sourceMappingURL=firstPageUtils.test.js.map