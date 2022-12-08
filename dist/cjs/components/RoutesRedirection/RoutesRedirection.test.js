"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_router_dom_1 = require("react-router-dom");
var componentWrappers_1 = require("../../testHelpers/componentWrappers");
var testUtils_1 = require("../../testHelpers/testUtils");
var FormDataProvider_1 = require("../FormDataProvider");
var QuestionnaireProvider_1 = require("../QuestionnaireProvider");
var _1 = tslib_1.__importDefault(require("."));
var AUTHENTICATED_TEXT = 'Authenticated Route';
var REDIRECT_AUTH_TEXT = 'Redirected to authentication';
var REDIRECT_PRIVACY_TEXT = 'Redirected to privacy';
var mockIsAuthenticated = true;
var mockPrivacyAccepted = true;
var mockUseAuthentication = true;
var mockUsePrivacy = true;
jest.mock('react-router-dom', function () { return (tslib_1.__assign({}, jest.requireActual('react-router-dom'))); });
jest.mock('../CMSProvider', function () { return (tslib_1.__assign(tslib_1.__assign({}, jest.requireActual('../CMSProvider')), { useCMS: function () { return ({
        test: ''
    }); } })); });
describe('RoutesRedirection', function () {
    var RenderAuthRoutes = function (route) {
        return (0, testUtils_1.render)((0, jsx_runtime_1.jsx)(react_router_dom_1.Routes, { children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Route, tslib_1.__assign({ path: '/', element: (0, jsx_runtime_1.jsx)(QuestionnaireProvider_1.QuestionnaireContext.Provider, tslib_1.__assign({ value: tslib_1.__assign(tslib_1.__assign({}, componentWrappers_1.defaultQuestionnaireProviderProps), { formInitialPagePath: route, submitQuestionnaireData: function () { return undefined; } }) }, { children: (0, jsx_runtime_1.jsx)(FormDataProvider_1.FormDataContext.Provider, tslib_1.__assign({}, {
                        value: {
                            formData: {
                                privacyAgreementAccepted: mockPrivacyAccepted
                            },
                            refetchFormData: jest.fn()
                        }
                    }, { children: (0, jsx_runtime_1.jsx)(_1.default, { basePath: '', currentPath: route, isAuthenticated: mockIsAuthenticated, unauthenticatedPaths: ['/'], useAuthentication: mockUseAuthentication, useLandingPage: true, usePartialSubmit: false, usePrivacyAgreementPage: mockUsePrivacy }) })) })) }, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: 'auth', element: REDIRECT_AUTH_TEXT }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: '/privacy', element: REDIRECT_PRIVACY_TEXT }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: '/form', element: AUTHENTICATED_TEXT }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { index: true, element: AUTHENTICATED_TEXT })] })) }), {
            route: route
        });
    };
    it('renders the protected route when all checks pass', function () {
        mockIsAuthenticated = true;
        mockPrivacyAccepted = true;
        mockUseAuthentication = true;
        RenderAuthRoutes('/form');
        expect(testUtils_1.screen.getByText(AUTHENTICATED_TEXT)).toBeInTheDocument();
    });
    it('redirects to authentication when the user is not authenticated', function () {
        mockIsAuthenticated = false;
        mockPrivacyAccepted = true;
        mockUseAuthentication = true;
        RenderAuthRoutes('/form');
        expect(testUtils_1.screen.getByText(REDIRECT_AUTH_TEXT)).toBeInTheDocument();
    });
    it('redirects to the privacy agreement when the user is has not accepted', function () {
        mockIsAuthenticated = true;
        mockPrivacyAccepted = false;
        mockUseAuthentication = true;
        RenderAuthRoutes('/form');
        expect(testUtils_1.screen.getByText(REDIRECT_PRIVACY_TEXT)).toBeInTheDocument();
    });
    it("redirects to authentication when the user is not authenticated and hasn't accepted the privacy policy", function () {
        mockIsAuthenticated = false;
        mockPrivacyAccepted = false;
        mockUseAuthentication = true;
        RenderAuthRoutes('/form');
        expect(testUtils_1.screen.getByText(REDIRECT_AUTH_TEXT)).toBeInTheDocument();
    });
    it('renders the auth page when trying to get to the privacy page and not authenticated', function () {
        mockIsAuthenticated = false;
        mockPrivacyAccepted = false;
        mockUseAuthentication = true;
        RenderAuthRoutes('/privacy');
        expect(testUtils_1.screen.getByText(REDIRECT_AUTH_TEXT)).toBeInTheDocument();
    });
    it('renders the landing page even if the user is not authenticated and privacy not accepted', function () {
        mockIsAuthenticated = false;
        mockPrivacyAccepted = false;
        mockUseAuthentication = true;
        RenderAuthRoutes('/');
        expect(testUtils_1.screen.getByText(AUTHENTICATED_TEXT)).toBeInTheDocument();
    });
    it('renders form if no need for auth and privacy', function () {
        mockIsAuthenticated = false;
        mockPrivacyAccepted = false;
        mockUseAuthentication = false;
        mockUsePrivacy = false;
        RenderAuthRoutes('/');
        expect(testUtils_1.screen.getByText(AUTHENTICATED_TEXT)).toBeInTheDocument();
    });
});
//# sourceMappingURL=RoutesRedirection.test.js.map