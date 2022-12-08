"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
function MaintenancePage(_a) {
    var _this = this;
    var children = _a.children, getMaintenanceMode = _a.getMaintenanceMode, pollInterval = _a.pollInterval, useMaintenancePage = _a.useMaintenancePage;
    var _b = (0, react_1.useState)(false), maintenanceMode = _b[0], setMaintenanceMode = _b[1];
    var _c = (0, react_1.useState)('API Unavailable'), maintenanceMessage = _c[0], setMaintenanceMessage = _c[1];
    var setMode = function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var captchaBadge;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    captchaBadge = document.querySelector('.grecaptcha-badge');
                    return [4 /*yield*/, getMaintenanceMode()
                            .then(function (mode) {
                            if (maintenanceMode && mode.data.inMaintenance === 'false') {
                                setMaintenanceMode(false);
                                window.location.reload();
                            }
                            else {
                                if (captchaBadge && mode.data.inMaintenance === 'true') {
                                    captchaBadge.style.display = 'none';
                                }
                                setMaintenanceMessage(mode.data.maintenanceMessage);
                                setMaintenanceMode(mode.data.inMaintenance === 'true');
                            }
                        })
                            .catch(function () {
                            if (captchaBadge)
                                captchaBadge.style.display = 'none';
                            setMaintenanceMode(true);
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    (0, react_1.useEffect)(function () {
        if (!useMaintenancePage)
            return;
        setMode();
        var timer = setInterval(function () { return setMode(); }, pollInterval);
        return function () { return clearInterval(timer); };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    if (!useMaintenancePage)
        return children;
    return maintenanceMode ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("h1", tslib_1.__assign({ className: 'size-h1' }, { children: "This service is currently unavailable" })), (0, jsx_runtime_1.jsx)("p", tslib_1.__assign({ className: 'content-card' }, { children: maintenanceMessage }))] })) : (children);
}
exports.default = MaintenancePage;
//# sourceMappingURL=MaintenancePage.js.map