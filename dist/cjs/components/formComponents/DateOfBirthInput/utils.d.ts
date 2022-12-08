import { DatePart, DateState } from './types';
export declare function createDefaultInput(value: string | undefined): DateState;
export declare function getInitialValues(initialValue: string | undefined): {
    day: DateState;
    month: DateState;
    year: DateState;
};
export declare function dayMax(month: string, year: string): number;
export declare function dateFromParts(day: string, month: string, year: string): string;
export declare function getError(fieldValue: string | undefined, fieldTouched: boolean, day: DatePart, month: DatePart, year: DatePart): {
    source: 'day' | 'month' | 'year' | 'field' | 'none';
    message: string | undefined;
};
