"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable no-underscore-dangle */
var componentWrappers_1 = require("../../../testHelpers/componentWrappers");
var testUtils_1 = require("../../../testHelpers/testUtils");
var fhir_1 = require("../../../types/fhir");
var __1 = require("..");
function enterDateByParts(day, month, year) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var dayInput, monthInput, yearInput;
        return tslib_1.__generator(this, function (_a) {
            dayInput = testUtils_1.screen.getByLabelText('Day');
            dayInput.focus();
            testUtils_1.userEvent.type(dayInput, day);
            monthInput = testUtils_1.screen.getByLabelText('Month');
            monthInput.focus();
            testUtils_1.userEvent.type(monthInput, month);
            yearInput = testUtils_1.screen.getByLabelText('Year');
            yearInput.focus();
            testUtils_1.userEvent.type(yearInput, year);
            yearInput.blur();
            return [2 /*return*/];
        });
    });
}
function enterDate(date) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
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
                type: fhir_1.Questionnaire_ItemTypeKind._date,
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
        (0, componentWrappers_1.renderWithFormDataProvider)((0, jsx_runtime_1.jsx)(__1.DateOfBirthInput, tslib_1.__assign({}, props)));
        var dateInput = testUtils_1.screen.getByText('Date of birth test:');
        expect(dateInput).toBeInTheDocument();
        var dayInput = testUtils_1.screen.getByLabelText('Day');
        expect(dayInput).toBeInTheDocument();
        expect(testUtils_1.screen.getByText('Day')).toBeInTheDocument();
        var monthInput = testUtils_1.screen.getByLabelText('Month');
        expect(monthInput).toBeInTheDocument();
        expect(testUtils_1.screen.getByText('Month')).toBeInTheDocument();
        var yearInput = testUtils_1.screen.getByLabelText('Year');
        expect(yearInput).toBeInTheDocument();
        expect(testUtils_1.screen.getByText('Year')).toBeInTheDocument();
    });
    it("prevents entering an day larger than 31", function () {
        (0, componentWrappers_1.renderWithFormDataProvider)((0, jsx_runtime_1.jsx)(__1.DateOfBirthInput, tslib_1.__assign({}, props)));
        var dayInput = testUtils_1.screen.getByLabelText('Day');
        expect(dayInput).toBeInTheDocument();
        dayInput.focus();
        testUtils_1.userEvent.type(dayInput, '32');
        dayInput.blur();
        expect(dayInput.value).toEqual('3');
    });
    it("prevents entering an month larger than 12", function () {
        (0, componentWrappers_1.renderWithFormDataProvider)((0, jsx_runtime_1.jsx)(__1.DateOfBirthInput, tslib_1.__assign({}, props)));
        var monthInput = testUtils_1.screen.getByLabelText('Month');
        expect(monthInput).toBeInTheDocument();
        monthInput.focus();
        testUtils_1.userEvent.type(monthInput, '22');
        monthInput.blur();
        expect(monthInput.value).toEqual('2');
    });
    it("renders error message when the year is too short", function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    (0, componentWrappers_1.renderWithFormDataProvider)((0, jsx_runtime_1.jsx)(__1.DateOfBirthInput, tslib_1.__assign({}, props)));
                    return [4 /*yield*/, enterDateByParts('01', '01', '10')];
                case 1:
                    _a.sent();
                    expect(testUtils_1.screen.getByText('Error, please enter the date of birth year')).toBeInTheDocument();
                    return [2 /*return*/];
            }
        });
    }); });
    it("renders error message when the day is invalid", function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    (0, componentWrappers_1.renderWithFormDataProvider)((0, jsx_runtime_1.jsx)(__1.DateOfBirthInput, tslib_1.__assign({}, props)));
                    return [4 /*yield*/, enterDateByParts('31', '2', '2001')];
                case 1:
                    _a.sent();
                    expect(testUtils_1.screen.getByText('Error, enter a valid date of birth')).toBeInTheDocument();
                    return [2 /*return*/];
            }
        });
    }); });
    it("does not render an error message when the date is today", function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var today;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    (0, componentWrappers_1.renderWithFormDataProvider)((0, jsx_runtime_1.jsx)(__1.DateOfBirthInput, tslib_1.__assign({}, props)));
                    today = new Date();
                    return [4 /*yield*/, enterDate(today)];
                case 1:
                    _a.sent();
                    expect(testUtils_1.screen.queryByText('Error, select a valid date')).toBe(null);
                    return [2 /*return*/];
            }
        });
    }); });
    it("renders error message when the date is more than 100 years old", function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var lastCentury, _a;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    (0, componentWrappers_1.renderWithFormDataProvider)((0, jsx_runtime_1.jsx)(__1.DateOfBirthInput, tslib_1.__assign({}, props)));
                    lastCentury = new Date();
                    lastCentury.setFullYear(lastCentury.getFullYear() - 121);
                    return [4 /*yield*/, enterDate(lastCentury)];
                case 1:
                    _b.sent();
                    _a = expect;
                    return [4 /*yield*/, testUtils_1.screen.findByText('Error, select a valid date')];
                case 2:
                    _a.apply(void 0, [_b.sent()]).toBeInTheDocument();
                    return [2 /*return*/];
            }
        });
    }); });
    it("renders error message when the date is after today", function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var tomorrow, _a;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    (0, componentWrappers_1.renderWithFormDataProvider)((0, jsx_runtime_1.jsx)(__1.DateOfBirthInput, tslib_1.__assign({}, props)));
                    tomorrow = new Date();
                    tomorrow.setDate(tomorrow.getDate() + 1);
                    return [4 /*yield*/, enterDate(tomorrow)];
                case 1:
                    _b.sent();
                    _a = expect;
                    return [4 /*yield*/, testUtils_1.screen.findByText('Error, select a valid date')];
                case 2:
                    _a.apply(void 0, [_b.sent()]).toBeInTheDocument();
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=DateOfBirthInput.test.js.map