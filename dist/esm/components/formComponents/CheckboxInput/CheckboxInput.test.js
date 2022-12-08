import { jsx as _jsx } from "react/jsx-runtime";
import { screen } from '@testing-library/react';
import { renderWithFormDataProvider } from '../../../testHelpers/componentWrappers';
import { CheckboxInput } from '..';
describe('Checkbox input', function () {
    it('renders a checkbox input', function () {
        renderWithFormDataProvider(_jsx(CheckboxInput, { input: { text: 'Test checkbox' } }));
        expect(screen.getByText('Test checkbox')).toBeInTheDocument();
    });
});
//# sourceMappingURL=CheckboxInput.test.js.map