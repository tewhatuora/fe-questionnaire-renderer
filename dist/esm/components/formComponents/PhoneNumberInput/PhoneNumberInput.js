import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from 'react';
import PhoneInput, { getCountryCallingCode, parsePhoneNumber } from 'react-phone-number-input/input';
import en from 'react-phone-number-input/locale/en.json';
import { useErrors } from '../../../hooks/useErrors';
import { getValidationFunction } from '../../../utils/fieldValidators';
import { useFormData } from '../../FormDataProvider';
import { useFormTouched } from '../../FormTouchedProvider';
import FieldWrapper from '../FieldWrapper';
import FormGroupWrapper from '../FormGroupWrapper';
import LegendHelpText from '../LegendHelpText';
import CountrySelect from './CountrySelect';
var defaultCountryCode = 'NZ';
var defaultCountry = {
    value: defaultCountryCode,
    label: "".concat(en[defaultCountryCode], " +").concat(getCountryCallingCode(defaultCountryCode))
};
export default function PhoneNumberInput(props) {
    var input = props.input;
    var name = input.linkIdWithParent || '';
    var _a = useFormData(), getFormValue = _a.getFormValue, setFormValue = _a.setFormValue, formData = _a.formData;
    var _b = useErrors({
        fieldName: name,
        inputValidateField: getValidationFunction(input)
    }), error = _b.error, isInvalid = _b.isInvalid, validateField = _b.validateField;
    var setFormTouched = useFormTouched().setFormTouched;
    var value = useMemo(function () { return getFormValue(name); }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [formData]);
    var countryCode = useMemo(function () {
        if (value === null || value === void 0 ? void 0 : value.country) {
            var code = value.country;
            return {
                value: code,
                label: "".concat(en[code], " +").concat(getCountryCallingCode(code))
            };
        }
        return defaultCountry;
    }, [value]);
    function handleChangeCountry(newCountry) {
        if (newCountry) {
            var countryCallingCode = getCountryCallingCode(newCountry.value);
            var newPhoneNumber = __assign(__assign({}, value), { countryCallingCode: countryCallingCode, country: newCountry.value, number: (value === null || value === void 0 ? void 0 : value.nationalNumber) &&
                    "+".concat(countryCallingCode).concat(value === null || value === void 0 ? void 0 : value.nationalNumber) });
            setFormValue(name, newPhoneNumber);
            validateField(newPhoneNumber, true);
        }
    }
    function handleChangeNumber(newValue) {
        if (newValue) {
            var parsedNumber = parsePhoneNumber(newValue);
            var newPhoneNumber = __assign(__assign({}, value), { nationalNumber: parsedNumber === null || parsedNumber === void 0 ? void 0 : parsedNumber.nationalNumber, number: newValue });
            setFormValue(name, newPhoneNumber);
            validateField(newPhoneNumber, true);
        }
        else {
            setFormValue(name, '');
            validateField('', true);
        }
    }
    return (_jsx(FormGroupWrapper, __assign({ error: error, isInvalid: isInvalid, input: input, fieldName: name }, { children: _jsxs("fieldset", __assign({ "aria-labelledby": "".concat(name, "Label") }, { children: [_jsx(LegendHelpText, { input: input, isInvalid: isInvalid, name: name, isFieldSet: true }), _jsxs("div", __assign({ className: 'flex' }, { children: [_jsx(CountrySelect, { defaultCountry: defaultCountry, input: input, labels: en, name: name, onChange: handleChangeCountry, value: countryCode }), _jsx("div", __assign({ className: 'width-100' }, { children: _jsx(FieldWrapper, __assign({ "aria-labelledby": "".concat(name, "Label"), id: name, isInvalid: isInvalid, validateField: validateField, value: value === null || value === void 0 ? void 0 : value.number }, props, { children: function (fieldProps) { return (_jsx(PhoneInput, __assign({}, fieldProps, { country: countryCode.value, onBlur: function () {
                                        validateField();
                                        setFormTouched(name);
                                    }, onChange: handleChangeNumber, placeholder: 'XXX XXX XXXX' }))); } })) }))] }))] })) })));
}
//# sourceMappingURL=PhoneNumberInput.js.map