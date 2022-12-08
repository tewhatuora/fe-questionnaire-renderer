"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var FormDataProvider_1 = require("../../FormDataProvider");
var SelectorGroupInput_1 = tslib_1.__importDefault(require("./SelectorGroupInput"));
function SelectorGroup(props) {
    var input = props.input, isInvalid = props.isInvalid, type = props.type, setFieldValue = props.setFieldValue, validateField = props.validateField;
    var name = input.linkIdWithParent || '';
    var getFormValue = (0, FormDataProvider_1.useFormData)().getFormValue;
    var val = getFormValue(name);
    var options = (0, react_1.useMemo)(function () {
        if (!input.answerOption)
            return [];
        return input.answerOption.map(function (ao, ind) { return ({
            id: "".concat(input.id, ".").concat(ind),
            label: ao.valueString || '',
            value: ao.valueString || ''
        }); });
    }, [input]);
    if (!input.answerOption)
        return null;
    return ((0, jsx_runtime_1.jsx)("div", tslib_1.__assign({ className: 'flex direction-column' }, { children: options.map(function (option, ind) { return ((0, jsx_runtime_1.jsx)(SelectorGroupInput_1.default, { fieldName: name, id: ind === 0 ? name : "".concat(name, "-").concat(option.value), input: input, isInvalid: isInvalid, option: option, setFieldValue: setFieldValue, type: type, val: val, validateField: validateField }, option.value)); }) })));
}
exports.default = SelectorGroup;
//# sourceMappingURL=SelectorGroup.js.map