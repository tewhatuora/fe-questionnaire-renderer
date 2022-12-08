/// <reference types="react" />
import { CMSContextProps } from '../../types';
export declare const CMSContext: import("react").Context<CMSContextProps>;
interface Props {
    children: JSX.Element;
    cmsData: CMSContextProps;
    cmsFallback: CMSContextProps;
    useCMS: boolean;
}
export declare function CMSProvider({ children, cmsData, cmsFallback, useCMS }: Props): JSX.Element;
export declare const useCMS: () => CMSContextProps;
export {};
