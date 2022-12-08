"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var testUtils_1 = require("../../../testHelpers/testUtils");
var __1 = require("..");
describe('RequiredOptional', function () {
    var props;
    it("renders just the label text", function () {
        (0, testUtils_1.render)((0, jsx_runtime_1.jsx)(__1.RequiredOptional, tslib_1.__assign({}, props)));
        expect(testUtils_1.screen.queryByText('Optional')).not.toBeInTheDocument();
        expect(testUtils_1.screen.queryByText('Required')).not.toBeInTheDocument();
    });
    describe("when the input is 'optional'", function () {
        it("renders the 'optional' text", function () {
            (0, testUtils_1.render)((0, jsx_runtime_1.jsx)(__1.RequiredOptional, { required: false }));
            expect(testUtils_1.screen.queryByText('Required')).not.toBeInTheDocument();
            expect(testUtils_1.screen.getByText('Optional')).toBeInTheDocument();
        });
    });
    describe("when the input is 'required'", function () {
        it("renders the 'required' text", function () {
            (0, testUtils_1.render)((0, jsx_runtime_1.jsx)(__1.RequiredOptional, { required: true }));
            expect(testUtils_1.screen.queryByText('Optional')).not.toBeInTheDocument();
            expect(testUtils_1.screen.getByText('Required')).toBeInTheDocument();
        });
    });
});
//# sourceMappingURL=RequiredOptional.test.js.map