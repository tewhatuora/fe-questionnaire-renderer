import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { screen } from '@testing-library/react';
import { renderWithFormDataProvider } from '../../../testHelpers/componentWrappers';
import { Questionnaire_ItemTypeKind } from '../../../types/fhir';
import { DayPicker } from '..';
describe('DayPicker', function () {
    var props;
    beforeEach(function () {
        props = {
            input: {
                id: 'symptomsStartDate',
                text: 'When did you first start experiencing any of these symptoms?',
                required: true,
                // eslint-disable-next-line no-underscore-dangle
                type: Questionnaire_ItemTypeKind._date
            }
        };
    });
    it('renders the label and input', function () {
        renderWithFormDataProvider(_jsx(DayPicker, __assign({}, props)));
        expect(screen.getByText('When did you first start experiencing any of these symptoms?')).toBeInTheDocument();
        // React-dates day picker has the following attribute `aria-label="Calendar"`
        expect(screen.getByLabelText('Calendar')).toBeInTheDocument();
    });
});
//# sourceMappingURL=DayPicker.test.js.map