"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var componentWrappers_1 = require("../../../testHelpers/componentWrappers");
var testUtils_1 = require("../../../testHelpers/testUtils");
var __1 = require("..");
describe("AddressToggle", function () {
    it("renders the 'Enter address manually' button text", function () {
        (0, componentWrappers_1.renderWithFormDataProvider)((0, jsx_runtime_1.jsx)(__1.Address, { input: {} }));
        expect(testUtils_1.screen.getByRole('button', { name: 'Enter address manually' })).toBeInTheDocument();
    });
    it("renders the 'Search for my address' button text once clicked", function () {
        (0, componentWrappers_1.renderWithFormDataProvider)((0, jsx_runtime_1.jsx)(__1.Address, { input: {} }));
        var button = testUtils_1.screen.getByRole('button', {
            name: 'Enter address manually'
        });
        testUtils_1.userEvent.click(button);
        expect(testUtils_1.screen.queryByRole('button', { name: 'Enter address manually' })).not.toBeInTheDocument();
        expect(testUtils_1.screen.getByRole('button', { name: 'Search for my address' })).toBeInTheDocument();
    });
});
//# sourceMappingURL=AddressToggle.test.js.map