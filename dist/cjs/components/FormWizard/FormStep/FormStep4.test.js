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
        stepId: 'step4'
    }); } })); });
var formStepProps = {
    basePath: '',
    inputComponents: {},
    useCompletedPage: false,
    useReviewPage: true
};
describe('Form step 4', function () {
    function TestComponent(_a) {
        var path = _a.path;
        return ((0, jsx_runtime_1.jsx)(QuestionnaireProvider_1.QuestionnaireContext.Provider, tslib_1.__assign({ value: tslib_1.__assign(tslib_1.__assign({}, componentWrappers_1.defaultQuestionnaireProviderProps), { formInitialPagePath: path, submitQuestionnaireData: function () { return undefined; } }) }, { children: (0, jsx_runtime_1.jsx)(__1.FormStep, tslib_1.__assign({}, formStepProps)) })));
    }
    describe("with populated values", function () {
        it("renders the fourth page", function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                (0, componentWrappers_1.renderWithFormDataProvider)((0, jsx_runtime_1.jsx)(TestComponent, { path: '/form/step4' }), {
                    route: '/step4'
                }, { step1_page1_input1: true, step4_input18a: [] });
                expect(react_1.screen.getByRole('heading', { name: 'Step 4' })).toBeInTheDocument();
                expect(react_1.screen.getByRole('textbox', { name: 'Text input test:' })).toBeInTheDocument();
                expect(react_1.screen.getByRole('textbox', { name: 'Text input test second:' })).toBeInTheDocument();
                expect(react_1.screen.getByRole('textbox', { name: 'Phone number test:' })).toBeInTheDocument();
                expect(react_1.screen.getByRole('textbox', { name: 'Date input test:' })).toBeInTheDocument();
                expect(react_1.screen.getByRole('group', { name: 'Day picker test:' })).toBeInTheDocument();
                expect(react_1.screen.getByRole('group', { name: 'Checkbox test:' })).toBeInTheDocument();
                expect(react_1.screen.getByRole('group', { name: 'Radio test:' })).toBeInTheDocument();
                expect(react_1.screen.getByRole('group', { name: 'Boolean test:' })).toBeInTheDocument();
                expect(react_1.screen.getByRole('group', { name: 'Phone number test:' })).toBeInTheDocument();
                expect(react_1.screen.getByRole('group', { name: 'Checkbox with no option test:' })).toBeInTheDocument();
                expect(react_1.screen.getByRole('application', { name: 'Calendar' })).toBeInTheDocument();
                expect(react_1.screen.getByRole('button', { name: 'Yes' })).toBeInTheDocument();
                expect(react_1.screen.getByRole('button', { name: 'No' })).toBeInTheDocument();
                expect(react_1.screen.getByRole('button', { name: 'Enter address manually' })).toBeInTheDocument();
                expect(react_1.screen.getByRole('button', { name: 'Review' })).toBeInTheDocument();
                expect(react_1.screen.getByRole('button', { name: 'Back' })).toBeInTheDocument();
                expect(react_1.screen.getByRole('radio', { name: 'Test a' })).toBeInTheDocument();
                expect(react_1.screen.getByRole('radio', { name: 'Test b' })).toBeInTheDocument();
                expect(react_1.screen.getByRole('checkbox', { name: 'Test 1' })).toBeInTheDocument();
                expect(react_1.screen.getByRole('checkbox', { name: 'Test 2' })).toBeInTheDocument();
                expect(react_1.screen.getByRole('checkbox', { name: 'Test 3' })).toBeInTheDocument();
                expect(react_1.screen.getByRole('checkbox', { name: 'Test 4' })).toBeInTheDocument();
                expect(react_1.screen.getByRole('checkbox', { name: 'Test No' })).toBeInTheDocument();
                expect(react_1.screen.getByRole('checkbox', { name: 'Solo checkbox test Required' })).toBeInTheDocument();
                expect(react_1.screen.getByRole('combobox', {
                    name: 'Select a phone number country extension. Mobile preferred'
                })).toBeInTheDocument();
                expect(react_1.screen.getByRole('spinbutton', { name: 'Day' })).toBeInTheDocument();
                expect(react_1.screen.getByRole('spinbutton', { name: 'Month' })).toBeInTheDocument();
                expect(react_1.screen.getByRole('spinbutton', { name: 'Year' })).toBeInTheDocument();
                expect(react_1.screen.getByText('Date of birth test:')).toBeInTheDocument();
                expect(react_1.screen.getAllByText('Required')).toHaveLength(15);
                return [2 /*return*/];
            });
        }); });
    });
});
//# sourceMappingURL=FormStep4.test.js.map