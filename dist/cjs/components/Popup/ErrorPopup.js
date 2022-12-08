"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var error_icon_svg_1 = tslib_1.__importDefault(require("../../images/icons/error-icon.svg"));
var types_1 = require("../../types");
var formComponents_1 = require("../formComponents");
function ErrorPopup(_a) {
    var popupParams = _a.popupParams, onDismiss = _a.onDismiss, onRetry = _a.onRetry;
    return ((0, jsx_runtime_1.jsxs)("div", tslib_1.__assign({ className: 'content-card content-card-padding-l popup-content' }, { children: [(0, jsx_runtime_1.jsx)("div", tslib_1.__assign({ className: 'error-icon' }, { children: (0, jsx_runtime_1.jsx)("img", { alt: '', "aria-hidden": true, src: error_icon_svg_1.default }) })), (0, jsx_runtime_1.jsx)("h2", { children: popupParams.title }), (0, jsx_runtime_1.jsx)("div", tslib_1.__assign({ className: 'popup-info' }, { children: (0, jsx_runtime_1.jsx)("p", { children: popupParams.message }) })), (0, jsx_runtime_1.jsxs)("div", tslib_1.__assign({ className: "".concat(popupParams.onRetry ? 'button-row' : 'button') }, { children: [(0, jsx_runtime_1.jsx)(formComponents_1.Button, tslib_1.__assign({ variant: popupParams.buttonType || types_1.ButtonVariantTypes.primary, type: 'button', onClick: onDismiss || popupParams.onDismiss }, { children: popupParams.dismissButtonText
                            ? popupParams.dismissButtonText
                            : 'Dismiss' })), popupParams.onRetry && ((0, jsx_runtime_1.jsx)(formComponents_1.Button, tslib_1.__assign({ variant: types_1.ButtonVariantTypes.primary, type: 'button', onClick: onRetry || popupParams.onRetry }, { children: "Try again" })))] }))] })));
}
exports.default = ErrorPopup;
//# sourceMappingURL=ErrorPopup.js.map