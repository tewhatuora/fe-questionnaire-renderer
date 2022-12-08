"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
function RequiredOptional(_a) {
    var className = _a.className, required = _a.required;
    if (required === undefined)
        return null;
    return ((0, jsx_runtime_1.jsx)("div", tslib_1.__assign({ className: "optional-required".concat(className || '') }, { children: (0, jsx_runtime_1.jsx)("span", { children: required ? 'Required' : 'Optional' }) })));
}
exports.default = RequiredOptional;
//# sourceMappingURL=RequiredOptional.js.map