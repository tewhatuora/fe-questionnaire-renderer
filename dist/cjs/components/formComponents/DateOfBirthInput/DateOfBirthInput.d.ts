/// <reference types="react" />
import { Input } from '../../../types';
export interface DateInputProps {
    input: Input;
    touchedAuthentication?: boolean;
}
export default function DateInput({ input, touchedAuthentication }: DateInputProps): JSX.Element;
