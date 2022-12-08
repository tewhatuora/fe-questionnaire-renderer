/* eslint-disable react/no-unused-prop-types */

import { QueryClientProvider } from 'react-query'

import { CMSContextProps, FormInputComponents, Input } from '../../types'
import { IQuestionnaire, IQuestionnaireResponse } from '../../types/fhir'
import queryClient from '../../utils/queryClient'
import { CMSProvider } from '../CMSProvider'
import {
  defaultPartialSubmitQuery,
  FormDataProvider
} from '../FormDataProvider'
import { FormErrorsProvider } from '../FormErrorsProvider'
import { FormTouchedProvider } from '../FormTouchedProvider'
import { LoadingProvider } from '../LoadingProvider'
import MaintenancePage, {
  defaultMaintenanceModeQuery,
  MaintenanceData
} from '../MaintenancePage'
import { PopupContextProvider } from '../PopupProvider'
import { QuestionnaireProvider } from '../QuestionnaireProvider'
import RoutesRedirection from '../RoutesRedirection'

export interface MainProps {
  basePath: string
  cmsData?: CMSContextProps
  cmsFallback?: CMSContextProps
  CompletedPage?: JSX.Element
  currentPath: string
  endFlowPath?: string
  formInputComponents?: FormInputComponents
  isAuthenticated?: boolean
  LandingPage?: JSX.Element
  maintenancePollInterval?: number
  privacyAgreementPageContent?: JSX.Element
  privacyAgreementInput?: Input
  questionnaireData: IQuestionnaire
  unauthenticatedPaths?: string[]
  useCMS?: boolean
  useAuthentication?: boolean
  useCompletedPage?: boolean
  useFourOhFour?: boolean
  useLandingPage?: boolean
  useLoadingOverlay?: boolean
  useMaintenancePage?: boolean
  usePartialSubmit: boolean
  usePrivacyAgreementPage?: boolean
  useReviewPage: boolean
  callbackLoading?(isLoading: boolean): void
  maintenanceModeQuery?(): Promise<MaintenanceData>
  partialSubmitQuery?(): Promise<any> // TODO: define type when partial query will be in usage
  submitQuestionnaire(questionnaire: IQuestionnaireResponse): Promise<any> // TODO: define type when submit query will be in usage
}

function AllProviders(props: MainProps) {
  const {
    basePath,
    cmsData = {},
    cmsFallback = {},
    currentPath,
    isAuthenticated = false,
    maintenanceModeQuery = defaultMaintenanceModeQuery,
    maintenancePollInterval = 60000,
    partialSubmitQuery = defaultPartialSubmitQuery,
    questionnaireData,
    unauthenticatedPaths = [],
    useAuthentication = false,
    useCMS = false,
    useLandingPage = false,
    useLoadingOverlay = false,
    useMaintenancePage = false,
    usePartialSubmit = false,
    usePrivacyAgreementPage = false,
    callbackLoading,
    submitQuestionnaire
  } = props

  return (
    <MaintenancePage
      getMaintenanceMode={maintenanceModeQuery}
      pollInterval={maintenancePollInterval}
      useMaintenancePage={useMaintenancePage}
    >
      <QueryClientProvider client={queryClient}>
        <LoadingProvider
          callbackLoading={callbackLoading}
          useLoadingOverlay={useLoadingOverlay}
        >
          <PopupContextProvider>
            <QuestionnaireProvider
              questionnaireData={questionnaireData}
              submitQuestionnaire={submitQuestionnaire}
            >
              <CMSProvider
                cmsData={cmsData}
                cmsFallback={cmsFallback}
                useCMS={useCMS}
              >
                <FormDataProvider
                  partialSubmit={partialSubmitQuery}
                  usePartialSubmit={usePartialSubmit}
                >
                  <FormErrorsProvider>
                    <FormTouchedProvider>
                      <RoutesRedirection
                        currentPath={currentPath}
                        basePath={basePath}
                        isAuthenticated={isAuthenticated}
                        unauthenticatedPaths={unauthenticatedPaths}
                        useAuthentication={useAuthentication}
                        useLandingPage={useLandingPage}
                        usePartialSubmit={usePartialSubmit}
                        usePrivacyAgreementPage={usePrivacyAgreementPage}
                      />
                    </FormTouchedProvider>
                  </FormErrorsProvider>
                </FormDataProvider>
              </CMSProvider>
            </QuestionnaireProvider>
          </PopupContextProvider>
        </LoadingProvider>
      </QueryClientProvider>
    </MaintenancePage>
  )
}

export default AllProviders
