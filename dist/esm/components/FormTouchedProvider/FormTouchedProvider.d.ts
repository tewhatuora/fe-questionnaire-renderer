/// <reference types="react" />
interface Props {
    children: JSX.Element;
}
export interface FormTouchedContextType {
    formTouched: Touched[];
    resetTouched(): void;
    setFormTouched(name: string, setTouch?: boolean): void;
}
export declare const FormTouchedContext: import("react").Context<FormTouchedContextType>;
export interface Touched {
    name: string;
}
export declare function FormTouchedProvider({ children }: Props): JSX.Element;
export declare const useFormTouched: () => FormTouchedContextType;
export {};
