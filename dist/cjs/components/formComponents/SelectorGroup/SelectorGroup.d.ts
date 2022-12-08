/// <reference types="react" />
import { Input } from '../../../types';
interface InputProps {
    input: Input;
    isInvalid: boolean;
    type: 'radio' | 'checkbox';
    setFieldValue(value: string, checked: boolean): void;
    validateField(value?: any, setError?: boolean, resetError?: boolean): string | undefined;
}
export default function SelectorGroup(props: InputProps): JSX.Element | null;
export {};
