"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var useErrors_1 = require("../../../hooks/useErrors");
var fieldValidators_1 = require("../../../utils/fieldValidators");
var FormDataProvider_1 = require("../../FormDataProvider");
var __1 = require("..");
function SelectorGroupWrapper(props) {
    var input = props.input, type = props.type, transparentMode = props.transparentMode;
    var name = input.linkIdWithParent || '';
    var _a = (0, useErrors_1.useErrors)({
        fieldName: name,
        inputValidateField: (0, fieldValidators_1.getValidationFunction)(input)
    }), error = _a.error, isInvalid = _a.isInvalid, validateField = _a.validateField;
    var _b = (0, FormDataProvider_1.useFormData)(), getFormValue = _b.getFormValue, setFormValue = _b.setFormValue;
    var val = getFormValue(name);
    var isRadio = type === 'radio';
    if (!input.answerOption)
        return null;
    var setFieldValue = function (value, checked) {
        if (checked) {
            if (isRadio) {
                setFormValue(name, value);
                validateField(value, true);
            }
            else {
                setFormValue(name, val ? tslib_1.__spreadArray(tslib_1.__spreadArray([], val, true), [value], false) : [value]);
                validateField(val ? tslib_1.__spreadArray(tslib_1.__spreadArray([], val, true), [value], false) : [value], true);
            }
        }
        else if (isRadio) {
            setFormValue(name, undefined);
            validateField(value, true);
        }
        else {
            var index = val.findIndex(function (v) { return value === v; });
            val.splice(index, 1);
            setFormValue(name, val);
            validateField(val, true);
        }
    };
    return ((0, jsx_runtime_1.jsx)(__1.FormGroupWrapper, tslib_1.__assign({ error: error, fieldName: name, input: input, isInvalid: isInvalid, transparentMode: transparentMode }, { children: (0, jsx_runtime_1.jsxs)("fieldset", tslib_1.__assign({ "aria-labelledby": "".concat(name, "Label") }, { children: [(0, jsx_runtime_1.jsx)(__1.LegendHelpText, { input: input, isInvalid: isInvalid, name: name, isFieldSet: true }), (0, jsx_runtime_1.jsx)(__1.SelectorGroup, { input: input, isInvalid: isInvalid, type: type, setFieldValue: setFieldValue, validateField: validateField })] })) })));
}
exports.default = SelectorGroupWrapper;
//# sourceMappingURL=SelectorGroupWrapper.js.map