/// <reference types="react" />
import { FormInputComponents, Input } from '../../../types';
interface Props {
    inputComponents?: FormInputComponents;
    inputs: Input[];
}
export default function FormStepInputs({ inputComponents, inputs }: Props): JSX.Element | null;
export {};
