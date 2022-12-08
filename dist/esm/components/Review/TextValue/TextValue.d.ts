/// <reference types="react" />
import { Input } from '../../../types';
export interface TextValueProps {
    basePath: string;
    input: Input;
    formatValue?(val: any): string | JSX.Element | undefined;
}
declare function TextValue({ basePath, formatValue, input }: TextValueProps): JSX.Element | null;
export default TextValue;
