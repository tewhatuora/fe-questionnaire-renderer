/// <reference types="react" />
import { AddressAutocompleteInputProps, Input } from '../../../types';
export interface ESamAutocompleteInputProps {
    input: Input;
    isInvalid: boolean;
    AutocompleteComponent(props: AddressAutocompleteInputProps): JSX.Element;
    validateField(value?: any, setError?: boolean, resetError?: boolean): string | undefined;
}
declare function AutocompleteInput({ AutocompleteComponent, input, isInvalid, validateField }: ESamAutocompleteInputProps): JSX.Element;
export default AutocompleteInput;
