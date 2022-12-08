import { jsx as _jsx } from "react/jsx-runtime";
import { screen } from '@testing-library/react';
import { renderWithCMSProvider } from '../../testHelpers/componentWrappers';
import FourOhFour from '.';
describe('FourOhFour', function () {
    it("renders the headings and the button", function () {
        renderWithCMSProvider(_jsx(FourOhFour, { basePath: '' }));
        expect(screen.getByRole('heading', { level: 2, name: 'We’re sorry. Aroha mai.' })).toBeInTheDocument();
        expect(screen.getByRole('heading', {
            level: 2,
            name: 'We can’t find that page anywhere.'
        })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Back to home page' })).toBeInTheDocument();
    });
});
//# sourceMappingURL=FourOhFour.test.js.map