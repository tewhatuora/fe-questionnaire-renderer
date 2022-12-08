import dayTz from '../../../utils/daytz';
import { dayMax } from './utils';
export function validateDateWithinRange(value) {
    if (!value)
        return undefined;
    var today = dayTz(new Date());
    var fieldDate = dayTz(value, 'DD/MM/YYYY');
    if (fieldDate.isAfter(today)) {
        return 'Error, select a valid date';
    }
    if (today.diff(fieldDate, 'year') > 120) {
        return 'Error, select a valid date';
    }
    return undefined;
}
export function useDateValidator(dayError, monthError, yearError) {
    return function (date) {
        var error = validateDateWithinRange(date);
        if (error)
            return error;
        // fallback to date part errors
        return dayError || monthError || yearError;
    };
}
export function validateDatePart(value, min, max) {
    if (+value < min)
        return true;
    return +value > max;
}
export function validateDay(day, month, year, required) {
    var isRequired = required || !!month || !!year;
    var maxDay = dayMax(month, year);
    if (!day)
        return isRequired ? 'Error, please enter the date of birth day' : undefined;
    if (validateDatePart(day, 1, maxDay))
        return 'Error, enter a valid date of birth';
    return undefined;
}
export function validateMonth(day, month, year, required) {
    var isRequired = required || !!day || !!year;
    if (!month)
        return isRequired
            ? 'Error, please enter the date of birth month'
            : undefined;
    if (validateDatePart(month, 1, 12))
        return 'Error, please enter the date of birth month';
    return undefined;
}
export function validateYear(day, month, year, required) {
    var isRequired = required || !!day || !!month;
    if (!year || year.length < 4)
        return isRequired ? 'Error, please enter the date of birth year' : undefined;
    return undefined;
}
//# sourceMappingURL=validation.js.map