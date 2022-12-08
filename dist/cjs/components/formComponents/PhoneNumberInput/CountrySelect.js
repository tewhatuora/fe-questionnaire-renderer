"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var _3x2_1 = tslib_1.__importDefault(require("country-flag-icons/react/3x2"));
var input_1 = require("react-phone-number-input/input");
var react_select_1 = tslib_1.__importDefault(require("react-select"));
var useErrors_1 = require("../../../hooks/useErrors");
function CountrySelect(_a) {
    var defaultCountry = _a.defaultCountry, input = _a.input, name = _a.name, labels = _a.labels, onChange = _a.onChange, value = _a.value;
    var isInvalid = (0, useErrors_1.useErrors)({ fieldName: name }).isInvalid;
    var options = tslib_1.__spreadArray([
        defaultCountry
    ], (0, input_1.getCountries)().map(function (country) { return ({
        value: country,
        label: "".concat(labels[country], " +").concat((0, input_1.getCountryCallingCode)(country))
    }); }), true);
    var formatLabel = function (data, formatOptionLabelMeta) {
        // Styles the selected country code with a flag, and displays just the label
        // for the options inside the select dropdown
        if (formatOptionLabelMeta.context === 'value') {
            var country = data.value;
            var Flag = _3x2_1.default[country];
            return ((0, jsx_runtime_1.jsxs)("div", tslib_1.__assign({ className: 'flex direction-row align-center flex-item-margin-2' }, { children: [(0, jsx_runtime_1.jsx)("span", { children: (0, jsx_runtime_1.jsx)(Flag, { title: labels[country], className: 'flag' }) }), (0, jsx_runtime_1.jsx)("strong", { children: "+".concat((0, input_1.getCountryCallingCode)(country)) })] })));
        }
        return data.label;
    };
    return ((0, jsx_runtime_1.jsx)(react_select_1.default, { "aria-invalid": isInvalid, "aria-required": input.required, "aria-label": 'Select a phone number country extension. Mobile preferred', className: 'select-container select-country', classNamePrefix: 'select', formatOptionLabel: formatLabel, name: name, inputId: "".concat(name, "CountrySelect"), onChange: onChange, options: options, value: value }));
}
exports.default = CountrySelect;
//# sourceMappingURL=CountrySelect.js.map