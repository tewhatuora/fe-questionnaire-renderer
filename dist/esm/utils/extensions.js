/* eslint-disable no-underscore-dangle */
import { ContactPointSystemKind } from '../types/fhir';
export function getExtension(item, extensionId) {
    return item.extension
        ? item.extension.find(function (e) { return e.id === extensionId; })
        : undefined;
}
export function isExtension(item, extensionId) {
    return item.extension && !!getExtension(item, extensionId);
}
export function isPhoneExtension(input) {
    return (input.extension &&
        !!input.extension.find(function (e) {
            return e.valueContactDetail &&
                e.valueContactDetail.telecom &&
                e.valueContactDetail.telecom.find(function (vcd) { return vcd.system === ContactPointSystemKind._phone; });
        }));
}
//# sourceMappingURL=extensions.js.map