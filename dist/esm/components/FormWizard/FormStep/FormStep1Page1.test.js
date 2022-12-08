import { __assign, __awaiter, __generator } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
/* eslint-disable react/jsx-no-constructed-context-values */
import { defaultQuestionnaireProviderProps, renderWithFormDataProvider } from '../../../testHelpers/componentWrappers';
import { screen, userEvent } from '../../../testHelpers/testUtils';
import { QuestionnaireContext } from '../../QuestionnaireProvider';
import { FormStep } from '..';
jest.mock('react-router-dom', function () { return (__assign(__assign({}, jest.requireActual('react-router-dom')), { useParams: function () { return ({
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
        return (_jsx(QuestionnaireContext.Provider, __assign({ value: __assign(__assign({}, defaultQuestionnaireProviderProps), { formInitialPagePath: path, submitQuestionnaireData: function () { return undefined; } }) }, { children: _jsx(FormStep, __assign({}, formStepProps)) })));
    }
    describe("with populated values", function () {
        it("renders the first step and first page", function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                renderWithFormDataProvider(_jsx(TestComponent, { path: '/questionnaireTests/form/step1/page1' }), {
                    route: '/questionnaireTests/form/step1/page1'
                }, {
                    step1: { step1_page1: { step1_page1_input4: [''] } }
                });
                expect(screen.getByRole('heading', { level: 1, name: 'Page 1' })).toBeInTheDocument();
                expect(screen.getByRole('group', { name: 'Are you happy?' })).toBeInTheDocument();
                expect(screen.getByRole('group', { name: 'How happy?' })).toBeInTheDocument();
                expect(screen.getByRole('button', { name: 'Yes' })).toBeInTheDocument();
                expect(screen.getByRole('button', { name: 'No' })).toBeInTheDocument();
                expect(screen.getByRole('button', { name: 'Continue' })).toBeInTheDocument();
                expect(screen.getByRole('button', { name: 'Add' })).toBeInTheDocument();
                expect(screen.getByRole('radio', { name: 'Happy 1' })).toBeInTheDocument();
                expect(screen.getByRole('radio', { name: 'Happy 2' })).toBeInTheDocument();
                expect(screen.getByRole('radio', { name: 'Sad' })).toBeInTheDocument();
                expect(screen.getByRole('textbox', { name: 'First name:' })).toBeInTheDocument();
                expect(screen.queryByRole('button', { name: 'Delete' })).not.toBeInTheDocument();
                expect(screen.getByRole('button', { name: 'Add' })).toBeInTheDocument();
                return [2 /*return*/];
            });
        }); });
    });
    describe("conditional item", function () {
        it("renders the first step and first page", function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                renderWithFormDataProvider(_jsx(TestComponent, { path: '/form/step1/page1' }), {
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
                expect(screen.getByRole('radio', { name: 'Sad' })).toBeInTheDocument();
                userEvent.click(screen.getByRole('radio', { name: 'Sad' }));
                expect(screen.getByRole('textbox', { name: 'Reason:' })).toBeInTheDocument();
                expect(screen.getAllByRole('button', { name: 'Yes' })).toHaveLength(2);
                expect(screen.getAllByRole('button', { name: 'Add' })).toHaveLength(2);
                return [2 /*return*/];
            });
        }); });
    });
    describe("add repeatable items", function () {
        it("renders the first step and first page", function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                renderWithFormDataProvider(_jsx(TestComponent, { path: '/form/step1/page1' }), {
                    route: '/form/step1/page1'
                }, {
                    step1: {
                        step1_page1: {
                            step1_page1_input4: ['']
                        }
                    }
                });
                expect(screen.getByRole('textbox', { name: 'First name:' })).toBeInTheDocument();
                expect(screen.queryByRole('button', { name: 'Delete' })).not.toBeInTheDocument();
                expect(screen.getByRole('button', { name: 'Add' })).toBeInTheDocument();
                userEvent.click(screen.getByRole('button', { name: 'Add' }));
                return [2 /*return*/];
            });
        }); });
    });
});
//# sourceMappingURL=FormStep1Page1.test.js.map