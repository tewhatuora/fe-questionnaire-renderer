"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var types_1 = require("../../../types");
var Button_1 = tslib_1.__importDefault(require("../Button/Button"));
var LegendHelpText_1 = tslib_1.__importDefault(require("../LegendHelpText"));
function AddressToggle(_a) {
    var fieldName = _a.fieldName, handleToggle = _a.handleToggle, input = _a.input, isAutocomplete = _a.isAutocomplete, isInvalid = _a.isInvalid;
    return ((0, jsx_runtime_1.jsxs)("div", tslib_1.__assign({ className: 'flex direction-row justify-space-between align-start' }, { children: [(0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(LegendHelpText_1.default, { className: 'margin-bottom-2', input: input, isInvalid: isInvalid, name: fieldName }) }), (0, jsx_runtime_1.jsx)(Button_1.default, tslib_1.__assign({ className: 'margin-top-1', onClick: handleToggle, type: 'button', variant: types_1.ButtonVariantTypes.link }, { children: isAutocomplete ? 'Enter address manually' : 'Search for my address' }))] })));
}
exports.default = AddressToggle;
//# sourceMappingURL=AddressToggle.js.map