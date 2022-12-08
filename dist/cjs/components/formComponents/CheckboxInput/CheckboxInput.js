"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var useErrors_1 = require("../../../hooks/useErrors");
var fieldValidators_1 = require("../../../utils/fieldValidators");
var FormDataProvider_1 = require("../../FormDataProvider");
var __1 = require("..");
function CheckboxInput(_a) {
    var input = _a.input;
    var name = input.linkIdWithParent || '';
    var _b = (0, useErrors_1.useErrors)({
        fieldName: name,
        inputValidateField: (0, fieldValidators_1.getValidationFunction)(input)
    }), isInvalid = _b.isInvalid, error = _b.error;
    var getFormValue = (0, FormDataProvider_1.useFormData)().getFormValue;
    var checked = getFormValue(name) || false;
    return ((0, jsx_runtime_1.jsx)(__1.FormGroupWrapper, tslib_1.__assign({ error: error, fieldName: name, input: input, isInvalid: isInvalid }, { children: (0, jsx_runtime_1.jsx)("label", tslib_1.__assign({ htmlFor: name }, { children: (0, jsx_runtime_1.jsx)(__1.SoloCheckbox, { checked: checked, input: input }) })) })));
}
exports.default = CheckboxInput;
//# sourceMappingURL=CheckboxInput.js.map