"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var dayjs_1 = tslib_1.__importDefault(require("dayjs"));
var customParseFormat_1 = tslib_1.__importDefault(require("dayjs/plugin/customParseFormat"));
var relativeTime_1 = tslib_1.__importDefault(require("dayjs/plugin/relativeTime"));
var timezone_1 = tslib_1.__importDefault(require("dayjs/plugin/timezone"));
var utc_1 = tslib_1.__importDefault(require("dayjs/plugin/utc"));
dayjs_1.default.extend(utc_1.default);
dayjs_1.default.extend(timezone_1.default);
dayjs_1.default.tz.setDefault('Pacific/Auckland');
dayjs_1.default.extend(relativeTime_1.default);
dayjs_1.default.extend(customParseFormat_1.default);
function dayTz(date, format, strict) {
    return dayjs_1.default.tz((0, dayjs_1.default)(date, format, strict));
}
exports.default = dayTz;
//# sourceMappingURL=daytz.js.map