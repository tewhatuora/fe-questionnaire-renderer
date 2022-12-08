/// <reference types="react" />
import { FormValues } from '../../types';
import { IQuestionnaireResponse } from '../../types/fhir';
export interface FormDataContextProps {
    formData: FormValues | undefined;
    getFormValue(name: string): any;
    refetchFormData(): Promise<any>;
    setFormData(val: FormValues): void;
    setFormValue(name: string, value: any): void;
    transformFormValues(): IQuestionnaireResponse;
}
export declare const FormDataContext: import("react").Context<FormDataContextProps>;
interface Props {
    children: JSX.Element;
    partialSubmit(): Promise<any>;
    usePartialSubmit: boolean;
}
export declare function FormDataProvider({ children, partialSubmit, usePartialSubmit }: Props): JSX.Element;
export declare const useFormData: () => FormDataContextProps;
export {};
