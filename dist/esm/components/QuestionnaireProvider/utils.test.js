import { __awaiter, __generator } from "tslib";
import testData from '../../data/questionnaireTest.json';
import { enrichQuestionnaireData, getIndexRepeatable } from './utils';
var testQuestionnaire = JSON.parse(JSON.stringify(testData));
describe('Enriched questionnaire data', function () {
    it('retrieves the right index for repeatable items', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            expect(getIndexRepeatable([{ linkId: 'test' }], 'test', 1)).toEqual(0);
            expect(getIndexRepeatable([{ linkId: 'test' }, { linkId: 'test' }, { linkId: 'test' }], 'test', 3)).toEqual(2);
            return [2 /*return*/];
        });
    }); });
    it('with empty questionnaire', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            expect(enrichQuestionnaireData({})).toEqual({});
            return [2 /*return*/];
        });
    }); });
    it('with test questionnaire', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            expect(enrichQuestionnaireData(testQuestionnaire)).toEqual({
                date: '2022-08-22T04:56:38.985Z',
                experimental: true,
                extension: [
                    {
                        id: 'progressIndicatorExtension',
                        url: 'http://hl7.org/fhir/StructureDefinition/progressIndicatorExtension'
                    },
                    {
                        id: 'cmsProjectIdExtension',
                        url: 'http://hl7.org/fhir/StructureDefinition/progressIndicatorExtension',
                        valueString: '351800'
                    },
                    {
                        id: 'themeExtension',
                        url: 'http://hl7.org/fhir/StructureDefinition/themeExtension',
                        valueString: 'myHealthAccount'
                    }
                ],
                item: [
                    {
                        item: [
                            {
                                item: [
                                    {
                                        extension: [
                                            {
                                                extension: [
                                                    {
                                                        id: 'validationRequired',
                                                        url: 'http://hl7.org/fhir/StructureDefinition/validationRequired',
                                                        valueString: "Please answer if you're happy"
                                                    }
                                                ],
                                                id: 'validationExtension',
                                                url: 'http://hl7.org/fhir/StructureDefinition/validation'
                                            },
                                            {
                                                id: 'cmsExtension',
                                                url: 'http://hl7.org/fhir/StructureDefinition/content-management-system',
                                                valueCoding: {
                                                    code: 'Test',
                                                    display: 'Symptoms.Description.htmlContent',
                                                    system: 'https://cms.com/',
                                                    version: '1'
                                                }
                                            }
                                        ],
                                        linkId: 'step1.page1.input1',
                                        linkIdWithParent: 'step1.step1_page1.step1_page1_input1',
                                        prefix: 'step1.page1.input1.',
                                        questionnairePosition: '0.0.0',
                                        required: true,
                                        text: 'Are you happy?',
                                        type: 'boolean'
                                    },
                                    {
                                        extension: [
                                            {
                                                id: 'cmsExtension',
                                                url: 'http://hl7.org/fhir/StructureDefinition/content-management-system',
                                                valueCoding: {
                                                    code: 'Test',
                                                    display: 'Symptoms.Description.htmlContent',
                                                    system: 'https://cms.com/',
                                                    version: '1'
                                                }
                                            }
                                        ],
                                        linkId: 'step1.page1.input2',
                                        questionnairePosition: '0.0.1',
                                        linkIdWithParent: 'step1.step1_page1.step1_page1_input2',
                                        prefix: 'step1.page1.input2.',
                                        type: 'display'
                                    },
                                    {
                                        answerOption: [
                                            {
                                                valueString: 'Happy 1'
                                            },
                                            {
                                                valueString: 'Happy 2'
                                            },
                                            {
                                                valueString: 'Sad'
                                            }
                                        ],
                                        linkId: 'step1.page1.input3',
                                        linkIdWithParent: 'step1.step1_page1.step1_page1_input3',
                                        prefix: 'step1.page1.input3.',
                                        questionnairePosition: '0.0.2',
                                        text: 'How happy?',
                                        type: 'choice'
                                    },
                                    {
                                        indexRepeat: 0,
                                        linkId: 'step1.page1.input4',
                                        linkIdWithParent: 'step1.step1_page1.step1_page1_input4.0',
                                        maxLength: 5,
                                        prefix: 'step1.page1.input4.',
                                        questionnairePosition: '0.0.3',
                                        repeats: true,
                                        required: true,
                                        text: 'First name:',
                                        type: 'string'
                                    },
                                    {
                                        enableBehavior: 'all',
                                        enableWhen: [
                                            {
                                                answerBoolean: 'Sad',
                                                operator: '=',
                                                question: 'step1.step1_page1.step1_page1_input3'
                                            }
                                        ],
                                        indexRepeat: 0,
                                        item: [
                                            {
                                                linkId: 'step1.page1.input5a',
                                                linkIdWithParent: 'step1.step1_page1.step1_page1_input5.0.step1_page1_input5a',
                                                prefix: 'step1.page1.input5a.',
                                                questionnairePosition: '0.0.4.0',
                                                required: true,
                                                text: 'Reason:',
                                                type: 'string'
                                            },
                                            {
                                                linkId: 'step1.page1.input5b',
                                                linkIdWithParent: 'step1.step1_page1.step1_page1_input5.0.step1_page1_input5b',
                                                prefix: 'step1.page1.input5b.',
                                                questionnairePosition: '0.0.4.1',
                                                required: true,
                                                text: 'Still sad:',
                                                type: 'boolean'
                                            }
                                        ],
                                        linkId: 'step1.page1.input5',
                                        linkIdWithParent: 'step1.step1_page1.step1_page1_input5.0',
                                        prefix: 'step1.page1.input5.',
                                        questionnairePosition: '0.0.4',
                                        repeats: true,
                                        type: 'group'
                                    }
                                ],
                                linkId: 'step1.page1',
                                linkIdWithParent: 'step1.step1_page1',
                                prefix: 'step1.page1.',
                                questionnairePosition: '0.0',
                                text: 'Page 1',
                                type: 'group'
                            }
                        ],
                        linkId: 'step1',
                        linkIdWithParent: 'step1',
                        prefix: 'step1.',
                        questionnairePosition: '0',
                        text: 'Step 1',
                        type: 'group'
                    },
                    {
                        item: [
                            {
                                extension: [
                                    {
                                        extension: [
                                            {
                                                id: 'validationRequired',
                                                url: 'http://hl7.org/fhir/StructureDefinition/validationRequired',
                                                valueString: 'Please provide your last name'
                                            },
                                            {
                                                id: 'validationForbiddenCharacters',
                                                url: 'http://hl7.org/fhir/StructureDefinition/validationForbiddenCharacters'
                                            }
                                        ],
                                        id: 'validationExtension',
                                        url: 'http://hl7.org/fhir/StructureDefinition/validation'
                                    }
                                ],
                                linkId: 'step2.input4',
                                linkIdWithParent: 'step2.step2_input4',
                                prefix: 'step2.input4.',
                                questionnairePosition: '1.0',
                                required: true,
                                text: 'Last name:',
                                type: 'string'
                            },
                            {
                                extension: [
                                    {
                                        extension: [
                                            {
                                                id: 'validationRequired',
                                                url: 'http://hl7.org/fhir/StructureDefinition/validationRequired'
                                            },
                                            {
                                                extension: [
                                                    {
                                                        id: 'validationDateMaxPeriodValue',
                                                        url: 'http://hl7.org/fhir/StructureDefinition/validationDateMaxPeriodValue',
                                                        valueInteger: 4
                                                    }
                                                ],
                                                id: 'validationDateMaxPeriod',
                                                url: 'http://hl7.org/fhir/StructureDefinition/validationDateMaxPeriod',
                                                valueString: 'Select a date in the last 4 days'
                                            }
                                        ],
                                        id: 'validationExtension',
                                        url: 'http://hl7.org/fhir/StructureDefinition/validation'
                                    }
                                ],
                                linkId: 'step2.input5',
                                linkIdWithParent: 'step2.step2_input5',
                                prefix: 'step2.input5.',
                                questionnairePosition: '1.1',
                                required: true,
                                text: 'Symptoms date:',
                                type: 'date'
                            }
                        ],
                        linkId: 'step2',
                        linkIdWithParent: 'step2',
                        prefix: 'step2.',
                        questionnairePosition: '1',
                        text: 'Step 2',
                        type: 'group'
                    },
                    {
                        enableWhen: [
                            {
                                answerBoolean: true,
                                operator: '=',
                                question: 'step1.step1_page1.step1_page1_input1'
                            }
                        ],
                        item: [
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
                        ],
                        linkId: 'step3',
                        linkIdWithParent: 'step3',
                        prefix: 'step3.',
                        questionnairePosition: '2',
                        text: 'Step 3',
                        type: 'group'
                    },
                    {
                        enableWhen: [
                            {
                                answerBoolean: true,
                                operator: '=',
                                question: 'step1.step1_page1.step1_page1_input1'
                            }
                        ],
                        item: [
                            {
                                linkId: 'step4.input8',
                                linkIdWithParent: 'step4.step4_input8',
                                prefix: 'step4.input8.',
                                questionnairePosition: '3.0',
                                text: '## Test display component \\n\\nText for the test.',
                                type: 'display'
                            },
                            {
                                item: [
                                    {
                                        linkId: 'step4.input9a',
                                        linkIdWithParent: 'step4.step4_input9.step4_input9a',
                                        prefix: 'step4.input9a.',
                                        questionnairePosition: '3.1.0',
                                        required: true,
                                        text: 'Text input test:',
                                        type: 'string'
                                    },
                                    {
                                        linkId: 'step4.input9b',
                                        linkIdWithParent: 'step4.step4_input9.step4_input9b',
                                        prefix: 'step4.input9b.',
                                        questionnairePosition: '3.1.1',
                                        required: true,
                                        text: 'Text input test second:',
                                        type: 'string'
                                    }
                                ],
                                linkId: 'step4.input9',
                                linkIdWithParent: 'step4.step4_input9',
                                prefix: 'step4.input9.',
                                questionnairePosition: '3.1',
                                type: 'group'
                            },
                            {
                                item: [
                                    {
                                        linkId: 'step4.input10a',
                                        linkIdWithParent: 'step4.step4_input10.step4_input10a',
                                        prefix: 'step4.input10a.',
                                        questionnairePosition: '3.2.0',
                                        required: true,
                                        text: 'Day picker test:',
                                        type: 'date'
                                    }
                                ],
                                linkId: 'step4.input10',
                                linkIdWithParent: 'step4.step4_input10',
                                prefix: 'step4.input10.',
                                questionnairePosition: '3.2',
                                type: 'group'
                            },
                            {
                                item: [
                                    {
                                        answerOption: [
                                            {
                                                valueString: 'Test a'
                                            },
                                            {
                                                valueString: 'Test b'
                                            }
                                        ],
                                        linkId: 'step4.input11a',
                                        linkIdWithParent: 'step4.step4_input11.step4_input11a',
                                        prefix: 'step4.input11a.',
                                        questionnairePosition: '3.3.0',
                                        required: true,
                                        text: 'Radio test:',
                                        type: 'choice'
                                    }
                                ],
                                linkId: 'step4.input11',
                                linkIdWithParent: 'step4.step4_input11',
                                prefix: 'step4.input11.',
                                questionnairePosition: '3.3',
                                type: 'group'
                            },
                            {
                                item: [
                                    {
                                        answerOption: [
                                            {
                                                valueString: 'Test 1'
                                            },
                                            {
                                                valueString: 'Test 2'
                                            }
                                        ],
                                        linkId: 'step4.input12a',
                                        linkIdWithParent: 'step4.step4_input12.step4_input12a',
                                        prefix: 'step4.input12a.',
                                        questionnairePosition: '3.4.0',
                                        required: true,
                                        text: 'Checkbox test:',
                                        type: 'open-choice'
                                    }
                                ],
                                linkId: 'step4.input12',
                                linkIdWithParent: 'step4.step4_input12',
                                prefix: 'step4.input12.',
                                questionnairePosition: '3.4',
                                type: 'group'
                            },
                            {
                                item: [
                                    {
                                        linkId: 'step4.input13a',
                                        linkIdWithParent: 'step4.step4_input13.step4_input13a',
                                        prefix: 'step4.input13a.',
                                        questionnairePosition: '3.5.0',
                                        required: true,
                                        text: 'Boolean test:',
                                        type: 'boolean'
                                    }
                                ],
                                linkId: 'step4.input13',
                                linkIdWithParent: 'step4.step4_input13',
                                prefix: 'step4.input13.',
                                questionnairePosition: '3.5',
                                type: 'group'
                            },
                            {
                                item: [
                                    {
                                        extension: [
                                            {
                                                url: 'http://hl7.org/fhir/StructureDefinition/phone-number',
                                                valueContactDetail: {
                                                    telecom: [
                                                        {
                                                            system: 'phone'
                                                        }
                                                    ]
                                                }
                                            }
                                        ],
                                        linkId: 'step4.input14a',
                                        linkIdWithParent: 'step4.step4_input14.step4_input14a',
                                        prefix: 'step4.input14a.',
                                        questionnairePosition: '3.6.0',
                                        required: true,
                                        text: 'Phone number test:',
                                        type: 'string'
                                    }
                                ],
                                linkId: 'step4.input14',
                                linkIdWithParent: 'step4.step4_input14',
                                prefix: 'step4.input14.',
                                questionnairePosition: '3.6',
                                type: 'group'
                            },
                            {
                                item: [
                                    {
                                        extension: [
                                            {
                                                id: 'dividerExtension',
                                                url: 'http://hl7.org/fhir/StructureDefinition/divider'
                                            }
                                        ],
                                        linkId: 'step4.input15a',
                                        linkIdWithParent: 'step4.step4_input15.step4_input15a',
                                        prefix: 'step4.input15a.',
                                        questionnairePosition: '3.7.0',
                                        required: true,
                                        text: 'Divider test:',
                                        type: 'display'
                                    }
                                ],
                                linkId: 'step4.input15',
                                linkIdWithParent: 'step4.step4_input15',
                                prefix: 'step4.input15.',
                                questionnairePosition: '3.7',
                                type: 'group'
                            },
                            {
                                item: [
                                    {
                                        extension: [
                                            {
                                                id: 'dateInputExtension',
                                                url: 'http://hl7.org/fhir/StructureDefinition/date-input'
                                            }
                                        ],
                                        linkId: 'step4.input16a',
                                        linkIdWithParent: 'step4.step4_input16.step4_input16a',
                                        prefix: 'step4.input16a.',
                                        questionnairePosition: '3.8.0',
                                        required: true,
                                        text: 'Date input test:',
                                        type: 'date'
                                    }
                                ],
                                linkId: 'step4.input16',
                                linkIdWithParent: 'step4.step4_input16',
                                prefix: 'step4.input16.',
                                questionnairePosition: '3.8',
                                type: 'group'
                            },
                            {
                                item: [
                                    {
                                        extension: [
                                            {
                                                id: 'addressExtension',
                                                url: 'http://hl7.org/fhir/StructureDefinition/address'
                                            }
                                        ],
                                        linkId: 'step4.input17a',
                                        linkIdWithParent: 'step4.step4_input17.step4_input17a',
                                        prefix: 'step4.input17a.',
                                        questionnairePosition: '3.9.0',
                                        required: true,
                                        text: 'Address test:',
                                        type: 'string'
                                    }
                                ],
                                linkId: 'step4.input17',
                                linkIdWithParent: 'step4.step4_input17',
                                prefix: 'step4.input17.',
                                questionnairePosition: '3.9',
                                type: 'group'
                            },
                            {
                                item: [
                                    {
                                        answerOption: [
                                            {
                                                valueString: 'Test 3'
                                            },
                                            {
                                                valueString: 'Test 4'
                                            }
                                        ],
                                        extension: [
                                            {
                                                id: 'checkboxGroupWithNoOption',
                                                url: 'http://hl7.org/fhir/StructureDefinition/checkbox-no-option'
                                            },
                                            {
                                                id: 'noOptionExtension',
                                                url: 'http://hl7.org/fhir/StructureDefinition/no-option',
                                                valueString: 'Test No'
                                            }
                                        ],
                                        linkId: 'step4.input18a',
                                        linkIdWithParent: 'step4.step4_input18.step4_input18a',
                                        prefix: 'step4.input18a.',
                                        questionnairePosition: '3.10.0',
                                        required: true,
                                        text: 'Checkbox with no option test:',
                                        type: 'open-choice'
                                    }
                                ],
                                linkId: 'step4.input18',
                                linkIdWithParent: 'step4.step4_input18',
                                prefix: 'step4.input18.',
                                questionnairePosition: '3.10',
                                type: 'group'
                            },
                            {
                                item: [
                                    {
                                        extension: [
                                            {
                                                id: 'dateOfBirthExtension',
                                                url: 'http://hl7.org/fhir/StructureDefinition/date-of-birth'
                                            }
                                        ],
                                        linkId: 'step4.input19a',
                                        linkIdWithParent: 'step4.step4_input19.step4_input19a',
                                        prefix: 'step4.input19a.',
                                        questionnairePosition: '3.11.0',
                                        required: true,
                                        text: 'Date of birth test:',
                                        type: 'date'
                                    }
                                ],
                                linkId: 'step4.input19',
                                linkIdWithParent: 'step4.step4_input19',
                                prefix: 'step4.input19.',
                                questionnairePosition: '3.11',
                                type: 'group'
                            },
                            {
                                item: [
                                    {
                                        extension: [
                                            {
                                                id: 'soloCheckboxExtension',
                                                url: 'http://hl7.org/fhir/StructureDefinition/solo-checkbox'
                                            }
                                        ],
                                        linkId: 'step4.input20a',
                                        linkIdWithParent: 'step4.step4_input20.step4_input20a',
                                        prefix: 'step4.input20a.',
                                        questionnairePosition: '3.12.0',
                                        required: true,
                                        text: 'Solo checkbox test',
                                        type: 'open-choice'
                                    }
                                ],
                                linkId: 'step4.input20',
                                linkIdWithParent: 'step4.step4_input20',
                                prefix: 'step4.input20.',
                                questionnairePosition: '3.12',
                                type: 'group'
                            }
                        ],
                        linkId: 'step4',
                        linkIdWithParent: 'step4',
                        prefix: 'step4.',
                        questionnairePosition: '3',
                        text: 'Step 4',
                        type: 'group'
                    }
                ],
                jurisdiction: [
                    {
                        coding: [
                            {
                                code: 'NZ',
                                display: 'New Zealand',
                                system: 'urn:iso:std:iso:3166'
                            }
                        ],
                        text: 'New Zealand'
                    }
                ],
                language: 'en-NZ',
                name: 'DemoForm',
                publisher: 'Test NZ',
                purpose: 'Demoing what we can do with a form builder',
                resourceType: 'Questionnaire',
                status: '_active',
                subjectType: ['consumer'],
                title: 'Demo Form',
                url: 'testUrl',
                useContext: [
                    {
                        code: {
                            code: 'workflow',
                            display: 'Workflow Setting',
                            system: 'http://terminology.hl7.org/CodeSystem/usage-context-type'
                        },
                        valueCodeableConcept: {
                            text: 'Consent'
                        }
                    }
                ],
                version: '1.0.0'
            });
            return [2 /*return*/];
        });
    }); });
});
//# sourceMappingURL=utils.test.js.map