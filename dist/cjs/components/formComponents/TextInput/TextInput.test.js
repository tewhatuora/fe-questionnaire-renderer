"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("@testing-library/react");
var componentWrappers_1 = require("../../../testHelpers/componentWrappers");
var __1 = require("..");
describe('Text input', function () {
    it('renders a text input', function () {
        (0, componentWrappers_1.renderWithFormDataProvider)((0, jsx_runtime_1.jsx)(__1.TextInput, { input: { text: 'Test checkbox' } }));
        expect(react_1.screen.getByText('Test checkbox')).toBeInTheDocument();
    });
});
//# sourceMappingURL=TextInput.test.js.map