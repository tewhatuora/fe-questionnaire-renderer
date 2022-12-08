"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var CustomSelector = (0, react_1.forwardRef)(function (_a, ref) {
    var checked = _a.checked, hover = _a.hover, id = _a.id, name = _a.name, value = _a.value, setFieldValue = _a.setFieldValue, type = _a.type;
    // Set the focus style on the fake checkbox when the real one is focused
    var fieldName = value || name;
    var _b = (0, react_1.useState)(false), focus = _b[0], setFocus = _b[1];
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
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("input", { checked: checked, "aria-labelledby": fieldName, id: id || fieldName, name: fieldName, onBlur: function () { return setFocus(false); }, onChange: function () { return setValue(); }, onFocus: function () { return setFocus(true); }, ref: ref, type: type }), (0, jsx_runtime_1.jsx)("div", { className: className })] }));
});
exports.default = CustomSelector;
//# sourceMappingURL=CustomSelector.js.map