import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
import { useFormData } from '../../FormDataProvider';
import { useFormErrors } from '../../FormErrorsProvider';
import { useFormTouched } from '../../FormTouchedProvider';
import FormGroupWrapper from '../FormGroupWrapper/index';
import LegendHelpText from '../LegendHelpText/index';
import DateOfBirthSplit from './DateOfBirthSplit';
import { useSplitDate } from './useSplitDate';
import { dateFromParts, getError } from './utils';
import { useDateValidator } from './validation';
export default function DateInput(_a) {
    var _b;
    var input = _a.input, touchedAuthentication = _a.touchedAuthentication;
    var name = input.linkIdWithParent || '';
    var isRequired = !!input.required;
    var setFormValue = useFormData().setFormValue;
    var _c = useFormErrors(), formErrors = _c.formErrors, setFormError = _c.setFormError;
    var _d = useFormTouched(), formTouched = _d.formTouched, setFormTouched = _d.setFormTouched;
    var _e = useSplitDate(name, isRequired), day = _e.day, setDay = _e.setDay, month = _e.month, setMonth = _e.setMonth, year = _e.year, setYear = _e.setYear;
    var monthInputRef = useRef(null);
    var yearInputRef = useRef(null);
    var validate = useDateValidator(day.error, month.error, year.error);
    var dateValue = dateFromParts(day.value, month.value, year.value);
    var touched = !!formTouched.find(function (ft) { return ft.name === name; });
    var mainError = (_b = formErrors.find(function (e) { return e.name === name; })) === null || _b === void 0 ? void 0 : _b.message;
    var error = getError(mainError, touched, day, month, year);
    useEffect(function () {
        // validate date on mount
        // we need a required error on mount for the next-button validation to work
        var validation = validate(dateValue);
        setFormError(name, validation || '', !!validate);
        // Removes error and touched on unmount
        return function () {
            setFormError(name, '', false);
            if (formTouched.find(function (ft) { return ft.name === name; })) {
                setFormTouched(name, false);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(function () {
        var validation = validate(dateValue);
        setFormValue(name, dateValue);
        setFormError(name, validation || '', !!validate);
        // revalidate if date parts have changed - this will set new errors based on date parts
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dateValue, day.value, month.value, year.value]);
    useEffect(function () {
        if (touchedAuthentication) {
            setDay({ touched: true });
            setMonth({ touched: true });
            setYear({ touched: true });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [touchedAuthentication]);
    useEffect(function () {
        var partsTouched = day.touched && month.touched && year.touched;
        if (partsTouched && !touched) {
            // don't validate on touch - we revalidate when the value changes
            // if we validate on touch it can use outdated values
            // timeout makes sure touched will update AFTER validation has been run on value updates
            // This is because if called in the same render Formik will update touched BEFORE the validation
            // it's too fast for users to see, but it can trigger other bugs i.e. Google Analytics events being fired
            setTimeout(function () { return setFormTouched(name, true); }, 10);
        }
        if ((touched || touchedAuthentication) && !partsTouched) {
            // touchedAuthentication is here because DoB on the authentication page is not part
            // of the main form. It touches split inputs when the user clicks on the login button
            setDay({ touched: true });
            setMonth({ touched: true });
            setYear({ touched: true });
        }
    }, [
        touchedAuthentication,
        touched,
        name,
        day.touched,
        month.touched,
        year.touched,
        setDay,
        setMonth,
        setYear,
        setFormTouched
    ]);
    var dayOnChangeHandler = function (e) {
        if (e.target.value.length <= 2 && +e.target.value <= 31) {
            setDay({ value: e.target.value });
        }
        if (e.target.value.length >= 2 ||
            (e.target.value.length >= 1 &&
                !['0', '1', '2', '3'].includes(e.target.value[0]))) {
            setDay({ touched: true });
            if (monthInputRef === null || monthInputRef === void 0 ? void 0 : monthInputRef.current)
                monthInputRef.current.focus();
        }
    };
    var monthOnChangeHandler = function (e) {
        if (e.target.value.length <= 2 && +e.target.value <= 12) {
            setMonth({ value: e.target.value });
        }
        if (e.target.value.length >= 2 ||
            (e.target.value.length === 1 && !['0', '1'].includes(e.target.value[0]))) {
            setMonth({ touched: true });
            if (yearInputRef === null || yearInputRef === void 0 ? void 0 : yearInputRef.current)
                yearInputRef.current.focus();
        }
    };
    var yearOnChangeHandler = function (e) {
        if (e.target.value.length <= 4) {
            setYear({ value: e.target.value });
        }
        if (e.target.value.length && e.target.value.length >= 4) {
            setYear({ touched: true });
        }
    };
    return (_jsx(FormGroupWrapper, __assign({ customDisplayError: !!error.message, customErrorMessage: error.message, fieldName: name, input: input, isInvalid: !!error.message }, { children: _jsxs(_Fragment, { children: [_jsx(LegendHelpText, { input: input, isInvalid: !!error.message, name: name }), _jsxs("div", __assign({ className: 'date-of-birth-inputs' }, { children: [_jsx(DateOfBirthSplit, { datePart: day, hasError: ['field', 'day'].includes(error === null || error === void 0 ? void 0 : error.source), label: 'Day', max: 31, min: 1, name: "".concat(name, ".day"), onChange: dayOnChangeHandler, placeholder: 'DD', required: isRequired, setDatePart: setDay }), _jsx(DateOfBirthSplit, { datePart: month, hasError: ['field', 'month'].includes(error === null || error === void 0 ? void 0 : error.source), label: 'Month', max: 12, min: 1, name: "".concat(name, ".month"), onChange: monthOnChangeHandler, placeholder: 'MM', ref: monthInputRef, required: isRequired, setDatePart: setMonth }), _jsx(DateOfBirthSplit, { datePart: year, hasError: ['field', 'year'].includes(error === null || error === void 0 ? void 0 : error.source), label: 'Year', min: 1900, name: "".concat(name, ".year"), onChange: yearOnChangeHandler, placeholder: 'YYYY', ref: yearInputRef, required: isRequired, setDatePart: setYear })] }))] }) })));
}
//# sourceMappingURL=DateOfBirthInput.js.map