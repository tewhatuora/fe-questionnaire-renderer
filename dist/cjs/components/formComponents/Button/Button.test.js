"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var testUtils_1 = require("../../../testHelpers/testUtils");
var types_1 = require("../../../types");
var __1 = require("..");
describe('Button', function () {
    var props;
    beforeEach(function () {
        props = {
            onClick: jest.fn(),
            type: 'button',
            variant: types_1.ButtonVariantTypes.primary
        };
    });
    it('renders the button text', function () {
        (0, testUtils_1.render)((0, jsx_runtime_1.jsx)(__1.Button, tslib_1.__assign({}, props, { children: "Click me" })));
        expect(testUtils_1.screen.getByText('Click me')).toBeInTheDocument();
    });
});
//# sourceMappingURL=Button.test.js.map