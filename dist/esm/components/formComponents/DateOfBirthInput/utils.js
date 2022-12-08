export function createDefaultInput(value) {
    return { value: value || '', touched: false };
}
export function getInitialValues(initialValue) {
    var splitValues = initialValue === null || initialValue === void 0 ? void 0 : initialValue.split('/');
    return {
        day: createDefaultInput(splitValues === null || splitValues === void 0 ? void 0 : splitValues[0]),
        month: createDefaultInput(splitValues === null || splitValues === void 0 ? void 0 : splitValues[1]),
        year: createDefaultInput(splitValues === null || splitValues === void 0 ? void 0 : splitValues[2])
    };
}
export function dayMax(month, year) {
    var currentYear = new Date().getFullYear().toString();
    if (month === '') {
        return 31;
    }
    // if no year - assume this year
    var fallbackYear = year && year.length > 3 ? year : currentYear;
    return new Date(+fallbackYear, +month, 0).getDate();
}
export function dateFromParts(day, month, year) {
    if (day.length === 0 || month.length === 0 || year.length === 0)
        return '';
    var formattedDay = "".concat(day).length === 1 ? "0".concat(day) : day;
    var formattedMonth = "".concat(month).length === 1 ? "0".concat(month) : month;
    return "".concat(formattedDay, "/").concat(formattedMonth, "/").concat(year);
}
export function getError(fieldValue, fieldTouched, day, month, year) {
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
//# sourceMappingURL=utils.js.map