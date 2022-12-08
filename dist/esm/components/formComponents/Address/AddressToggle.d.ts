/// <reference types="react" />
import { Input } from '../../../types';
export interface CustomAddressToggleProps {
    fieldName: string;
    input: Input;
    isInvalid: boolean;
    isAutocomplete: boolean;
    handleToggle(): void;
}
declare function AddressToggle({ fieldName, handleToggle, input, isAutocomplete, isInvalid }: CustomAddressToggleProps): JSX.Element;
export default AddressToggle;
