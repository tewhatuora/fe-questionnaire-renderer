"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var __1 = require("..");
function LegendHelpText(_a) {
    var className = _a.className, input = _a.input, _b = _a.isFieldSet, isFieldSet = _b === void 0 ? false : _b, isInvalid = _a.isInvalid, name = _a.name;
    var classNames = (0, classnames_1.default)({
        error: isInvalid,
        'input-label': isFieldSet
    }, className);
    var getLabel = function () {
        if (isFieldSet)
            return ((0, jsx_runtime_1.jsx)("legend", tslib_1.__assign({ className: classNames, id: "".concat(name, "Label") }, { children: input.text })));
        return ((0, jsx_runtime_1.jsx)(__1.Label, tslib_1.__assign({ className: classNames, htmlFor: name }, { children: input.text })));
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [getLabel(), (0, jsx_runtime_1.jsx)(__1.RequiredOptional, { required: input.required })] }));
}
exports.default = LegendHelpText;
//# sourceMappingURL=LegendHelpText.js.map