"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var testUtils_1 = require("../../../testHelpers/testUtils");
var Accordion_1 = tslib_1.__importDefault(require("./Accordion"));
describe("Accordion", function () {
    var props;
    beforeEach(function () {
        props = {
            data: [
                {
                    id: 'summary1',
                    summary: 'Summary 1',
                    details: 'A bit of detail for the first summary'
                },
                {
                    id: 'summary2',
                    summary: 'Summary 2',
                    details: 'Expanding further on the second summary'
                }
            ]
        };
    });
    it("renders the summary points and their details", function () {
        (0, testUtils_1.render)((0, jsx_runtime_1.jsx)(Accordion_1.default, tslib_1.__assign({}, props)));
        expect(testUtils_1.screen.getByRole('button', { name: 'Summary 1' })).toBeInTheDocument();
        expect(testUtils_1.screen.getByText('A bit of detail for the first summary')).toBeInTheDocument();
        expect(testUtils_1.screen.getByRole('button', { name: 'Summary 2' })).toBeInTheDocument();
        expect(testUtils_1.screen.getByText('Expanding further on the second summary')).toBeInTheDocument();
    });
    it("renders an element as accordion details", function () {
        props = {
            data: [
                {
                    id: 'summaryTest',
                    summary: 'Summary test element',
                    details: (0, jsx_runtime_1.jsx)("span", { children: "Test details element" })
                }
            ]
        };
        (0, testUtils_1.render)((0, jsx_runtime_1.jsx)(Accordion_1.default, tslib_1.__assign({}, props)));
        expect(testUtils_1.screen.getByRole('button', { name: 'Summary test element' })).toBeInTheDocument();
        expect(testUtils_1.screen.getByText('Test details element')).toBeInTheDocument();
    });
});
//# sourceMappingURL=Accordion.test.js.map