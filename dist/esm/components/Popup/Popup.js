import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as focusTrap from 'focus-trap';
import { useEffect } from 'react';
import { usePopup } from '../PopupProvider';
import { PopupType } from '../PopupProvider/PopupProvider';
import ConfirmationPopup from './ConfirmationPopup';
import ErrorPopup from './ErrorPopup';
function Popup() {
    var _a = usePopup(), isPopupOpen = _a.isPopupOpen, onConfirm = _a.onConfirm, onDismiss = _a.onDismiss, popupParams = _a.popupParams, onRetry = _a.onRetry;
    var keyDownHandler = function (event) {
        if (event.key === 'Escape') {
            event.preventDefault();
            if (onDismiss)
                onDismiss();
            else if (popupParams.onDismiss)
                popupParams.onDismiss();
        }
    };
    useEffect(function () {
        document.addEventListener('keydown', keyDownHandler);
        return function () {
            document.removeEventListener('keydown', keyDownHandler);
        };
    });
    // Traps the focus on the popup when opened
    useEffect(function () {
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
    return isPopupOpen ? (_jsxs("div", __assign({ className: 'popup' }, { children: [_jsx("span", { id: 'popup-focus', tabIndex: -1 }), popupParams.type === PopupType.error && (_jsx(ErrorPopup, { popupParams: popupParams, onDismiss: onDismiss, onRetry: onRetry })), popupParams.type === PopupType.confirmation && (_jsx(ConfirmationPopup, { popupParams: popupParams, onDismiss: onDismiss, onConfirm: onConfirm }))] }))) : null;
}
export default Popup;
//# sourceMappingURL=Popup.js.map