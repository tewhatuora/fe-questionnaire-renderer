"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var testUtils_1 = require("../../../testHelpers/testUtils");
var __1 = require("..");
describe('Button', function () {
    var props;
    beforeEach(function () {
        props = {
            message: 'Some input error',
            name: 'name'
        };
    });
    it('renders the button text', function () {
        (0, testUtils_1.render)((0, jsx_runtime_1.jsx)(__1.InputError, tslib_1.__assign({}, props)));
        expect(testUtils_1.screen.getByText('Some input error')).toBeInTheDocument();
    });
});
//# sourceMappingURL=InputError.test.js.map