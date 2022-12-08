import { Params } from 'react-router-dom';
import { FormValues, Input, Questionnaire } from '../../types';
import { IQuestionnaire, IQuestionnaire_Item } from '../../types/fhir';
export declare function filterEnabledItems(values: FormValues, quest: IQuestionnaire_Item[]): IQuestionnaire_Item[];
export declare function filterEnabledAndAddRepeat(values: FormValues, quest: IQuestionnaire_Item[]): Input[];
export declare function getCurrentPageInputs(params: Params, values: FormValues, quest?: IQuestionnaire): Input[];
export declare function buildInitialValues(quest: Questionnaire, formData?: FormValues): FormValues;
