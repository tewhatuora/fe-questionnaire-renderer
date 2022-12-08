import { FormValues } from '../types';
import { IQuestionnaire_EnableWhen, Questionnaire_ItemEnableBehaviorKind } from '../types/fhir';
export default function verifyEnableWhen(values: FormValues, ews: IQuestionnaire_EnableWhen[], enableBehavior?: Questionnaire_ItemEnableBehaviorKind): boolean;
