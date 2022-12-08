import { FormValues, Input } from '../types';
export declare const API_DATE_FORMAT = "YYYY-MM-DD";
export declare const CALENDAR_LABEL_DATE_FORMAT = "dddd, MMMM D, YYYY";
export declare const UI_DATE_FORMAT = "DD/MM/YYYY";
type DateFormats = typeof API_DATE_FORMAT | typeof CALENDAR_LABEL_DATE_FORMAT | typeof UI_DATE_FORMAT;
export declare function formatDate({ date, inputFormat, outputFormat }: {
    date: string;
    inputFormat?: DateFormats;
    outputFormat: DateFormats;
}): string;
export declare const transformToSnake: (value: string) => string;
export declare function getId(input: Input): string;
export declare function flattenValues(formValues: FormValues): any;
export declare function flattenObjectToDotted(res: string[], obj: any, current: any): void;
export declare function getAllFocusableComponents(): any[];
export declare function timeout(ms: number): Promise<unknown>;
export {};
