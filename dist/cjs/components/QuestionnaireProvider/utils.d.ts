import { Input, Questionnaire } from '../../types';
import { IQuestionnaire, IQuestionnaire_Item } from '../../types/fhir';
export declare function getIndexRepeatable(items: IQuestionnaire_Item[], id: string, index: number): number;
export declare function enrichItemData(item: IQuestionnaire_Item[], linkIdWithParent?: string, index?: string): Input[];
export declare function enrichQuestionnaireData(quest: IQuestionnaire): Questionnaire;
