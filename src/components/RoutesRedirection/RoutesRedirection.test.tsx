import { Route, Routes } from 'react-router-dom'

import { defaultQuestionnaireProviderProps } from '../../testHelpers/componentWrappers'
import { render, screen } from '../../testHelpers/testUtils'
import { FormDataContext } from '../FormDataProvider'
import { QuestionnaireContext } from '../QuestionnaireProvider'
import RoutesRedirection from '.'

const AUTHENTICATED_TEXT = 'Authenticated Route'
const REDIRECT_AUTH_TEXT = 'Redirected to authentication'
const REDIRECT_PRIVACY_TEXT = 'Redirected to privacy'

let mockIsAuthenticated = true
let mockPrivacyAccepted = true
let mockUseAuthentication = true
let mockUsePrivacy = true

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom')
}))

jest.mock('../CMSProvider', () => ({
  ...jest.requireActual('../CMSProvider'),
  useCMS: () => ({
    test: ''
  })
}))

describe('RoutesRedirection', () => {
  const RenderAuthRoutes = (route: string) =>
    render(
      <Routes>
        <Route
          path='/'
          element={
            <QuestionnaireContext.Provider
              value={{
                ...defaultQuestionnaireProviderProps,
                formInitialPagePath: route,
                submitQuestionnaireData: () => undefined
              }}
            >
              <FormDataContext.Provider
                {...{
                  value: {
                    formData: {
                      privacyAgreementAccepted: mockPrivacyAccepted
                    },
                    refetchFormData: jest.fn()
                  } as any
                }}
              >
                <RoutesRedirection
                  basePath=''
                  currentPath={route}
                  isAuthenticated={mockIsAuthenticated}
                  unauthenticatedPaths={['/']}
                  useAuthentication={mockUseAuthentication}
                  useLandingPage
                  usePartialSubmit={false}
                  usePrivacyAgreementPage={mockUsePrivacy}
                />
              </FormDataContext.Provider>
            </QuestionnaireContext.Provider>
          }
        >
          <Route path='auth' element={REDIRECT_AUTH_TEXT} />
          <Route path='/privacy' element={REDIRECT_PRIVACY_TEXT} />
          <Route path='/form' element={AUTHENTICATED_TEXT} />
          <Route index element={AUTHENTICATED_TEXT} />
        </Route>
      </Routes>,
      {
        route
      }
    )

  it('renders the protected route when all checks pass', () => {
    mockIsAuthenticated = true
    mockPrivacyAccepted = true
    mockUseAuthentication = true
    RenderAuthRoutes('/form')
    expect(screen.getByText(AUTHENTICATED_TEXT)).toBeInTheDocument()
  })

  it('redirects to authentication when the user is not authenticated', () => {
    mockIsAuthenticated = false
    mockPrivacyAccepted = true
    mockUseAuthentication = true
    RenderAuthRoutes('/form')
    expect(screen.getByText(REDIRECT_AUTH_TEXT)).toBeInTheDocument()
  })

  it('redirects to the privacy agreement when the user is has not accepted', () => {
    mockIsAuthenticated = true
    mockPrivacyAccepted = false
    mockUseAuthentication = true
    RenderAuthRoutes('/form')
    expect(screen.getByText(REDIRECT_PRIVACY_TEXT)).toBeInTheDocument()
  })

  it("redirects to authentication when the user is not authenticated and hasn't accepted the privacy policy", () => {
    mockIsAuthenticated = false
    mockPrivacyAccepted = false
    mockUseAuthentication = true
    RenderAuthRoutes('/form')
    expect(screen.getByText(REDIRECT_AUTH_TEXT)).toBeInTheDocument()
  })

  it('renders the auth page when trying to get to the privacy page and not authenticated', () => {
    mockIsAuthenticated = false
    mockPrivacyAccepted = false
    mockUseAuthentication = true
    RenderAuthRoutes('/privacy')
    expect(screen.getByText(REDIRECT_AUTH_TEXT)).toBeInTheDocument()
  })

  it('renders the landing page even if the user is not authenticated and privacy not accepted', () => {
    mockIsAuthenticated = false
    mockPrivacyAccepted = false
    mockUseAuthentication = true
    RenderAuthRoutes('/')
    expect(screen.getByText(AUTHENTICATED_TEXT)).toBeInTheDocument()
  })

  it('renders form if no need for auth and privacy', () => {
    mockIsAuthenticated = false
    mockPrivacyAccepted = false
    mockUseAuthentication = false
    mockUsePrivacy = false
    RenderAuthRoutes('/')
    expect(screen.getByText(AUTHENTICATED_TEXT)).toBeInTheDocument()
  })
})
