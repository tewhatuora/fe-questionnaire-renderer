"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateYear = exports.validateMonth = exports.validateDay = exports.validateDatePart = exports.useDateValidator = exports.validateDateWithinRange = void 0;
var tslib_1 = require("tslib");
var daytz_1 = tslib_1.__importDefault(require("../../../utils/daytz"));
var utils_1 = require("./utils");
function validateDateWithinRange(value) {
    if (!value)
        return undefined;
    var today = (0, daytz_1.default)(new Date());
    var fieldDate = (0, daytz_1.default)(value, 'DD/MM/YYYY');
    if (fieldDate.isAfter(today)) {
        return 'Error, select a valid date';
    }
    if (today.diff(fieldDate, 'year') > 120) {
        return 'Error, select a valid date';
    }
    return undefined;
}
exports.validateDateWithinRange = validateDateWithinRange;
function useDateValidator(dayError, monthError, yearError) {
    return function (date) {
        var error = validateDateWithinRange(date);
        if (error)
            return error;
        // fallback to date part errors
        return dayError || monthError || yearError;
    };
}
exports.useDateValidator = useDateValidator;
function validateDatePart(value, min, max) {
    if (+value < min)
        return true;
    return +value > max;
}
exports.validateDatePart = validateDatePart;
function validateDay(day, month, year, required) {
    var isRequired = required || !!month || !!year;
    var maxDay = (0, utils_1.dayMax)(month, year);
    if (!day)
        return isRequired ? 'Error, please enter the date of birth day' : undefined;
    if (validateDatePart(day, 1, maxDay))
        return 'Error, enter a valid date of birth';
    return undefined;
}
exports.validateDay = validateDay;
function validateMonth(day, month, year, required) {
    var isRequired = required || !!day || !!year;
    if (!month)
        return isRequired
            ? 'Error, please enter the date of birth month'
            : undefined;
    if (validateDatePart(month, 1, 12))
        return 'Error, please enter the date of birth month';
    return undefined;
}
exports.validateMonth = validateMonth;
function validateYear(day, month, year, required) {
    var isRequired = required || !!day || !!month;
    if (!year || year.length < 4)
        return isRequired ? 'Error, please enter the date of birth year' : undefined;
    return undefined;
}
exports.validateYear = validateYear;
//# sourceMappingURL=validation.js.map