import { createDefaultInput, dateFromParts, dayMax, getError, getInitialValues } from './utils';
describe('createDefaultInput', function () {
    it('creates default input from a value', function () {
        var defaultInput = createDefaultInput('test');
        expect(defaultInput.value).toBe('test');
        expect(defaultInput.touched).toBe(false);
    });
    it('creates default input from an empty value', function () {
        var defaultInput = createDefaultInput('');
        expect(defaultInput.value).toBe('');
        expect(defaultInput.touched).toBe(false);
    });
    it('creates default input from an undefined value', function () {
        var defaultInput = createDefaultInput(undefined);
        expect(defaultInput.value).toBe('');
        expect(defaultInput.touched).toBe(false);
    });
});
describe('getInitialValues', function () {
    it('creates initial values from an initial value', function () {
        var initialValues = getInitialValues('1/2/3');
        expect(initialValues.day.value).toBe('1');
        expect(initialValues.month.value).toBe('2');
        expect(initialValues.year.value).toBe('3');
    });
    it('creates initial values from a long initial value', function () {
        var initialValues = getInitialValues('1000/2000/3000');
        expect(initialValues.day.value).toBe('1000');
        expect(initialValues.month.value).toBe('2000');
        expect(initialValues.year.value).toBe('3000');
    });
    it('creates initial values from an undefined initial value', function () {
        var initialValues = getInitialValues(undefined);
        expect(initialValues.day.value).toBe('');
        expect(initialValues.month.value).toBe('');
        expect(initialValues.year.value).toBe('');
    });
    it('creates initial values from a malformed initial value', function () {
        var initialValues = getInitialValues('1/2');
        expect(initialValues.day.value).toBe('1');
        expect(initialValues.month.value).toBe('2');
        expect(initialValues.year.value).toBe('');
    });
});
describe('dayMax', function () {
    var leapYear = '2000';
    var nonLeapYear = '2001';
    it('returns the correct maxDays on a non leap-year', function () {
        var maxDayJan = dayMax("1", nonLeapYear);
        expect(maxDayJan).toBe(31);
        var maxDayFeb = dayMax("2", nonLeapYear);
        expect(maxDayFeb).toBe(28);
        var maxDayMar = dayMax("3", nonLeapYear);
        expect(maxDayMar).toBe(31);
        var maxDayApr = dayMax("4", nonLeapYear);
        expect(maxDayApr).toBe(30);
        var maxDayMay = dayMax("5", nonLeapYear);
        expect(maxDayMay).toBe(31);
        var maxDayJun = dayMax("6", nonLeapYear);
        expect(maxDayJun).toBe(30);
        var maxDayJul = dayMax("7", nonLeapYear);
        expect(maxDayJul).toBe(31);
        var maxDayAug = dayMax("8", nonLeapYear);
        expect(maxDayAug).toBe(31);
        var maxDaySep = dayMax("9", nonLeapYear);
        expect(maxDaySep).toBe(30);
        var maxDayOct = dayMax("10", nonLeapYear);
        expect(maxDayOct).toBe(31);
        var maxDayNov = dayMax("11", nonLeapYear);
        expect(maxDayNov).toBe(30);
        var maxDayDec = dayMax("12", nonLeapYear);
        expect(maxDayDec).toBe(31);
    });
    it('returns the correct maxDays on a leap-year', function () {
        var maxDayFeb = dayMax("2", leapYear);
        expect(maxDayFeb).toBe(29);
    });
    it('always retun 31 for an unset month', function () {
        var maxDay = dayMax('', leapYear);
        var maxDayLeapYear = dayMax('', nonLeapYear);
        expect(maxDay).toBe(31);
        expect(maxDayLeapYear).toBe(31);
    });
});
describe('dateFromParts', function () {
    it('creates date from parts', function () {
        var date = dateFromParts('01', '02', '0003');
        expect(date).toBe('01/02/0003');
    });
    it('pads values', function () {
        var date = dateFromParts('1', '2', '3');
        expect(date).toBe('01/02/3');
    });
    it('creates an empty date if an values missing', function () {
        var missingDay = dateFromParts('', '2', '3');
        expect(missingDay).toBe('');
        var missingMonth = dateFromParts('1', '', '3');
        expect(missingMonth).toBe('');
        var missingYear = dateFromParts('1', '2', '');
        expect(missingYear).toBe('');
    });
});
describe('getError', function () {
    var errorTouched = {
        value: '',
        touched: true,
        error: 'ErrorTouched'
    };
    var errorUntouched = {
        value: '',
        touched: false,
        error: 'ErrorUntouched'
    };
    it('only gets touched errors', function () {
        var noError = getError('fieldError', false, errorUntouched, errorUntouched, errorUntouched);
        expect(noError.source).toBe('none');
        var oneError = getError('fieldError', false, errorUntouched, errorTouched, errorUntouched);
        expect(oneError.source).toBe('month');
    });
    it('gets errors in order', function () {
        var dayError = getError('fieldError', true, errorTouched, errorTouched, errorTouched);
        expect(dayError.source).toBe('day');
        var monthError = getError('fieldError', true, errorUntouched, errorTouched, errorTouched);
        expect(monthError.source).toBe('month');
        var yearError = getError('fieldError', true, errorUntouched, errorUntouched, errorTouched);
        expect(yearError.source).toBe('year');
        var fieldError = getError('fieldError', true, errorUntouched, errorUntouched, errorUntouched);
        expect(fieldError.source).toBe('field');
    });
});
//# sourceMappingURL=utils.test.js.map