import { Input, Questionnaire } from '../types';
export declare function getExtension(item: Input | Questionnaire, extensionId: string): import("../types/fhir").IExtension | undefined;
export declare function isExtension(item: Input | Questionnaire, extensionId: string): boolean | undefined;
export declare function isPhoneExtension(input: Input): boolean | undefined;
