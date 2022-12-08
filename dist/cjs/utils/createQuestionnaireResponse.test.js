"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var dayjs_1 = tslib_1.__importDefault(require("dayjs"));
var lodash_get_1 = tslib_1.__importDefault(require("lodash.get"));
var lodash_set_1 = tslib_1.__importDefault(require("lodash.set"));
var testUtils_1 = require("../testHelpers/testUtils");
var createQuestionnaireResponse_1 = tslib_1.__importDefault(require("./createQuestionnaireResponse"));
var utils_1 = require("./utils");
var questionnaireWithRepeat = tslib_1.__assign({}, testUtils_1.testQuestionnaire);
var itemArray = (0, lodash_get_1.default)(questionnaireWithRepeat, 'item.0.item.0.item');
if (itemArray) {
    (0, lodash_set_1.default)(questionnaireWithRepeat, 'item.0.item.0.item', tslib_1.__spreadArray(tslib_1.__spreadArray([], itemArray, true), [
        {
            item: [
                {
                    linkId: 'step1.page1.input5a',
                    prefix: 'step1.page1.input5a.',
                    text: 'Reason:',
                    required: true,
                    type: 'string',
                    linkIdWithParent: 'step1.step1_page1.step1_page1_input5.1.step1_page1_input5a',
                    questionnairePosition: '0.0.5.0'
                },
                {
                    linkId: 'step1.page1.input5b',
                    prefix: 'step1.page1.input5b.',
                    text: 'Still sad:',
                    required: true,
                    type: 'boolean',
                    linkIdWithParent: 'step1.step1_page1.step1_page1_input5.1.step1_page1_input5b',
                    questionnairePosition: '0.0.5.1'
                }
            ],
            linkId: 'step1.page1.input5',
            prefix: 'step1.page1.input5.',
            type: 'group',
            enableBehavior: 'all',
            repeats: true,
            enableWhen: [
                {
                    question: 'step1.step1_page1.step1_page1_input3',
                    operator: '=',
                    answerBoolean: 'Sad'
                }
            ],
            indexRepeat: 1,
            linkIdWithParent: 'step1.step1_page1.step1_page1_input5.1',
            questionnairePosition: '0.0.5'
        }
    ], false));
}
it('creates the questionnaire response object', function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        expect((0, createQuestionnaireResponse_1.default)(questionnaireWithRepeat, {
            step1: {
                step1_page1: {
                    step1_page1_input1: true,
                    step1_page1_input3: 'Happy 1',
                    step1_page1_input4: ['Jean', 'Paul'],
                    step1_page1_input5: [
                        { step1_page1_input5a: 'Because', step1_page1_input5b: true },
                        { step1_page1_input5a: 'Dunno', step1_page1_input5b: false }
                    ]
                }
            },
            step2: {
                step2_input4: 'Rouve',
                step2_input5: '2022-09-05'
            },
            step3: {
                step3_input7: 'A comment'
            },
            step4: {
                step4_input9: {
                    step4_input9a: 'Text in input test',
                    step4_input9b: 'Text in second input test'
                },
                step4_input10: {
                    step4_input10a: '2011/03/20'
                },
                step4_input11: {
                    step4_input11a: 'Test a'
                },
                step4_input12: {
                    step4_input12a: ['Test 1', 'Test 2']
                },
                step4_input13: {
                    step4_input13a: true
                },
                step4_input14: {
                    step4_input14a: {
                        countryCallingCode: '64',
                        number: '+64212538273'
                    }
                },
                step4_input16: {
                    step4_input16a: '2013/11/20'
                },
                step4_input17: {
                    step4_input17a: 'Unit 51, 305 Evans Bay Parade, Hataitai, Wellington 6021'
                },
                step4_input18: {
                    step4_input18a: ['Test 3', 'Test 4']
                },
                step4_input19: {
                    step4_input19a: '1986/01/01'
                },
                step4_input20: {
                    step4_input20a: true
                }
            }
        })).toEqual({
            author: {
                display: 'Dottie McStuffins',
                identifier: {
                    system: 'https://xxx',
                    use: 'official',
                    value: 'xxx'
                },
                type: 'Practitioner'
            },
            authored: (0, dayjs_1.default)().format(utils_1.API_DATE_FORMAT),
            encounter: {
                reference: 'Encounter/{{T-EncounterId}}'
            },
            item: [
                {
                    item: [
                        {
                            item: [
                                {
                                    answer: [
                                        {
                                            valueBoolean: true
                                        }
                                    ],
                                    linkId: 'step1.page1.input1',
                                    text: 'Are you happy?'
                                },
                                {
                                    answer: [
                                        {
                                            valueString: 'Happy 1'
                                        }
                                    ],
                                    linkId: 'step1.page1.input3',
                                    text: 'How happy?'
                                },
                                {
                                    answer: [
                                        {
                                            valueString: 'Jean'
                                        },
                                        {
                                            valueString: 'Paul'
                                        }
                                    ],
                                    linkId: 'step1.page1.input4',
                                    text: 'First name:'
                                },
                                {
                                    linkId: 'step1.page1.input5',
                                    item: [
                                        {
                                            linkId: 'step1.page1.input5a',
                                            text: 'Reason:',
                                            answer: [
                                                {
                                                    valueString: 'Because'
                                                }
                                            ]
                                        },
                                        {
                                            linkId: 'step1.page1.input5b',
                                            text: 'Still sad:',
                                            answer: [
                                                {
                                                    valueBoolean: true
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    linkId: 'step1.page1.input5',
                                    item: [
                                        {
                                            linkId: 'step1.page1.input5a',
                                            text: 'Reason:',
                                            answer: [
                                                {
                                                    valueString: 'Dunno'
                                                }
                                            ]
                                        },
                                        {
                                            linkId: 'step1.page1.input5b',
                                            text: 'Still sad:',
                                            answer: [
                                                {
                                                    valueBoolean: false
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            linkId: 'step1.page1',
                            text: 'Page 1'
                        }
                    ],
                    linkId: 'step1',
                    text: 'Step 1'
                },
                {
                    item: [
                        {
                            answer: [
                                {
                                    valueString: 'Rouve'
                                }
                            ],
                            linkId: 'step2.input4',
                            text: 'Last name:'
                        },
                        {
                            answer: [
                                {
                                    valueDate: '2022-09-05'
                                }
                            ],
                            linkId: 'step2.input5',
                            text: 'Symptoms date:'
                        }
                    ],
                    linkId: 'step2',
                    text: 'Step 2'
                },
                {
                    item: [
                        {
                            answer: [
                                {
                                    valueString: 'A comment'
                                }
                            ],
                            linkId: 'step3.input7',
                            text: 'Comments:'
                        }
                    ],
                    linkId: 'step3',
                    text: 'Step 3'
                },
                {
                    item: [
                        {
                            item: [
                                {
                                    answer: [
                                        {
                                            valueString: 'Text in input test'
                                        }
                                    ],
                                    linkId: 'step4.input9a',
                                    text: 'Text input test:'
                                },
                                {
                                    answer: [
                                        {
                                            valueString: 'Text in second input test'
                                        }
                                    ],
                                    linkId: 'step4.input9b',
                                    text: 'Text input test second:'
                                }
                            ],
                            linkId: 'step4.input9'
                        },
                        {
                            item: [
                                {
                                    answer: [
                                        {
                                            valueDate: '2011/03/20'
                                        }
                                    ],
                                    linkId: 'step4.input10a',
                                    text: 'Day picker test:'
                                }
                            ],
                            linkId: 'step4.input10'
                        },
                        {
                            item: [
                                {
                                    answer: [
                                        {
                                            valueString: 'Test a'
                                        }
                                    ],
                                    linkId: 'step4.input11a',
                                    text: 'Radio test:'
                                }
                            ],
                            linkId: 'step4.input11'
                        },
                        {
                            item: [
                                {
                                    answer: [
                                        {
                                            valueString: 'Test 1, Test 2'
                                        }
                                    ],
                                    linkId: 'step4.input12a',
                                    text: 'Checkbox test:'
                                }
                            ],
                            linkId: 'step4.input12'
                        },
                        {
                            item: [
                                {
                                    answer: [
                                        {
                                            valueBoolean: true
                                        }
                                    ],
                                    linkId: 'step4.input13a',
                                    text: 'Boolean test:'
                                }
                            ],
                            linkId: 'step4.input13'
                        },
                        {
                            item: [
                                {
                                    answer: [
                                        {
                                            valueString: '+64212538273'
                                        }
                                    ],
                                    linkId: 'step4.input14a',
                                    text: 'Phone number test:'
                                }
                            ],
                            linkId: 'step4.input14'
                        },
                        {
                            item: [
                                {
                                    answer: [
                                        {
                                            valueDate: '2013/11/20'
                                        }
                                    ],
                                    linkId: 'step4.input16a',
                                    text: 'Date input test:'
                                }
                            ],
                            linkId: 'step4.input16'
                        },
                        {
                            item: [
                                {
                                    answer: [
                                        {
                                            valueString: 'Unit 51, 305 Evans Bay Parade, Hataitai, Wellington 6021'
                                        }
                                    ],
                                    linkId: 'step4.input17a',
                                    text: 'Address test:'
                                }
                            ],
                            linkId: 'step4.input17'
                        },
                        {
                            item: [
                                {
                                    answer: [
                                        {
                                            valueString: 'Test 3, Test 4'
                                        }
                                    ],
                                    linkId: 'step4.input18a',
                                    text: 'Checkbox with no option test:'
                                }
                            ],
                            linkId: 'step4.input18'
                        },
                        {
                            item: [
                                {
                                    answer: [
                                        {
                                            valueDate: '1986/01/01'
                                        }
                                    ],
                                    linkId: 'step4.input19a',
                                    text: 'Date of birth test:'
                                }
                            ],
                            linkId: 'step4.input19'
                        },
                        {
                            item: [
                                {
                                    answer: [
                                        {
                                            valueBoolean: true
                                        }
                                    ],
                                    linkId: 'step4.input20a',
                                    text: 'Solo checkbox test'
                                }
                            ],
                            linkId: 'step4.input20'
                        }
                    ],
                    linkId: 'step4',
                    text: 'Step 4'
                }
            ],
            questionnaire: 'testUrl',
            resourceType: 'QuestionnaireResponse',
            source: {
                display: 'Carey Carrington',
                identifier: {
                    system: 'https://xxx',
                    use: 'official',
                    value: 'xxx'
                },
                type: 'Patient'
            },
            status: 'completed',
            subject: {
                display: 'Carey Carrington',
                identifier: {
                    system: 'https://xxx',
                    use: 'official',
                    value: 'xxx'
                },
                type: 'Patient'
            }
        });
        return [2 /*return*/];
    });
}); });
//# sourceMappingURL=createQuestionnaireResponse.test.js.map