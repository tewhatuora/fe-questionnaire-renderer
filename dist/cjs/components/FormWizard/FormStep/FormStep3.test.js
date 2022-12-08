"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable react/jsx-no-constructed-context-values */
var react_1 = require("@testing-library/react");
var componentWrappers_1 = require("../../../testHelpers/componentWrappers");
var QuestionnaireProvider_1 = require("../../QuestionnaireProvider");
var __1 = require("..");
jest.mock('react-router-dom', function () { return (tslib_1.__assign(tslib_1.__assign({}, jest.requireActual('react-router-dom')), { useParams: function () { return ({
        stepId: 'step3'
    }); } })); });
var formStepProps = {
    basePath: '',
    inputComponents: {},
    useCompletedPage: false,
    useReviewPage: false
};
describe('Form step 3', function () {
    function TestComponent(_a) {
        var path = _a.path;
        return ((0, jsx_runtime_1.jsx)(QuestionnaireProvider_1.QuestionnaireContext.Provider, tslib_1.__assign({ value: tslib_1.__assign(tslib_1.__assign({}, componentWrappers_1.defaultQuestionnaireProviderProps), { formInitialPagePath: path, submitQuestionnaireData: function () { return undefined; } }) }, { children: (0, jsx_runtime_1.jsx)(__1.FormStep, tslib_1.__assign({}, formStepProps)) })));
    }
    describe("with populated values", function () {
        it("renders the third page", function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                (0, componentWrappers_1.renderWithFormDataProvider)((0, jsx_runtime_1.jsx)(TestComponent, { path: '/form/step3' }), {
                    route: '/step3'
                }, { step1: { step1_page1: { step1_page1_input1: true } } });
                expect(react_1.screen.getByRole('heading', { name: 'Step 3' })).toBeInTheDocument();
                expect(react_1.screen.getByRole('textbox', { name: 'Comments:' })).toBeInTheDocument();
                expect(react_1.screen.getByRole('button', {
                    name: 'Continue'
                })).toBeInTheDocument();
                expect(react_1.screen.getByRole('button', {
                    name: 'Back'
                })).toBeInTheDocument();
                expect(react_1.screen.getByText('Change your answer for the happiness question on the first page to change this page displaying or not.', { exact: false }));
                return [2 /*return*/];
            });
        }); });
    });
});
//# sourceMappingURL=FormStep3.test.js.map