import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import AllProviders, { MainProps } from '../components/AllProviders'
import FormWizard, { FormStep } from '../components/FormWizard'
import FourOhFour from '../components/FourOhFour'
import PrivacyAgreement from '../components/PrivacyAgreement'
import Reviews from '../components/Review/Reviews'
import ScrollToTop from '../components/ScrollToTop'
import buildLink, { BuildLinkArgs } from '../utils/buildLink'

type PathArgs = Omit<BuildLinkArgs, 'path'>

function formStepChildPath(child: string, args?: PathArgs): string {
  return buildLink({ ...args, path: child })
}

export function authPath(): string {
  return formStepChildPath('auth')
}

export function completedPath(): string {
  return formStepChildPath('completed')
}

export function formPath(): string {
  return formStepChildPath('form')
}

export function fourOhFourPath(): string {
  return formStepChildPath('404')
}

export function privacyPath(): string {
  return formStepChildPath('privacy')
}

export function questionnaireFormPath(path?: string) {
  return `${formPath()}${path ? `/${path}` : ''}`
}

export function reviewPath(): string {
  return formStepChildPath('review')
}

function QuestionnaireRenderer(props: MainProps) {
  const {
    basePath,
    CompletedPage,
    endFlowPath = '',
    formInputComponents,
    LandingPage,
    privacyAgreementPageContent = <div />,
    privacyAgreementInput,
    useCompletedPage = false,
    useFourOhFour = false,
    useReviewPage = false
  } = props

  const formStepProps = {
    basePath,
    inputComponents: formInputComponents,
    useCompletedPage,
    useReviewPage
  }

  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route path={basePath} element={<AllProviders {...props} />}>
            {LandingPage && <Route index element={LandingPage} />}
            {privacyAgreementInput && (
              <Route
                path={privacyPath()}
                element={
                  <PrivacyAgreement
                    basePath={basePath}
                    input={privacyAgreementInput}
                    pageContent={privacyAgreementPageContent}
                  />
                }
              />
            )}

            <Route path={formPath()} element={<FormWizard />}>
              <Route index element={<FormStep {...formStepProps} />} />
              <Route path={formStepChildPath(':stepId')}>
                <Route path=':pageId' element={<FormStep {...formStepProps} />}>
                  <Route
                    path=':arrayIndex'
                    element={<FormStep {...formStepProps} />}
                  />
                  <Route path='' element={<FormStep {...formStepProps} />} />
                </Route>
                <Route path='' element={<FormStep {...formStepProps} />} />
              </Route>
              <Route path='' element={<FormStep {...formStepProps} />} />
            </Route>

            {useReviewPage && (
              <Route
                path={reviewPath()}
                element={
                  <Reviews
                    basePath={basePath}
                    nextPage={useCompletedPage ? completedPath() : endFlowPath}
                  />
                }
              />
            )}

            {useCompletedPage && (
              <Route path={completedPath()} element={CompletedPage} />
            )}

            {useFourOhFour && (
              <>
                <Route
                  path={fourOhFourPath()}
                  element={<FourOhFour basePath={basePath} />}
                />
                <Route path='*' element={<FourOhFour basePath={basePath} />} />
              </>
            )}
          </Route>
        </Routes>
      </ScrollToTop>
    </Router>
  )
}

export default QuestionnaireRenderer
