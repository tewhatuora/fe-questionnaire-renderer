"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var input_1 = tslib_1.__importStar(require("react-phone-number-input/input"));
var en_json_1 = tslib_1.__importDefault(require("react-phone-number-input/locale/en.json"));
var useErrors_1 = require("../../../hooks/useErrors");
var fieldValidators_1 = require("../../../utils/fieldValidators");
var FormDataProvider_1 = require("../../FormDataProvider");
var FormTouchedProvider_1 = require("../../FormTouchedProvider");
var FieldWrapper_1 = tslib_1.__importDefault(require("../FieldWrapper"));
var FormGroupWrapper_1 = tslib_1.__importDefault(require("../FormGroupWrapper"));
var LegendHelpText_1 = tslib_1.__importDefault(require("../LegendHelpText"));
var CountrySelect_1 = tslib_1.__importDefault(require("./CountrySelect"));
var defaultCountryCode = 'NZ';
var defaultCountry = {
    value: defaultCountryCode,
    label: "".concat(en_json_1.default[defaultCountryCode], " +").concat((0, input_1.getCountryCallingCode)(defaultCountryCode))
};
function PhoneNumberInput(props) {
    var input = props.input;
    var name = input.linkIdWithParent || '';
    var _a = (0, FormDataProvider_1.useFormData)(), getFormValue = _a.getFormValue, setFormValue = _a.setFormValue, formData = _a.formData;
    var _b = (0, useErrors_1.useErrors)({
        fieldName: name,
        inputValidateField: (0, fieldValidators_1.getValidationFunction)(input)
    }), error = _b.error, isInvalid = _b.isInvalid, validateField = _b.validateField;
    var setFormTouched = (0, FormTouchedProvider_1.useFormTouched)().setFormTouched;
    var value = (0, react_1.useMemo)(function () { return getFormValue(name); }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [formData]);
    var countryCode = (0, react_1.useMemo)(function () {
        if (value === null || value === void 0 ? void 0 : value.country) {
            var code = value.country;
            return {
                value: code,
                label: "".concat(en_json_1.default[code], " +").concat((0, input_1.getCountryCallingCode)(code))
            };
        }
        return defaultCountry;
    }, [value]);
    function handleChangeCountry(newCountry) {
        if (newCountry) {
            var countryCallingCode = (0, input_1.getCountryCallingCode)(newCountry.value);
            var newPhoneNumber = tslib_1.__assign(tslib_1.__assign({}, value), { countryCallingCode: countryCallingCode, country: newCountry.value, number: (value === null || value === void 0 ? void 0 : value.nationalNumber) &&
                    "+".concat(countryCallingCode).concat(value === null || value === void 0 ? void 0 : value.nationalNumber) });
            setFormValue(name, newPhoneNumber);
            validateField(newPhoneNumber, true);
        }
    }
    function handleChangeNumber(newValue) {
        if (newValue) {
            var parsedNumber = (0, input_1.parsePhoneNumber)(newValue);
            var newPhoneNumber = tslib_1.__assign(tslib_1.__assign({}, value), { nationalNumber: parsedNumber === null || parsedNumber === void 0 ? void 0 : parsedNumber.nationalNumber, number: newValue });
            setFormValue(name, newPhoneNumber);
            validateField(newPhoneNumber, true);
        }
        else {
            setFormValue(name, '');
            validateField('', true);
        }
    }
    return ((0, jsx_runtime_1.jsx)(FormGroupWrapper_1.default, tslib_1.__assign({ error: error, isInvalid: isInvalid, input: input, fieldName: name }, { children: (0, jsx_runtime_1.jsxs)("fieldset", tslib_1.__assign({ "aria-labelledby": "".concat(name, "Label") }, { children: [(0, jsx_runtime_1.jsx)(LegendHelpText_1.default, { input: input, isInvalid: isInvalid, name: name, isFieldSet: true }), (0, jsx_runtime_1.jsxs)("div", tslib_1.__assign({ className: 'flex' }, { children: [(0, jsx_runtime_1.jsx)(CountrySelect_1.default, { defaultCountry: defaultCountry, input: input, labels: en_json_1.default, name: name, onChange: handleChangeCountry, value: countryCode }), (0, jsx_runtime_1.jsx)("div", tslib_1.__assign({ className: 'width-100' }, { children: (0, jsx_runtime_1.jsx)(FieldWrapper_1.default, tslib_1.__assign({ "aria-labelledby": "".concat(name, "Label"), id: name, isInvalid: isInvalid, validateField: validateField, value: value === null || value === void 0 ? void 0 : value.number }, props, { children: function (fieldProps) { return ((0, jsx_runtime_1.jsx)(input_1.default, tslib_1.__assign({}, fieldProps, { country: countryCode.value, onBlur: function () {
                                        validateField();
                                        setFormTouched(name);
                                    }, onChange: handleChangeNumber, placeholder: 'XXX XXX XXXX' }))); } })) }))] }))] })) })));
}
exports.default = PhoneNumberInput;
//# sourceMappingURL=PhoneNumberInput.js.map