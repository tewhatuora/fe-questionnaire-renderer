import { __assign } from "tslib";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable no-underscore-dangle */
import { useMemo, useState } from 'react';
import { useErrors } from '../../../hooks/useErrors';
import { getValidationFunction } from '../../../utils/fieldValidators';
import { getId } from '../../../utils/utils';
import { useFormData } from '../../FormDataProvider';
import { useFormErrors } from '../../FormErrorsProvider';
import { useFormTouched } from '../../FormTouchedProvider';
import FormGroupWrapper from '../FormGroupWrapper';
import TextInput from '../TextInput';
import AddressToggle from './AddressToggle';
import AutocompleteInput from './AutocompleteInput';
import getAddressFields from './manualAddressFields';
function Address(_a) {
    var AutocompleteComponent = _a.AutocompleteComponent, input = _a.input, TextInputComponent = _a.TextInputComponent;
    var name = input.linkIdWithParent || '';
    var formErrors = useFormErrors().formErrors;
    var setFormValue = useFormData().setFormValue;
    var formTouched = useFormTouched().formTouched;
    var _b = useState(true), showAutocomplete = _b[0], setShowAutocomplete = _b[1];
    var _c = useErrors({
        fieldName: name,
        inputValidateField: getValidationFunction(input)
    }), error = _c.error, isInvalid = _c.isInvalid, validateField = _c.validateField;
    function handleToggle() {
        if (!showAutocomplete)
            setFormValue(name, undefined);
        setShowAutocomplete(!showAutocomplete);
    }
    var _d = useMemo(function () {
        var fields = getAddressFields(input.linkIdWithParent || '');
        var manError = formErrors.find(function (e) {
            var field = fields.find(function (f) { return getId(f) === e.name; });
            var touch = field && formTouched.find(function (ft) { return ft.name === getId(field); });
            return !!field && !!touch;
        });
        return {
            manualFields: fields,
            manualError: manError
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [input.linkId, formErrors.length, formTouched]), manualError = _d.manualError, manualFields = _d.manualFields;
    return (_jsx(FormGroupWrapper, __assign({ error: error || (manualError === null || manualError === void 0 ? void 0 : manualError.message), fieldName: name, input: input, isInvalid: isInvalid || !!manualError }, { children: _jsxs(_Fragment, { children: [_jsx(AddressToggle, { fieldName: name, handleToggle: handleToggle, input: input, isInvalid: isInvalid || !!manualError, isAutocomplete: showAutocomplete }), showAutocomplete && AutocompleteComponent ? (_jsx(AutocompleteInput, { AutocompleteComponent: AutocompleteComponent, input: input, isInvalid: isInvalid, validateField: validateField })) : (_jsx("div", __assign({ className: 'margin-top-4' }, { children: manualFields.map(function (af) { return (_jsx(TextInput, { InputComponent: TextInputComponent, input: af, transparentMode: true }, af.linkIdWithParent)); }) })))] }) })));
}
export default Address;
//# sourceMappingURL=Address.js.map