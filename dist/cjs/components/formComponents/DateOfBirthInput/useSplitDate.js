"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSplitDate = exports.useDateState = void 0;
var tslib_1 = require("tslib");
var react_1 = require("react");
var FormDataProvider_1 = require("../../FormDataProvider");
var utils_1 = require("./utils");
var validation_1 = require("./validation");
// eslint-disable-next-line @typescript-eslint/ban-types
function usePartialUpdate(setState) {
    return (0, react_1.useCallback)(function (newState) {
        return setState(function (oldState) { return (tslib_1.__assign(tslib_1.__assign({}, oldState), newState)); });
    }, [setState]);
}
function useDateState(initialValue) {
    var _a = (0, react_1.useState)(initialValue), datePart = _a[0], setDatePart = _a[1];
    var updateDatePart = usePartialUpdate(setDatePart);
    return [datePart, updateDatePart];
}
exports.useDateState = useDateState;
function useSplitDate(name, isRequired) {
    var getFormValue = (0, FormDataProvider_1.useFormData)().getFormValue;
    var initialValues = (0, utils_1.getInitialValues)(getFormValue(name));
    var _a = useDateState(initialValues.day), day = _a[0], setDay = _a[1];
    var _b = useDateState(initialValues.month), month = _b[0], setMonth = _b[1];
    var _c = useDateState(initialValues.year), year = _c[0], setYear = _c[1];
    var dayError = (0, validation_1.validateDay)(day.value, month.value, year.value, isRequired);
    var monthError = (0, validation_1.validateMonth)(day.value, month.value, year.value, isRequired);
    var yearError = (0, validation_1.validateYear)(day.value, month.value, year.value, isRequired);
    return {
        day: tslib_1.__assign(tslib_1.__assign({}, day), { error: dayError }),
        setDay: setDay,
        month: tslib_1.__assign(tslib_1.__assign({}, month), { error: monthError }),
        setMonth: setMonth,
        year: tslib_1.__assign(tslib_1.__assign({}, year), { error: yearError }),
        setYear: setYear
    };
}
exports.useSplitDate = useSplitDate;
//# sourceMappingURL=useSplitDate.js.map