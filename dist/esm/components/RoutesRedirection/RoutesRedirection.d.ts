/// <reference types="react" />
interface Props {
    basePath: string;
    currentPath: string;
    isAuthenticated: boolean;
    unauthenticatedPaths: string[];
    useAuthentication: boolean;
    useLandingPage: boolean;
    usePartialSubmit: boolean;
    usePrivacyAgreementPage: boolean;
}
export default function RoutesRedirection({ basePath, currentPath, isAuthenticated, unauthenticatedPaths, useAuthentication, useLandingPage, usePartialSubmit, usePrivacyAgreementPage }: Props): JSX.Element | null;
export {};
