import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { screen } from '@testing-library/react';
import { renderWithFormDataProvider } from '../../../testHelpers/componentWrappers';
import { LegendHelpText } from '..';
describe('LegendHelpText', function () {
    var props;
    it("renders just the label text when plain text", function () {
        props = {
            input: {
                linkId: 'testInput',
                text: 'Are these Yes/No buttons?',
                required: true
            },
            name: 'legendHelpText'
        };
        renderWithFormDataProvider(_jsx(LegendHelpText, __assign({}, props, { children: "Test label" })));
        expect(screen.getByText('Are these Yes/No buttons?')).toBeInTheDocument();
        expect(screen.getByText('Required')).toBeInTheDocument();
    });
});
//# sourceMappingURL=LegendHelpText.test.js.map