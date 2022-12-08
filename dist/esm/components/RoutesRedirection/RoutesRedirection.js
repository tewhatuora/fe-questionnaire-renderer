import { jsx as _jsx } from "react/jsx-runtime";
import get from 'lodash.get';
import { useEffect, useState } from 'react';
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { authPath, formPath, privacyPath } from '../../QuestionnaireRenderer';
import { privacyAgreementAcceptedKey } from '../../types/constants';
import { useCMS } from '../CMSProvider';
import { useFormData } from '../FormDataProvider';
import { useQuestionnaire } from '../QuestionnaireProvider';
export default function RoutesRedirection(_a) {
    var basePath = _a.basePath, currentPath = _a.currentPath, isAuthenticated = _a.isAuthenticated, unauthenticatedPaths = _a.unauthenticatedPaths, useAuthentication = _a.useAuthentication, useLandingPage = _a.useLandingPage, usePartialSubmit = _a.usePartialSubmit, usePrivacyAgreementPage = _a.usePrivacyAgreementPage;
    var cms = useCMS();
    var _b = useFormData(), formData = _b.formData, refetchFormData = _b.refetchFormData;
    var pathname = useLocation().pathname;
    var navigate = useNavigate();
    var questionnaire = useQuestionnaire().questionnaire;
    // If the path has changed in the main application, need to change the value in the lib router
    useEffect(function () {
        if (pathname !== currentPath)
            navigate(currentPath);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPath]);
    var _c = useState(false), completedInitialLoad = _c[0], setCompletedInitialLoad = _c[1];
    // If we first load the site from any path in the form we won't have any user or formData yet.
    // This lets us request then wait for existing formData for the current device before we
    // decide to redirect to authentication or not
    useEffect(function () {
        if (!formData && usePartialSubmit) {
            refetchFormData().then(function () { return setCompletedInitialLoad(true); });
        }
    }, [formData, refetchFormData, usePartialSubmit]);
    // If the questionnaire or the CMS are not defined, navigate back to the main app landing page
    if (!cms || !questionnaire) {
        return _jsx(Navigate, { to: basePath });
    }
    // If the landing page doesn't exist, redirect to the next first page
    if (pathname === basePath && !useLandingPage) {
        return _jsx(Navigate, { to: formPath() });
    }
    var hasAcceptedPrivacyAgreement = get(formData, privacyAgreementAcceptedKey);
    // If the form data if undefined
    if (!formData && usePartialSubmit && !completedInitialLoad) {
        // Wait until it's loaded
        return null;
    }
    // If trying to get to a page that doesn't need auth or privacy to be checked
    if (unauthenticatedPaths.includes(pathname)) {
        return _jsx(Outlet, {});
    }
    // If the user is not authenticated, redirects to auth page
    if (useAuthentication && !isAuthenticated) {
        if (pathname !== authPath() && pathname !== "/".concat(authPath()))
            return _jsx(Navigate, { to: authPath() });
        return _jsx(Outlet, {});
    }
    // If the user hasn't accepted the privacy, redirects to the privacy agreement page
    if (usePrivacyAgreementPage && !hasAcceptedPrivacyAgreement) {
        if (pathname !== privacyPath() && pathname !== "/".concat(privacyPath()))
            return _jsx(Navigate, { to: privacyPath() });
        return _jsx(Outlet, {});
    }
    return _jsx(Outlet, {});
}
//# sourceMappingURL=RoutesRedirection.js.map