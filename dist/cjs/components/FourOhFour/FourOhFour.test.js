"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("@testing-library/react");
var componentWrappers_1 = require("../../testHelpers/componentWrappers");
var _1 = tslib_1.__importDefault(require("."));
describe('FourOhFour', function () {
    it("renders the headings and the button", function () {
        (0, componentWrappers_1.renderWithCMSProvider)((0, jsx_runtime_1.jsx)(_1.default, { basePath: '' }));
        expect(react_1.screen.getByRole('heading', { level: 2, name: 'We’re sorry. Aroha mai.' })).toBeInTheDocument();
        expect(react_1.screen.getByRole('heading', {
            level: 2,
            name: 'We can’t find that page anywhere.'
        })).toBeInTheDocument();
        expect(react_1.screen.getByRole('button', { name: 'Back to home page' })).toBeInTheDocument();
    });
});
//# sourceMappingURL=FourOhFour.test.js.map