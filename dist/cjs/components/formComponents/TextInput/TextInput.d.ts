import { InputHTMLAttributes } from 'react';
import { Input } from '../../../types';
interface InputProps {
    input: Input;
    InputComponent?: (props: InputHTMLAttributes<HTMLTextAreaElement | HTMLInputElement>) => JSX.Element;
    transparentMode?: boolean;
}
declare function TextInput({ input, InputComponent, transparentMode }: InputProps): JSX.Element;
export default TextInput;
