"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
function buildClasses(invalid) {
    return invalid ? ' is-invalid' : '';
}
function buildAriaDescribedBy(name, invalid) {
    if (invalid)
        return "".concat(name, "Error");
    return undefined;
}
var ignoreKeys = function (keys) { return function (e) {
    if (keys.includes(e.key)) {
        e.preventDefault();
        return '';
    }
    return e;
}; };
var DateOfBirthSplit = (0, react_1.forwardRef)(function (_a, ref) {
    var datePart = _a.datePart, hasErrorProps = _a.hasError, label = _a.label, max = _a.max, min = _a.min, name = _a.name, onChange = _a.onChange, placeholder = _a.placeholder, _b = _a.required, required = _b === void 0 ? true : _b, setDatePart = _a.setDatePart;
    var hasError = hasErrorProps || (datePart.touched && !!datePart.error);
    return ((0, jsx_runtime_1.jsxs)("div", tslib_1.__assign({ className: 'date-of-birth-input' }, { children: [(0, jsx_runtime_1.jsx)("label", tslib_1.__assign({ className: buildClasses(hasError), htmlFor: name }, { children: label })), (0, jsx_runtime_1.jsx)("input", { "aria-describedby": buildAriaDescribedBy(name, hasError), "aria-invalid": hasError, "aria-required": required, className: buildClasses(hasError), id: name, max: max, min: min, onBlur: function () { return setDatePart({ touched: true }); }, onChange: onChange, onKeyDown: ignoreKeys(['.', '-', 'e']), placeholder: placeholder, ref: ref, type: 'number', value: datePart.value }, name)] })));
});
exports.default = DateOfBirthSplit;
//# sourceMappingURL=DateOfBirthSplit.js.map