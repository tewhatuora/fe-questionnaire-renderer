/// <reference types="react" />
import { AccordionButtonFontSizes, AccordionDetailBackgroundColors } from '../../../types';
export interface AccordionData {
    buttonFontSize?: AccordionButtonFontSizes;
    detailBackgroundColor?: AccordionDetailBackgroundColors;
    details?: string | JSX.Element;
    id: string;
    summary: string | JSX.Element;
    variantClassName?: string;
}
export interface AccordionProps {
    data: AccordionData[];
}
export default function Accordion({ data }: AccordionProps): JSX.Element;
