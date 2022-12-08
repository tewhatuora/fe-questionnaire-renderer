import { __assign, __spreadArray } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Flags from 'country-flag-icons/react/3x2';
import { getCountries, getCountryCallingCode } from 'react-phone-number-input/input';
import Select from 'react-select';
import { useErrors } from '../../../hooks/useErrors';
export default function CountrySelect(_a) {
    var defaultCountry = _a.defaultCountry, input = _a.input, name = _a.name, labels = _a.labels, onChange = _a.onChange, value = _a.value;
    var isInvalid = useErrors({ fieldName: name }).isInvalid;
    var options = __spreadArray([
        defaultCountry
    ], getCountries().map(function (country) { return ({
        value: country,
        label: "".concat(labels[country], " +").concat(getCountryCallingCode(country))
    }); }), true);
    var formatLabel = function (data, formatOptionLabelMeta) {
        // Styles the selected country code with a flag, and displays just the label
        // for the options inside the select dropdown
        if (formatOptionLabelMeta.context === 'value') {
            var country = data.value;
            var Flag = Flags[country];
            return (_jsxs("div", __assign({ className: 'flex direction-row align-center flex-item-margin-2' }, { children: [_jsx("span", { children: _jsx(Flag, { title: labels[country], className: 'flag' }) }), _jsx("strong", { children: "+".concat(getCountryCallingCode(country)) })] })));
        }
        return data.label;
    };
    return (_jsx(Select, { "aria-invalid": isInvalid, "aria-required": input.required, "aria-label": 'Select a phone number country extension. Mobile preferred', className: 'select-container select-country', classNamePrefix: 'select', formatOptionLabel: formatLabel, name: name, inputId: "".concat(name, "CountrySelect"), onChange: onChange, options: options, value: value }));
}
//# sourceMappingURL=CountrySelect.js.map