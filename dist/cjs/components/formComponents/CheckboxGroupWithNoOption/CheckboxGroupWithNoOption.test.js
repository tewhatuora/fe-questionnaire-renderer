"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("@testing-library/react");
var componentWrappers_1 = require("../../../testHelpers/componentWrappers");
var __1 = require("..");
describe('Checkbox input with no option', function () {
    it('renders a checkbox input group with a no option', function () {
        (0, componentWrappers_1.renderWithFormDataProvider)((0, jsx_runtime_1.jsx)(__1.CheckboxGroupWithNoOption, { input: {
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
        expect(react_1.screen.getByText('Happy 1')).toBeInTheDocument();
        expect(react_1.screen.getByRole('checkbox', { name: 'Happy 1' })).toBeInTheDocument();
        expect(react_1.screen.getByText('Happy 2')).toBeInTheDocument();
        expect(react_1.screen.getByRole('checkbox', { name: 'Happy 2' })).toBeInTheDocument();
        expect(react_1.screen.getByText('Sad')).toBeInTheDocument();
        expect(react_1.screen.getByRole('checkbox', { name: 'Sad' })).toBeInTheDocument();
        expect(react_1.screen.getByText('Test no option')).toBeInTheDocument();
        expect(react_1.screen.getByRole('checkbox', { name: 'Test no option' })).toBeInTheDocument();
    });
});
//# sourceMappingURL=CheckboxGroupWithNoOption.test.js.map