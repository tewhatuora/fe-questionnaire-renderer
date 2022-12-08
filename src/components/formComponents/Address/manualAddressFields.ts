/* eslint-disable no-underscore-dangle */

import { Questionnaire_ItemTypeKind } from '../../../types/fhir'

export default function getAddressFields(id: string) {
  return [
    {
      linkIdWithParent: `${id}_addressLine1`,
      text: 'Address line 1',
      type: Questionnaire_ItemTypeKind._string,
      required: true
    },
    {
      linkIdWithParent: `${id}_addressLine2`,
      text: 'Address line 2',
      type: Questionnaire_ItemTypeKind._string,
      required: false
    },
    {
      linkIdWithParent: `${id}_suburb`,
      text: 'Suburb',
      type: Questionnaire_ItemTypeKind._string,
      required: false
    },
    {
      linkIdWithParent: `${id}_city`,
      text: 'City',
      type: Questionnaire_ItemTypeKind._string,
      required: true
    },
    {
      linkIdWithParent: `${id}_postcode`,
      text: 'Postcode',
      type: Questionnaire_ItemTypeKind._string,
      required: true
    }
  ]
}
