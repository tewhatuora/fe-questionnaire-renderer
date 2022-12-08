import { jsx as _jsx } from "react/jsx-runtime";
import { screen } from '@testing-library/react';
import { renderWithFormDataProvider } from '../../../testHelpers/componentWrappers';
import { TextInput } from '..';
describe('Text input', function () {
    it('renders a text input', function () {
        renderWithFormDataProvider(_jsx(TextInput, { input: { text: 'Test checkbox' } }));
        expect(screen.getByText('Test checkbox')).toBeInTheDocument();
    });
});
//# sourceMappingURL=TextInput.test.js.map