"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePopup = exports.PopupContextProvider = exports.PopupContext = exports.PopupType = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var PopupType;
(function (PopupType) {
    PopupType["confirmation"] = "confirmation";
    PopupType["error"] = "error";
})(PopupType = exports.PopupType || (exports.PopupType = {}));
exports.PopupContext = (0, react_1.createContext)({});
function PopupContextProvider(_a) {
    var children = _a.children;
    var _b = (0, react_1.useState)(false), isPopupOpen = _b[0], setIsPopupOpen = _b[1];
    var _c = (0, react_1.useState)(false), beenClosed = _c[0], setBeenClosed = _c[1];
    var _d = (0, react_1.useState)({}), popupParams = _d[0], setPopupParams = _d[1];
    function openPopup(params) {
        setIsPopupOpen(true);
        setPopupParams(params);
    }
    function closePopup() {
        setBeenClosed(true);
        setIsPopupOpen(false);
        setPopupParams({});
    }
    var memoisedValue = (0, react_1.useMemo)(function () {
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
    return ((0, jsx_runtime_1.jsx)(exports.PopupContext.Provider, tslib_1.__assign({ value: memoisedValue }, { children: children })));
}
exports.PopupContextProvider = PopupContextProvider;
var usePopup = function () { return (0, react_1.useContext)(exports.PopupContext); };
exports.usePopup = usePopup;
//# sourceMappingURL=PopupProvider.js.map