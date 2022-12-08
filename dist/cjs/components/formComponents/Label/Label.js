"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
function Label(_a) {
    var children = _a.children, className = _a.className, htmlFor = _a.htmlFor;
    var buildClasses = function () {
        if (className)
            return "input-label ".concat(className);
        return 'input-label';
    };
    return ((0, jsx_runtime_1.jsx)("label", tslib_1.__assign({ className: buildClasses(), htmlFor: htmlFor }, { children: children })));
}
exports.default = Label;
//# sourceMappingURL=Label.js.map