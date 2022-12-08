"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
function defaultMaintenanceModeQuery(result) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve) {
                    resolve(result || {
                        data: { inMaintenance: 'false', maintenanceMessage: '' },
                        status: 200
                    });
                })];
        });
    });
}
exports.default = defaultMaintenanceModeQuery;
//# sourceMappingURL=maintenance.js.map