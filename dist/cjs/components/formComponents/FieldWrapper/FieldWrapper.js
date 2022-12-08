"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var utils_1 = require("../../../utils/utils");
var FormTouchedProvider_1 = require("../../FormTouchedProvider");
function FieldWrapper(_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? '' : _b, fieldName = _a.fieldName, input = _a.input, isInvalid = _a.isInvalid, validateField = _a.validateField, rest = tslib_1.__rest(_a, ["children", "className", "fieldName", "input", "isInvalid", "validateField"]);
    var _c = (0, FormTouchedProvider_1.useFormTouched)(), formTouched = _c.formTouched, setFormTouched = _c.setFormTouched;
    var name = fieldName || (0, utils_1.getId)(input);
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
    (0, react_1.useEffect)(function () {
        return function () {
            validateField(undefined, true, true);
            if (formTouched.find(function (ft) { return ft.name === name; })) {
                setFormTouched(name, false);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return children(tslib_1.__assign({ 'aria-describedby': buildAriaDescribedBy(), 'aria-invalid': isInvalid, 'aria-required': input.required, className: buildClasses(), name: name }, rest));
}
exports.default = FieldWrapper;
//# sourceMappingURL=FieldWrapper.js.map