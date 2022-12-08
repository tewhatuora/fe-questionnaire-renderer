"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
function Button(_a) {
    var ariaLabel = _a.ariaLabel, children = _a.children, className = _a.className, disabled = _a.disabled, id = _a.id, onClick = _a.onClick, type = _a.type, variant = _a.variant;
    var classes = variant
        ? "button-variant-".concat(variant).concat(className ? " ".concat(className) : '')
        : className;
    return ((0, jsx_runtime_1.jsx)("button", tslib_1.__assign({ "aria-label": ariaLabel, className: classes, disabled: disabled, id: id, onClick: onClick, type: type === 'submit' ? 'submit' : 'button' }, { children: children })));
}
exports.default = Button;
//# sourceMappingURL=Button.js.map