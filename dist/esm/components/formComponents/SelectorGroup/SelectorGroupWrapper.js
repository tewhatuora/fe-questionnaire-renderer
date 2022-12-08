import { __assign, __spreadArray } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useErrors } from '../../../hooks/useErrors';
import { getValidationFunction } from '../../../utils/fieldValidators';
import { useFormData } from '../../FormDataProvider';
import { FormGroupWrapper, LegendHelpText, SelectorGroup } from '..';
export default function SelectorGroupWrapper(props) {
    var input = props.input, type = props.type, transparentMode = props.transparentMode;
    var name = input.linkIdWithParent || '';
    var _a = useErrors({
        fieldName: name,
        inputValidateField: getValidationFunction(input)
    }), error = _a.error, isInvalid = _a.isInvalid, validateField = _a.validateField;
    var _b = useFormData(), getFormValue = _b.getFormValue, setFormValue = _b.setFormValue;
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
                setFormValue(name, val ? __spreadArray(__spreadArray([], val, true), [value], false) : [value]);
                validateField(val ? __spreadArray(__spreadArray([], val, true), [value], false) : [value], true);
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
    return (_jsx(FormGroupWrapper, __assign({ error: error, fieldName: name, input: input, isInvalid: isInvalid, transparentMode: transparentMode }, { children: _jsxs("fieldset", __assign({ "aria-labelledby": "".concat(name, "Label") }, { children: [_jsx(LegendHelpText, { input: input, isInvalid: isInvalid, name: name, isFieldSet: true }), _jsx(SelectorGroup, { input: input, isInvalid: isInvalid, type: type, setFieldValue: setFieldValue, validateField: validateField })] })) })));
}
//# sourceMappingURL=SelectorGroupWrapper.js.map