"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLoading = exports.LoadingProvider = exports.LoadingContext = exports.LoadingIds = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var LoadingIds;
(function (LoadingIds) {
    LoadingIds["formData"] = "formData";
    LoadingIds["formDataRefetch"] = "formDataRefetch";
    LoadingIds["submit"] = "submit";
})(LoadingIds = exports.LoadingIds || (exports.LoadingIds = {}));
var initialState = {
    cmsData: false,
    formData: false,
    formDataRefetch: false,
    formSandbox: false,
    submit: false,
    verifyUser: false
};
exports.LoadingContext = (0, react_1.createContext)({});
function isLoading(loadingState) {
    return Object.values(loadingState).filter(Boolean).some(Boolean);
}
function LoadingProvider(_a) {
    var callbackLoading = _a.callbackLoading, children = _a.children, useLoadingOverlay = _a.useLoadingOverlay;
    var _b = (0, react_1.useState)(initialState), loadingState = _b[0], setLoadingState = _b[1];
    (0, react_1.useEffect)(function () {
        if (callbackLoading) {
            callbackLoading(isLoading(loadingState));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loadingState]);
    var memoisedValue = (0, react_1.useMemo)(function () {
        var setNewLoadingState = function (newLoadingState) {
            setLoadingState(function (prev) {
                var _a;
                return tslib_1.__assign(tslib_1.__assign({}, prev), (_a = {}, _a[newLoadingState.id] = newLoadingState.isLoading, _a));
            });
        };
        return {
            loading: isLoading(loadingState),
            setLoading: setNewLoadingState
        };
    }, [loadingState]); // Need to state the different attributes for the shallow compare
    return ((0, jsx_runtime_1.jsxs)(exports.LoadingContext.Provider, tslib_1.__assign({ value: memoisedValue }, { children: [memoisedValue.loading && useLoadingOverlay ? ((0, jsx_runtime_1.jsx)("div", tslib_1.__assign({ className: 'overlay' }, { children: (0, jsx_runtime_1.jsxs)("div", tslib_1.__assign({ className: 'loader' }, { children: [(0, jsx_runtime_1.jsx)("div", { className: 'shadow' }), (0, jsx_runtime_1.jsx)("div", { className: 'box' })] })) }))) : null, children] })));
}
exports.LoadingProvider = LoadingProvider;
var useLoading = function () { return (0, react_1.useContext)(exports.LoadingContext); };
exports.useLoading = useLoading;
//# sourceMappingURL=LoadingProvider.js.map