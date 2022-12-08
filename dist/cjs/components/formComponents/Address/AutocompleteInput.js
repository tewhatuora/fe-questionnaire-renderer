"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var FormDataProvider_1 = require("../../FormDataProvider");
var FormErrorsProvider_1 = require("../../FormErrorsProvider");
var FormTouchedProvider_1 = require("../../FormTouchedProvider");
function formatAddress(address) {
    return [
        address.addressLine1,
        address.addressLine2,
        address.suburb,
        address.city,
        address.postcode
    ]
        .filter(Boolean)
        .join(', ');
}
function AutocompleteInput(_a) {
    var AutocompleteComponent = _a.AutocompleteComponent, input = _a.input, isInvalid = _a.isInvalid, validateField = _a.validateField;
    var name = input.linkIdWithParent || '';
    var _b = (0, FormDataProvider_1.useFormData)(), getFormValue = _b.getFormValue, setFormValue = _b.setFormValue;
    var setFormError = (0, FormErrorsProvider_1.useFormErrors)().setFormError;
    var setFormTouched = (0, FormTouchedProvider_1.useFormTouched)().setFormTouched;
    (0, react_1.useEffect)(function () {
        // Remove custom error on unmount
        return function () { return setFormError(name, '', false); };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    function handleSelectAddress(address) {
        var addressLine1 = address.addressLine1, addressLine2 = address.addressLine2, cityTown = address.cityTown, mailTown = address.mailTown, postcode = address.postcode, suburb = address.suburb;
        var city = cityTown || mailTown || '';
        var formAddress = tslib_1.__assign(tslib_1.__assign({}, address), { city: city });
        setFormValue("".concat(name, "_addressLine1"), addressLine1 || '');
        if (addressLine2 !== suburb && addressLine2 !== "".concat(city, " ").concat(postcode)) {
            setFormValue("".concat(name, "_addressLine2"), addressLine2 || '');
        }
        else {
            delete formAddress.addressLine2;
        }
        if (suburb !== city) {
            setFormValue("".concat(name, "_suburb"), suburb || '');
        }
        else {
            delete formAddress.suburb;
        }
        setFormValue("".concat(name, "_city"), city);
        setFormValue("".concat(name, "_postcode"), postcode || '');
        setFormValue(name, formatAddress(formAddress));
        validateField(formatAddress(formAddress), true);
    }
    function handleClearAddress() {
        setFormValue(name, undefined);
        setFormValue("".concat(name, "_addressLine1"), undefined);
        setFormValue("".concat(name, "_addressLine2"), undefined);
        setFormValue("".concat(name, "_city"), undefined);
        setFormValue("".concat(name, "_suburb"), undefined);
        setFormValue("".concat(name, "_postcode"), undefined);
    }
    function formattedAddressValue() {
        var fullAddress = getFormValue(name);
        if (fullAddress)
            return fullAddress;
        var address = {
            addressLine1: getFormValue("".concat(name, "_addressLine1")),
            addressLine2: getFormValue("".concat(name, "_addressLine2")),
            city: getFormValue("".concat(name, "_city")),
            suburb: getFormValue("".concat(name, "_suburb")),
            postcode: getFormValue("".concat(name, "_postcode"))
        };
        return address.addressLine1 && address.city && address.postcode
            ? formatAddress(address)
            : '';
    }
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("label", tslib_1.__assign({ className: 'a11y', htmlFor: name }, { children: "Address autocomplete" })), (0, jsx_runtime_1.jsx)(AutocompleteComponent, { id: name, isInvalid: isInvalid, name: name, onBlur: function () {
                    validateField(undefined, true);
                    setFormTouched(name);
                }, onClear: handleClearAddress, onSelect: handleSelectAddress, value: formattedAddressValue() })] }));
}
exports.default = AutocompleteInput;
//# sourceMappingURL=AutocompleteInput.js.map