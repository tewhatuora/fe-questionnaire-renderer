"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable no-underscore-dangle */
var react_1 = require("react");
var useErrors_1 = require("../../../hooks/useErrors");
var types_1 = require("../../../types");
var extensions_1 = require("../../../utils/extensions");
var FormDataProvider_1 = require("../../FormDataProvider");
var FormTouchedProvider_1 = require("../../FormTouchedProvider");
var Divider_1 = tslib_1.__importDefault(require("../Divider"));
var FormGroupWrapper_1 = tslib_1.__importDefault(require("../FormGroupWrapper"));
var LegendHelpText_1 = tslib_1.__importDefault(require("../LegendHelpText"));
var SelectorGroup_1 = tslib_1.__importDefault(require("../SelectorGroup"));
var SoloCheckbox_1 = tslib_1.__importDefault(require("../SoloCheckbox"));
var validation_1 = tslib_1.__importDefault(require("./validation"));
function CheckboxGroupWithNoOption(_a) {
    var input = _a.input;
    var name = input.linkIdWithParent || '';
    var noOptionName = "".concat(name, "_noOption");
    var extension = input.extension && (0, extensions_1.getExtension)(input, types_1.Extensions.validationExtension);
    var _b = (0, FormDataProvider_1.useFormData)(), formData = _b.formData, getFormValue = _b.getFormValue, setFormValue = _b.setFormValue;
    var _c = (0, FormTouchedProvider_1.useFormTouched)(), formTouched = _c.formTouched, setFormTouched = _c.setFormTouched;
    var _d = (0, useErrors_1.useErrors)({
        fieldName: name,
        inputValidateField: function (props) {
            return (0, validation_1.default)(tslib_1.__assign(tslib_1.__assign({}, props), { extension: extension }));
        },
        useValidationOnMount: false
    }), error = _d.error, isInvalid = _d.isInvalid, touched = _d.touched, validateField = _d.validateField;
    var value = getFormValue(name) || [];
    var valueNoOption = getFormValue(noOptionName);
    var _e = (0, react_1.useMemo)(function () {
        var ext = input.extension && (0, extensions_1.getExtension)(input, types_1.Extensions.noOptionExtension);
        return {
            noOptionInput: {
                linkIdWithParent: noOptionName,
                text: (ext === null || ext === void 0 ? void 0 : ext.valueString) || ''
            },
            selectorInput: tslib_1.__assign(tslib_1.__assign({}, input), { required: false, extension: [] })
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [input]), noOptionInput = _e.noOptionInput, selectorInput = _e.selectorInput;
    function timeoutFieldTouched() {
        if (!touched)
            setTimeout(function () { return setFormTouched(name); }, 100);
    }
    (0, react_1.useEffect)(function () {
        validateField(value, true, false, {
            secondaryValue: valueNoOption,
            formValues: formData
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value.length, valueNoOption]);
    // Removes error and touched on unmount
    (0, react_1.useEffect)(function () {
        return function () {
            validateField(undefined, true, true);
            if (formTouched.find(function (ft) { return ft.name === name; })) {
                setFormTouched(name, false);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    function setSelectorGroupValue(val, checked) {
        setFormValue(noOptionName, undefined);
        if (checked)
            setFormValue(name, value ? tslib_1.__spreadArray(tslib_1.__spreadArray([], value, true), [val], false) : [val]);
        else {
            var index = value.findIndex(function (v) { return val === v; });
            value.splice(index, 1);
            setFormValue(name, value);
        }
        timeoutFieldTouched();
    }
    function setSoloCheckboxValue(val) {
        setFormValue(noOptionName, val);
        setFormValue(name, []);
        timeoutFieldTouched();
    }
    return ((0, jsx_runtime_1.jsx)(FormGroupWrapper_1.default, tslib_1.__assign({ error: error, fieldName: noOptionName, input: input, isInvalid: isInvalid }, { children: (0, jsx_runtime_1.jsxs)("fieldset", tslib_1.__assign({ "aria-labelledby": "".concat(name, "Label") }, { children: [(0, jsx_runtime_1.jsx)(LegendHelpText_1.default, { input: input, isInvalid: isInvalid, name: name, isFieldSet: true }), (0, jsx_runtime_1.jsx)(SelectorGroup_1.default, { input: selectorInput, isInvalid: isInvalid, setFieldValue: setSelectorGroupValue, type: 'checkbox', validateField: function () { return undefined; } }), (0, jsx_runtime_1.jsx)("div", tslib_1.__assign({ className: 'margin-top-4 margin-bottom-4' }, { children: (0, jsx_runtime_1.jsx)(Divider_1.default, { input: input, transparentMode: true }) })), (0, jsx_runtime_1.jsx)("label", tslib_1.__assign({ htmlFor: noOptionName }, { children: (0, jsx_runtime_1.jsx)(SoloCheckbox_1.default, { classNames: 'border-none', checked: !!valueNoOption, input: noOptionInput, setField: setSoloCheckboxValue }) }))] })) })));
}
exports.default = CheckboxGroupWithNoOption;
//# sourceMappingURL=CheckboxGroupWithNoOption.js.map