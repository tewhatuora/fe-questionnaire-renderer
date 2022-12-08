import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { screen } from '@testing-library/react';
import { renderWithFormDataProvider } from '../../../testHelpers/componentWrappers';
import { YesNoButtons } from '..';
describe("YesNoButtons", function () {
    var props;
    beforeEach(function () {
        props = {
            input: {
                linkId: 'testInput',
                text: 'Are these Yes/No buttons?',
                required: true
            }
        };
    });
    it("renders the fieldset label, help text, and the Yes and No buttons", function () {
        renderWithFormDataProvider(_jsx(YesNoButtons, __assign({}, props)));
        expect(screen.getByLabelText('Are these Yes/No buttons?')).toBeInTheDocument();
        expect(screen.getByLabelText('Yes')).toBeInTheDocument();
        expect(screen.getByLabelText('No')).toBeInTheDocument();
    });
});
//# sourceMappingURL=YesNoButtons.test.js.map