import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { renderWithQuestionnaireProvider } from '../../testHelpers/componentWrappers';
import { render, screen } from '../../testHelpers/testUtils';
import { useQuestionnaire } from '.';
describe('CMSContext', function () {
    function TestComponent() {
        var questionnaire = useQuestionnaire().questionnaire;
        return (_jsxs("div", { children: [_jsx("div", { children: (questionnaire === null || questionnaire === void 0 ? void 0 : questionnaire.title) || 'Not found' }), _jsx("div", { children: (questionnaire === null || questionnaire === void 0 ? void 0 : questionnaire.publisher) || 'Not found' })] }));
    }
    it("renders no text", function () {
        render(_jsx(TestComponent, {}));
        expect(screen.getAllByText('Not found').length).toBe(2);
    });
    it("renders the text", function () {
        renderWithQuestionnaireProvider(_jsx(TestComponent, {}));
        expect(screen.getByText('Demo Form')).toBeInTheDocument();
        expect(screen.getByText('Test NZ')).toBeInTheDocument();
    });
});
//# sourceMappingURL=QuestionnaireProvider.test.js.map