import { __awaiter, __generator } from "tslib";
export default function defaultMaintenanceModeQuery(result) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve) {
                    resolve(result || {
                        data: { inMaintenance: 'false', maintenanceMessage: '' },
                        status: 200
                    });
                })];
        });
    });
}
//# sourceMappingURL=maintenance.js.map