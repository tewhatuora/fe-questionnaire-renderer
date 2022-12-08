/* eslint-disable no-underscore-dangle */
import { __awaiter, __generator } from "tslib";
import { Questionnaire_EnableWhenOperatorKind, Questionnaire_ItemEnableBehaviorKind } from '../types/fhir';
import verifyEnableWhen from './enableWhen';
it('verifies if an item is enabled', function () { return __awaiter(void 0, void 0, void 0, function () {
    var enableWhens;
    return __generator(this, function (_a) {
        enableWhens = [
            {
                question: 'Agrees_Test',
                operator: Questionnaire_EnableWhenOperatorKind._equal,
                answerString: 'Yes'
            },
            {
                question: 'Had_Test',
                operator: Questionnaire_EnableWhenOperatorKind._equal,
                answerString: 'No or Bloods not taken'
            }
        ];
        expect(verifyEnableWhen({}, enableWhens)).toBeFalsy();
        expect(verifyEnableWhen({ Agrees_Test: 'Yes', Had_Test: 'No' }, enableWhens)).toBeTruthy();
        expect(verifyEnableWhen({ Agrees_Test: 'Yes', Had_Test: 'No' }, enableWhens, Questionnaire_ItemEnableBehaviorKind._all)).toBeFalsy();
        expect(verifyEnableWhen({
            Agrees_Test: 'Yes',
            Had_Test: ['No or Bloods not taken']
        }, enableWhens, Questionnaire_ItemEnableBehaviorKind._all)).toBeTruthy();
        return [2 /*return*/];
    });
}); });
//# sourceMappingURL=enableWhen.test.js.map