import get from 'lodash.get';
import { ValidationExtensions } from '../../../types';
import { getExtension } from '../../../utils/extensions';
export default function validateCheckboxNoOption(_a) {
    var _b;
    var extension = _a.extension, fieldName = _a.fieldName, formValues = _a.formValues, value = _a.value;
    var extensionMessage = (extension === null || extension === void 0 ? void 0 : extension.extension) &&
        ((_b = getExtension(extension, ValidationExtensions.validationRequired)) === null || _b === void 0 ? void 0 : _b.valueString);
    var valMessage = extensionMessage || 'Required';
    var valueNoOption = get(formValues, "".concat(fieldName, "_noOption"));
    if ((!value || value.length === 0) && !valueNoOption)
        return valMessage;
    return undefined;
}
//# sourceMappingURL=validation.js.map