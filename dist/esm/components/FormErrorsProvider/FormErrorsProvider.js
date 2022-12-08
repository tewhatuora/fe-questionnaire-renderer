import { __assign, __spreadArray } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useMemo, useState } from 'react';
export var FormErrorsContext = createContext({});
export function FormErrorsProvider(_a) {
    var children = _a.children;
    var _b = useState([]), errors = _b[0], setErrors = _b[1];
    function resetErrors() {
        setErrors([]);
    }
    function setFormError(name, message, addError) {
        if (addError === void 0) { addError = true; }
        setErrors(function (prev) {
            var index = prev.findIndex(function (e) { return name === e.name; });
            if (addError) {
                if (index !== -1) {
                    return __spreadArray(__spreadArray(__spreadArray([], prev.slice(0, index), true), [
                        { name: name, message: message }
                    ], false), prev.slice(index + 1), true);
                }
                return __spreadArray(__spreadArray([], prev, true), [
                    {
                        name: name,
                        message: message
                    }
                ], false);
            }
            if (index !== -1) {
                return __spreadArray(__spreadArray([], prev.slice(0, index), true), prev.slice(index + 1), true);
            }
            return prev;
        });
    }
    var memoisedValue = useMemo(function () { return ({
        formErrors: errors,
        resetErrors: resetErrors,
        setFormError: setFormError
    }); }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [errors]);
    return (_jsx(FormErrorsContext.Provider, __assign({ value: memoisedValue }, { children: children })));
}
export var useFormErrors = function () { return useContext(FormErrorsContext); };
//# sourceMappingURL=FormErrorsProvider.js.map