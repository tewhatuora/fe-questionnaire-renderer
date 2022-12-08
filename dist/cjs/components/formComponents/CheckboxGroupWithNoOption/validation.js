"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var lodash_get_1 = tslib_1.__importDefault(require("lodash.get"));
var types_1 = require("../../../types");
var extensions_1 = require("../../../utils/extensions");
function validateCheckboxNoOption(_a) {
    var _b;
    var extension = _a.extension, fieldName = _a.fieldName, formValues = _a.formValues, value = _a.value;
    var extensionMessage = (extension === null || extension === void 0 ? void 0 : extension.extension) &&
        ((_b = (0, extensions_1.getExtension)(extension, types_1.ValidationExtensions.validationRequired)) === null || _b === void 0 ? void 0 : _b.valueString);
    var valMessage = extensionMessage || 'Required';
    var valueNoOption = (0, lodash_get_1.default)(formValues, "".concat(fieldName, "_noOption"));
    if ((!value || value.length === 0) && !valueNoOption)
        return valMessage;
    return undefined;
}
exports.default = validateCheckboxNoOption;
//# sourceMappingURL=validation.js.map