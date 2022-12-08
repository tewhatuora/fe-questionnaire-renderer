import { __assign } from "tslib";
import { useCallback, useState } from 'react';
import { useFormData } from '../../FormDataProvider';
import { getInitialValues } from './utils';
import { validateDay, validateMonth, validateYear } from './validation';
// eslint-disable-next-line @typescript-eslint/ban-types
function usePartialUpdate(setState) {
    return useCallback(function (newState) {
        return setState(function (oldState) { return (__assign(__assign({}, oldState), newState)); });
    }, [setState]);
}
export function useDateState(initialValue) {
    var _a = useState(initialValue), datePart = _a[0], setDatePart = _a[1];
    var updateDatePart = usePartialUpdate(setDatePart);
    return [datePart, updateDatePart];
}
export function useSplitDate(name, isRequired) {
    var getFormValue = useFormData().getFormValue;
    var initialValues = getInitialValues(getFormValue(name));
    var _a = useDateState(initialValues.day), day = _a[0], setDay = _a[1];
    var _b = useDateState(initialValues.month), month = _b[0], setMonth = _b[1];
    var _c = useDateState(initialValues.year), year = _c[0], setYear = _c[1];
    var dayError = validateDay(day.value, month.value, year.value, isRequired);
    var monthError = validateMonth(day.value, month.value, year.value, isRequired);
    var yearError = validateYear(day.value, month.value, year.value, isRequired);
    return {
        day: __assign(__assign({}, day), { error: dayError }),
        setDay: setDay,
        month: __assign(__assign({}, month), { error: monthError }),
        setMonth: setMonth,
        year: __assign(__assign({}, year), { error: yearError }),
        setYear: setYear
    };
}
//# sourceMappingURL=useSplitDate.js.map