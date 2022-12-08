import { __assign, __awaiter, __generator } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
/* eslint-disable react/jsx-no-constructed-context-values */
import { screen } from '@testing-library/react';
import { defaultQuestionnaireProviderProps, renderWithFormDataProvider } from '../../../testHelpers/componentWrappers';
import { QuestionnaireContext } from '../../QuestionnaireProvider';
import { FormStep } from '..';
jest.mock('react-router-dom', function () { return (__assign(__assign({}, jest.requireActual('react-router-dom')), { useParams: function () { return ({
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
        return (_jsx(QuestionnaireContext.Provider, __assign({ value: __assign(__assign({}, defaultQuestionnaireProviderProps), { formInitialPagePath: path, submitQuestionnaireData: function () { return undefined; } }) }, { children: _jsx(FormStep, __assign({}, formStepProps)) })));
    }
    describe("with populated values", function () {
        it("renders the third page", function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                renderWithFormDataProvider(_jsx(TestComponent, { path: '/form/step3' }), {
                    route: '/step3'
                }, { step1: { step1_page1: { step1_page1_input1: true } } });
                expect(screen.getByRole('heading', { name: 'Step 3' })).toBeInTheDocument();
                expect(screen.getByRole('textbox', { name: 'Comments:' })).toBeInTheDocument();
                expect(screen.getByRole('button', {
                    name: 'Continue'
                })).toBeInTheDocument();
                expect(screen.getByRole('button', {
                    name: 'Back'
                })).toBeInTheDocument();
                expect(screen.getByText('Change your answer for the happiness question on the first page to change this page displaying or not.', { exact: false }));
                return [2 /*return*/];
            });
        }); });
    });
});
//# sourceMappingURL=FormStep3.test.js.map