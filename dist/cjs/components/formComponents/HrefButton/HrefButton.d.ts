/// <reference types="react" />
import { ButtonAttribute } from '../../../types';
export interface ButtonProps {
    buttonAttributes?: ButtonAttribute;
    target?: string;
}
export default function Button({ buttonAttributes, target }: ButtonProps): JSX.Element;
