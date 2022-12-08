/* eslint-disable no-underscore-dangle */
import { Questionnaire_ItemTypeKind } from '../../../types/fhir';
export default function getAddressFields(id) {
    return [
        {
            linkIdWithParent: "".concat(id, "_addressLine1"),
            text: 'Address line 1',
            type: Questionnaire_ItemTypeKind._string,
            required: true
        },
        {
            linkIdWithParent: "".concat(id, "_addressLine2"),
            text: 'Address line 2',
            type: Questionnaire_ItemTypeKind._string,
            required: false
        },
        {
            linkIdWithParent: "".concat(id, "_suburb"),
            text: 'Suburb',
            type: Questionnaire_ItemTypeKind._string,
            required: false
        },
        {
            linkIdWithParent: "".concat(id, "_city"),
            text: 'City',
            type: Questionnaire_ItemTypeKind._string,
            required: true
        },
        {
            linkIdWithParent: "".concat(id, "_postcode"),
            text: 'Postcode',
            type: Questionnaire_ItemTypeKind._string,
            required: true
        }
    ];
}
//# sourceMappingURL=manualAddressFields.js.map