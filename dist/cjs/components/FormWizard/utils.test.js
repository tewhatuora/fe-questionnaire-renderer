"use strict";
/* eslint-disable no-underscore-dangle */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var testUtils_1 = require("../../testHelpers/testUtils");
var fhir_1 = require("../../types/fhir");
var utils_1 = require("./utils");
it('builds the questionnaire initial values', function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        expect((0, utils_1.buildInitialValues)(testUtils_1.testQuestionnaire)).toEqual({
            privacyAgreementAccepted: false,
            step1: {
                step1_page1: {
                    step1_page1_input1: '',
                    step1_page1_input2: '',
                    step1_page1_input3: '',
                    step1_page1_input4: [''],
                    step1_page1_input5: [
                        {
                            step1_page1_input5a: '',
                            step1_page1_input5b: ''
                        }
                    ]
                }
            },
            step2: {
                step2_input4: '',
                step2_input5: ''
            },
            step3: {
                step3_input6: '',
                step3_input7: ''
            },
            step4: {
                step4_input8: '',
                step4_input9: {
                    step4_input9a: '',
                    step4_input9b: ''
                },
                step4_input10: {
                    step4_input10a: ''
                },
                step4_input11: {
                    step4_input11a: ''
                },
                step4_input12: {
                    step4_input12a: ''
                },
                step4_input13: {
                    step4_input13a: ''
                },
                step4_input14: {
                    step4_input14a: ''
                },
                step4_input15: {
                    step4_input15a: ''
                },
                step4_input16: {
                    step4_input16a: ''
                },
                step4_input17: {
                    step4_input17a: ''
                },
                step4_input18: {
                    step4_input18a_noOption: '',
                    step4_input18a: ''
                },
                step4_input19: {
                    step4_input19a: ''
                },
                step4_input20: {
                    step4_input20a: ''
                }
            }
        });
        return [2 /*return*/];
    });
}); });
it('filters enabled items', function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var items;
    return tslib_1.__generator(this, function (_a) {
        items = [
            {
                linkId: 'step3',
                prefix: 'step3.',
                type: fhir_1.Questionnaire_ItemTypeKind._group,
                enableWhen: [
                    {
                        question: 'step1.step1_page1.step1_page1_input1',
                        operator: fhir_1.Questionnaire_EnableWhenOperatorKind._equal,
                        answerBoolean: true
                    }
                ]
            }
        ];
        expect((0, utils_1.filterEnabledItems)({}, items)).toEqual([]);
        expect((0, utils_1.filterEnabledItems)({ step1: { step1_page1: { step1_page1_input1: true } } }, items)).toEqual(items);
        return [2 /*return*/];
    });
}); });
it('gets the current page inputs', function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        expect((0, utils_1.getCurrentPageInputs)({ stepId: 'step1' }, {})).toEqual([]);
        expect((0, utils_1.getCurrentPageInputs)({ stepId: 'step1000' }, {}, testUtils_1.testQuestionnaire)).toEqual([]);
        expect((0, utils_1.getCurrentPageInputs)({ stepId: 'step3' }, {}, testUtils_1.testQuestionnaire)).toEqual([
            {
                linkId: 'step3.input6',
                linkIdWithParent: 'step3.step3_input6',
                prefix: 'step3.input6.',
                questionnairePosition: '2.0',
                text: "## Conditional page successful \\n\\nIt's working fine. \\n\\nChange your answer for the happiness question on the first page to change this page displaying or not.",
                type: 'display'
            },
            {
                linkId: 'step3.input7',
                linkIdWithParent: 'step3.step3_input7',
                prefix: 'step3.input7.',
                questionnairePosition: '2.1',
                text: 'Comments:',
                type: 'string'
            }
        ]);
        return [2 /*return*/];
    });
}); });
//# sourceMappingURL=utils.test.js.map