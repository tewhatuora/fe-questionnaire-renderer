"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable no-underscore-dangle */
var react_1 = require("react");
var useErrors_1 = require("../../../hooks/useErrors");
var fieldValidators_1 = require("../../../utils/fieldValidators");
var utils_1 = require("../../../utils/utils");
var FormDataProvider_1 = require("../../FormDataProvider");
var FormErrorsProvider_1 = require("../../FormErrorsProvider");
var FormTouchedProvider_1 = require("../../FormTouchedProvider");
var FormGroupWrapper_1 = tslib_1.__importDefault(require("../FormGroupWrapper"));
var TextInput_1 = tslib_1.__importDefault(require("../TextInput"));
var AddressToggle_1 = tslib_1.__importDefault(require("./AddressToggle"));
var AutocompleteInput_1 = tslib_1.__importDefault(require("./AutocompleteInput"));
var manualAddressFields_1 = tslib_1.__importDefault(require("./manualAddressFields"));
function Address(_a) {
    var AutocompleteComponent = _a.AutocompleteComponent, input = _a.input, TextInputComponent = _a.TextInputComponent;
    var name = input.linkIdWithParent || '';
    var formErrors = (0, FormErrorsProvider_1.useFormErrors)().formErrors;
    var setFormValue = (0, FormDataProvider_1.useFormData)().setFormValue;
    var formTouched = (0, FormTouchedProvider_1.useFormTouched)().formTouched;
    var _b = (0, react_1.useState)(true), showAutocomplete = _b[0], setShowAutocomplete = _b[1];
    var _c = (0, useErrors_1.useErrors)({
        fieldName: name,
        inputValidateField: (0, fieldValidators_1.getValidationFunction)(input)
    }), error = _c.error, isInvalid = _c.isInvalid, validateField = _c.validateField;
    function handleToggle() {
        if (!showAutocomplete)
            setFormValue(name, undefined);
        setShowAutocomplete(!showAutocomplete);
    }
    var _d = (0, react_1.useMemo)(function () {
        var fields = (0, manualAddressFields_1.default)(input.linkIdWithParent || '');
        var manError = formErrors.find(function (e) {
            var field = fields.find(function (f) { return (0, utils_1.getId)(f) === e.name; });
            var touch = field && formTouched.find(function (ft) { return ft.name === (0, utils_1.getId)(field); });
            return !!field && !!touch;
        });
        return {
            manualFields: fields,
            manualError: manError
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [input.linkId, formErrors.length, formTouched]), manualError = _d.manualError, manualFields = _d.manualFields;
    return ((0, jsx_runtime_1.jsx)(FormGroupWrapper_1.default, tslib_1.__assign({ error: error || (manualError === null || manualError === void 0 ? void 0 : manualError.message), fieldName: name, input: input, isInvalid: isInvalid || !!manualError }, { children: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(AddressToggle_1.default, { fieldName: name, handleToggle: handleToggle, input: input, isInvalid: isInvalid || !!manualError, isAutocomplete: showAutocomplete }), showAutocomplete && AutocompleteComponent ? ((0, jsx_runtime_1.jsx)(AutocompleteInput_1.default, { AutocompleteComponent: AutocompleteComponent, input: input, isInvalid: isInvalid, validateField: validateField })) : ((0, jsx_runtime_1.jsx)("div", tslib_1.__assign({ className: 'margin-top-4' }, { children: manualFields.map(function (af) { return ((0, jsx_runtime_1.jsx)(TextInput_1.default, { InputComponent: TextInputComponent, input: af, transparentMode: true }, af.linkIdWithParent)); }) })))] }) })));
}
exports.default = Address;
//# sourceMappingURL=Address.js.map