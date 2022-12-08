import { __assign, __awaiter, __generator } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
/* eslint-disable react/jsx-no-constructed-context-values */
import { screen } from '@testing-library/react';
import { defaultQuestionnaireProviderProps, renderWithFormDataProvider } from '../../../testHelpers/componentWrappers';
import { QuestionnaireContext } from '../../QuestionnaireProvider';
import { FormStep } from '..';
jest.mock('react-router-dom', function () { return (__assign(__assign({}, jest.requireActual('react-router-dom')), { useParams: function () { return ({
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
        return (_jsx(QuestionnaireContext.Provider, __assign({ value: __assign(__assign({}, defaultQuestionnaireProviderProps), { formInitialPagePath: path, submitQuestionnaireData: function () { return undefined; } }) }, { children: _jsx(FormStep, __assign({}, formStepProps)) })));
    }
    describe("with populated values", function () {
        it("renders the fourth page", function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                renderWithFormDataProvider(_jsx(TestComponent, { path: '/form/step4' }), {
                    route: '/step4'
                }, { step1_page1_input1: true, step4_input18a: [] });
                expect(screen.getByRole('heading', { name: 'Step 4' })).toBeInTheDocument();
                expect(screen.getByRole('textbox', { name: 'Text input test:' })).toBeInTheDocument();
                expect(screen.getByRole('textbox', { name: 'Text input test second:' })).toBeInTheDocument();
                expect(screen.getByRole('textbox', { name: 'Phone number test:' })).toBeInTheDocument();
                expect(screen.getByRole('textbox', { name: 'Date input test:' })).toBeInTheDocument();
                expect(screen.getByRole('group', { name: 'Day picker test:' })).toBeInTheDocument();
                expect(screen.getByRole('group', { name: 'Checkbox test:' })).toBeInTheDocument();
                expect(screen.getByRole('group', { name: 'Radio test:' })).toBeInTheDocument();
                expect(screen.getByRole('group', { name: 'Boolean test:' })).toBeInTheDocument();
                expect(screen.getByRole('group', { name: 'Phone number test:' })).toBeInTheDocument();
                expect(screen.getByRole('group', { name: 'Checkbox with no option test:' })).toBeInTheDocument();
                expect(screen.getByRole('application', { name: 'Calendar' })).toBeInTheDocument();
                expect(screen.getByRole('button', { name: 'Yes' })).toBeInTheDocument();
                expect(screen.getByRole('button', { name: 'No' })).toBeInTheDocument();
                expect(screen.getByRole('button', { name: 'Enter address manually' })).toBeInTheDocument();
                expect(screen.getByRole('button', { name: 'Review' })).toBeInTheDocument();
                expect(screen.getByRole('button', { name: 'Back' })).toBeInTheDocument();
                expect(screen.getByRole('radio', { name: 'Test a' })).toBeInTheDocument();
                expect(screen.getByRole('radio', { name: 'Test b' })).toBeInTheDocument();
                expect(screen.getByRole('checkbox', { name: 'Test 1' })).toBeInTheDocument();
                expect(screen.getByRole('checkbox', { name: 'Test 2' })).toBeInTheDocument();
                expect(screen.getByRole('checkbox', { name: 'Test 3' })).toBeInTheDocument();
                expect(screen.getByRole('checkbox', { name: 'Test 4' })).toBeInTheDocument();
                expect(screen.getByRole('checkbox', { name: 'Test No' })).toBeInTheDocument();
                expect(screen.getByRole('checkbox', { name: 'Solo checkbox test Required' })).toBeInTheDocument();
                expect(screen.getByRole('combobox', {
                    name: 'Select a phone number country extension. Mobile preferred'
                })).toBeInTheDocument();
                expect(screen.getByRole('spinbutton', { name: 'Day' })).toBeInTheDocument();
                expect(screen.getByRole('spinbutton', { name: 'Month' })).toBeInTheDocument();
                expect(screen.getByRole('spinbutton', { name: 'Year' })).toBeInTheDocument();
                expect(screen.getByText('Date of birth test:')).toBeInTheDocument();
                expect(screen.getAllByText('Required')).toHaveLength(15);
                return [2 /*return*/];
            });
        }); });
    });
});
//# sourceMappingURL=FormStep4.test.js.map