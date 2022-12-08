/// <reference types="react" />
interface Props {
    children: JSX.Element;
}
export interface FormErrorsContextType {
    formErrors: Error[];
    resetErrors(): void;
    setFormError(name: string, message: string, addError?: boolean): void;
}
export declare const FormErrorsContext: import("react").Context<FormErrorsContextType>;
export interface Error {
    name: string;
    message: string;
}
export declare function FormErrorsProvider({ children }: Props): JSX.Element;
export declare const useFormErrors: () => FormErrorsContextType;
export {};
