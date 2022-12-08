"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var html_react_parser_1 = tslib_1.__importDefault(require("html-react-parser"));
var react_1 = require("react");
var __1 = require("..");
function SelectorGroupInput(props) {
    var fieldName = props.fieldName, id = props.id, input = props.input, isInvalid = props.isInvalid, option = props.option, setFieldValue = props.setFieldValue, type = props.type, val = props.val, validateField = props.validateField;
    var _a = (0, react_1.useState)(false), hover = _a[0], setHover = _a[1];
    var checked = false;
    if (val && type === 'radio')
        checked = val === option.value;
    if (val && type === 'checkbox')
        checked = val.includes(option.value);
    return ((0, jsx_runtime_1.jsx)("label", tslib_1.__assign({ htmlFor: "".concat(id || option.value) }, { children: (0, jsx_runtime_1.jsxs)("div", tslib_1.__assign({ className: 'selector-input-group', onMouseEnter: function () { return setHover(true); }, onMouseLeave: function () { return setHover(false); } }, { children: [(0, jsx_runtime_1.jsx)(__1.FieldWrapper, tslib_1.__assign({ checked: checked, fieldName: fieldName, id: option.value, input: input, isInvalid: isInvalid, validateField: validateField, value: option.value }, { children: function () { return ((0, jsx_runtime_1.jsx)(__1.CustomSelector, { checked: checked, hover: hover, id: id, name: option.id, setFieldValue: function (_n, value) {
                            setFieldValue(option.value, !!value);
                        }, type: type, value: option.value })); } })), (0, jsx_runtime_1.jsx)("span", { children: (0, html_react_parser_1.default)(option.label) })] }), option.id) }), option.value));
}
exports.default = SelectorGroupInput;
//# sourceMappingURL=SelectorGroupInput.js.map