import { __assign, __awaiter, __generator } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
/* eslint-disable react/jsx-no-constructed-context-values */
import { screen } from '@testing-library/react';
import { defaultQuestionnaireProviderProps, renderWithFormDataProvider } from '../../../testHelpers/componentWrappers';
import { QuestionnaireContext } from '../../QuestionnaireProvider';
import { FormStep } from '..';
jest.mock('react-router-dom', function () { return (__assign(__assign({}, jest.requireActual('react-router-dom')), { useParams: function () { return ({
        stepId: 'step2'
    }); } })); });
var formStepProps = {
    basePath: '',
    inputComponents: {},
    useCompletedPage: false,
    useReviewPage: true
};
describe('Form step 2', function () {
    function TestComponent(_a) {
        var path = _a.path;
        return (_jsx(QuestionnaireContext.Provider, __assign({ value: __assign(__assign({}, defaultQuestionnaireProviderProps), { formInitialPagePath: path, submitQuestionnaireData: function () { return undefined; } }) }, { children: _jsx(FormStep, __assign({}, formStepProps)) })));
    }
    describe("with populated values", function () {
        it("renders the second page", function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                renderWithFormDataProvider(_jsx(TestComponent, { path: '/form/step2' }), {
                    route: '/step2'
                }, { step1: { step1_page1: { step1_page1_input1: false } } });
                expect(screen.getByRole('heading', { name: 'Step 2' })).toBeInTheDocument();
                expect(screen.getByRole('textbox', { name: 'Last name:' })).toBeInTheDocument();
                expect(screen.getByRole('group', { name: 'Symptoms date:' })).toBeInTheDocument();
                expect(screen.getByRole('application', { name: 'Calendar' })).toBeInTheDocument();
                expect(screen.getByRole('button', {
                    name: 'Move backward to switch to the previous month.'
                })).toBeInTheDocument();
                expect(screen.getByRole('button', {
                    name: 'Review'
                })).toBeInTheDocument();
                expect(screen.getByRole('button', {
                    name: 'Back'
                })).toBeInTheDocument();
                return [2 /*return*/];
            });
        }); });
        it("renders the button to the third page when conditions are met", function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                renderWithFormDataProvider(_jsx(TestComponent, { path: '/form/step2' }), {
                    route: '/step2'
                }, { step1: { step1_page1: { step1_page1_input1: true } } });
                expect(screen.getByRole('button', {
                    name: 'Continue'
                })).toBeInTheDocument();
                return [2 /*return*/];
            });
        }); });
    });
});
//# sourceMappingURL=FormStep2.test.js.map