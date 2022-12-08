/// <reference types="react" />
interface CustomCheckboxProps {
    checked: boolean;
    hover: boolean;
    id?: string;
    name: string;
    type: 'checkbox' | 'radio';
    value?: any;
    setFieldValue(name: string, value: any): void;
}
declare const CustomSelector: import("react").ForwardRefExoticComponent<CustomCheckboxProps & import("react").RefAttributes<unknown>>;
export default CustomSelector;
