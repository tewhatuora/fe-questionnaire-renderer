/// <reference types="react" />
import { Input } from '../../../types';
interface InputProps {
    input: Input;
    transparentMode?: boolean;
    type: 'radio' | 'checkbox';
}
export default function SelectorGroupWrapper(props: InputProps): JSX.Element | null;
export {};
