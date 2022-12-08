/* eslint-disable no-underscore-dangle */
import { __spreadArray } from "tslib";
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
export var API_DATE_FORMAT = 'YYYY-MM-DD';
export var CALENDAR_LABEL_DATE_FORMAT = 'dddd, MMMM D, YYYY';
export var UI_DATE_FORMAT = 'DD/MM/YYYY';
export function formatDate(_a) {
    var date = _a.date, inputFormat = _a.inputFormat, outputFormat = _a.outputFormat;
    dayjs.extend(customParseFormat);
    if (inputFormat) {
        return dayjs(date, inputFormat).format(outputFormat);
    }
    return dayjs(date).format(outputFormat);
}
// Change the dotted notation to a _ notation because of FHIR standards
// A conditional input id is often derived of the parent with a dot, messing with the tree
// e.g 1.1.1 conditional of 1.1 but not a child of 1.1
export var transformToSnake = function (value) { return value.replace(/\./g, '_'); };
export function getId(input) {
    if (!input.linkId)
        return '';
    return transformToSnake(input.linkId);
}
// Flatten the form values object
export function flattenValues(formValues) {
    return Object.assign.apply(Object, __spreadArray([{}], (function flatten(o) {
        return [].concat.apply([], Object.keys(o).map(function (k) {
            var _a;
            return typeof o[k] !== 'object' || Array.isArray(o[k])
                ? (_a = {}, _a[k] = o[k], _a) : flatten(o[k]);
        }));
    })(formValues), false));
}
export function flattenObjectToDotted(res, obj, current) {
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
// Returns an array of all the focusable elements on a page
export function getAllFocusableComponents() {
    var elements = '#reset-focus, a[href], button, input, textarea, select, details';
    return Array.prototype.slice.call(document.querySelectorAll(elements));
}
// Returns a promise for timeouts
export function timeout(ms) {
    // eslint-disable-next-line no-promise-executor-return
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
}
//# sourceMappingURL=utils.js.map