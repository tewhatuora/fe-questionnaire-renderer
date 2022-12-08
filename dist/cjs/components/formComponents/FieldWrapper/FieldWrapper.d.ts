/// <reference types="react" />
import { Input } from '../../../types';
interface FieldWrapperChildren {
    'aria-describedby'?: string;
    'aria-invalid': boolean;
    'aria-required'?: boolean;
    className: string;
    fieldName?: string;
    id: string;
    name: string;
    value?: any;
}
interface FieldWrapperProps {
    checked?: boolean;
    className?: string;
    fieldName?: string;
    id: string;
    input: Input;
    isInvalid: boolean;
    mask?: (string | RegExp)[];
    value?: any;
    children(props: FieldWrapperChildren): any;
    validateField(value?: any, setError?: boolean, resetError?: boolean): string | undefined;
}
export default function FieldWrapper({ children, className, fieldName, input, isInvalid, validateField, ...rest }: FieldWrapperProps): JSX.Element;
export {};
