import { __assign, __awaiter, __generator } from "tslib";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
export default function MaintenancePage(_a) {
    var _this = this;
    var children = _a.children, getMaintenanceMode = _a.getMaintenanceMode, pollInterval = _a.pollInterval, useMaintenancePage = _a.useMaintenancePage;
    var _b = useState(false), maintenanceMode = _b[0], setMaintenanceMode = _b[1];
    var _c = useState('API Unavailable'), maintenanceMessage = _c[0], setMaintenanceMessage = _c[1];
    var setMode = function () { return __awaiter(_this, void 0, void 0, function () {
        var captchaBadge;
        return __generator(this, function (_a) {
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
    useEffect(function () {
        if (!useMaintenancePage)
            return;
        setMode();
        var timer = setInterval(function () { return setMode(); }, pollInterval);
        return function () { return clearInterval(timer); };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    if (!useMaintenancePage)
        return children;
    return maintenanceMode ? (_jsxs(_Fragment, { children: [_jsx("h1", __assign({ className: 'size-h1' }, { children: "This service is currently unavailable" })), _jsx("p", __assign({ className: 'content-card' }, { children: maintenanceMessage }))] })) : (children);
}
//# sourceMappingURL=MaintenancePage.js.map