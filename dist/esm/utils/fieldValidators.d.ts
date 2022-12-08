import { Input, ValidateFieldProps } from '../types';
export declare function validateBasicRequired({ extension, value }: ValidateFieldProps): string | undefined;
export declare function validateDateMaxPeriod({ extension, value }: ValidateFieldProps): string | undefined;
export declare function validateForbiddenCharacters({ extension, value }: ValidateFieldProps): string | undefined;
export declare function validateTrueValue({ extension, value }: ValidateFieldProps): string | undefined;
type ValidationFunction = (props: ValidateFieldProps) => string | undefined;
export declare function getValidationFunction(input: Input): ValidationFunction | undefined;
export {};
