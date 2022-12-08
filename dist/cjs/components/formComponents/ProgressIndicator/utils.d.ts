import { Params } from 'react-router-dom';
import { IQuestionnaire } from '../../../types/fhir';
export declare function getStepPageIds(questionnaire: IQuestionnaire): string[];
export declare function getTitlePage(params: Params, quest: IQuestionnaire): string | null;
