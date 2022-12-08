/// <reference types="react" />
import { ButtonVariantTypes } from '../../types';
interface Props {
    children: JSX.Element;
}
export declare enum PopupType {
    confirmation = "confirmation",
    error = "error"
}
export interface PopupParams {
    buttonType?: ButtonVariantTypes;
    confirmButtonText?: string;
    dismissButtonText?: string;
    resetButtonText?: string;
    message?: string;
    title?: string;
    type?: PopupType;
    onConfirm?(): void;
    onDismiss?(): void;
    onReset?(): void;
    onRetry?(): void;
}
export interface PopupContextType {
    beenClosed: boolean;
    isPopupOpen: boolean;
    popupParams: PopupParams;
    callPopup(popupParams: PopupParams): void;
    closePopup(): void;
    onConfirm?(): void;
    onDismiss?(): void;
    onReset?(): void;
    onRetry?(): void;
}
export declare const PopupContext: import("react").Context<PopupContextType>;
export declare function PopupContextProvider({ children }: Props): JSX.Element;
export declare const usePopup: () => PopupContextType;
export {};
