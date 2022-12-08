import { ChangeEvent } from 'react';
import { DatePart } from './types';
interface Props {
    datePart: DatePart;
    hasError: boolean;
    label: string;
    max?: number;
    min?: number;
    name: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    required?: boolean;
    setDatePart: (partialDay: Partial<DatePart>) => void;
}
declare const DateOfBirthSplit: import("react").ForwardRefExoticComponent<Props & import("react").RefAttributes<HTMLInputElement>>;
export default DateOfBirthSplit;
