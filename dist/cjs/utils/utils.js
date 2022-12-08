"use strict";
/* eslint-disable no-underscore-dangle */
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeout = exports.getAllFocusableComponents = exports.flattenObjectToDotted = exports.flattenValues = exports.getId = exports.transformToSnake = exports.formatDate = exports.UI_DATE_FORMAT = exports.CALENDAR_LABEL_DATE_FORMAT = exports.API_DATE_FORMAT = void 0;
var tslib_1 = require("tslib");
var dayjs_1 = tslib_1.__importDefault(require("dayjs"));
var customParseFormat_1 = tslib_1.__importDefault(require("dayjs/plugin/customParseFormat"));
exports.API_DATE_FORMAT = 'YYYY-MM-DD';
exports.CALENDAR_LABEL_DATE_FORMAT = 'dddd, MMMM D, YYYY';
exports.UI_DATE_FORMAT = 'DD/MM/YYYY';
function formatDate(_a) {
    var date = _a.date, inputFormat = _a.inputFormat, outputFormat = _a.outputFormat;
    dayjs_1.default.extend(customParseFormat_1.default);
    if (inputFormat) {
        return (0, dayjs_1.default)(date, inputFormat).format(outputFormat);
    }
    return (0, dayjs_1.default)(date).format(outputFormat);
}
exports.formatDate = formatDate;
// Change the dotted notation to a _ notation because of FHIR standards
// A conditional input id is often derived of the parent with a dot, messing with the tree
// e.g 1.1.1 conditional of 1.1 but not a child of 1.1
var transformToSnake = function (value) { return value.replace(/\./g, '_'); };
exports.transformToSnake = transformToSnake;
function getId(input) {
    if (!input.linkId)
        return '';
    return (0, exports.transformToSnake)(input.linkId);
}
exports.getId = getId;
// Flatten the form values object
function flattenValues(formValues) {
    return Object.assign.apply(Object, tslib_1.__spreadArray([{}], (function flatten(o) {
        return [].concat.apply([], Object.keys(o).map(function (k) {
            var _a;
            return typeof o[k] !== 'object' || Array.isArray(o[k])
                ? (_a = {}, _a[k] = o[k], _a) : flatten(o[k]);
        }));
    })(formValues), false));
}
exports.flattenValues = flattenValues;
function flattenObjectToDotted(res, obj, current) {
    Object.keys(obj).forEach(function (key) {
        var value = obj[key];
        var newKey = current ? "".concat(current, ".").concat(key) : key;
        if (value && typeof value === 'object') {
            flattenObjectToDotted(res, value, newKey);
        }
        else if (value !== undefined) {
            res.push(newKey);
        }
    });
}
exports.flattenObjectToDotted = flattenObjectToDotted;
// Returns an array of all the focusable elements on a page
function getAllFocusableComponents() {
    var elements = '#reset-focus, a[href], button, input, textarea, select, details';
    return Array.prototype.slice.call(document.querySelectorAll(elements));
}
exports.getAllFocusableComponents = getAllFocusableComponents;
// Returns a promise for timeouts
function timeout(ms) {
    // eslint-disable-next-line no-promise-executor-return
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
}
exports.timeout = timeout;
//# sourceMappingURL=utils.js.map