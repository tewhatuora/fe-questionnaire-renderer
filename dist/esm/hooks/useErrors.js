import { __assign } from "tslib";
import { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useFormData } from '../components/FormDataProvider';
import { useFormErrors } from '../components/FormErrorsProvider';
import { useFormTouched } from '../components/FormTouchedProvider';
export function useErrors(_a) {
    var _b;
    var fieldName = _a.fieldName, inputValidateField = _a.inputValidateField, _c = _a.useValidationOnMount, useValidationOnMount = _c === void 0 ? true : _c;
    var params = useParams();
    var _d = useFormData(), getFormValue = _d.getFormValue, formData = _d.formData;
    var _e = useFormErrors(), formErrors = _e.formErrors, setFormError = _e.setFormError;
    var formTouched = useFormTouched().formTouched;
    var formValue = getFormValue(fieldName || '');
    var error = (_b = formErrors.find(function (e) { return e.name === fieldName; })) === null || _b === void 0 ? void 0 : _b.message;
    function validateField(value, setError, resetError, additionalProps) {
        if (resetError && fieldName) {
            setFormError(fieldName, '', false);
            return;
        }
        if (inputValidateField) {
            var val = inputValidateField(__assign({ value: value !== undefined ? value : formValue, fieldName: fieldName, formData: formData, params: params }, additionalProps));
            if (setError && fieldName) {
                setFormError(fieldName || '', val || '', !!val);
            }
            return val;
        }
        return undefined;
    }
    var memoized = useMemo(function () {
        var touchedPaths = formTouched.map(function (ft) { return ft.name; });
        var hasError = !!formErrors.find(function (e) { return e.name === fieldName; });
        var touch = touchedPaths.find(function (t) { return t === fieldName; });
        var isInvalid = !!(hasError && touch);
        return {
            error: error,
            formErrors: formErrors,
            formValue: formValue,
            hasError: hasError,
            isInvalid: isInvalid,
            touched: !!touch,
            touchedPaths: touchedPaths
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formErrors, formTouched, fieldName, error, formValue]);
    // Validation on mount
    useEffect(function () {
        if (!useValidationOnMount)
            return;
        if (!error && inputValidateField && validateField()) {
            validateField(undefined, true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [error]);
    return __assign(__assign({}, memoized), { validateField: validateField });
}
//# sourceMappingURL=useErrors.js.map