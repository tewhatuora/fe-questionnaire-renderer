import { ValidateFieldProps } from '../types';
export interface ErrorsHookType {
    error?: string;
    formErrors: Error[];
    formValue: any;
    hasError: boolean;
    isInvalid: boolean;
    touched?: boolean;
    touchedPaths: string[];
    validateField(value?: any, setError?: boolean, resetError?: boolean, additionalProps?: any): string | undefined;
}
export interface ErrorsProps {
    fieldName?: string;
    useValidationOnMount?: boolean;
    inputValidateField?(props: ValidateFieldProps): string | undefined;
}
export declare function useErrors({ fieldName, inputValidateField, useValidationOnMount }: ErrorsProps): ErrorsHookType;
