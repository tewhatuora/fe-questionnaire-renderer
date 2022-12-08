import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
export default function RequiredOptional(_a) {
    var className = _a.className, required = _a.required;
    if (required === undefined)
        return null;
    return (_jsx("div", __assign({ className: "optional-required".concat(className || '') }, { children: _jsx("span", { children: required ? 'Required' : 'Optional' }) })));
}
//# sourceMappingURL=RequiredOptional.js.map