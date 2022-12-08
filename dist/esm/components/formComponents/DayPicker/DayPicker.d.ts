/// <reference types="react" />
import { Input } from '../../../types';
export interface DayPickerProps {
    input: Input;
    children?(handleDateChange: (date: any) => void): JSX.Element;
}
export default function DayPicker({ children, input }: DayPickerProps): JSX.Element;
