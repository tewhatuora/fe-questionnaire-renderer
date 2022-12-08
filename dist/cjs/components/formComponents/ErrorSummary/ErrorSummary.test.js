"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var testUtils_1 = require("../../../testHelpers/testUtils");
var __1 = require("..");
describe('Error Summary', function () {
    it("renders nothing when no errors", function () {
        (0, testUtils_1.render)((0, jsx_runtime_1.jsx)(__1.ErrorSummary, { formErrorsFiltered: [] }));
        expect(testUtils_1.screen.queryByText('There are some errors on this page')).not.toBeInTheDocument();
    });
    it("renders nothing is 1 or 2 errors", function () {
        (0, testUtils_1.render)((0, jsx_runtime_1.jsx)(__1.ErrorSummary, { formErrorsFiltered: [] }));
        expect(testUtils_1.screen.queryByText('There are some errors on this page')).not.toBeInTheDocument();
    });
    it("renders the summary when 3 or more errors", function () {
        (0, testUtils_1.render)((0, jsx_runtime_1.jsx)(__1.ErrorSummary, { formErrorsFiltered: [
                {
                    name: 'test1',
                    message: 'test1'
                },
                {
                    name: 'test2',
                    message: 'test2'
                },
                {
                    name: 'test3',
                    message: 'test3'
                }
            ] }));
        expect(testUtils_1.screen.getByText('There are some errors on this page')).toBeInTheDocument();
        expect(testUtils_1.screen.getByRole('button', { name: 'Test1.' })).toBeInTheDocument();
        expect(testUtils_1.screen.getByRole('button', { name: 'Test2.' })).toBeInTheDocument();
        expect(testUtils_1.screen.getByRole('button', { name: 'Test3.' })).toBeInTheDocument();
    });
});
//# sourceMappingURL=ErrorSummary.test.js.map