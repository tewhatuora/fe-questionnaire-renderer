"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable react/jsx-no-constructed-context-values */
var react_1 = require("@testing-library/react");
var dayjs_1 = tslib_1.__importDefault(require("dayjs"));
var react_query_1 = require("react-query");
var componentWrappers_1 = require("../../testHelpers/componentWrappers");
var utils_1 = require("../../utils/utils");
var LoadingProvider_1 = require("../LoadingProvider");
var QuestionnaireProvider_1 = require("../QuestionnaireProvider");
var _1 = require(".");
var queryClient = new react_query_1.QueryClient();
describe("useFormData", function () {
    function TestComponent() {
        var formData = (0, _1.useFormData)().formData;
        return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Form data:" }), (0, jsx_runtime_1.jsxs)("dl", { children: [(0, jsx_runtime_1.jsx)("dt", { children: "Test 1:" }), (0, jsx_runtime_1.jsx)("dd", { children: (formData === null || formData === void 0 ? void 0 : formData.step1) || 'Not found' }), (0, jsx_runtime_1.jsx)("dt", { children: "Test 2:" }), (0, jsx_runtime_1.jsx)("dd", { children: (formData === null || formData === void 0 ? void 0 : formData.step2) || 'Not found' }), (0, jsx_runtime_1.jsx)("dt", { children: "Test 3:" }), (0, jsx_runtime_1.jsx)("dd", { children: (formData === null || formData === void 0 ? void 0 : formData.step3) || 'Not found' })] })] }));
    }
    describe("with form data", function () {
        it("renders the form data", function () {
            (0, componentWrappers_1.renderWithFormDataProvider)((0, jsx_runtime_1.jsxs)(react_query_1.QueryClientProvider, tslib_1.__assign({ client: queryClient }, { children: [(0, jsx_runtime_1.jsx)(TestComponent, {}), ' '] })), {}, {
                step1: 'step1',
                step2: 'step2'
            });
            expect(react_1.screen.getByText('Form data:')).toBeInTheDocument();
            expect(react_1.screen.getByText('Test 1:')).toBeInTheDocument();
            expect(react_1.screen.getByText('step1')).toBeInTheDocument();
            expect(react_1.screen.getByText('Test 2:')).toBeInTheDocument();
            expect(react_1.screen.getByText('step2')).toBeInTheDocument();
            expect(react_1.screen.getByText('Test 3:')).toBeInTheDocument();
            expect(react_1.screen.getByText('Not found')).toBeInTheDocument();
        });
    });
    describe("transformFormValues", function () {
        var wrapper = function (_a) {
            var children = _a.children;
            return ((0, jsx_runtime_1.jsx)(react_query_1.QueryClientProvider, tslib_1.__assign({ client: queryClient }, { children: (0, jsx_runtime_1.jsx)(LoadingProvider_1.LoadingProvider, tslib_1.__assign({ callbackLoading: function () { return undefined; }, useLoadingOverlay: false }, { children: (0, jsx_runtime_1.jsx)(QuestionnaireProvider_1.QuestionnaireContext.Provider, tslib_1.__assign({ value: tslib_1.__assign(tslib_1.__assign({}, componentWrappers_1.defaultQuestionnaireProviderProps), { formInitialPagePath: '', submitQuestionnaireData: function () { return undefined; } }) }, { children: (0, jsx_runtime_1.jsx)(_1.FormDataProvider, tslib_1.__assign({ partialSubmit: _1.defaultPartialSubmitQuery, usePartialSubmit: false }, { children: children })) })) })) })));
        };
        it("returns formValues ready to submit to API", function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
            var result, transformFormValues, expectedResponse;
            return tslib_1.__generator(this, function (_a) {
                result = (0, react_1.renderHook)(function () { return (0, _1.useFormData)(); }, {
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
                    authored: (0, dayjs_1.default)().format(utils_1.API_DATE_FORMAT),
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