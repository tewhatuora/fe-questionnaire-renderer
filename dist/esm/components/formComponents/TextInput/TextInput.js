import { __assign } from "tslib";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useErrors } from '../../../hooks/useErrors';
import { getValidationFunction } from '../../../utils/fieldValidators';
import { useFormData } from '../../FormDataProvider';
import { useFormTouched } from '../../FormTouchedProvider';
import { FieldWrapper, FormGroupWrapper, LegendHelpText } from '..';
function TextInput(_a) {
    var input = _a.input, InputComponent = _a.InputComponent, transparentMode = _a.transparentMode;
    var name = input.linkIdWithParent || '';
    var _b = useErrors({
        fieldName: name,
        inputValidateField: getValidationFunction(input)
    }), error = _b.error, isInvalid = _b.isInvalid, validateField = _b.validateField;
    var setFormTouched = useFormTouched().setFormTouched;
    var _c = useFormData(), getFormValue = _c.getFormValue, setFormValue = _c.setFormValue;
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
    return (_jsx(FormGroupWrapper, __assign({ error: error, fieldName: name, input: input, isInvalid: isInvalid, transparentMode: transparentMode }, { children: _jsxs(_Fragment, { children: [_jsx(LegendHelpText, { input: input, isInvalid: isInvalid, name: name }), _jsx(FieldWrapper, __assign({ fieldName: name, id: name, input: input, isInvalid: isInvalid, validateField: validateField }, { children: function (fieldProps) {
                        return InputComponent ? (_jsx(InputComponent, __assign({}, fieldProps, inputProps))) : (_jsx("input", __assign({}, fieldProps, inputProps)));
                    } }))] }) })));
}
export default TextInput;
//# sourceMappingURL=TextInput.js.map