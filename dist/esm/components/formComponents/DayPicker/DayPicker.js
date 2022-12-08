import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import moment from 'moment';
import { useEffect, useMemo, useState } from 'react';
import { DayPickerSingleDateController } from 'react-dates';
import { useErrors } from '../../../hooks/useErrors';
import CaretIcon from '../../../images/icons/CaretIcon';
import { getValidationFunction } from '../../../utils/fieldValidators';
import { API_DATE_FORMAT } from '../../../utils/utils';
import { useFormData } from '../../FormDataProvider';
import { FormGroupWrapper, LegendHelpText } from '..';
function NavButton(_a) {
    var next = _a.next;
    var className = next ? 'calendar__next' : 'calendar__prev';
    return (_jsx("div", __assign({ className: className }, { children: _jsx(CaretIcon, {}) })));
}
var defaultProps = {
    // day presentation and interaction related props
    enableOutsideDays: false,
    isDayBlocked: function () { return false; },
    isDayHighlighted: function () { return false; },
    isOutsideRange: function (day) {
        return (moment(day).isBefore(moment().subtract(1, 'months'), 'day') ||
            moment(day).isAfter(moment(), 'day'));
    },
    renderCalendarDay: undefined,
    renderDayContents: null,
    // calendar presentation and interaction related props
    firstDayOfWeek: 1,
    hideKeyboardShortcutsPanel: true,
    isRTL: false,
    keepOpenOnDateSelect: false,
    noBorder: true,
    numberOfMonths: 1,
    onOutsideClick: function () { },
    renderCalendarInfo: null,
    withPortal: false,
    // navigation related props
    navNext: _jsx(NavButton, { next: true }),
    navPrev: _jsx(NavButton, { next: false }),
    onNextMonthClick: function () { },
    onPrevMonthClick: function () { },
    renderNavNextButton: null,
    renderNavPrevButton: null,
    // internationalization
    monthFormat: 'MMMM YYYY',
    weekDayFormat: 'ddd'
};
export default function DayPicker(_a) {
    var children = _a.children, input = _a.input;
    var name = input.linkIdWithParent || '';
    var _b = useFormData(), getFormValue = _b.getFormValue, setFormValue = _b.setFormValue, formData = _b.formData;
    var _c = useErrors({
        fieldName: name,
        inputValidateField: getValidationFunction(input)
    }), error = _c.error, isInvalid = _c.isInvalid, validateField = _c.validateField;
    var _d = useState(true), focused = _d[0], setFocused = _d[1];
    var handleDateChange = function (newDate) {
        setFormValue(name, newDate.format(API_DATE_FORMAT));
        validateField(newDate.format(API_DATE_FORMAT), true);
    };
    var handleFocusChange = function () {
        setFocused(!focused);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    var dateValue = useMemo(function () { return getFormValue(name); }, [name, formData]);
    useEffect(function () {
        return function () {
            validateField(undefined, true, true);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (_jsx(FormGroupWrapper, __assign({ error: error, isInvalid: isInvalid, input: input, fieldName: name }, { children: _jsxs("div", __assign({ id: name }, { children: [_jsxs("fieldset", __assign({ "aria-labelledby": "".concat(name, "Label") }, { children: [_jsx(LegendHelpText, { isInvalid: isInvalid, input: input, name: name, isFieldSet: true }), _jsx(DayPickerSingleDateController, __assign({}, defaultProps, { date: dateValue ? moment(dateValue) : null, focused: focused, initialVisibleMonth: function () {
                                return dateValue ? moment(getFormValue(name)) : moment();
                            }, onDateChange: handleDateChange, onFocusChange: handleFocusChange }))] })), children ? children(handleDateChange) : null] })) })));
}
//# sourceMappingURL=DayPicker.js.map