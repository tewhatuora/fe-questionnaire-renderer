"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var lodash_get_1 = tslib_1.__importDefault(require("lodash.get"));
var lodash_set_1 = tslib_1.__importDefault(require("lodash.set"));
var componentWrappers_1 = require("../../testHelpers/componentWrappers");
var testUtils_1 = require("../../testHelpers/testUtils");
var FormDataProvider_1 = require("../FormDataProvider");
var Reviews_1 = tslib_1.__importDefault(require("./Reviews"));
describe('FormStep Review', function () {
    function TestComponent(_a) {
        var formData = _a.formData;
        return ((0, jsx_runtime_1.jsx)(FormDataProvider_1.FormDataContext.Provider, tslib_1.__assign({}, {
            value: {
                formData: formData,
                refetchFormData: jest.fn(),
                setFormData: jest.fn(),
                transformFormValues: jest.fn(),
                getFormValue: jest.fn(),
                setFormValue: jest.fn()
            }
        }, { children: (0, jsx_runtime_1.jsx)(Reviews_1.default, { basePath: '', nextPage: '' }) })));
    }
    describe("with populated values", function () {
        it("renders the accordions with the expected data", function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                (0, componentWrappers_1.renderWithQuestionnaireProvider)((0, jsx_runtime_1.jsx)(TestComponent, { formData: {} }));
                expect(testUtils_1.screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
                expect(testUtils_1.screen.getByRole('button', { name: 'Step 1' })).toBeInTheDocument();
                expect(testUtils_1.screen.getByRole('button', { name: 'Step 2' })).toBeInTheDocument();
                return [2 /*return*/];
            });
        }); });
    });
    describe("with populated values", function () {
        it("renders the accordions with the expected data with conditional pages", function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                (0, componentWrappers_1.renderWithQuestionnaireProvider)((0, jsx_runtime_1.jsx)(TestComponent, { formData: { step1: { step1_page1: { step1_page1_input1: true } } } }));
                expect(testUtils_1.screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
                expect(testUtils_1.screen.getByRole('button', { name: 'Step 1' })).toBeInTheDocument();
                expect(testUtils_1.screen.getByRole('button', { name: 'Step 2' })).toBeInTheDocument();
                expect(testUtils_1.screen.getByRole('button', { name: 'Step 3' })).toBeInTheDocument();
                expect(testUtils_1.screen.getByRole('button', { name: 'Step 4' })).toBeInTheDocument();
                return [2 /*return*/];
            });
        }); });
    });
    describe("with populated values", function () {
        it("renders the accordions with the expected data", function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
            var questionnaireWithRepeat, itemArray;
            return tslib_1.__generator(this, function (_a) {
                questionnaireWithRepeat = tslib_1.__assign({}, testUtils_1.testQuestionnaire);
                itemArray = (0, lodash_get_1.default)(questionnaireWithRepeat, 'item.0.item.0.item');
                if (itemArray) {
                    (0, lodash_set_1.default)(questionnaireWithRepeat, 'item.0.item.0.item', tslib_1.__spreadArray(tslib_1.__spreadArray([], itemArray, true), [
                        {
                            linkId: 'step1.page1.input4',
                            prefix: 'step1.page1.input4.',
                            repeats: true,
                            required: true,
                            text: 'First name:',
                            type: 'string',
                            maxLength: 5,
                            indexRepeat: 1,
                            linkIdWithParent: 'step1.step1_page1.step1_page1_input4.1',
                            questionnairePosition: '0.0.4'
                        },
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
                (0, componentWrappers_1.renderWithQuestionnaireProvider)((0, jsx_runtime_1.jsx)(TestComponent, { formData: {
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
                                step4_input10a: '2011/08/24'
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
                                    countryCallingCode: '+64',
                                    number: '+64212548888'
                                }
                            },
                            step4_input16: {
                                step4_input16a: '2013/11/17'
                            },
                            step4_input17: {
                                step4_input17a: 'Unit 51, 305 Evans Bay Parade, Hataitai, Wellington 6021'
                            },
                            step4_input18: {
                                step4_input18a: ['Test 3', 'Test 4']
                            },
                            step4_input19: {
                                step4_input19a: '2000/01/17'
                            },
                            step4_input20: {
                                step4_input20a: true
                            }
                        }
                    } }), undefined, questionnaireWithRepeat);
                expect(testUtils_1.screen.getByText('Are you happy?')).toBeInTheDocument();
                expect(testUtils_1.screen.getAllByText('Yes')).toHaveLength(3);
                expect(testUtils_1.screen.getByText('How happy?')).toBeInTheDocument();
                expect(testUtils_1.screen.getByText('Happy 1')).toBeInTheDocument();
                expect(testUtils_1.screen.getAllByText('First name:')).toHaveLength(2);
                expect(testUtils_1.screen.getByText('Jean')).toBeInTheDocument();
                expect(testUtils_1.screen.getByText('Paul')).toBeInTheDocument();
                expect(testUtils_1.screen.getByText('Last name:')).toBeInTheDocument();
                expect(testUtils_1.screen.getByText('Rouve')).toBeInTheDocument();
                expect(testUtils_1.screen.getByText('Symptoms date:')).toBeInTheDocument();
                expect(testUtils_1.screen.getByText('Monday, September 5, 2022')).toBeInTheDocument();
                expect(testUtils_1.screen.getByText('Comments:')).toBeInTheDocument();
                expect(testUtils_1.screen.getByText('A comment')).toBeInTheDocument();
                expect(testUtils_1.screen.getByText('Text input test:')).toBeInTheDocument();
                expect(testUtils_1.screen.getByText('Text in input test')).toBeInTheDocument();
                expect(testUtils_1.screen.getByText('Text input test second:')).toBeInTheDocument();
                expect(testUtils_1.screen.getByText('Text in second input test')).toBeInTheDocument();
                expect(testUtils_1.screen.getByText('Day picker test:')).toBeInTheDocument();
                expect(testUtils_1.screen.getByText('Wednesday, August 24, 2011')).toBeInTheDocument();
                expect(testUtils_1.screen.getByText('Radio test:')).toBeInTheDocument();
                expect(testUtils_1.screen.getByText('Test a')).toBeInTheDocument();
                expect(testUtils_1.screen.getByText('Checkbox test:')).toBeInTheDocument();
                expect(testUtils_1.screen.getByText('Test 1')).toBeInTheDocument();
                expect(testUtils_1.screen.getByText('Test 2')).toBeInTheDocument();
                expect(testUtils_1.screen.getByText('Boolean test:')).toBeInTheDocument();
                expect(testUtils_1.screen.getAllByText('Yes')).toHaveLength(3);
                expect(testUtils_1.screen.getByText('Phone number test:')).toBeInTheDocument();
                expect(testUtils_1.screen.getByText('+64212548888')).toBeInTheDocument();
                expect(testUtils_1.screen.getByText('Date input test:')).toBeInTheDocument();
                expect(testUtils_1.screen.getByText('Sunday, November 17, 2013')).toBeInTheDocument();
                expect(testUtils_1.screen.getByText('Address test:')).toBeInTheDocument();
                expect(testUtils_1.screen.getByText('Unit 51, 305 Evans Bay Parade, Hataitai, Wellington 6021')).toBeInTheDocument();
                expect(testUtils_1.screen.getByText('Checkbox with no option test:')).toBeInTheDocument();
                expect(testUtils_1.screen.getByText('Test 3')).toBeInTheDocument();
                expect(testUtils_1.screen.getByText('Test 4')).toBeInTheDocument();
                expect(testUtils_1.screen.getByText('Date of birth test:')).toBeInTheDocument();
                expect(testUtils_1.screen.getByText('Monday, January 17, 2000')).toBeInTheDocument();
                expect(testUtils_1.screen.getByText('Solo checkbox test')).toBeInTheDocument();
                expect(testUtils_1.screen.getAllByText('Yes')).toHaveLength(3);
                expect(testUtils_1.screen.getAllByText('Edit').length).toEqual(19);
                expect(testUtils_1.screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
                return [2 /*return*/];
            });
        }); });
    });
});
//# sourceMappingURL=Reviews.test.js.map