"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var useErrors_1 = require("../../../hooks/useErrors");
var fieldValidators_1 = require("../../../utils/fieldValidators");
var FormDataProvider_1 = require("../../FormDataProvider");
var FormTouchedProvider_1 = require("../../FormTouchedProvider");
var __1 = require("..");
function TextInput(_a) {
    var input = _a.input, InputComponent = _a.InputComponent, transparentMode = _a.transparentMode;
    var name = input.linkIdWithParent || '';
    var _b = (0, useErrors_1.useErrors)({
        fieldName: name,
        inputValidateField: (0, fieldValidators_1.getValidationFunction)(input)
    }), error = _b.error, isInvalid = _b.isInvalid, validateField = _b.validateField;
    var setFormTouched = (0, FormTouchedProvider_1.useFormTouched)().setFormTouched;
    var _c = (0, FormDataProvider_1.useFormData)(), getFormValue = _c.getFormValue, setFormValue = _c.setFormValue;
    var value = getFormValue(name) || '';
    var buildAriaDescribedBy = function () {
        if (isInvalid)
            return "".concat(name, "Error");
        return undefined;
    };
    var inputProps = {
        'aria-describedby': buildAriaDescribedBy(),
        'aria-invalid': isInvalid,
        'aria-required': input.required,
        className: isInvalid ? 'is-invalid' : '',
        id: name,
        maxLength: input.maxLength,
        name: name,
        onBlur: function () {
            setFormValue(name, value ? value.trim() : '');
            setFormTouched(name);
        },
        onChange: function (v) {
            validateField(v.target.value, true);
            setFormValue(name, v.target.value);
        },
        type: 'text',
        value: value
    };
    return ((0, jsx_runtime_1.jsx)(__1.FormGroupWrapper, tslib_1.__assign({ error: error, fieldName: name, input: input, isInvalid: isInvalid, transparentMode: transparentMode }, { children: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(__1.LegendHelpText, { input: input, isInvalid: isInvalid, name: name }), (0, jsx_runtime_1.jsx)(__1.FieldWrapper, tslib_1.__assign({ fieldName: name, id: name, input: input, isInvalid: isInvalid, validateField: validateField }, { children: function (fieldProps) {
                        return InputComponent ? ((0, jsx_runtime_1.jsx)(InputComponent, tslib_1.__assign({}, fieldProps, inputProps))) : ((0, jsx_runtime_1.jsx)("input", tslib_1.__assign({}, fieldProps, inputProps)));
                    } }))] }) })));
}
exports.default = TextInput;
//# sourceMappingURL=TextInput.js.map