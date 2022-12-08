import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import parse from 'html-react-parser';
import { useState } from 'react';
import { CustomSelector, FieldWrapper } from '..';
export default function SelectorGroupInput(props) {
    var fieldName = props.fieldName, id = props.id, input = props.input, isInvalid = props.isInvalid, option = props.option, setFieldValue = props.setFieldValue, type = props.type, val = props.val, validateField = props.validateField;
    var _a = useState(false), hover = _a[0], setHover = _a[1];
    var checked = false;
    if (val && type === 'radio')
        checked = val === option.value;
    if (val && type === 'checkbox')
        checked = val.includes(option.value);
    return (_jsx("label", __assign({ htmlFor: "".concat(id || option.value) }, { children: _jsxs("div", __assign({ className: 'selector-input-group', onMouseEnter: function () { return setHover(true); }, onMouseLeave: function () { return setHover(false); } }, { children: [_jsx(FieldWrapper, __assign({ checked: checked, fieldName: fieldName, id: option.value, input: input, isInvalid: isInvalid, validateField: validateField, value: option.value }, { children: function () { return (_jsx(CustomSelector, { checked: checked, hover: hover, id: id, name: option.id, setFieldValue: function (_n, value) {
                            setFieldValue(option.value, !!value);
                        }, type: type, value: option.value })); } })), _jsx("span", { children: parse(option.label) })] }), option.id) }), option.value));
}
//# sourceMappingURL=SelectorGroupInput.js.map