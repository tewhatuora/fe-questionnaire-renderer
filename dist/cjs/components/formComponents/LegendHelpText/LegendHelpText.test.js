"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("@testing-library/react");
var componentWrappers_1 = require("../../../testHelpers/componentWrappers");
var __1 = require("..");
describe('LegendHelpText', function () {
    var props;
    it("renders just the label text when plain text", function () {
        props = {
            input: {
                linkId: 'testInput',
                text: 'Are these Yes/No buttons?',
                required: true
            },
            name: 'legendHelpText'
        };
        (0, componentWrappers_1.renderWithFormDataProvider)((0, jsx_runtime_1.jsx)(__1.LegendHelpText, tslib_1.__assign({}, props, { children: "Test label" })));
        expect(react_1.screen.getByText('Are these Yes/No buttons?')).toBeInTheDocument();
        expect(react_1.screen.getByText('Required')).toBeInTheDocument();
    });
});
//# sourceMappingURL=LegendHelpText.test.js.map