import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useMemo, useState } from 'react';
export var PopupType;
(function (PopupType) {
    PopupType["confirmation"] = "confirmation";
    PopupType["error"] = "error";
})(PopupType || (PopupType = {}));
export var PopupContext = createContext({});
export function PopupContextProvider(_a) {
    var children = _a.children;
    var _b = useState(false), isPopupOpen = _b[0], setIsPopupOpen = _b[1];
    var _c = useState(false), beenClosed = _c[0], setBeenClosed = _c[1];
    var _d = useState({}), popupParams = _d[0], setPopupParams = _d[1];
    function openPopup(params) {
        setIsPopupOpen(true);
        setPopupParams(params);
    }
    function closePopup() {
        setBeenClosed(true);
        setIsPopupOpen(false);
        setPopupParams({});
    }
    var memoisedValue = useMemo(function () {
        function onDismiss() {
            if (popupParams.onDismiss)
                popupParams.onDismiss();
            closePopup();
        }
        function onConfirm() {
            if (popupParams.onConfirm)
                popupParams.onConfirm();
            closePopup();
        }
        function onRetry() {
            if (popupParams.onRetry)
                popupParams.onRetry();
            closePopup();
        }
        function onReset() {
            if (popupParams.onReset)
                popupParams.onReset();
            closePopup();
        }
        function callPopup(params) {
            openPopup(params);
        }
        return {
            beenClosed: beenClosed,
            callPopup: callPopup,
            closePopup: closePopup,
            isPopupOpen: isPopupOpen,
            onConfirm: onConfirm,
            onDismiss: onDismiss,
            onReset: onReset,
            onRetry: onRetry,
            popupParams: popupParams
        };
    }, [isPopupOpen, popupParams, beenClosed]);
    return (_jsx(PopupContext.Provider, __assign({ value: memoisedValue }, { children: children })));
}
export var usePopup = function () { return useContext(PopupContext); };
//# sourceMappingURL=PopupProvider.js.map