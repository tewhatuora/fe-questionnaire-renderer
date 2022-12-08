import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
export var LoadingIds;
(function (LoadingIds) {
    LoadingIds["formData"] = "formData";
    LoadingIds["formDataRefetch"] = "formDataRefetch";
    LoadingIds["submit"] = "submit";
})(LoadingIds || (LoadingIds = {}));
var initialState = {
    cmsData: false,
    formData: false,
    formDataRefetch: false,
    formSandbox: false,
    submit: false,
    verifyUser: false
};
export var LoadingContext = createContext({});
function isLoading(loadingState) {
    return Object.values(loadingState).filter(Boolean).some(Boolean);
}
export function LoadingProvider(_a) {
    var callbackLoading = _a.callbackLoading, children = _a.children, useLoadingOverlay = _a.useLoadingOverlay;
    var _b = useState(initialState), loadingState = _b[0], setLoadingState = _b[1];
    useEffect(function () {
        if (callbackLoading) {
            callbackLoading(isLoading(loadingState));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loadingState]);
    var memoisedValue = useMemo(function () {
        var setNewLoadingState = function (newLoadingState) {
            setLoadingState(function (prev) {
                var _a;
                return __assign(__assign({}, prev), (_a = {}, _a[newLoadingState.id] = newLoadingState.isLoading, _a));
            });
        };
        return {
            loading: isLoading(loadingState),
            setLoading: setNewLoadingState
        };
    }, [loadingState]); // Need to state the different attributes for the shallow compare
    return (_jsxs(LoadingContext.Provider, __assign({ value: memoisedValue }, { children: [memoisedValue.loading && useLoadingOverlay ? (_jsx("div", __assign({ className: 'overlay' }, { children: _jsxs("div", __assign({ className: 'loader' }, { children: [_jsx("div", { className: 'shadow' }), _jsx("div", { className: 'box' })] })) }))) : null, children] })));
}
export var useLoading = function () { return useContext(LoadingContext); };
//# sourceMappingURL=LoadingProvider.js.map