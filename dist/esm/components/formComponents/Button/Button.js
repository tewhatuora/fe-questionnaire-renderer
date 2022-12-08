import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
export default function Button(_a) {
    var ariaLabel = _a.ariaLabel, children = _a.children, className = _a.className, disabled = _a.disabled, id = _a.id, onClick = _a.onClick, type = _a.type, variant = _a.variant;
    var classes = variant
        ? "button-variant-".concat(variant).concat(className ? " ".concat(className) : '')
        : className;
    return (_jsx("button", __assign({ "aria-label": ariaLabel, className: classes, disabled: disabled, id: id, onClick: onClick, type: type === 'submit' ? 'submit' : 'button' }, { children: children })));
}
//# sourceMappingURL=Button.js.map