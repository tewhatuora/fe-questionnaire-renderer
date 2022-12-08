"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable react/jsx-no-constructed-context-values */
var componentWrappers_1 = require("../../../testHelpers/componentWrappers");
var testUtils_1 = require("../../../testHelpers/testUtils");
var QuestionnaireProvider_1 = require("../../QuestionnaireProvider");
var __1 = require("..");
jest.mock('react-router-dom', function () { return (tslib_1.__assign(tslib_1.__assign({}, jest.requireActual('react-router-dom')), { useParams: function () { return ({
        stepId: 'step1',
        pageId: 'page1'
    }); } })); });
var formStepProps = {
    basePath: '',
    inputComponents: {},
    useCompletedPage: false,
    useReviewPage: false
};
describe('Form step 1 page 1', function () {
    function TestComponent(_a) {
        var path = _a.path;
        return ((0, jsx_runtime_1.jsx)(QuestionnaireProvider_1.QuestionnaireContext.Provider, tslib_1.__assign({ value: tslib_1.__assign(tslib_1.__assign({}, componentWrappers_1.defaultQuestionnaireProviderProps), { formInitialPagePath: path, submitQuestionnaireData: function () { return undefined; } }) }, { children: (0, jsx_runtime_1.jsx)(__1.FormStep, tslib_1.__assign({}, formStepProps)) })));
    }
    describe("with populated values", function () {
        it("renders the first step and first page", function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                (0, componentWrappers_1.renderWithFormDataProvider)((0, jsx_runtime_1.jsx)(TestComponent, { path: '/questionnaireTests/form/step1/page1' }), {
                    route: '/questionnaireTests/form/step1/page1'
                }, {
                    step1: { step1_page1: { step1_page1_input4: [''] } }
                });
                expect(testUtils_1.screen.getByRole('heading', { level: 1, name: 'Page 1' })).toBeInTheDocument();
                expect(testUtils_1.screen.getByRole('group', { name: 'Are you happy?' })).toBeInTheDocument();
                expect(testUtils_1.screen.getByRole('group', { name: 'How happy?' })).toBeInTheDocument();
                expect(testUtils_1.screen.getByRole('button', { name: 'Yes' })).toBeInTheDocument();
                expect(testUtils_1.screen.getByRole('button', { name: 'No' })).toBeInTheDocument();
                expect(testUtils_1.screen.getByRole('button', { name: 'Continue' })).toBeInTheDocument();
                expect(testUtils_1.screen.getByRole('button', { name: 'Add' })).toBeInTheDocument();
                expect(testUtils_1.screen.getByRole('radio', { name: 'Happy 1' })).toBeInTheDocument();
                expect(testUtils_1.screen.getByRole('radio', { name: 'Happy 2' })).toBeInTheDocument();
                expect(testUtils_1.screen.getByRole('radio', { name: 'Sad' })).toBeInTheDocument();
                expect(testUtils_1.screen.getByRole('textbox', { name: 'First name:' })).toBeInTheDocument();
                expect(testUtils_1.screen.queryByRole('button', { name: 'Delete' })).not.toBeInTheDocument();
                expect(testUtils_1.screen.getByRole('button', { name: 'Add' })).toBeInTheDocument();
                return [2 /*return*/];
            });
        }); });
    });
    describe("conditional item", function () {
        it("renders the first step and first page", function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                (0, componentWrappers_1.renderWithFormDataProvider)((0, jsx_runtime_1.jsx)(TestComponent, { path: '/form/step1/page1' }), {
                    route: '/form/step1/page1'
                }, {
                    step1: {
                        step1_page1: {
                            step1_page1_input3: 'Sad',
                            step1_page1_input4: [''],
                            step1_page1_input5: [
                                { step1_page1_input5a: '', step1_page1_input5b: '' }
                            ]
                        }
                    }
                });
                expect(testUtils_1.screen.getByRole('radio', { name: 'Sad' })).toBeInTheDocument();
                testUtils_1.userEvent.click(testUtils_1.screen.getByRole('radio', { name: 'Sad' }));
                expect(testUtils_1.screen.getByRole('textbox', { name: 'Reason:' })).toBeInTheDocument();
                expect(testUtils_1.screen.getAllByRole('button', { name: 'Yes' })).toHaveLength(2);
                expect(testUtils_1.screen.getAllByRole('button', { name: 'Add' })).toHaveLength(2);
                return [2 /*return*/];
            });
        }); });
    });
    describe("add repeatable items", function () {
        it("renders the first step and first page", function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                (0, componentWrappers_1.renderWithFormDataProvider)((0, jsx_runtime_1.jsx)(TestComponent, { path: '/form/step1/page1' }), {
                    route: '/form/step1/page1'
                }, {
                    step1: {
                        step1_page1: {
                            step1_page1_input4: ['']
                        }
                    }
                });
                expect(testUtils_1.screen.getByRole('textbox', { name: 'First name:' })).toBeInTheDocument();
                expect(testUtils_1.screen.queryByRole('button', { name: 'Delete' })).not.toBeInTheDocument();
                expect(testUtils_1.screen.getByRole('button', { name: 'Add' })).toBeInTheDocument();
                testUtils_1.userEvent.click(testUtils_1.screen.getByRole('button', { name: 'Add' }));
                return [2 /*return*/];
            });
        }); });
    });
});
//# sourceMappingURL=FormStep1Page1.test.js.map