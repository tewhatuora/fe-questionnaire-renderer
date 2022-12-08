"use strict";
/* eslint-disable no-underscore-dangle */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var fhir_1 = require("../types/fhir");
var enableWhen_1 = tslib_1.__importDefault(require("./enableWhen"));
it('verifies if an item is enabled', function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var enableWhens;
    return tslib_1.__generator(this, function (_a) {
        enableWhens = [
            {
                question: 'Agrees_Test',
                operator: fhir_1.Questionnaire_EnableWhenOperatorKind._equal,
                answerString: 'Yes'
            },
            {
                question: 'Had_Test',
                operator: fhir_1.Questionnaire_EnableWhenOperatorKind._equal,
                answerString: 'No or Bloods not taken'
            }
        ];
        expect((0, enableWhen_1.default)({}, enableWhens)).toBeFalsy();
        expect((0, enableWhen_1.default)({ Agrees_Test: 'Yes', Had_Test: 'No' }, enableWhens)).toBeTruthy();
        expect((0, enableWhen_1.default)({ Agrees_Test: 'Yes', Had_Test: 'No' }, enableWhens, fhir_1.Questionnaire_ItemEnableBehaviorKind._all)).toBeFalsy();
        expect((0, enableWhen_1.default)({
            Agrees_Test: 'Yes',
            Had_Test: ['No or Bloods not taken']
        }, enableWhens, fhir_1.Questionnaire_ItemEnableBehaviorKind._all)).toBeTruthy();
        return [2 /*return*/];
    });
}); });
//# sourceMappingURL=enableWhen.test.js.map