/// <reference types="react" />
import { Input } from '../../../types';
interface Props {
    children: JSX.Element;
    className?: string;
    customDisplayError?: boolean;
    customErrorMessage?: string;
    error?: string;
    fieldName?: string;
    input: Input;
    isInvalid: boolean;
    transparentMode?: boolean;
}
export default function FormGroupWrapper({ children, className, customDisplayError, customErrorMessage, error, fieldName, input, isInvalid, transparentMode }: Props): JSX.Element;
export {};
