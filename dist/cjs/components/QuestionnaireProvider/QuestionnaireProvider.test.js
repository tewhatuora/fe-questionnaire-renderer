"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var componentWrappers_1 = require("../../testHelpers/componentWrappers");
var testUtils_1 = require("../../testHelpers/testUtils");
var _1 = require(".");
describe('CMSContext', function () {
    function TestComponent() {
        var questionnaire = (0, _1.useQuestionnaire)().questionnaire;
        return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("div", { children: (questionnaire === null || questionnaire === void 0 ? void 0 : questionnaire.title) || 'Not found' }), (0, jsx_runtime_1.jsx)("div", { children: (questionnaire === null || questionnaire === void 0 ? void 0 : questionnaire.publisher) || 'Not found' })] }));
    }
    it("renders no text", function () {
        (0, testUtils_1.render)((0, jsx_runtime_1.jsx)(TestComponent, {}));
        expect(testUtils_1.screen.getAllByText('Not found').length).toBe(2);
    });
    it("renders the text", function () {
        (0, componentWrappers_1.renderWithQuestionnaireProvider)((0, jsx_runtime_1.jsx)(TestComponent, {}));
        expect(testUtils_1.screen.getByText('Demo Form')).toBeInTheDocument();
        expect(testUtils_1.screen.getByText('Test NZ')).toBeInTheDocument();
    });
});
//# sourceMappingURL=QuestionnaireProvider.test.js.map