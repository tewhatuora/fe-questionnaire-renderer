"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var testUtils_1 = require("../../../testHelpers/testUtils");
var __1 = require("..");
describe('Label', function () {
    var props;
    beforeEach(function () {
        props = {
            htmlFor: 'testInput'
        };
    });
    it("renders just the label text", function () {
        (0, testUtils_1.render)((0, jsx_runtime_1.jsx)(__1.Label, tslib_1.__assign({}, props, { children: "Test label" })));
        expect(testUtils_1.screen.getByText('Test label')).toBeInTheDocument();
    });
});
//# sourceMappingURL=Label.test.js.map