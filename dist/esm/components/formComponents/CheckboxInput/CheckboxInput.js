import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { useErrors } from '../../../hooks/useErrors';
import { getValidationFunction } from '../../../utils/fieldValidators';
import { useFormData } from '../../FormDataProvider';
import { FormGroupWrapper, SoloCheckbox } from '..';
export default function CheckboxInput(_a) {
    var input = _a.input;
    var name = input.linkIdWithParent || '';
    var _b = useErrors({
        fieldName: name,
        inputValidateField: getValidationFunction(input)
    }), isInvalid = _b.isInvalid, error = _b.error;
    var getFormValue = useFormData().getFormValue;
    var checked = getFormValue(name) || false;
    return (_jsx(FormGroupWrapper, __assign({ error: error, fieldName: name, input: input, isInvalid: isInvalid }, { children: _jsx("label", __assign({ htmlFor: name }, { children: _jsx(SoloCheckbox, { checked: checked, input: input }) })) })));
}
//# sourceMappingURL=CheckboxInput.js.map