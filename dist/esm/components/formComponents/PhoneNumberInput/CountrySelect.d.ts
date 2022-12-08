/// <reference types="react" />
import { Country } from 'react-phone-number-input/input';
import { SingleValue } from 'react-select';
import { Input } from '../../../types';
export interface CountrySelectOption {
    label: string;
    value: Country;
}
export interface CountrySelectProps {
    defaultCountry: CountrySelectOption;
    input: Input;
    name: string;
    labels: {
        [key: string]: string;
    };
    onChange: (value: SingleValue<CountrySelectOption>) => void;
    value: CountrySelectOption;
}
export default function CountrySelect({ defaultCountry, input, name, labels, onChange, value }: CountrySelectProps): JSX.Element;
