"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFormErrors = exports.FormErrorsProvider = exports.FormErrorsContext = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
exports.FormErrorsContext = (0, react_1.createContext)({});
function FormErrorsProvider(_a) {
    var children = _a.children;
    var _b = (0, react_1.useState)([]), errors = _b[0], setErrors = _b[1];
    function resetErrors() {
        setErrors([]);
    }
    function setFormError(name, message, addError) {
        if (addError === void 0) { addError = true; }
        setErrors(function (prev) {
            var index = prev.findIndex(function (e) { return name === e.name; });
            if (addError) {
                if (index !== -1) {
                    return tslib_1.__spreadArray(tslib_1.__spreadArray(tslib_1.__spreadArray([], prev.slice(0, index), true), [
                        { name: name, message: message }
                    ], false), prev.slice(index + 1), true);
                }
                return tslib_1.__spreadArray(tslib_1.__spreadArray([], prev, true), [
                    {
                        name: name,
                        message: message
                    }
                ], false);
            }
            if (index !== -1) {
                return tslib_1.__spreadArray(tslib_1.__spreadArray([], prev.slice(0, index), true), prev.slice(index + 1), true);
            }
            return prev;
        });
    }
    var memoisedValue = (0, react_1.useMemo)(function () { return ({
        formErrors: errors,
        resetErrors: resetErrors,
        setFormError: setFormError
    }); }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [errors]);
    return ((0, jsx_runtime_1.jsx)(exports.FormErrorsContext.Provider, tslib_1.__assign({ value: memoisedValue }, { children: children })));
}
exports.FormErrorsProvider = FormErrorsProvider;
var useFormErrors = function () { return (0, react_1.useContext)(exports.FormErrorsContext); };
exports.useFormErrors = useFormErrors;
//# sourceMappingURL=FormErrorsProvider.js.map