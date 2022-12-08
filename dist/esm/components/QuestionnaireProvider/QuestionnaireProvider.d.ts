/// <reference types="react" />
import { IQuestionnaire, IQuestionnaireResponse } from '../../types/fhir';
export interface QuestionnaireContextProps {
    formInitialPagePath: string;
    questionnaire?: IQuestionnaire;
    addRepeatableItem(id: string): void;
    deleteRepeatableItem(id: string): void;
    setQuestionnaireData(questionnaire: IQuestionnaire): void;
    submitQuestionnaireData(questionnaire: IQuestionnaireResponse, callBack: () => void): void;
}
export declare const QuestionnaireContext: import("react").Context<QuestionnaireContextProps>;
interface Props {
    children: JSX.Element;
    questionnaireData: IQuestionnaire;
    submitQuestionnaire(questionnaire: IQuestionnaireResponse): Promise<any>;
}
export declare function QuestionnaireProvider({ children, questionnaireData, submitQuestionnaire }: Props): JSX.Element;
export declare const useQuestionnaire: () => QuestionnaireContextProps;
export {};
