import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
export default function Label(_a) {
    var children = _a.children, className = _a.className, htmlFor = _a.htmlFor;
    var buildClasses = function () {
        if (className)
            return "input-label ".concat(className);
        return 'input-label';
    };
    return (_jsx("label", __assign({ className: buildClasses(), htmlFor: htmlFor }, { children: children })));
}
//# sourceMappingURL=Label.js.map