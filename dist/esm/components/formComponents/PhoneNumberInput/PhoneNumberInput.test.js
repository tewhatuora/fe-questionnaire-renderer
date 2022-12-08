import { __assign, __awaiter, __generator } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import selectEvent from 'react-select-event';
import { renderWithFormDataProvider } from '../../../testHelpers/componentWrappers';
import { screen, userEvent, waitFor } from '../../../testHelpers/testUtils';
import { PhoneNumberInput } from '..';
describe('PhoneNumberInput', function () {
    var props;
    var initialValues = {
        timelineContactPhoneNumber: {
            country: 'NZ',
            countryCallingCode: '64',
            nationalNumber: '',
            number: ''
        }
    };
    beforeEach(function () {
        props = {
            input: {
                linkId: 'timelineContactPhoneNumber',
                text: 'Phone number'
            }
        };
    });
    it('renders the label, country select input and tel input', function () {
        renderWithFormDataProvider(_jsx(PhoneNumberInput, __assign({}, props)), {}, initialValues);
        // Country select input - gets title of the flag SVG
        expect(screen.getByTitle('New Zealand')).toBeInTheDocument();
        expect(screen.queryByText('New Zealand +64')).not.toBeInTheDocument(); // The first option
        expect(screen.queryByText('Australia +61')).not.toBeInTheDocument(); // Another option
        selectEvent.openMenu(screen.getByTitle('New Zealand'));
        expect(screen.getAllByText('New Zealand +64')[0]).toBeInTheDocument(); // The first option
        expect(screen.getByText('Ascension Island +247')).toBeInTheDocument(); // Another option
        // Tel input & label. Fieldset so has 2 different inputs
        expect(screen.getAllByLabelText('Phone number')).toHaveLength(2);
    });
    it('allows the user to select a different country calling code', function () { return __awaiter(void 0, void 0, void 0, function () {
        var button;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    renderWithFormDataProvider(_jsx(PhoneNumberInput, __assign({}, props)), {}, initialValues);
                    // Gets title of the flag SVG
                    expect(screen.getByTitle('New Zealand')).toBeInTheDocument();
                    expect(screen.queryByText('New Zealand +64')).not.toBeInTheDocument(); // The first option
                    expect(screen.queryByText('Ascension Island +247')).not.toBeInTheDocument(); // Another option
                    selectEvent.openMenu(screen.getByTitle('New Zealand'));
                    expect(screen.getAllByText('New Zealand +64')[0]).toBeInTheDocument(); // The first option
                    button = screen.getByText('Ascension Island +247') // Another option
                    ;
                    expect(button).toBeInTheDocument();
                    userEvent.click(button);
                    // Gets title of the flag SVG
                    return [4 /*yield*/, waitFor(function () {
                            expect(screen.getByTitle('New Zealand')).toBeInTheDocument();
                        })];
                case 1:
                    // Gets title of the flag SVG
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('updates the value with the correct formatting when the user types a phone number', function () { return __awaiter(void 0, void 0, void 0, function () {
        var telInput;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    renderWithFormDataProvider(_jsx(PhoneNumberInput, __assign({}, props)), {}, initialValues);
                    telInput = screen.getByRole('textbox');
                    expect(telInput).toBeInTheDocument();
                    userEvent.type(telInput, '0211234567');
                    return [4 /*yield*/, waitFor(function () {
                            expect(telInput.value).toBe('021 123 4567');
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=PhoneNumberInput.test.js.map