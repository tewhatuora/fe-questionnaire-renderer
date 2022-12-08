/// <reference types="react" />
import { ButtonAttribute } from '../../../types';
interface InputProps {
    ariaLabel?: string;
    className?: string;
    content?: string | JSX.Element;
    buttonAttributes?: ButtonAttribute;
    to?: string;
}
declare function LinkAsButton(props: InputProps): JSX.Element | null;
export default LinkAsButton;
