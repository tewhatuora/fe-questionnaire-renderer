"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("@testing-library/react");
var componentWrappers_1 = require("../../../testHelpers/componentWrappers");
var SelectorGroupWrapper_1 = tslib_1.__importDefault(require("./SelectorGroupWrapper"));
describe('Selector group', function () {
    it('renders a selector group', function () {
        (0, componentWrappers_1.renderWithFormDataProvider)((0, jsx_runtime_1.jsx)(SelectorGroupWrapper_1.default, { input: { text: 'Test radio' }, type: 'radio' }));
        expect(react_1.screen.queryByText('Test radio')).not.toBeInTheDocument();
    });
    it('renders a selector group', function () {
        (0, componentWrappers_1.renderWithFormDataProvider)((0, jsx_runtime_1.jsx)(SelectorGroupWrapper_1.default, { input: { text: 'Test checkbox' }, type: 'checkbox' }));
        expect(react_1.screen.queryByText('Test checkbox')).not.toBeInTheDocument();
    });
    it('renders a selector group', function () {
        (0, componentWrappers_1.renderWithFormDataProvider)((0, jsx_runtime_1.jsx)(SelectorGroupWrapper_1.default, { input: {
                text: 'Test radio',
                answerOption: [
                    { valueString: 'Test 1' },
                    { valueString: 'Test 2' },
                    { valueString: 'Test 3' }
                ]
            }, type: 'radio' }));
        expect(react_1.screen.getByText('Test radio')).toBeInTheDocument();
        expect(react_1.screen.getByRole('radio', { name: 'Test 1' })).toBeInTheDocument();
        expect(react_1.screen.getByRole('radio', { name: 'Test 2' })).toBeInTheDocument();
        expect(react_1.screen.getByRole('radio', { name: 'Test 3' })).toBeInTheDocument();
    });
    it('renders a selector group', function () {
        (0, componentWrappers_1.renderWithFormDataProvider)((0, jsx_runtime_1.jsx)(SelectorGroupWrapper_1.default, { input: {
                text: 'Test checkbox',
                answerOption: [
                    { valueString: 'Test 1' },
                    { valueString: 'Test 2' },
                    { valueString: 'Test 3' }
                ]
            }, type: 'checkbox' }));
        expect(react_1.screen.getByText('Test checkbox')).toBeInTheDocument();
        expect(react_1.screen.getByRole('checkbox', { name: 'Test 1' })).toBeInTheDocument();
        expect(react_1.screen.getByRole('checkbox', { name: 'Test 2' })).toBeInTheDocument();
        expect(react_1.screen.getByRole('checkbox', { name: 'Test 3' })).toBeInTheDocument();
    });
});
//# sourceMappingURL=SelectorGroupWrapper.test.js.map