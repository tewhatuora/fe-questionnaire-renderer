"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var lodash_get_1 = tslib_1.__importDefault(require("lodash.get"));
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var QuestionnaireRenderer_1 = require("../../QuestionnaireRenderer");
var constants_1 = require("../../types/constants");
var CMSProvider_1 = require("../CMSProvider");
var FormDataProvider_1 = require("../FormDataProvider");
var QuestionnaireProvider_1 = require("../QuestionnaireProvider");
function RoutesRedirection(_a) {
    var basePath = _a.basePath, currentPath = _a.currentPath, isAuthenticated = _a.isAuthenticated, unauthenticatedPaths = _a.unauthenticatedPaths, useAuthentication = _a.useAuthentication, useLandingPage = _a.useLandingPage, usePartialSubmit = _a.usePartialSubmit, usePrivacyAgreementPage = _a.usePrivacyAgreementPage;
    var cms = (0, CMSProvider_1.useCMS)();
    var _b = (0, FormDataProvider_1.useFormData)(), formData = _b.formData, refetchFormData = _b.refetchFormData;
    var pathname = (0, react_router_dom_1.useLocation)().pathname;
    var navigate = (0, react_router_dom_1.useNavigate)();
    var questionnaire = (0, QuestionnaireProvider_1.useQuestionnaire)().questionnaire;
    // If the path has changed in the main application, need to change the value in the lib router
    (0, react_1.useEffect)(function () {
        if (pathname !== currentPath)
            navigate(currentPath);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPath]);
    var _c = (0, react_1.useState)(false), completedInitialLoad = _c[0], setCompletedInitialLoad = _c[1];
    // If we first load the site from any path in the form we won't have any user or formData yet.
    // This lets us request then wait for existing formData for the current device before we
    // decide to redirect to authentication or not
    (0, react_1.useEffect)(function () {
        if (!formData && usePartialSubmit) {
            refetchFormData().then(function () { return setCompletedInitialLoad(true); });
        }
    }, [formData, refetchFormData, usePartialSubmit]);
    // If the questionnaire or the CMS are not defined, navigate back to the main app landing page
    if (!cms || !questionnaire) {
        return (0, jsx_runtime_1.jsx)(react_router_dom_1.Navigate, { to: basePath });
    }
    // If the landing page doesn't exist, redirect to the next first page
    if (pathname === basePath && !useLandingPage) {
        return (0, jsx_runtime_1.jsx)(react_router_dom_1.Navigate, { to: (0, QuestionnaireRenderer_1.formPath)() });
    }
    var hasAcceptedPrivacyAgreement = (0, lodash_get_1.default)(formData, constants_1.privacyAgreementAcceptedKey);
    // If the form data if undefined
    if (!formData && usePartialSubmit && !completedInitialLoad) {
        // Wait until it's loaded
        return null;
    }
    // If trying to get to a page that doesn't need auth or privacy to be checked
    if (unauthenticatedPaths.includes(pathname)) {
        return (0, jsx_runtime_1.jsx)(react_router_dom_1.Outlet, {});
    }
    // If the user is not authenticated, redirects to auth page
    if (useAuthentication && !isAuthenticated) {
        if (pathname !== (0, QuestionnaireRenderer_1.authPath)() && pathname !== "/".concat((0, QuestionnaireRenderer_1.authPath)()))
            return (0, jsx_runtime_1.jsx)(react_router_dom_1.Navigate, { to: (0, QuestionnaireRenderer_1.authPath)() });
        return (0, jsx_runtime_1.jsx)(react_router_dom_1.Outlet, {});
    }
    // If the user hasn't accepted the privacy, redirects to the privacy agreement page
    if (usePrivacyAgreementPage && !hasAcceptedPrivacyAgreement) {
        if (pathname !== (0, QuestionnaireRenderer_1.privacyPath)() && pathname !== "/".concat((0, QuestionnaireRenderer_1.privacyPath)()))
            return (0, jsx_runtime_1.jsx)(react_router_dom_1.Navigate, { to: (0, QuestionnaireRenderer_1.privacyPath)() });
        return (0, jsx_runtime_1.jsx)(react_router_dom_1.Outlet, {});
    }
    return (0, jsx_runtime_1.jsx)(react_router_dom_1.Outlet, {});
}
exports.default = RoutesRedirection;
//# sourceMappingURL=RoutesRedirection.js.map