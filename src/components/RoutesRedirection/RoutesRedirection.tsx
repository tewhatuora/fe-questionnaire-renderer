import get from 'lodash.get'
import { useEffect, useState } from 'react'
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom'

import { authPath, formPath, privacyPath } from '../../QuestionnaireRenderer'
import { privacyAgreementAcceptedKey } from '../../types/constants'
import { useCMS } from '../CMSProvider'
import { useFormData } from '../FormDataProvider'
import { useQuestionnaire } from '../QuestionnaireProvider'

interface Props {
  basePath: string
  currentPath: string
  isAuthenticated: boolean
  unauthenticatedPaths: string[]
  useAuthentication: boolean
  useLandingPage: boolean
  usePartialSubmit: boolean
  usePrivacyAgreementPage: boolean
}

export default function RoutesRedirection({
  basePath,
  currentPath,
  isAuthenticated,
  unauthenticatedPaths,
  useAuthentication,
  useLandingPage,
  usePartialSubmit,
  usePrivacyAgreementPage
}: Props): JSX.Element | null {
  const cms = useCMS()
  const { formData, refetchFormData } = useFormData()
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { questionnaire } = useQuestionnaire()

  // If the path has changed in the main application, need to change the value in the lib router
  useEffect(() => {
    if (pathname !== currentPath) navigate(currentPath)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPath])

  const [completedInitialLoad, setCompletedInitialLoad] = useState(false)

  // If we first load the site from any path in the form we won't have any user or formData yet.
  // This lets us request then wait for existing formData for the current device before we
  // decide to redirect to authentication or not
  useEffect(() => {
    if (!formData && usePartialSubmit) {
      refetchFormData().then(() => setCompletedInitialLoad(true))
    }
  }, [formData, refetchFormData, usePartialSubmit])

  // If the questionnaire or the CMS are not defined, navigate back to the main app landing page
  if (!cms || !questionnaire) {
    return <Navigate to={basePath} />
  }

  // If the landing page doesn't exist, redirect to the next first page
  if (pathname === basePath && !useLandingPage) {
    return <Navigate to={formPath()} />
  }

  const hasAcceptedPrivacyAgreement = get(formData, privacyAgreementAcceptedKey)

  // If the form data if undefined
  if (!formData && usePartialSubmit && !completedInitialLoad) {
    // Wait until it's loaded
    return null
  }

  // If trying to get to a page that doesn't need auth or privacy to be checked
  if (unauthenticatedPaths.includes(pathname)) {
    return <Outlet />
  }

  // If the user is not authenticated, redirects to auth page
  if (useAuthentication && !isAuthenticated) {
    if (pathname !== authPath() && pathname !== `/${authPath()}`)
      return <Navigate to={authPath()} />
    return <Outlet />
  }

  // If the user hasn't accepted the privacy, redirects to the privacy agreement page
  if (usePrivacyAgreementPage && !hasAcceptedPrivacyAgreement) {
    if (pathname !== privacyPath() && pathname !== `/${privacyPath()}`)
      return <Navigate to={privacyPath()} />
    return <Outlet />
  }

  return <Outlet />
}
