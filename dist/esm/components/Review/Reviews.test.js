import { __assign, __awaiter, __generator, __spreadArray } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import get from 'lodash.get';
import set from 'lodash.set';
import { renderWithQuestionnaireProvider } from '../../testHelpers/componentWrappers';
import { screen, testQuestionnaire } from '../../testHelpers/testUtils';
import { FormDataContext } from '../FormDataProvider';
import Reviews from './Reviews';
describe('FormStep Review', function () {
    function TestComponent(_a) {
        var formData = _a.formData;
        return (_jsx(FormDataContext.Provider, __assign({}, {
            value: {
                formData: formData,
                refetchFormData: jest.fn(),
                setFormData: jest.fn(),
                transformFormValues: jest.fn(),
                getFormValue: jest.fn(),
                setFormValue: jest.fn()
            }
        }, { children: _jsx(Reviews, { basePath: '', nextPage: '' }) })));
    }
    describe("with populated values", function () {
        it("renders the accordions with the expected data", function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                renderWithQuestionnaireProvider(_jsx(TestComponent, { formData: {} }));
                expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
                expect(screen.getByRole('button', { name: 'Step 1' })).toBeInTheDocument();
                expect(screen.getByRole('button', { name: 'Step 2' })).toBeInTheDocument();
                return [2 /*return*/];
            });
        }); });
    });
    describe("with populated values", function () {
        it("renders the accordions with the expected data with conditional pages", function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                renderWithQuestionnaireProvider(_jsx(TestComponent, { formData: { step1: { step1_page1: { step1_page1_input1: true } } } }));
                expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
                expect(screen.getByRole('button', { name: 'Step 1' })).toBeInTheDocument();
                expect(screen.getByRole('button', { name: 'Step 2' })).toBeInTheDocument();
                expect(screen.getByRole('button', { name: 'Step 3' })).toBeInTheDocument();
                expect(screen.getByRole('button', { name: 'Step 4' })).toBeInTheDocument();
                return [2 /*return*/];
            });
        }); });
    });
    describe("with populated values", function () {
        it("renders the accordions with the expected data", function () { return __awaiter(void 0, void 0, void 0, function () {
            var questionnaireWithRepeat, itemArray;
            return __generator(this, function (_a) {
                questionnaireWithRepeat = __assign({}, testQuestionnaire);
                itemArray = get(questionnaireWithRepeat, 'item.0.item.0.item');
                if (itemArray) {
                    set(questionnaireWithRepeat, 'item.0.item.0.item', __spreadArray(__spreadArray([], itemArray, true), [
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
                renderWithQuestionnaireProvider(_jsx(TestComponent, { formData: {
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
                expect(screen.getByText('Are you happy?')).toBeInTheDocument();
                expect(screen.getAllByText('Yes')).toHaveLength(3);
                expect(screen.getByText('How happy?')).toBeInTheDocument();
                expect(screen.getByText('Happy 1')).toBeInTheDocument();
                expect(screen.getAllByText('First name:')).toHaveLength(2);
                expect(screen.getByText('Jean')).toBeInTheDocument();
                expect(screen.getByText('Paul')).toBeInTheDocument();
                expect(screen.getByText('Last name:')).toBeInTheDocument();
                expect(screen.getByText('Rouve')).toBeInTheDocument();
                expect(screen.getByText('Symptoms date:')).toBeInTheDocument();
                expect(screen.getByText('Monday, September 5, 2022')).toBeInTheDocument();
                expect(screen.getByText('Comments:')).toBeInTheDocument();
                expect(screen.getByText('A comment')).toBeInTheDocument();
                expect(screen.getByText('Text input test:')).toBeInTheDocument();
                expect(screen.getByText('Text in input test')).toBeInTheDocument();
                expect(screen.getByText('Text input test second:')).toBeInTheDocument();
                expect(screen.getByText('Text in second input test')).toBeInTheDocument();
                expect(screen.getByText('Day picker test:')).toBeInTheDocument();
                expect(screen.getByText('Wednesday, August 24, 2011')).toBeInTheDocument();
                expect(screen.getByText('Radio test:')).toBeInTheDocument();
                expect(screen.getByText('Test a')).toBeInTheDocument();
                expect(screen.getByText('Checkbox test:')).toBeInTheDocument();
                expect(screen.getByText('Test 1')).toBeInTheDocument();
                expect(screen.getByText('Test 2')).toBeInTheDocument();
                expect(screen.getByText('Boolean test:')).toBeInTheDocument();
                expect(screen.getAllByText('Yes')).toHaveLength(3);
                expect(screen.getByText('Phone number test:')).toBeInTheDocument();
                expect(screen.getByText('+64212548888')).toBeInTheDocument();
                expect(screen.getByText('Date input test:')).toBeInTheDocument();
                expect(screen.getByText('Sunday, November 17, 2013')).toBeInTheDocument();
                expect(screen.getByText('Address test:')).toBeInTheDocument();
                expect(screen.getByText('Unit 51, 305 Evans Bay Parade, Hataitai, Wellington 6021')).toBeInTheDocument();
                expect(screen.getByText('Checkbox with no option test:')).toBeInTheDocument();
                expect(screen.getByText('Test 3')).toBeInTheDocument();
                expect(screen.getByText('Test 4')).toBeInTheDocument();
                expect(screen.getByText('Date of birth test:')).toBeInTheDocument();
                expect(screen.getByText('Monday, January 17, 2000')).toBeInTheDocument();
                expect(screen.getByText('Solo checkbox test')).toBeInTheDocument();
                expect(screen.getAllByText('Yes')).toHaveLength(3);
                expect(screen.getAllByText('Edit').length).toEqual(19);
                expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
                return [2 /*return*/];
            });
        }); });
    });
});
//# sourceMappingURL=Reviews.test.js.map