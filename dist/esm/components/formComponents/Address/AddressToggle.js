import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ButtonVariantTypes } from '../../../types';
import Button from '../Button/Button';
import LegendHelpText from '../LegendHelpText';
function AddressToggle(_a) {
    var fieldName = _a.fieldName, handleToggle = _a.handleToggle, input = _a.input, isAutocomplete = _a.isAutocomplete, isInvalid = _a.isInvalid;
    return (_jsxs("div", __assign({ className: 'flex direction-row justify-space-between align-start' }, { children: [_jsx("div", { children: _jsx(LegendHelpText, { className: 'margin-bottom-2', input: input, isInvalid: isInvalid, name: fieldName }) }), _jsx(Button, __assign({ className: 'margin-top-1', onClick: handleToggle, type: 'button', variant: ButtonVariantTypes.link }, { children: isAutocomplete ? 'Enter address manually' : 'Search for my address' }))] })));
}
export default AddressToggle;
//# sourceMappingURL=AddressToggle.js.map