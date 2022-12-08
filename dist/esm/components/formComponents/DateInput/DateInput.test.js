import { jsx as _jsx } from "react/jsx-runtime";
import { screen } from '@testing-library/react';
import { renderWithFormDataProvider } from '../../../testHelpers/componentWrappers';
import { DateInput } from '..';
describe('Date input', function () {
    it('renders a date input', function () {
        renderWithFormDataProvider(_jsx(DateInput, { input: { text: 'Test checkbox' } }));
        expect(screen.getByText('Test checkbox')).toBeInTheDocument();
    });
});
//# sourceMappingURL=DateInput.test.js.map