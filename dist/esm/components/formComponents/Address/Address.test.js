import { jsx as _jsx } from "react/jsx-runtime";
import { renderWithFormDataProvider } from '../../../testHelpers/componentWrappers';
import { screen, userEvent } from '../../../testHelpers/testUtils';
import Address from './Address';
describe("Address", function () {
    it("renders the manual address text fields", function () {
        renderWithFormDataProvider(_jsx(Address, { input: { linkIdWithParent: 'testAddress' } }));
        expect(screen.getByRole('button', { name: 'Enter address manually' })).toBeInTheDocument();
        var button = screen.getByRole('button', {
            name: 'Enter address manually'
        });
        userEvent.click(button);
        expect(screen.getByRole('textbox', { name: 'Address line 1' })).toBeInTheDocument();
        expect(screen.getByRole('textbox', { name: 'Address line 2' })).toBeInTheDocument();
        expect(screen.getByRole('textbox', { name: 'Suburb' })).toBeInTheDocument();
        expect(screen.getByRole('textbox', { name: 'City' })).toBeInTheDocument();
        expect(screen.getByRole('textbox', { name: 'Postcode' })).toBeInTheDocument();
    });
    it("renders the autocomplete input", function () {
        renderWithFormDataProvider(_jsx(Address, { input: { linkIdWithParent: 'testAddress' } }));
        expect(screen.getByRole('button', { name: 'Enter address manually' })).toBeInTheDocument();
    });
});
//# sourceMappingURL=Address.test.js.map