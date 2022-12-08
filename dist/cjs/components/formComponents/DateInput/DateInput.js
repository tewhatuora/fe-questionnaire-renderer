"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_text_mask_1 = tslib_1.__importDefault(require("react-text-mask"));
var useErrors_1 = require("../../../hooks/useErrors");
var fieldValidators_1 = require("../../../utils/fieldValidators");
var masks_1 = require("../../../utils/masks");
var FormDataProvider_1 = require("../../FormDataProvider");
var __1 = require("..");
function DateInput(_a) {
    var input = _a.input;
    var name = input.linkIdWithParent || '';
    var _b = (0, FormDataProvider_1.useFormData)(), getFormValue = _b.getFormValue, setFormValue = _b.setFormValue;
    var value = getFormValue(name);
    var _c = (0, useErrors_1.useErrors)({
        fieldName: name,
        inputValidateField: (0, fieldValidators_1.getValidationFunction)(input)
    }), error = _c.error, isInvalid = _c.isInvalid, validateField = _c.validateField;
    return ((0, jsx_runtime_1.jsx)(__1.FormGroupWrapper, tslib_1.__assign({ error: error, fieldName: name, input: input, isInvalid: isInvalid }, { children: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(__1.LegendHelpText, { input: input, isInvalid: isInvalid, name: name }), (0, jsx_runtime_1.jsx)(__1.FieldWrapper, tslib_1.__assign({ id: name, input: input, isInvalid: isInvalid, validateField: validateField, value: value }, { children: function (fieldProps) { return ((0, jsx_runtime_1.jsx)(react_text_mask_1.default, tslib_1.__assign({}, fieldProps, { guide: false, mask: masks_1.dateOfBirthMask, placeholder: 'DD/MM/YYYY', onChange: function (e) {
                            setFormValue(name, e.target.value);
                            validateField(e.target.value, true);
                        }, type: 'text' }))); } }))] }) })));
}
exports.default = DateInput;
//# sourceMappingURL=DateInput.js.map