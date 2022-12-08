import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CrossIcon from '../../images/icons/CrossIcon';
import { ButtonVariantTypes } from '../../types';
import { Button } from '../formComponents';
function ConfirmationPopup(props) {
    var onConfirm = props.onConfirm, onDismiss = props.onDismiss, popupParams = props.popupParams;
    return (_jsxs("div", __assign({ className: 'content-card content-card-padding-l popup-content' }, { children: [popupParams.title && _jsx("h2", { children: popupParams.title }), popupParams.message && _jsx("p", { children: popupParams.message }), _jsxs("div", __assign({ className: 'margin-top-4 flex direction-column flex-item-margin-4' }, { children: [_jsx(Button, __assign({ variant: ButtonVariantTypes.primary, type: 'button', onClick: onConfirm || popupParams.onConfirm }, { children: popupParams.confirmButtonText
                            ? popupParams.confirmButtonText
                            : 'Confirm' })), popupParams.dismissButtonText && (_jsx(Button, __assign({ variant: ButtonVariantTypes.link, type: 'button', onClick: onDismiss || popupParams.onDismiss }, { children: popupParams.dismissButtonText })))] })), _jsx("div", __assign({ "aria-hidden": true, className: 'close-button-icon', onClick: onDismiss || popupParams.onDismiss }, { children: _jsx(CrossIcon, {}) }))] })));
}
export default ConfirmationPopup;
//# sourceMappingURL=ConfirmationPopup.js.map