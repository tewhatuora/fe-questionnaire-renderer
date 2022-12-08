"use strict";
/* eslint-disable no-underscore-dangle */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPhoneExtension = exports.isExtension = exports.getExtension = void 0;
var fhir_1 = require("../types/fhir");
function getExtension(item, extensionId) {
    return item.extension
        ? item.extension.find(function (e) { return e.id === extensionId; })
        : undefined;
}
exports.getExtension = getExtension;
function isExtension(item, extensionId) {
    return item.extension && !!getExtension(item, extensionId);
}
exports.isExtension = isExtension;
function isPhoneExtension(input) {
    return (input.extension &&
        !!input.extension.find(function (e) {
            return e.valueContactDetail &&
                e.valueContactDetail.telecom &&
                e.valueContactDetail.telecom.find(function (vcd) { return vcd.system === fhir_1.ContactPointSystemKind._phone; });
        }));
}
exports.isPhoneExtension = isPhoneExtension;
//# sourceMappingURL=extensions.js.map