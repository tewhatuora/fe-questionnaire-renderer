"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("@testing-library/react");
var componentWrappers_1 = require("../../../testHelpers/componentWrappers");
var __1 = require("..");
describe("YesNoButtons", function () {
    var props;
    beforeEach(function () {
        props = {
            input: {
                linkId: 'testInput',
                text: 'Are these Yes/No buttons?',
                required: true
            }
        };
    });
    it("renders the fieldset label, help text, and the Yes and No buttons", function () {
        (0, componentWrappers_1.renderWithFormDataProvider)((0, jsx_runtime_1.jsx)(__1.YesNoButtons, tslib_1.__assign({}, props)));
        expect(react_1.screen.getByLabelText('Are these Yes/No buttons?')).toBeInTheDocument();
        expect(react_1.screen.getByLabelText('Yes')).toBeInTheDocument();
        expect(react_1.screen.getByLabelText('No')).toBeInTheDocument();
    });
});
//# sourceMappingURL=YesNoButtons.test.js.map