import { __assign } from "tslib";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import MaskedInput from 'react-text-mask';
import { useErrors } from '../../../hooks/useErrors';
import { getValidationFunction } from '../../../utils/fieldValidators';
import { dateOfBirthMask } from '../../../utils/masks';
import { useFormData } from '../../FormDataProvider';
import { FieldWrapper, FormGroupWrapper, LegendHelpText } from '..';
export default function DateInput(_a) {
    var input = _a.input;
    var name = input.linkIdWithParent || '';
    var _b = useFormData(), getFormValue = _b.getFormValue, setFormValue = _b.setFormValue;
    var value = getFormValue(name);
    var _c = useErrors({
        fieldName: name,
        inputValidateField: getValidationFunction(input)
    }), error = _c.error, isInvalid = _c.isInvalid, validateField = _c.validateField;
    return (_jsx(FormGroupWrapper, __assign({ error: error, fieldName: name, input: input, isInvalid: isInvalid }, { children: _jsxs(_Fragment, { children: [_jsx(LegendHelpText, { input: input, isInvalid: isInvalid, name: name }), _jsx(FieldWrapper, __assign({ id: name, input: input, isInvalid: isInvalid, validateField: validateField, value: value }, { children: function (fieldProps) { return (_jsx(MaskedInput, __assign({}, fieldProps, { guide: false, mask: dateOfBirthMask, placeholder: 'DD/MM/YYYY', onChange: function (e) {
                            setFormValue(name, e.target.value);
                            validateField(e.target.value, true);
                        }, type: 'text' }))); } }))] }) })));
}
//# sourceMappingURL=DateInput.js.map