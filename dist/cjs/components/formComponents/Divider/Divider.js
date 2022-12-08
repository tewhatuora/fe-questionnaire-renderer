"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var __1 = require("..");
function Divider(_a) {
    var color = _a.color, input = _a.input, transparentMode = _a.transparentMode;
    var name = input.linkIdWithParent || '';
    var buildClasses = function () {
        if (color)
            return "divider-".concat(color);
        return 'divider';
    };
    return ((0, jsx_runtime_1.jsx)(__1.FormGroupWrapper, tslib_1.__assign({ fieldName: name, input: input, isInvalid: false, transparentMode: transparentMode }, { children: (0, jsx_runtime_1.jsx)("div", { className: buildClasses() }) })));
}
exports.default = Divider;
//# sourceMappingURL=Divider.js.map