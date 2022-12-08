import { __assign } from "tslib";
import { createElement as _createElement } from "react";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { booleanOptions } from '../../../data/options';
import { useErrors } from '../../../hooks/useErrors';
import { getValidationFunction } from '../../../utils/fieldValidators';
import { useFormData } from '../../FormDataProvider';
import { Button, FieldWrapper, FormGroupWrapper, LegendHelpText } from '..';
function YesNoButtons(props) {
    var input = props.input;
    var name = input.linkIdWithParent || '';
    var _a = useFormData(), getFormValue = _a.getFormValue, setFormValue = _a.setFormValue;
    var _b = useErrors({
        fieldName: name,
        inputValidateField: getValidationFunction(input)
    }), error = _b.error, isInvalid = _b.isInvalid, validateField = _b.validateField;
    var options = booleanOptions;
    return (_jsx(FormGroupWrapper, __assign({ error: error, fieldName: name, input: input, isInvalid: isInvalid }, { children: _jsxs("fieldset", __assign({ "aria-labelledby": "".concat(name, "Label") }, { children: [_jsx(LegendHelpText, { input: input, isInvalid: isInvalid, name: name, isFieldSet: true }), options.length ? (_jsx("div", __assign({ className: 'flex direction-row padding-top-2 padding-bottom-2' }, { children: options.map(function (option, ind) { return (_jsx(FieldWrapper, __assign({ id: "".concat(input.id, ".").concat(option.id), isInvalid: isInvalid, validateField: validateField, value: option.value }, props, { children: function (fieldProps) {
                            var selected = getFormValue(name) === option.value;
                            return (_createElement(Button, __assign({}, fieldProps, { ariaLabel: option.label, className: "yes-no-button".concat(selected ? ' selected' : '').concat(isInvalid ? ' error' : ''), 
                                // Needed for focusing the input on error
                                id: ind === 0 ? name : undefined, key: option.label, onClick: function () {
                                    validateField(option.value, true);
                                    setFormValue(name, option.value);
                                }, type: 'button' }), option.label));
                        } }), option.label)); }) }))) : null] })) })));
}
export default YesNoButtons;
//# sourceMappingURL=YesNoButtons.js.map