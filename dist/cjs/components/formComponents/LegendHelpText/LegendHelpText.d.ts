/// <reference types="react" />
import { IQuestionnaire_Item } from '../../../types/fhir';
export interface LegendHelpTextProps {
    className?: string;
    input: IQuestionnaire_Item;
    isFieldSet?: boolean;
    isInvalid: boolean;
    name: string;
}
declare function LegendHelpText({ className, input, isFieldSet, isInvalid, name }: LegendHelpTextProps): JSX.Element | null;
export default LegendHelpText;
