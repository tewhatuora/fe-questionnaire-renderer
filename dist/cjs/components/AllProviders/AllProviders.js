"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable react/no-unused-prop-types */
var react_query_1 = require("react-query");
var queryClient_1 = tslib_1.__importDefault(require("../../utils/queryClient"));
var CMSProvider_1 = require("../CMSProvider");
var FormDataProvider_1 = require("../FormDataProvider");
var FormErrorsProvider_1 = require("../FormErrorsProvider");
var FormTouchedProvider_1 = require("../FormTouchedProvider");
var LoadingProvider_1 = require("../LoadingProvider");
var MaintenancePage_1 = tslib_1.__importStar(require("../MaintenancePage"));
var PopupProvider_1 = require("../PopupProvider");
var QuestionnaireProvider_1 = require("../QuestionnaireProvider");
var RoutesRedirection_1 = tslib_1.__importDefault(require("../RoutesRedirection"));
function AllProviders(props) {
    var basePath = props.basePath, _a = props.cmsData, cmsData = _a === void 0 ? {} : _a, _b = props.cmsFallback, cmsFallback = _b === void 0 ? {} : _b, currentPath = props.currentPath, _c = props.isAuthenticated, isAuthenticated = _c === void 0 ? false : _c, _d = props.maintenanceModeQuery, maintenanceModeQuery = _d === void 0 ? MaintenancePage_1.defaultMaintenanceModeQuery : _d, _e = props.maintenancePollInterval, maintenancePollInterval = _e === void 0 ? 60000 : _e, _f = props.partialSubmitQuery, partialSubmitQuery = _f === void 0 ? FormDataProvider_1.defaultPartialSubmitQuery : _f, questionnaireData = props.questionnaireData, _g = props.unauthenticatedPaths, unauthenticatedPaths = _g === void 0 ? [] : _g, _h = props.useAuthentication, useAuthentication = _h === void 0 ? false : _h, _j = props.useCMS, useCMS = _j === void 0 ? false : _j, _k = props.useLandingPage, useLandingPage = _k === void 0 ? false : _k, _l = props.useLoadingOverlay, useLoadingOverlay = _l === void 0 ? false : _l, _m = props.useMaintenancePage, useMaintenancePage = _m === void 0 ? false : _m, _o = props.usePartialSubmit, usePartialSubmit = _o === void 0 ? false : _o, _p = props.usePrivacyAgreementPage, usePrivacyAgreementPage = _p === void 0 ? false : _p, callbackLoading = props.callbackLoading, submitQuestionnaire = props.submitQuestionnaire;
    return ((0, jsx_runtime_1.jsx)(MaintenancePage_1.default, tslib_1.__assign({ getMaintenanceMode: maintenanceModeQuery, pollInterval: maintenancePollInterval, useMaintenancePage: useMaintenancePage }, { children: (0, jsx_runtime_1.jsx)(react_query_1.QueryClientProvider, tslib_1.__assign({ client: queryClient_1.default }, { children: (0, jsx_runtime_1.jsx)(LoadingProvider_1.LoadingProvider, tslib_1.__assign({ callbackLoading: callbackLoading, useLoadingOverlay: useLoadingOverlay }, { children: (0, jsx_runtime_1.jsx)(PopupProvider_1.PopupContextProvider, { children: (0, jsx_runtime_1.jsx)(QuestionnaireProvider_1.QuestionnaireProvider, tslib_1.__assign({ questionnaireData: questionnaireData, submitQuestionnaire: submitQuestionnaire }, { children: (0, jsx_runtime_1.jsx)(CMSProvider_1.CMSProvider, tslib_1.__assign({ cmsData: cmsData, cmsFallback: cmsFallback, useCMS: useCMS }, { children: (0, jsx_runtime_1.jsx)(FormDataProvider_1.FormDataProvider, tslib_1.__assign({ partialSubmit: partialSubmitQuery, usePartialSubmit: usePartialSubmit }, { children: (0, jsx_runtime_1.jsx)(FormErrorsProvider_1.FormErrorsProvider, { children: (0, jsx_runtime_1.jsx)(FormTouchedProvider_1.FormTouchedProvider, { children: (0, jsx_runtime_1.jsx)(RoutesRedirection_1.default, { currentPath: currentPath, basePath: basePath, isAuthenticated: isAuthenticated, unauthenticatedPaths: unauthenticatedPaths, useAuthentication: useAuthentication, useLandingPage: useLandingPage, usePartialSubmit: usePartialSubmit, usePrivacyAgreementPage: usePrivacyAgreementPage }) }) }) })) })) })) }) })) })) })));
}
exports.default = AllProviders;
//# sourceMappingURL=AllProviders.js.map