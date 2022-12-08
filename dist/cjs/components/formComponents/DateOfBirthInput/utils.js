"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getError = exports.dateFromParts = exports.dayMax = exports.getInitialValues = exports.createDefaultInput = void 0;
function createDefaultInput(value) {
    return { value: value || '', touched: false };
}
exports.createDefaultInput = createDefaultInput;
function getInitialValues(initialValue) {
    var splitValues = initialValue === null || initialValue === void 0 ? void 0 : initialValue.split('/');
    return {
        day: createDefaultInput(splitValues === null || splitValues === void 0 ? void 0 : splitValues[0]),
        month: createDefaultInput(splitValues === null || splitValues === void 0 ? void 0 : splitValues[1]),
        year: createDefaultInput(splitValues === null || splitValues === void 0 ? void 0 : splitValues[2])
    };
}
exports.getInitialValues = getInitialValues;
function dayMax(month, year) {
    var currentYear = new Date().getFullYear().toString();
    if (month === '') {
        return 31;
    }
    // if no year - assume this year
    var fallbackYear = year && year.length > 3 ? year : currentYear;
    return new Date(+fallbackYear, +month, 0).getDate();
}
exports.dayMax = dayMax;
function dateFromParts(day, month, year) {
    if (day.length === 0 || month.length === 0 || year.length === 0)
        return '';
    var formattedDay = "".concat(day).length === 1 ? "0".concat(day) : day;
    var formattedMonth = "".concat(month).length === 1 ? "0".concat(month) : month;
    return "".concat(formattedDay, "/").concat(formattedMonth, "/").concat(year);
}
exports.dateFromParts = dateFromParts;
function getError(fieldValue, fieldTouched, day, month, year) {
    if (day.touched && !!day.error)
        return { source: 'day', message: day.error };
    if (month.touched && !!month.error)
        return { source: 'month', message: month.error };
    if (year.touched && !!year.error)
        return { source: 'year', message: year.error };
    if (fieldTouched && !!fieldValue)
        return { source: 'field', message: fieldValue };
    return { source: 'none', message: undefined };
}
exports.getError = getError;
//# sourceMappingURL=utils.js.map