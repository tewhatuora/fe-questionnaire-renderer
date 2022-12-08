import { __assign } from "tslib";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable no-underscore-dangle */
import { Fragment } from 'react';
import { Extensions } from '../../../types';
import { Questionnaire_ItemTypeKind } from '../../../types/fhir';
import { isExtension, isPhoneExtension } from '../../../utils/extensions';
import { Address, CheckboxGroupWithNoOption, CheckboxInput, DateInput, DateOfBirthInput, DayPicker, Display, Divider, HrefButton, PhoneNumberInput, TextInput, YesNoButtons } from '../../formComponents';
import ItemRepeatButtons from '../../formComponents/FormGroupWrapper/ItemRepeatButtons';
import SelectorGroupWrapper from '../../formComponents/SelectorGroup/SelectorGroupWrapper';
export default function FormStepInputs(_a) {
    var inputComponents = _a.inputComponents, inputs = _a.inputs;
    var getInputComponent = function (input) {
        if (input.extension) {
            if (isPhoneExtension(input))
                return _jsx(PhoneNumberInput, { input: input });
            if (isExtension(input, Extensions.addressExtension)) {
                return (_jsx(Address, { AutocompleteComponent: inputComponents === null || inputComponents === void 0 ? void 0 : inputComponents.AddressAutocompleteInput, input: input, TextInputComponent: inputComponents === null || inputComponents === void 0 ? void 0 : inputComponents.TextInput }));
            }
            if (isExtension(input, Extensions.checkboxGroupWithNoOption)) {
                return _jsx(CheckboxGroupWithNoOption, { input: input });
            }
            if (isExtension(input, Extensions.dateInputExtension)) {
                return _jsx(DateInput, { input: input });
            }
            if (isExtension(input, Extensions.dateOfBirthExtension)) {
                return _jsx(DateOfBirthInput, { input: input });
            }
            if (isExtension(input, Extensions.dividerExtension)) {
                return _jsx(Divider, { input: input });
            }
            if (isExtension(input, Extensions.soloCheckboxExtension)) {
                return _jsx(CheckboxInput, { input: input });
            }
        }
        switch (input.type) {
            case Questionnaire_ItemTypeKind._boolean:
                return _jsx(YesNoButtons, { input: input });
            case Questionnaire_ItemTypeKind._choice:
                return _jsx(SelectorGroupWrapper, { type: 'radio', input: input });
            case Questionnaire_ItemTypeKind._date:
                return _jsx(DayPicker, { input: input });
            case Questionnaire_ItemTypeKind._display:
                return _jsx(Display, { input: input });
            case Questionnaire_ItemTypeKind._group:
                return (_jsxs(_Fragment, { children: [_jsx(FormStepInputs, { inputComponents: inputComponents, inputs: input.item || [] }), input.indexRepeat !== undefined && (_jsx(ItemRepeatButtons, { input: input }))] }));
            case Questionnaire_ItemTypeKind._openChoice:
                return _jsx(SelectorGroupWrapper, { type: 'checkbox', input: input });
            case Questionnaire_ItemTypeKind._string:
                return (_jsx(TextInput, { input: input, InputComponent: inputComponents === null || inputComponents === void 0 ? void 0 : inputComponents.TextInput }));
            case Questionnaire_ItemTypeKind._text:
                return (_jsx(TextInput, { input: input, InputComponent: inputComponents === null || inputComponents === void 0 ? void 0 : inputComponents.TextInput }));
            case Questionnaire_ItemTypeKind._url:
                return _jsx(HrefButton, {});
            default:
                return null;
        }
    };
    return (_jsx(_Fragment, { children: inputs.map(function (i, ind) {
            var isLast = ind === inputs.length - 1;
            var input = __assign(__assign({}, i), { isLastElemFormSection: isLast ||
                    (!isLast &&
                        inputs[ind + 1].type === Questionnaire_ItemTypeKind._group) });
            return (_jsxs(Fragment, { children: [i.type === Questionnaire_ItemTypeKind._group && i.text && (_jsx("h2", __assign({ className: 'size-h3' }, { children: i.text }))), getInputComponent(input)] }, "".concat(i.linkId, ".").concat(ind)));
        }) }));
}
//# sourceMappingURL=FormStepInputs.js.map