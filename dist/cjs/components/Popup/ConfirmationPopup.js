"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var CrossIcon_1 = tslib_1.__importDefault(require("../../images/icons/CrossIcon"));
var types_1 = require("../../types");
var formComponents_1 = require("../formComponents");
function ConfirmationPopup(props) {
    var onConfirm = props.onConfirm, onDismiss = props.onDismiss, popupParams = props.popupParams;
    return ((0, jsx_runtime_1.jsxs)("div", tslib_1.__assign({ className: 'content-card content-card-padding-l popup-content' }, { children: [popupParams.title && (0, jsx_runtime_1.jsx)("h2", { children: popupParams.title }), popupParams.message && (0, jsx_runtime_1.jsx)("p", { children: popupParams.message }), (0, jsx_runtime_1.jsxs)("div", tslib_1.__assign({ className: 'margin-top-4 flex direction-column flex-item-margin-4' }, { children: [(0, jsx_runtime_1.jsx)(formComponents_1.Button, tslib_1.__assign({ variant: types_1.ButtonVariantTypes.primary, type: 'button', onClick: onConfirm || popupParams.onConfirm }, { children: popupParams.confirmButtonText
                            ? popupParams.confirmButtonText
                            : 'Confirm' })), popupParams.dismissButtonText && ((0, jsx_runtime_1.jsx)(formComponents_1.Button, tslib_1.__assign({ variant: types_1.ButtonVariantTypes.link, type: 'button', onClick: onDismiss || popupParams.onDismiss }, { children: popupParams.dismissButtonText })))] })), (0, jsx_runtime_1.jsx)("div", tslib_1.__assign({ "aria-hidden": true, className: 'close-button-icon', onClick: onDismiss || popupParams.onDismiss }, { children: (0, jsx_runtime_1.jsx)(CrossIcon_1.default, {}) }))] })));
}
exports.default = ConfirmationPopup;
//# sourceMappingURL=ConfirmationPopup.js.map