"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable no-underscore-dangle */
var react_1 = require("react");
var types_1 = require("../../../types");
var fhir_1 = require("../../../types/fhir");
var extensions_1 = require("../../../utils/extensions");
var formComponents_1 = require("../../formComponents");
var ItemRepeatButtons_1 = tslib_1.__importDefault(require("../../formComponents/FormGroupWrapper/ItemRepeatButtons"));
var SelectorGroupWrapper_1 = tslib_1.__importDefault(require("../../formComponents/SelectorGroup/SelectorGroupWrapper"));
function FormStepInputs(_a) {
    var inputComponents = _a.inputComponents, inputs = _a.inputs;
    var getInputComponent = function (input) {
        if (input.extension) {
            if ((0, extensions_1.isPhoneExtension)(input))
                return (0, jsx_runtime_1.jsx)(formComponents_1.PhoneNumberInput, { input: input });
            if ((0, extensions_1.isExtension)(input, types_1.Extensions.addressExtension)) {
                return ((0, jsx_runtime_1.jsx)(formComponents_1.Address, { AutocompleteComponent: inputComponents === null || inputComponents === void 0 ? void 0 : inputComponents.AddressAutocompleteInput, input: input, TextInputComponent: inputComponents === null || inputComponents === void 0 ? void 0 : inputComponents.TextInput }));
            }
            if ((0, extensions_1.isExtension)(input, types_1.Extensions.checkboxGroupWithNoOption)) {
                return (0, jsx_runtime_1.jsx)(formComponents_1.CheckboxGroupWithNoOption, { input: input });
            }
            if ((0, extensions_1.isExtension)(input, types_1.Extensions.dateInputExtension)) {
                return (0, jsx_runtime_1.jsx)(formComponents_1.DateInput, { input: input });
            }
            if ((0, extensions_1.isExtension)(input, types_1.Extensions.dateOfBirthExtension)) {
                return (0, jsx_runtime_1.jsx)(formComponents_1.DateOfBirthInput, { input: input });
            }
            if ((0, extensions_1.isExtension)(input, types_1.Extensions.dividerExtension)) {
                return (0, jsx_runtime_1.jsx)(formComponents_1.Divider, { input: input });
            }
            if ((0, extensions_1.isExtension)(input, types_1.Extensions.soloCheckboxExtension)) {
                return (0, jsx_runtime_1.jsx)(formComponents_1.CheckboxInput, { input: input });
            }
        }
        switch (input.type) {
            case fhir_1.Questionnaire_ItemTypeKind._boolean:
                return (0, jsx_runtime_1.jsx)(formComponents_1.YesNoButtons, { input: input });
            case fhir_1.Questionnaire_ItemTypeKind._choice:
                return (0, jsx_runtime_1.jsx)(SelectorGroupWrapper_1.default, { type: 'radio', input: input });
            case fhir_1.Questionnaire_ItemTypeKind._date:
                return (0, jsx_runtime_1.jsx)(formComponents_1.DayPicker, { input: input });
            case fhir_1.Questionnaire_ItemTypeKind._display:
                return (0, jsx_runtime_1.jsx)(formComponents_1.Display, { input: input });
            case fhir_1.Questionnaire_ItemTypeKind._group:
                return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(FormStepInputs, { inputComponents: inputComponents, inputs: input.item || [] }), input.indexRepeat !== undefined && ((0, jsx_runtime_1.jsx)(ItemRepeatButtons_1.default, { input: input }))] }));
            case fhir_1.Questionnaire_ItemTypeKind._openChoice:
                return (0, jsx_runtime_1.jsx)(SelectorGroupWrapper_1.default, { type: 'checkbox', input: input });
            case fhir_1.Questionnaire_ItemTypeKind._string:
                return ((0, jsx_runtime_1.jsx)(formComponents_1.TextInput, { input: input, InputComponent: inputComponents === null || inputComponents === void 0 ? void 0 : inputComponents.TextInput }));
            case fhir_1.Questionnaire_ItemTypeKind._text:
                return ((0, jsx_runtime_1.jsx)(formComponents_1.TextInput, { input: input, InputComponent: inputComponents === null || inputComponents === void 0 ? void 0 : inputComponents.TextInput }));
            case fhir_1.Questionnaire_ItemTypeKind._url:
                return (0, jsx_runtime_1.jsx)(formComponents_1.HrefButton, {});
            default:
                return null;
        }
    };
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: inputs.map(function (i, ind) {
            var isLast = ind === inputs.length - 1;
            var input = tslib_1.__assign(tslib_1.__assign({}, i), { isLastElemFormSection: isLast ||
                    (!isLast &&
                        inputs[ind + 1].type === fhir_1.Questionnaire_ItemTypeKind._group) });
            return ((0, jsx_runtime_1.jsxs)(react_1.Fragment, { children: [i.type === fhir_1.Questionnaire_ItemTypeKind._group && i.text && ((0, jsx_runtime_1.jsx)("h2", tslib_1.__assign({ className: 'size-h3' }, { children: i.text }))), getInputComponent(input)] }, "".concat(i.linkId, ".").concat(ind)));
        }) }));
}
exports.default = FormStepInputs;
//# sourceMappingURL=FormStepInputs.js.map