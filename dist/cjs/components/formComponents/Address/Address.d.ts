import { InputHTMLAttributes } from 'react';
import { AddressAutocompleteInputProps, Input } from '../../../types';
export interface AddressProps {
    input: Input;
    AutocompleteComponent?(props: AddressAutocompleteInputProps): JSX.Element;
    TextInputComponent?(props: InputHTMLAttributes<HTMLTextAreaElement | HTMLInputElement>): JSX.Element;
}
declare function Address({ AutocompleteComponent, input, TextInputComponent }: AddressProps): JSX.Element;
export default Address;
