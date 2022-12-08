"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var jsx_runtime_1 = require("react/jsx-runtime");
var options_1 = require("../../../data/options");
var useErrors_1 = require("../../../hooks/useErrors");
var fieldValidators_1 = require("../../../utils/fieldValidators");
var FormDataProvider_1 = require("../../FormDataProvider");
var __1 = require("..");
function YesNoButtons(props) {
    var input = props.input;
    var name = input.linkIdWithParent || '';
    var _a = (0, FormDataProvider_1.useFormData)(), getFormValue = _a.getFormValue, setFormValue = _a.setFormValue;
    var _b = (0, useErrors_1.useErrors)({
        fieldName: name,
        inputValidateField: (0, fieldValidators_1.getValidationFunction)(input)
    }), error = _b.error, isInvalid = _b.isInvalid, validateField = _b.validateField;
    var options = options_1.booleanOptions;
    return ((0, jsx_runtime_1.jsx)(__1.FormGroupWrapper, tslib_1.__assign({ error: error, fieldName: name, input: input, isInvalid: isInvalid }, { children: (0, jsx_runtime_1.jsxs)("fieldset", tslib_1.__assign({ "aria-labelledby": "".concat(name, "Label") }, { children: [(0, jsx_runtime_1.jsx)(__1.LegendHelpText, { input: input, isInvalid: isInvalid, name: name, isFieldSet: true }), options.length ? ((0, jsx_runtime_1.jsx)("div", tslib_1.__assign({ className: 'flex direction-row padding-top-2 padding-bottom-2' }, { children: options.map(function (option, ind) { return ((0, jsx_runtime_1.jsx)(__1.FieldWrapper, tslib_1.__assign({ id: "".concat(input.id, ".").concat(option.id), isInvalid: isInvalid, validateField: validateField, value: option.value }, props, { children: function (fieldProps) {
                            var selected = getFormValue(name) === option.value;
                            return ((0, react_1.createElement)(__1.Button, tslib_1.__assign({}, fieldProps, { ariaLabel: option.label, className: "yes-no-button".concat(selected ? ' selected' : '').concat(isInvalid ? ' error' : ''), 
                                // Needed for focusing the input on error
                                id: ind === 0 ? name : undefined, key: option.label, onClick: function () {
                                    validateField(option.value, true);
                                    setFormValue(name, option.value);
                                }, type: 'button' }), option.label));
                        } }), option.label)); }) }))) : null] })) })));
}
exports.default = YesNoButtons;
//# sourceMappingURL=YesNoButtons.js.map