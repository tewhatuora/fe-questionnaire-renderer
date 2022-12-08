"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("@testing-library/react");
var componentWrappers_1 = require("../../../testHelpers/componentWrappers");
var ItemRepeatButtons_1 = tslib_1.__importDefault(require("./ItemRepeatButtons"));
describe('Item Repeat Buttons', function () {
    it("renders nothing if no index repeat", function () {
        (0, componentWrappers_1.renderWithFormDataProvider)((0, jsx_runtime_1.jsx)(ItemRepeatButtons_1.default, { input: { linkIdWithParent: 'test' } }), {}, { test: [] });
        expect(react_1.screen.queryByText('Add')).not.toBeInTheDocument();
        expect(react_1.screen.queryByText('Delete')).not.toBeInTheDocument();
    });
    it("renders only the add button if the index is 0", function () {
        (0, componentWrappers_1.renderWithFormDataProvider)((0, jsx_runtime_1.jsx)(ItemRepeatButtons_1.default, { input: { linkIdWithParent: 'testId', indexRepeat: 0 } }), {}, { testId: ['Test'] });
        expect(react_1.screen.getByText('Add')).toBeInTheDocument();
        expect(react_1.screen.queryByText('Delete')).not.toBeInTheDocument();
    });
    it("renders both buttons when the index is greater than 0", function () {
        (0, componentWrappers_1.renderWithFormDataProvider)((0, jsx_runtime_1.jsx)(ItemRepeatButtons_1.default, { input: { linkIdWithParent: 'testId', indexRepeat: 1 } }), {}, { testId: ['Test', 'Test2'] });
        expect(react_1.screen.getByText('Add')).toBeInTheDocument();
        expect(react_1.screen.getByText('Delete')).toBeInTheDocument();
    });
});
//# sourceMappingURL=ItemRepeatButtons.test.js.map