/// <reference types="react" />
import { Input } from '../../../types';
export interface YesNoButtonsProps {
    input: Omit<Input, 'page' | 'type'>;
}
declare function YesNoButtons(props: YesNoButtonsProps): JSX.Element | null;
export default YesNoButtons;
