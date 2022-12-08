import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import errorIcon from '../../images/icons/error-icon.svg';
import { ButtonVariantTypes } from '../../types';
import { Button } from '../formComponents';
function ErrorPopup(_a) {
    var popupParams = _a.popupParams, onDismiss = _a.onDismiss, onRetry = _a.onRetry;
    return (_jsxs("div", __assign({ className: 'content-card content-card-padding-l popup-content' }, { children: [_jsx("div", __assign({ className: 'error-icon' }, { children: _jsx("img", { alt: '', "aria-hidden": true, src: errorIcon }) })), _jsx("h2", { children: popupParams.title }), _jsx("div", __assign({ className: 'popup-info' }, { children: _jsx("p", { children: popupParams.message }) })), _jsxs("div", __assign({ className: "".concat(popupParams.onRetry ? 'button-row' : 'button') }, { children: [_jsx(Button, __assign({ variant: popupParams.buttonType || ButtonVariantTypes.primary, type: 'button', onClick: onDismiss || popupParams.onDismiss }, { children: popupParams.dismissButtonText
                            ? popupParams.dismissButtonText
                            : 'Dismiss' })), popupParams.onRetry && (_jsx(Button, __assign({ variant: ButtonVariantTypes.primary, type: 'button', onClick: onRetry || popupParams.onRetry }, { children: "Try again" })))] }))] })));
}
export default ErrorPopup;
//# sourceMappingURL=ErrorPopup.js.map