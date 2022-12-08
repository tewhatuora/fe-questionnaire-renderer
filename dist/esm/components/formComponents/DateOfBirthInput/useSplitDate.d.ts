import { DatePart, DateState } from './types';
export declare function useDateState(initialValue: DateState): [DateState, (newState: Partial<DateState>) => void];
export declare function useSplitDate(name: string, isRequired: boolean): {
    day: DatePart;
    setDay: (newState: Partial<DateState>) => void;
    month: DatePart;
    setMonth: (newState: Partial<DateState>) => void;
    year: DatePart;
    setYear: (newState: Partial<DateState>) => void;
};
