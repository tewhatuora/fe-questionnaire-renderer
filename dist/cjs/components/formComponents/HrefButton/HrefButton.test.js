"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var testUtils_1 = require("../../../testHelpers/testUtils");
var types_1 = require("../../../types");
var __1 = require("..");
describe('Button', function () {
    it('renders the button text', function () {
        (0, testUtils_1.render)((0, jsx_runtime_1.jsx)(__1.HrefButton, { buttonAttributes: {
                content: 'Click me',
                href: 'https://github.com/',
                variant: types_1.ButtonVariantTypes.primary
            } }));
        expect(testUtils_1.screen.getByText('Click me')).toBeInTheDocument();
    });
});
//# sourceMappingURL=HrefButton.test.js.map