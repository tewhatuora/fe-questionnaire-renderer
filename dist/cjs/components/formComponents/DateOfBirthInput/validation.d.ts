export declare function validateDateWithinRange(value: string | undefined): "Error, select a valid date" | undefined;
export declare function useDateValidator(dayError: string | undefined, monthError: string | undefined, yearError: string | undefined): (date: string) => string | undefined;
export declare function validateDatePart(value: string, min: number, max: number): boolean;
export declare function validateDay(day: string, month: string, year: string, required: boolean): "Error, please enter the date of birth day" | "Error, enter a valid date of birth" | undefined;
export declare function validateMonth(day: string, month: string, year: string, required: boolean): "Error, please enter the date of birth month" | undefined;
export declare function validateYear(day: string, month: string, year: string, required: boolean): "Error, please enter the date of birth year" | undefined;
