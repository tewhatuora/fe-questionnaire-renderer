/// <reference types="react" />
import { FormInputComponents } from '../../../types';
interface Props {
    basePath: string;
    inputComponents?: FormInputComponents;
    useCompletedPage: boolean;
    useReviewPage: boolean;
}
export default function FormStep({ inputComponents, ...rest }: Props): JSX.Element | null;
export {};
