"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_select_event_1 = tslib_1.__importDefault(require("react-select-event"));
var componentWrappers_1 = require("../../../testHelpers/componentWrappers");
var testUtils_1 = require("../../../testHelpers/testUtils");
var __1 = require("..");
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
        (0, componentWrappers_1.renderWithFormDataProvider)((0, jsx_runtime_1.jsx)(__1.PhoneNumberInput, tslib_1.__assign({}, props)), {}, initialValues);
        // Country select input - gets title of the flag SVG
        expect(testUtils_1.screen.getByTitle('New Zealand')).toBeInTheDocument();
        expect(testUtils_1.screen.queryByText('New Zealand +64')).not.toBeInTheDocument(); // The first option
        expect(testUtils_1.screen.queryByText('Australia +61')).not.toBeInTheDocument(); // Another option
        react_select_event_1.default.openMenu(testUtils_1.screen.getByTitle('New Zealand'));
        expect(testUtils_1.screen.getAllByText('New Zealand +64')[0]).toBeInTheDocument(); // The first option
        expect(testUtils_1.screen.getByText('Ascension Island +247')).toBeInTheDocument(); // Another option
        // Tel input & label. Fieldset so has 2 different inputs
        expect(testUtils_1.screen.getAllByLabelText('Phone number')).toHaveLength(2);
    });
    it('allows the user to select a different country calling code', function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var button;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    (0, componentWrappers_1.renderWithFormDataProvider)((0, jsx_runtime_1.jsx)(__1.PhoneNumberInput, tslib_1.__assign({}, props)), {}, initialValues);
                    // Gets title of the flag SVG
                    expect(testUtils_1.screen.getByTitle('New Zealand')).toBeInTheDocument();
                    expect(testUtils_1.screen.queryByText('New Zealand +64')).not.toBeInTheDocument(); // The first option
                    expect(testUtils_1.screen.queryByText('Ascension Island +247')).not.toBeInTheDocument(); // Another option
                    react_select_event_1.default.openMenu(testUtils_1.screen.getByTitle('New Zealand'));
                    expect(testUtils_1.screen.getAllByText('New Zealand +64')[0]).toBeInTheDocument(); // The first option
                    button = testUtils_1.screen.getByText('Ascension Island +247') // Another option
                    ;
                    expect(button).toBeInTheDocument();
                    testUtils_1.userEvent.click(button);
                    // Gets title of the flag SVG
                    return [4 /*yield*/, (0, testUtils_1.waitFor)(function () {
                            expect(testUtils_1.screen.getByTitle('New Zealand')).toBeInTheDocument();
                        })];
                case 1:
                    // Gets title of the flag SVG
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('updates the value with the correct formatting when the user types a phone number', function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var telInput;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    (0, componentWrappers_1.renderWithFormDataProvider)((0, jsx_runtime_1.jsx)(__1.PhoneNumberInput, tslib_1.__assign({}, props)), {}, initialValues);
                    telInput = testUtils_1.screen.getByRole('textbox');
                    expect(telInput).toBeInTheDocument();
                    testUtils_1.userEvent.type(telInput, '0211234567');
                    return [4 /*yield*/, (0, testUtils_1.waitFor)(function () {
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