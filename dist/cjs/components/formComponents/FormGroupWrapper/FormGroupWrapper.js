"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var InputError_1 = tslib_1.__importDefault(require("../InputError"));
var ItemRepeatButtons_1 = tslib_1.__importDefault(require("./ItemRepeatButtons"));
function FormGroupWrapper(_a) {
    var children = _a.children, className = _a.className, customDisplayError = _a.customDisplayError, customErrorMessage = _a.customErrorMessage, error = _a.error, _b = _a.fieldName, fieldName = _b === void 0 ? '' : _b, input = _a.input, isInvalid = _a.isInvalid, transparentMode = _a.transparentMode;
    // Used for some more complex inputs like the CheckboxGroupWithNoOption
    if (transparentMode)
        return children;
    var isLastElemFormSection = input.isLastElemFormSection;
    var classNames = (0, classnames_1.default)('form-section', {
        'last-form-section': isLastElemFormSection
    }, className);
    return ((0, jsx_runtime_1.jsxs)("div", tslib_1.__assign({ className: classNames }, { children: [children, (customDisplayError || isInvalid) && ((0, jsx_runtime_1.jsx)(InputError_1.default, { name: fieldName, message: customDisplayError ? customErrorMessage : error })), input.indexRepeat !== undefined && (0, jsx_runtime_1.jsx)(ItemRepeatButtons_1.default, { input: input })] })));
}
exports.default = FormGroupWrapper;
//# sourceMappingURL=FormGroupWrapper.js.map