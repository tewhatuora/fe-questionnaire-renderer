"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var focusTrap = tslib_1.__importStar(require("focus-trap"));
var react_1 = require("react");
var PopupProvider_1 = require("../PopupProvider");
var PopupProvider_2 = require("../PopupProvider/PopupProvider");
var ConfirmationPopup_1 = tslib_1.__importDefault(require("./ConfirmationPopup"));
var ErrorPopup_1 = tslib_1.__importDefault(require("./ErrorPopup"));
function Popup() {
    var _a = (0, PopupProvider_1.usePopup)(), isPopupOpen = _a.isPopupOpen, onConfirm = _a.onConfirm, onDismiss = _a.onDismiss, popupParams = _a.popupParams, onRetry = _a.onRetry;
    var keyDownHandler = function (event) {
        if (event.key === 'Escape') {
            event.preventDefault();
            if (onDismiss)
                onDismiss();
            else if (popupParams.onDismiss)
                popupParams.onDismiss();
        }
    };
    (0, react_1.useEffect)(function () {
        document.addEventListener('keydown', keyDownHandler);
        return function () {
            document.removeEventListener('keydown', keyDownHandler);
        };
    });
    // Traps the focus on the popup when opened
    (0, react_1.useEffect)(function () {
        var trap = focusTrap.createFocusTrap('.popup', {
            initialFocus: '#popup-focus',
            checkCanFocusTrap: function () {
                // Return a promise that resolves when all the trap containers are able to receive focus
                return new Promise(function (resolve) {
                    var interval = setInterval(function () {
                        if (document.querySelectorAll('.popup').length > 0) {
                            resolve();
                            clearInterval(interval);
                        }
                    }, 5);
                });
            }
        });
        if (isPopupOpen) {
            trap.activate();
        }
        // Deactivate trap on unmount
        return function () {
            trap.deactivate();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isPopupOpen]);
    return isPopupOpen ? ((0, jsx_runtime_1.jsxs)("div", tslib_1.__assign({ className: 'popup' }, { children: [(0, jsx_runtime_1.jsx)("span", { id: 'popup-focus', tabIndex: -1 }), popupParams.type === PopupProvider_2.PopupType.error && ((0, jsx_runtime_1.jsx)(ErrorPopup_1.default, { popupParams: popupParams, onDismiss: onDismiss, onRetry: onRetry })), popupParams.type === PopupProvider_2.PopupType.confirmation && ((0, jsx_runtime_1.jsx)(ConfirmationPopup_1.default, { popupParams: popupParams, onDismiss: onDismiss, onConfirm: onConfirm }))] }))) : null;
}
exports.default = Popup;
//# sourceMappingURL=Popup.js.map