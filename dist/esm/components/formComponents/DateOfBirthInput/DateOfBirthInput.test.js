import { __assign, __awaiter, __generator } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
/* eslint-disable no-underscore-dangle */
import { renderWithFormDataProvider } from '../../../testHelpers/componentWrappers';
import { screen, userEvent } from '../../../testHelpers/testUtils';
import { Questionnaire_ItemTypeKind } from '../../../types/fhir';
import { DateOfBirthInput } from '..';
function enterDateByParts(day, month, year) {
    return __awaiter(this, void 0, void 0, function () {
        var dayInput, monthInput, yearInput;
        return __generator(this, function (_a) {
            dayInput = screen.getByLabelText('Day');
            dayInput.focus();
            userEvent.type(dayInput, day);
            monthInput = screen.getByLabelText('Month');
            monthInput.focus();
            userEvent.type(monthInput, month);
            yearInput = screen.getByLabelText('Year');
            yearInput.focus();
            userEvent.type(yearInput, year);
            yearInput.blur();
            return [2 /*return*/];
        });
    });
}
function enterDate(date) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, enterDateByParts(date.getDate().toString(), (date.getMonth() + 1).toString(), date.getFullYear().toString())];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
describe("DateInput", function () {
    var props;
    beforeEach(function () {
        props = {
            input: {
                linkId: 'step4.input19a',
                prefix: 'step4.input19a.',
                text: 'Date of birth test:',
                required: true,
                type: Questionnaire_ItemTypeKind._date,
                extension: [
                    {
                        url: 'http://hl7.org/fhir/StructureDefinition/date-of-birth',
                        id: 'dateOfBirthExtension'
                    }
                ]
            }
        };
    });
    it("renders the date text, and the inputs", function () {
        renderWithFormDataProvider(_jsx(DateOfBirthInput, __assign({}, props)));
        var dateInput = screen.getByText('Date of birth test:');
        expect(dateInput).toBeInTheDocument();
        var dayInput = screen.getByLabelText('Day');
        expect(dayInput).toBeInTheDocument();
        expect(screen.getByText('Day')).toBeInTheDocument();
        var monthInput = screen.getByLabelText('Month');
        expect(monthInput).toBeInTheDocument();
        expect(screen.getByText('Month')).toBeInTheDocument();
        var yearInput = screen.getByLabelText('Year');
        expect(yearInput).toBeInTheDocument();
        expect(screen.getByText('Year')).toBeInTheDocument();
    });
    it("prevents entering an day larger than 31", function () {
        renderWithFormDataProvider(_jsx(DateOfBirthInput, __assign({}, props)));
        var dayInput = screen.getByLabelText('Day');
        expect(dayInput).toBeInTheDocument();
        dayInput.focus();
        userEvent.type(dayInput, '32');
        dayInput.blur();
        expect(dayInput.value).toEqual('3');
    });
    it("prevents entering an month larger than 12", function () {
        renderWithFormDataProvider(_jsx(DateOfBirthInput, __assign({}, props)));
        var monthInput = screen.getByLabelText('Month');
        expect(monthInput).toBeInTheDocument();
        monthInput.focus();
        userEvent.type(monthInput, '22');
        monthInput.blur();
        expect(monthInput.value).toEqual('2');
    });
    it("renders error message when the year is too short", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    renderWithFormDataProvider(_jsx(DateOfBirthInput, __assign({}, props)));
                    return [4 /*yield*/, enterDateByParts('01', '01', '10')];
                case 1:
                    _a.sent();
                    expect(screen.getByText('Error, please enter the date of birth year')).toBeInTheDocument();
                    return [2 /*return*/];
            }
        });
    }); });
    it("renders error message when the day is invalid", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    renderWithFormDataProvider(_jsx(DateOfBirthInput, __assign({}, props)));
                    return [4 /*yield*/, enterDateByParts('31', '2', '2001')];
                case 1:
                    _a.sent();
                    expect(screen.getByText('Error, enter a valid date of birth')).toBeInTheDocument();
                    return [2 /*return*/];
            }
        });
    }); });
    it("does not render an error message when the date is today", function () { return __awaiter(void 0, void 0, void 0, function () {
        var today;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    renderWithFormDataProvider(_jsx(DateOfBirthInput, __assign({}, props)));
                    today = new Date();
                    return [4 /*yield*/, enterDate(today)];
                case 1:
                    _a.sent();
                    expect(screen.queryByText('Error, select a valid date')).toBe(null);
                    return [2 /*return*/];
            }
        });
    }); });
    it("renders error message when the date is more than 100 years old", function () { return __awaiter(void 0, void 0, void 0, function () {
        var lastCentury, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    renderWithFormDataProvider(_jsx(DateOfBirthInput, __assign({}, props)));
                    lastCentury = new Date();
                    lastCentury.setFullYear(lastCentury.getFullYear() - 121);
                    return [4 /*yield*/, enterDate(lastCentury)];
                case 1:
                    _b.sent();
                    _a = expect;
                    return [4 /*yield*/, screen.findByText('Error, select a valid date')];
                case 2:
                    _a.apply(void 0, [_b.sent()]).toBeInTheDocument();
                    return [2 /*return*/];
            }
        });
    }); });
    it("renders error message when the date is after today", function () { return __awaiter(void 0, void 0, void 0, function () {
        var tomorrow, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    renderWithFormDataProvider(_jsx(DateOfBirthInput, __assign({}, props)));
                    tomorrow = new Date();
                    tomorrow.setDate(tomorrow.getDate() + 1);
                    return [4 /*yield*/, enterDate(tomorrow)];
                case 1:
                    _b.sent();
                    _a = expect;
                    return [4 /*yield*/, screen.findByText('Error, select a valid date')];
                case 2:
                    _a.apply(void 0, [_b.sent()]).toBeInTheDocument();
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=DateOfBirthInput.test.js.map