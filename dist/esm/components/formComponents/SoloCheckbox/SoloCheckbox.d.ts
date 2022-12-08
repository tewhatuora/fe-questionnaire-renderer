/// <reference types="react" />
import { Input } from '../../../types';
export interface SoloCheckboxProps {
    checked: boolean;
    classNames?: string;
    input: Input;
    value?: any;
    setField?(value: string): void;
}
declare function SoloCheckbox({ checked, classNames, input, setField, value }: SoloCheckboxProps): JSX.Element;
export default SoloCheckbox;
