"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useErrors = void 0;
var tslib_1 = require("tslib");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var FormDataProvider_1 = require("../components/FormDataProvider");
var FormErrorsProvider_1 = require("../components/FormErrorsProvider");
var FormTouchedProvider_1 = require("../components/FormTouchedProvider");
function useErrors(_a) {
    var _b;
    var fieldName = _a.fieldName, inputValidateField = _a.inputValidateField, _c = _a.useValidationOnMount, useValidationOnMount = _c === void 0 ? true : _c;
    var params = (0, react_router_dom_1.useParams)();
    var _d = (0, FormDataProvider_1.useFormData)(), getFormValue = _d.getFormValue, formData = _d.formData;
    var _e = (0, FormErrorsProvider_1.useFormErrors)(), formErrors = _e.formErrors, setFormError = _e.setFormError;
    var formTouched = (0, FormTouchedProvider_1.useFormTouched)().formTouched;
    var formValue = getFormValue(fieldName || '');
    var error = (_b = formErrors.find(function (e) { return e.name === fieldName; })) === null || _b === void 0 ? void 0 : _b.message;
    function validateField(value, setError, resetError, additionalProps) {
        if (resetError && fieldName) {
            setFormError(fieldName, '', false);
            return;
        }
        if (inputValidateField) {
            var val = inputValidateField(tslib_1.__assign({ value: value !== undefined ? value : formValue, fieldName: fieldName, formData: formData, params: params }, additionalProps));
            if (setError && fieldName) {
                setFormError(fieldName || '', val || '', !!val);
            }
            return val;
        }
        return undefined;
    }
    var memoized = (0, react_1.useMemo)(function () {
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
    (0, react_1.useEffect)(function () {
        if (!useValidationOnMount)
            return;
        if (!error && inputValidateField && validateField()) {
            validateField(undefined, true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [error]);
    return tslib_1.__assign(tslib_1.__assign({}, memoized), { validateField: validateField });
}
exports.useErrors = useErrors;
//# sourceMappingURL=useErrors.js.map