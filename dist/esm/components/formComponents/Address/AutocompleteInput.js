import { __assign } from "tslib";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { useFormData } from '../../FormDataProvider';
import { useFormErrors } from '../../FormErrorsProvider';
import { useFormTouched } from '../../FormTouchedProvider';
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
    var _b = useFormData(), getFormValue = _b.getFormValue, setFormValue = _b.setFormValue;
    var setFormError = useFormErrors().setFormError;
    var setFormTouched = useFormTouched().setFormTouched;
    useEffect(function () {
        // Remove custom error on unmount
        return function () { return setFormError(name, '', false); };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    function handleSelectAddress(address) {
        var addressLine1 = address.addressLine1, addressLine2 = address.addressLine2, cityTown = address.cityTown, mailTown = address.mailTown, postcode = address.postcode, suburb = address.suburb;
        var city = cityTown || mailTown || '';
        var formAddress = __assign(__assign({}, address), { city: city });
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
    return (_jsxs(_Fragment, { children: [_jsx("label", __assign({ className: 'a11y', htmlFor: name }, { children: "Address autocomplete" })), _jsx(AutocompleteComponent, { id: name, isInvalid: isInvalid, name: name, onBlur: function () {
                    validateField(undefined, true);
                    setFormTouched(name);
                }, onClear: handleClearAddress, onSelect: handleSelectAddress, value: formattedAddressValue() })] }));
}
export default AutocompleteInput;
//# sourceMappingURL=AutocompleteInput.js.map