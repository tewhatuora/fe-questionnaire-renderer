"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var moment_1 = tslib_1.__importDefault(require("moment"));
var react_1 = require("react");
var react_dates_1 = require("react-dates");
var useErrors_1 = require("../../../hooks/useErrors");
var CaretIcon_1 = tslib_1.__importDefault(require("../../../images/icons/CaretIcon"));
var fieldValidators_1 = require("../../../utils/fieldValidators");
var utils_1 = require("../../../utils/utils");
var FormDataProvider_1 = require("../../FormDataProvider");
var __1 = require("..");
function NavButton(_a) {
    var next = _a.next;
    var className = next ? 'calendar__next' : 'calendar__prev';
    return ((0, jsx_runtime_1.jsx)("div", tslib_1.__assign({ className: className }, { children: (0, jsx_runtime_1.jsx)(CaretIcon_1.default, {}) })));
}
var defaultProps = {
    // day presentation and interaction related props
    enableOutsideDays: false,
    isDayBlocked: function () { return false; },
    isDayHighlighted: function () { return false; },
    isOutsideRange: function (day) {
        return ((0, moment_1.default)(day).isBefore((0, moment_1.default)().subtract(1, 'months'), 'day') ||
            (0, moment_1.default)(day).isAfter((0, moment_1.default)(), 'day'));
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
    navNext: (0, jsx_runtime_1.jsx)(NavButton, { next: true }),
    navPrev: (0, jsx_runtime_1.jsx)(NavButton, { next: false }),
    onNextMonthClick: function () { },
    onPrevMonthClick: function () { },
    renderNavNextButton: null,
    renderNavPrevButton: null,
    // internationalization
    monthFormat: 'MMMM YYYY',
    weekDayFormat: 'ddd'
};
function DayPicker(_a) {
    var children = _a.children, input = _a.input;
    var name = input.linkIdWithParent || '';
    var _b = (0, FormDataProvider_1.useFormData)(), getFormValue = _b.getFormValue, setFormValue = _b.setFormValue, formData = _b.formData;
    var _c = (0, useErrors_1.useErrors)({
        fieldName: name,
        inputValidateField: (0, fieldValidators_1.getValidationFunction)(input)
    }), error = _c.error, isInvalid = _c.isInvalid, validateField = _c.validateField;
    var _d = (0, react_1.useState)(true), focused = _d[0], setFocused = _d[1];
    var handleDateChange = function (newDate) {
        setFormValue(name, newDate.format(utils_1.API_DATE_FORMAT));
        validateField(newDate.format(utils_1.API_DATE_FORMAT), true);
    };
    var handleFocusChange = function () {
        setFocused(!focused);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    var dateValue = (0, react_1.useMemo)(function () { return getFormValue(name); }, [name, formData]);
    (0, react_1.useEffect)(function () {
        return function () {
            validateField(undefined, true, true);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return ((0, jsx_runtime_1.jsx)(__1.FormGroupWrapper, tslib_1.__assign({ error: error, isInvalid: isInvalid, input: input, fieldName: name }, { children: (0, jsx_runtime_1.jsxs)("div", tslib_1.__assign({ id: name }, { children: [(0, jsx_runtime_1.jsxs)("fieldset", tslib_1.__assign({ "aria-labelledby": "".concat(name, "Label") }, { children: [(0, jsx_runtime_1.jsx)(__1.LegendHelpText, { isInvalid: isInvalid, input: input, name: name, isFieldSet: true }), (0, jsx_runtime_1.jsx)(react_dates_1.DayPickerSingleDateController, tslib_1.__assign({}, defaultProps, { date: dateValue ? (0, moment_1.default)(dateValue) : null, focused: focused, initialVisibleMonth: function () {
                                return dateValue ? (0, moment_1.default)(getFormValue(name)) : (0, moment_1.default)();
                            }, onDateChange: handleDateChange, onFocusChange: handleFocusChange }))] })), children ? children(handleDateChange) : null] })) })));
}
exports.default = DayPicker;
//# sourceMappingURL=DayPicker.js.map