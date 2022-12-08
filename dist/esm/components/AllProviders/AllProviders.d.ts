/// <reference types="react" />
import { CMSContextProps, FormInputComponents, Input } from '../../types';
import { IQuestionnaire, IQuestionnaireResponse } from '../../types/fhir';
import { MaintenanceData } from '../MaintenancePage';
export interface MainProps {
    basePath: string;
    cmsData?: CMSContextProps;
    cmsFallback?: CMSContextProps;
    CompletedPage?: JSX.Element;
    currentPath: string;
    endFlowPath?: string;
    formInputComponents?: FormInputComponents;
    isAuthenticated?: boolean;
    LandingPage?: JSX.Element;
    maintenancePollInterval?: number;
    privacyAgreementPageContent?: JSX.Element;
    privacyAgreementInput?: Input;
    questionnaireData: IQuestionnaire;
    unauthenticatedPaths?: string[];
    useCMS?: boolean;
    useAuthentication?: boolean;
    useCompletedPage?: boolean;
    useFourOhFour?: boolean;
    useLandingPage?: boolean;
    useLoadingOverlay?: boolean;
    useMaintenancePage?: boolean;
    usePartialSubmit: boolean;
    usePrivacyAgreementPage?: boolean;
    useReviewPage: boolean;
    callbackLoading?(isLoading: boolean): void;
    maintenanceModeQuery?(): Promise<MaintenanceData>;
    partialSubmitQuery?(): Promise<any>;
    submitQuestionnaire(questionnaire: IQuestionnaireResponse): Promise<any>;
}
declare function AllProviders(props: MainProps): JSX.Element;
export default AllProviders;
