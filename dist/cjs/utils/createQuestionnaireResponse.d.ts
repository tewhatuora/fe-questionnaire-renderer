import { FormValues } from '../types';
import { IQuestionnaire, IQuestionnaireResponse } from '../types/fhir';
export default function transformFormValues(questionnaire?: IQuestionnaire, formData?: FormValues): IQuestionnaireResponse;
