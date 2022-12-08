import { Questionnaire_ItemTypeKind } from '../../../types/fhir';
export default function getAddressFields(id: string): {
    linkIdWithParent: string;
    text: string;
    type: Questionnaire_ItemTypeKind;
    required: boolean;
}[];
