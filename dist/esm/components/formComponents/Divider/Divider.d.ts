/// <reference types="react" />
import { Input } from '../../../types';
export interface DividerProps {
    color?: string;
    input: Input;
    transparentMode?: boolean;
}
export default function Divider({ color, input, transparentMode }: DividerProps): JSX.Element;
