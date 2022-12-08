import { IQuestionnaire, IQuestionnaire_Item } from '../../types/fhir';
export declare function buildPathFirstPage(items: IQuestionnaire_Item[], currentPath: string): string;
export declare function findFirstPage(quest: IQuestionnaire): string;
