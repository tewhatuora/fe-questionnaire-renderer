import { __assign, __spreadArray } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useMemo, useState } from 'react';
export var FormTouchedContext = createContext({});
export function FormTouchedProvider(_a) {
    var children = _a.children;
    var _b = useState([]), touched = _b[0], setTouched = _b[1];
    function resetTouched() {
        setTouched([]);
    }
    function setFormTouched(name, setTouch) {
        if (setTouch === void 0) { setTouch = true; }
        setTouched(function (prev) {
            var index = prev.findIndex(function (e) { return name === e.name; });
            if (setTouch) {
                if (index !== -1) {
                    return __spreadArray(__spreadArray(__spreadArray([], prev.slice(0, index), true), [{ name: name }], false), prev.slice(index + 1), true);
                }
                return __spreadArray(__spreadArray([], prev, true), [{ name: name }], false);
            }
            if (index !== -1) {
                return __spreadArray(__spreadArray([], prev.slice(0, index), true), prev.slice(index + 1), true);
            }
            return prev;
        });
    }
    var memoisedValue = useMemo(function () { return ({
        formTouched: touched,
        resetTouched: resetTouched,
        setFormTouched: setFormTouched
    }); }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [touched]);
    return (_jsx(FormTouchedContext.Provider, __assign({ value: memoisedValue }, { children: children })));
}
export var useFormTouched = function () { return useContext(FormTouchedContext); };
//# sourceMappingURL=FormTouchedProvider.js.map