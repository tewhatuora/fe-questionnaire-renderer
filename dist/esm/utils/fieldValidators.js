import { __assign } from "tslib";
import dayjs from 'dayjs';
import { Extensions, ValidationExtensions } from '../types';
import { getExtension } from './extensions';
var defaultPeriod = 7;
// Required fields validation
export function validateBasicRequired(_a) {
    var _b;
    var extension = _a.extension, value = _a.value;
    var extensionMessage = (extension === null || extension === void 0 ? void 0 : extension.extension) &&
        ((_b = getExtension(extension, ValidationExtensions.validationRequired)) === null || _b === void 0 ? void 0 : _b.valueString);
    var valMessage = extensionMessage || 'Required';
    if (value === undefined || value === null || value.length === 0)
        return valMessage;
    if ((typeof value === 'string' || value instanceof String) &&
        value.trim() === '') {
        return valMessage;
    }
    return undefined;
}
// Date period validation
export function validateDateMaxPeriod(_a) {
    var _b;
    var extension = _a.extension, value = _a.value;
    var ext = (extension === null || extension === void 0 ? void 0 : extension.extension) &&
        getExtension(extension, ValidationExtensions.validationDateMaxPeriod);
    if (!ext)
        return;
    var valueString = ext.valueString, valExt = ext.extension;
    var period = (valExt &&
        ((_b = getExtension(extension, ValidationExtensions.validationDateMaxPeriodValue)) === null || _b === void 0 ? void 0 : _b.valueInteger)) ||
        defaultPeriod;
    if (dayjs(value).isBefore(dayjs().subtract(period, 'day'))) {
        return valueString || 'Select a correct date';
    }
    return undefined;
}
// Forbidden characters validation
export function validateForbiddenCharacters(_a) {
    var _b;
    var extension = _a.extension, value = _a.value;
    var extensionMessage = (extension === null || extension === void 0 ? void 0 : extension.extension) &&
        ((_b = getExtension(extension, ValidationExtensions.validationForbiddenCharacters)) === null || _b === void 0 ? void 0 : _b.valueString);
    if (value && value.match(/[${}%]/g)) {
        return (extensionMessage ||
            'Invalid input, please remove special characters like $, %');
    }
    return undefined;
}
// Value where true is the only option validation
export function validateTrueValue(_a) {
    var _b;
    var extension = _a.extension, value = _a.value;
    var extensionMessage = (extension === null || extension === void 0 ? void 0 : extension.extension) &&
        ((_b = getExtension(extension, ValidationExtensions.validationTrueValue)) === null || _b === void 0 ? void 0 : _b.valueString);
    var valMessage = extensionMessage || 'Required';
    if (!value)
        return valMessage;
    return undefined;
}
function pipeFunctions(previousFunction, newFunction, extension) {
    return function (props) {
        var prev = previousFunction && previousFunction(props);
        return prev || newFunction(__assign(__assign({}, props), { extension: extension }));
    };
}
// Returns the validation function or the concatenation of validation functions based on extensions
export function getValidationFunction(input) {
    var extension = input.extension && getExtension(input, Extensions.validationExtension);
    var func;
    if (input.required) {
        func = function (props) {
            return validateBasicRequired(__assign(__assign({}, props), { extension: extension }));
        };
    }
    if (!extension || !extension.extension)
        return func;
    if (getExtension(extension, ValidationExtensions.validationDateMaxPeriod)) {
        func = pipeFunctions(func, validateDateMaxPeriod, extension);
    }
    if (getExtension(extension, ValidationExtensions.validationForbiddenCharacters)) {
        func = pipeFunctions(func, validateForbiddenCharacters, extension);
    }
    if (getExtension(extension, ValidationExtensions.validationTrueValue)) {
        func = pipeFunctions(func, validateTrueValue, extension);
    }
    return func;
}
//# sourceMappingURL=fieldValidators.js.map