import { __assign, __rest } from "tslib";
import { useEffect } from 'react';
import { getId } from '../../../utils/utils';
import { useFormTouched } from '../../FormTouchedProvider';
export default function FieldWrapper(_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? '' : _b, fieldName = _a.fieldName, input = _a.input, isInvalid = _a.isInvalid, validateField = _a.validateField, rest = __rest(_a, ["children", "className", "fieldName", "input", "isInvalid", "validateField"]);
    var _c = useFormTouched(), formTouched = _c.formTouched, setFormTouched = _c.setFormTouched;
    var name = fieldName || getId(input);
    var buildClasses = function () {
        if (isInvalid)
            return "".concat(className, " is-invalid");
        return className;
    };
    var buildAriaDescribedBy = function () {
        if (isInvalid)
            return "".concat(name, "Error");
        return undefined;
    };
    // Removes error and touched on unmount
    useEffect(function () {
        return function () {
            validateField(undefined, true, true);
            if (formTouched.find(function (ft) { return ft.name === name; })) {
                setFormTouched(name, false);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return children(__assign({ 'aria-describedby': buildAriaDescribedBy(), 'aria-invalid': isInvalid, 'aria-required': input.required, className: buildClasses(), name: name }, rest));
}
//# sourceMappingURL=FieldWrapper.js.map