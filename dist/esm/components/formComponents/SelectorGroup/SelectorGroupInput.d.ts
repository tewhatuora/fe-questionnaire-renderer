/// <reference types="react" />
import { InputOption } from '../../../types';
import { IQuestionnaire_Item } from '../../../types/fhir';
interface InputProps {
    fieldName: string;
    id?: string;
    input: IQuestionnaire_Item;
    isInvalid: boolean;
    option: InputOption;
    type: 'radio' | 'checkbox';
    val: any;
    setFieldValue(value: string, checked: boolean): void;
    validateField(value?: any, setError?: boolean, resetError?: boolean): string | undefined;
}
export default function SelectorGroupInput(props: InputProps): JSX.Element | null;
export {};
