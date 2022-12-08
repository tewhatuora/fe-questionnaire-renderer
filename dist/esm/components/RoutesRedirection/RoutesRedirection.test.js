import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Route, Routes } from 'react-router-dom';
import { defaultQuestionnaireProviderProps } from '../../testHelpers/componentWrappers';
import { render, screen } from '../../testHelpers/testUtils';
import { FormDataContext } from '../FormDataProvider';
import { QuestionnaireContext } from '../QuestionnaireProvider';
import RoutesRedirection from '.';
var AUTHENTICATED_TEXT = 'Authenticated Route';
var REDIRECT_AUTH_TEXT = 'Redirected to authentication';
var REDIRECT_PRIVACY_TEXT = 'Redirected to privacy';
var mockIsAuthenticated = true;
var mockPrivacyAccepted = true;
var mockUseAuthentication = true;
var mockUsePrivacy = true;
jest.mock('react-router-dom', function () { return (__assign({}, jest.requireActual('react-router-dom'))); });
jest.mock('../CMSProvider', function () { return (__assign(__assign({}, jest.requireActual('../CMSProvider')), { useCMS: function () { return ({
        test: ''
    }); } })); });
describe('RoutesRedirection', function () {
    var RenderAuthRoutes = function (route) {
        return render(_jsx(Routes, { children: _jsxs(Route, __assign({ path: '/', element: _jsx(QuestionnaireContext.Provider, __assign({ value: __assign(__assign({}, defaultQuestionnaireProviderProps), { formInitialPagePath: route, submitQuestionnaireData: function () { return undefined; } }) }, { children: _jsx(FormDataContext.Provider, __assign({}, {
                        value: {
                            formData: {
                                privacyAgreementAccepted: mockPrivacyAccepted
                            },
                            refetchFormData: jest.fn()
                        }
                    }, { children: _jsx(RoutesRedirection, { basePath: '', currentPath: route, isAuthenticated: mockIsAuthenticated, unauthenticatedPaths: ['/'], useAuthentication: mockUseAuthentication, useLandingPage: true, usePartialSubmit: false, usePrivacyAgreementPage: mockUsePrivacy }) })) })) }, { children: [_jsx(Route, { path: 'auth', element: REDIRECT_AUTH_TEXT }), _jsx(Route, { path: '/privacy', element: REDIRECT_PRIVACY_TEXT }), _jsx(Route, { path: '/form', element: AUTHENTICATED_TEXT }), _jsx(Route, { index: true, element: AUTHENTICATED_TEXT })] })) }), {
            route: route
        });
    };
    it('renders the protected route when all checks pass', function () {
        mockIsAuthenticated = true;
        mockPrivacyAccepted = true;
        mockUseAuthentication = true;
        RenderAuthRoutes('/form');
        expect(screen.getByText(AUTHENTICATED_TEXT)).toBeInTheDocument();
    });
    it('redirects to authentication when the user is not authenticated', function () {
        mockIsAuthenticated = false;
        mockPrivacyAccepted = true;
        mockUseAuthentication = true;
        RenderAuthRoutes('/form');
        expect(screen.getByText(REDIRECT_AUTH_TEXT)).toBeInTheDocument();
    });
    it('redirects to the privacy agreement when the user is has not accepted', function () {
        mockIsAuthenticated = true;
        mockPrivacyAccepted = false;
        mockUseAuthentication = true;
        RenderAuthRoutes('/form');
        expect(screen.getByText(REDIRECT_PRIVACY_TEXT)).toBeInTheDocument();
    });
    it("redirects to authentication when the user is not authenticated and hasn't accepted the privacy policy", function () {
        mockIsAuthenticated = false;
        mockPrivacyAccepted = false;
        mockUseAuthentication = true;
        RenderAuthRoutes('/form');
        expect(screen.getByText(REDIRECT_AUTH_TEXT)).toBeInTheDocument();
    });
    it('renders the auth page when trying to get to the privacy page and not authenticated', function () {
        mockIsAuthenticated = false;
        mockPrivacyAccepted = false;
        mockUseAuthentication = true;
        RenderAuthRoutes('/privacy');
        expect(screen.getByText(REDIRECT_AUTH_TEXT)).toBeInTheDocument();
    });
    it('renders the landing page even if the user is not authenticated and privacy not accepted', function () {
        mockIsAuthenticated = false;
        mockPrivacyAccepted = false;
        mockUseAuthentication = true;
        RenderAuthRoutes('/');
        expect(screen.getByText(AUTHENTICATED_TEXT)).toBeInTheDocument();
    });
    it('renders form if no need for auth and privacy', function () {
        mockIsAuthenticated = false;
        mockPrivacyAccepted = false;
        mockUseAuthentication = false;
        mockUsePrivacy = false;
        RenderAuthRoutes('/');
        expect(screen.getByText(AUTHENTICATED_TEXT)).toBeInTheDocument();
    });
});
//# sourceMappingURL=RoutesRedirection.test.js.map