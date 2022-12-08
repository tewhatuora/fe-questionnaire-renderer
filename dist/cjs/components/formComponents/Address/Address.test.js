"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var componentWrappers_1 = require("../../../testHelpers/componentWrappers");
var testUtils_1 = require("../../../testHelpers/testUtils");
var Address_1 = tslib_1.__importDefault(require("./Address"));
describe("Address", function () {
    it("renders the manual address text fields", function () {
        (0, componentWrappers_1.renderWithFormDataProvider)((0, jsx_runtime_1.jsx)(Address_1.default, { input: { linkIdWithParent: 'testAddress' } }));
        expect(testUtils_1.screen.getByRole('button', { name: 'Enter address manually' })).toBeInTheDocument();
        var button = testUtils_1.screen.getByRole('button', {
            name: 'Enter address manually'
        });
        testUtils_1.userEvent.click(button);
        expect(testUtils_1.screen.getByRole('textbox', { name: 'Address line 1' })).toBeInTheDocument();
        expect(testUtils_1.screen.getByRole('textbox', { name: 'Address line 2' })).toBeInTheDocument();
        expect(testUtils_1.screen.getByRole('textbox', { name: 'Suburb' })).toBeInTheDocument();
        expect(testUtils_1.screen.getByRole('textbox', { name: 'City' })).toBeInTheDocument();
        expect(testUtils_1.screen.getByRole('textbox', { name: 'Postcode' })).toBeInTheDocument();
    });
    it("renders the autocomplete input", function () {
        (0, componentWrappers_1.renderWithFormDataProvider)((0, jsx_runtime_1.jsx)(Address_1.default, { input: { linkIdWithParent: 'testAddress' } }));
        expect(testUtils_1.screen.getByRole('button', { name: 'Enter address manually' })).toBeInTheDocument();
    });
});
//# sourceMappingURL=Address.test.js.map