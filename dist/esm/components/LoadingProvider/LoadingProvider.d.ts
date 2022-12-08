/// <reference types="react" />
export declare enum LoadingIds {
    formData = "formData",
    formDataRefetch = "formDataRefetch",
    submit = "submit"
}
export interface NewLoadingState {
    id: LoadingIds;
    isLoading: boolean;
}
export interface LoadingContextProps {
    loading: boolean;
    setLoading(newLoadingState: NewLoadingState): void;
}
export declare const LoadingContext: import("react").Context<LoadingContextProps>;
interface Props {
    children: JSX.Element;
    useLoadingOverlay: boolean;
    callbackLoading?(loading: boolean): void;
}
export declare function LoadingProvider({ callbackLoading, children, useLoadingOverlay }: Props): JSX.Element;
export declare const useLoading: () => LoadingContextProps;
export {};
