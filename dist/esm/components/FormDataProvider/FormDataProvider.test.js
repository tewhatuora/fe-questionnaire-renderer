import { __assign, __awaiter, __generator } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable react/jsx-no-constructed-context-values */
import { renderHook, screen } from '@testing-library/react';
import dayjs from 'dayjs';
import { QueryClient, QueryClientProvider } from 'react-query';
import { defaultQuestionnaireProviderProps, renderWithFormDataProvider } from '../../testHelpers/componentWrappers';
import { API_DATE_FORMAT } from '../../utils/utils';
import { LoadingProvider } from '../LoadingProvider';
import { QuestionnaireContext } from '../QuestionnaireProvider';
import { defaultPartialSubmitQuery, FormDataProvider, useFormData } from '.';
var queryClient = new QueryClient();
describe("useFormData", function () {
    function TestComponent() {
        var formData = useFormData().formData;
        return (_jsxs("div", { children: [_jsx("h1", { children: "Form data:" }), _jsxs("dl", { children: [_jsx("dt", { children: "Test 1:" }), _jsx("dd", { children: (formData === null || formData === void 0 ? void 0 : formData.step1) || 'Not found' }), _jsx("dt", { children: "Test 2:" }), _jsx("dd", { children: (formData === null || formData === void 0 ? void 0 : formData.step2) || 'Not found' }), _jsx("dt", { children: "Test 3:" }), _jsx("dd", { children: (formData === null || formData === void 0 ? void 0 : formData.step3) || 'Not found' })] })] }));
    }
    describe("with form data", function () {
        it("renders the form data", function () {
            renderWithFormDataProvider(_jsxs(QueryClientProvider, __assign({ client: queryClient }, { children: [_jsx(TestComponent, {}), ' '] })), {}, {
                step1: 'step1',
                step2: 'step2'
            });
            expect(screen.getByText('Form data:')).toBeInTheDocument();
            expect(screen.getByText('Test 1:')).toBeInTheDocument();
            expect(screen.getByText('step1')).toBeInTheDocument();
            expect(screen.getByText('Test 2:')).toBeInTheDocument();
            expect(screen.getByText('step2')).toBeInTheDocument();
            expect(screen.getByText('Test 3:')).toBeInTheDocument();
            expect(screen.getByText('Not found')).toBeInTheDocument();
        });
    });
    describe("transformFormValues", function () {
        var wrapper = function (_a) {
            var children = _a.children;
            return (_jsx(QueryClientProvider, __assign({ client: queryClient }, { children: _jsx(LoadingProvider, __assign({ callbackLoading: function () { return undefined; }, useLoadingOverlay: false }, { children: _jsx(QuestionnaireContext.Provider, __assign({ value: __assign(__assign({}, defaultQuestionnaireProviderProps), { formInitialPagePath: '', submitQuestionnaireData: function () { return undefined; } }) }, { children: _jsx(FormDataProvider, __assign({ partialSubmit: defaultPartialSubmitQuery, usePartialSubmit: false }, { children: children })) })) })) })));
        };
        it("returns formValues ready to submit to API", function () { return __awaiter(void 0, void 0, void 0, function () {
            var result, transformFormValues, expectedResponse;
            return __generator(this, function (_a) {
                result = renderHook(function () { return useFormData(); }, {
                    wrapper: wrapper
                }).result;
                transformFormValues = result.current.transformFormValues();
                expect(transformFormValues).not.toBeNull();
                expectedResponse = {
                    author: {
                        display: 'Dottie McStuffins',
                        identifier: {
                            system: 'https://xxx',
                            use: 'official',
                            value: 'xxx'
                        },
                        type: 'Practitioner'
                    },
                    authored: dayjs().format(API_DATE_FORMAT),
                    encounter: {
                        reference: 'Encounter/{{T-EncounterId}}'
                    },
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
                    },
                    item: [
                        {
                            item: [
                                {
                                    item: [
                                        {
                                            answer: [
                                                {
                                                    valueBoolean: ''
                                                }
                                            ],
                                            linkId: 'step1.page1.input1',
                                            text: 'Are you happy?'
                                        },
                                        {
                                            answer: [
                                                {
                                                    valueString: ''
                                                }
                                            ],
                                            linkId: 'step1.page1.input3',
                                            text: 'How happy?'
                                        },
                                        {
                                            answer: [
                                                {
                                                    valueString: ''
                                                }
                                            ],
                                            linkId: 'step1.page1.input4',
                                            text: 'First name:'
                                        },
                                        {
                                            item: [
                                                {
                                                    answer: [
                                                        {
                                                            valueString: ''
                                                        }
                                                    ],
                                                    linkId: 'step1.page1.input5a',
                                                    text: 'Reason:'
                                                },
                                                {
                                                    answer: [
                                                        {
                                                            valueBoolean: ''
                                                        }
                                                    ],
                                                    linkId: 'step1.page1.input5b',
                                                    text: 'Still sad:'
                                                }
                                            ],
                                            linkId: 'step1.page1.input5'
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
                                            valueString: ''
                                        }
                                    ],
                                    linkId: 'step2.input4',
                                    text: 'Last name:'
                                },
                                {
                                    answer: [
                                        {
                                            valueDate: ''
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
                                            valueString: ''
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
                                                    valueString: ''
                                                }
                                            ],
                                            linkId: 'step4.input9a',
                                            text: 'Text input test:'
                                        },
                                        {
                                            answer: [
                                                {
                                                    valueString: ''
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
                                                    valueDate: ''
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
                                                    valueString: ''
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
                                                    valueString: ''
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
                                                    valueBoolean: ''
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
                                                    valueString: undefined
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
                                                    valueDate: ''
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
                                                    valueString: ''
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
                                                    valueString: ''
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
                                                    valueDate: ''
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
                                                    valueBoolean: ''
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
                    ]
                };
                expect(transformFormValues).toEqual(expectedResponse);
                return [2 /*return*/];
            });
        }); });
    });
});
//# sourceMappingURL=FormDataProvider.test.js.map