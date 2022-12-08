import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useState } from 'react';
var CustomSelector = forwardRef(function (_a, ref) {
    var checked = _a.checked, hover = _a.hover, id = _a.id, name = _a.name, value = _a.value, setFieldValue = _a.setFieldValue, type = _a.type;
    // Set the focus style on the fake checkbox when the real one is focused
    var fieldName = value || name;
    var _b = useState(false), focus = _b[0], setFocus = _b[1];
    var isRadio = type === 'radio';
    var setValue = function () {
        if (value) {
            if (checked)
                setFieldValue(name, undefined);
            else
                setFieldValue(name, value);
        }
        else {
            setFieldValue(name, !checked);
        }
    };
    var className = isRadio ? 'custom-radio' : 'custom-checkbox';
    if (hover)
        className = "".concat(className, " hover");
    if (focus)
        className = "".concat(className, " focus");
    if (checked)
        className = "".concat(className, " checked");
    return (_jsxs(_Fragment, { children: [_jsx("input", { checked: checked, "aria-labelledby": fieldName, id: id || fieldName, name: fieldName, onBlur: function () { return setFocus(false); }, onChange: function () { return setValue(); }, onFocus: function () { return setFocus(true); }, ref: ref, type: type }), _jsx("div", { className: className })] }));
});
export default CustomSelector;
//# sourceMappingURL=CustomSelector.js.map