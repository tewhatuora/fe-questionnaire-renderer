"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFormTouched = exports.FormTouchedProvider = exports.FormTouchedContext = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
exports.FormTouchedContext = (0, react_1.createContext)({});
function FormTouchedProvider(_a) {
    var children = _a.children;
    var _b = (0, react_1.useState)([]), touched = _b[0], setTouched = _b[1];
    function resetTouched() {
        setTouched([]);
    }
    function setFormTouched(name, setTouch) {
        if (setTouch === void 0) { setTouch = true; }
        setTouched(function (prev) {
            var index = prev.findIndex(function (e) { return name === e.name; });
            if (setTouch) {
                if (index !== -1) {
                    return tslib_1.__spreadArray(tslib_1.__spreadArray(tslib_1.__spreadArray([], prev.slice(0, index), true), [{ name: name }], false), prev.slice(index + 1), true);
                }
                return tslib_1.__spreadArray(tslib_1.__spreadArray([], prev, true), [{ name: name }], false);
            }
            if (index !== -1) {
                return tslib_1.__spreadArray(tslib_1.__spreadArray([], prev.slice(0, index), true), prev.slice(index + 1), true);
            }
            return prev;
        });
    }
    var memoisedValue = (0, react_1.useMemo)(function () { return ({
        formTouched: touched,
        resetTouched: resetTouched,
        setFormTouched: setFormTouched
    }); }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [touched]);
    return ((0, jsx_runtime_1.jsx)(exports.FormTouchedContext.Provider, tslib_1.__assign({ value: memoisedValue }, { children: children })));
}
exports.FormTouchedProvider = FormTouchedProvider;
var useFormTouched = function () { return (0, react_1.useContext)(exports.FormTouchedContext); };
exports.useFormTouched = useFormTouched;
//# sourceMappingURL=FormTouchedProvider.js.map