import { jsx as _jsx } from "react/jsx-runtime";
import { screen } from '@testing-library/react';
import { renderWithFormDataProvider } from '../../../testHelpers/componentWrappers';
import { CheckboxGroupWithNoOption } from '..';
describe('Checkbox input with no option', function () {
    it('renders a checkbox input group with a no option', function () {
        renderWithFormDataProvider(_jsx(CheckboxGroupWithNoOption, { input: {
                linkId: 'testInput',
                text: 'Test checkbox',
                answerOption: [
                    {
                        valueString: 'Happy 1'
                    },
                    {
                        valueString: 'Happy 2'
                    },
                    {
                        valueString: 'Sad'
                    }
                ],
                extension: [
                    {
                        url: 'http://hl7.org/fhir/StructureDefinition/noOptionExtension',
                        id: 'noOptionExtension',
                        valueString: 'Test no option'
                    }
                ]
            } }), {}, { testInput: [] });
        expect(screen.getByText('Happy 1')).toBeInTheDocument();
        expect(screen.getByRole('checkbox', { name: 'Happy 1' })).toBeInTheDocument();
        expect(screen.getByText('Happy 2')).toBeInTheDocument();
        expect(screen.getByRole('checkbox', { name: 'Happy 2' })).toBeInTheDocument();
        expect(screen.getByText('Sad')).toBeInTheDocument();
        expect(screen.getByRole('checkbox', { name: 'Sad' })).toBeInTheDocument();
        expect(screen.getByText('Test no option')).toBeInTheDocument();
        expect(screen.getByRole('checkbox', { name: 'Test no option' })).toBeInTheDocument();
    });
});
//# sourceMappingURL=CheckboxGroupWithNoOption.test.js.map