"use strict";
/* eslint-disable no-underscore-dangle */
Object.defineProperty(exports, "__esModule", { value: true });
var fhir_1 = require("../../../types/fhir");
function getAddressFields(id) {
    return [
        {
            linkIdWithParent: "".concat(id, "_addressLine1"),
            text: 'Address line 1',
            type: fhir_1.Questionnaire_ItemTypeKind._string,
            required: true
        },
        {
            linkIdWithParent: "".concat(id, "_addressLine2"),
            text: 'Address line 2',
            type: fhir_1.Questionnaire_ItemTypeKind._string,
            required: false
        },
        {
            linkIdWithParent: "".concat(id, "_suburb"),
            text: 'Suburb',
            type: fhir_1.Questionnaire_ItemTypeKind._string,
            required: false
        },
        {
            linkIdWithParent: "".concat(id, "_city"),
            text: 'City',
            type: fhir_1.Questionnaire_ItemTypeKind._string,
            required: true
        },
        {
            linkIdWithParent: "".concat(id, "_postcode"),
            text: 'Postcode',
            type: fhir_1.Questionnaire_ItemTypeKind._string,
            required: true
        }
    ];
}
exports.default = getAddressFields;
//# sourceMappingURL=manualAddressFields.js.map