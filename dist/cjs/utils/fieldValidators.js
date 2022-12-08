"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getValidationFunction = exports.validateTrueValue = exports.validateForbiddenCharacters = exports.validateDateMaxPeriod = exports.validateBasicRequired = void 0;
var tslib_1 = require("tslib");
var dayjs_1 = tslib_1.__importDefault(require("dayjs"));
var types_1 = require("../types");
var extensions_1 = require("./extensions");
var defaultPeriod = 7;
// Required fields validation
function validateBasicRequired(_a) {
    var _b;
    var extension = _a.extension, value = _a.value;
    var extensionMessage = (extension === null || extension === void 0 ? void 0 : extension.extension) &&
        ((_b = (0, extensions_1.getExtension)(extension, types_1.ValidationExtensions.validationRequired)) === null || _b === void 0 ? void 0 : _b.valueString);
    var valMessage = extensionMessage || 'Required';
    if (value === undefined || value === null || value.length === 0)
        return valMessage;
    if ((typeof value === 'string' || value instanceof String) &&
        value.trim() === '') {
        return valMessage;
    }
    return undefined;
}
exports.validateBasicRequired = validateBasicRequired;
// Date period validation
function validateDateMaxPeriod(_a) {
    var _b;
    var extension = _a.extension, value = _a.value;
    var ext = (extension === null || extension === void 0 ? void 0 : extension.extension) &&
        (0, extensions_1.getExtension)(extension, types_1.ValidationExtensions.validationDateMaxPeriod);
    if (!ext)
        return;
    var valueString = ext.valueString, valExt = ext.extension;
    var period = (valExt &&
        ((_b = (0, extensions_1.getExtension)(extension, types_1.ValidationExtensions.validationDateMaxPeriodValue)) === null || _b === void 0 ? void 0 : _b.valueInteger)) ||
        defaultPeriod;
    if ((0, dayjs_1.default)(value).isBefore((0, dayjs_1.default)().subtract(period, 'day'))) {
        return valueString || 'Select a correct date';
    }
    return undefined;
}
exports.validateDateMaxPeriod = validateDateMaxPeriod;
// Forbidden characters validation
function validateForbiddenCharacters(_a) {
    var _b;
    var extension = _a.extension, value = _a.value;
    var extensionMessage = (extension === null || extension === void 0 ? void 0 : extension.extension) &&
        ((_b = (0, extensions_1.getExtension)(extension, types_1.ValidationExtensions.validationForbiddenCharacters)) === null || _b === void 0 ? void 0 : _b.valueString);
    if (value && value.match(/[${}%]/g)) {
        return (extensionMessage ||
            'Invalid input, please remove special characters like $, %');
    }
    return undefined;
}
exports.validateForbiddenCharacters = validateForbiddenCharacters;
// Value where true is the only option validation
function validateTrueValue(_a) {
    var _b;
    var extension = _a.extension, value = _a.value;
    var extensionMessage = (extension === null || extension === void 0 ? void 0 : extension.extension) &&
        ((_b = (0, extensions_1.getExtension)(extension, types_1.ValidationExtensions.validationTrueValue)) === null || _b === void 0 ? void 0 : _b.valueString);
    var valMessage = extensionMessage || 'Required';
    if (!value)
        return valMessage;
    return undefined;
}
exports.validateTrueValue = validateTrueValue;
function pipeFunctions(previousFunction, newFunction, extension) {
    return function (props) {
        var prev = previousFunction && previousFunction(props);
        return prev || newFunction(tslib_1.__assign(tslib_1.__assign({}, props), { extension: extension }));
    };
}
// Returns the validation function or the concatenation of validation functions based on extensions
function getValidationFunction(input) {
    var extension = input.extension && (0, extensions_1.getExtension)(input, types_1.Extensions.validationExtension);
    var func;
    if (input.required) {
        func = function (props) {
            return validateBasicRequired(tslib_1.__assign(tslib_1.__assign({}, props), { extension: extension }));
        };
    }
    if (!extension || !extension.extension)
        return func;
    if ((0, extensions_1.getExtension)(extension, types_1.ValidationExtensions.validationDateMaxPeriod)) {
        func = pipeFunctions(func, validateDateMaxPeriod, extension);
    }
    if ((0, extensions_1.getExtension)(extension, types_1.ValidationExtensions.validationForbiddenCharacters)) {
        func = pipeFunctions(func, validateForbiddenCharacters, extension);
    }
    if ((0, extensions_1.getExtension)(extension, types_1.ValidationExtensions.validationTrueValue)) {
        func = pipeFunctions(func, validateTrueValue, extension);
    }
    return func;
}
exports.getValidationFunction = getValidationFunction;
//# sourceMappingURL=fieldValidators.js.map