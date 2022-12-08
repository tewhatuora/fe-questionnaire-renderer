import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
/* eslint-disable react/no-unused-prop-types */
import { QueryClientProvider } from 'react-query';
import queryClient from '../../utils/queryClient';
import { CMSProvider } from '../CMSProvider';
import { defaultPartialSubmitQuery, FormDataProvider } from '../FormDataProvider';
import { FormErrorsProvider } from '../FormErrorsProvider';
import { FormTouchedProvider } from '../FormTouchedProvider';
import { LoadingProvider } from '../LoadingProvider';
import MaintenancePage, { defaultMaintenanceModeQuery } from '../MaintenancePage';
import { PopupContextProvider } from '../PopupProvider';
import { QuestionnaireProvider } from '../QuestionnaireProvider';
import RoutesRedirection from '../RoutesRedirection';
function AllProviders(props) {
    var basePath = props.basePath, _a = props.cmsData, cmsData = _a === void 0 ? {} : _a, _b = props.cmsFallback, cmsFallback = _b === void 0 ? {} : _b, currentPath = props.currentPath, _c = props.isAuthenticated, isAuthenticated = _c === void 0 ? false : _c, _d = props.maintenanceModeQuery, maintenanceModeQuery = _d === void 0 ? defaultMaintenanceModeQuery : _d, _e = props.maintenancePollInterval, maintenancePollInterval = _e === void 0 ? 60000 : _e, _f = props.partialSubmitQuery, partialSubmitQuery = _f === void 0 ? defaultPartialSubmitQuery : _f, questionnaireData = props.questionnaireData, _g = props.unauthenticatedPaths, unauthenticatedPaths = _g === void 0 ? [] : _g, _h = props.useAuthentication, useAuthentication = _h === void 0 ? false : _h, _j = props.useCMS, useCMS = _j === void 0 ? false : _j, _k = props.useLandingPage, useLandingPage = _k === void 0 ? false : _k, _l = props.useLoadingOverlay, useLoadingOverlay = _l === void 0 ? false : _l, _m = props.useMaintenancePage, useMaintenancePage = _m === void 0 ? false : _m, _o = props.usePartialSubmit, usePartialSubmit = _o === void 0 ? false : _o, _p = props.usePrivacyAgreementPage, usePrivacyAgreementPage = _p === void 0 ? false : _p, callbackLoading = props.callbackLoading, submitQuestionnaire = props.submitQuestionnaire;
    return (_jsx(MaintenancePage, __assign({ getMaintenanceMode: maintenanceModeQuery, pollInterval: maintenancePollInterval, useMaintenancePage: useMaintenancePage }, { children: _jsx(QueryClientProvider, __assign({ client: queryClient }, { children: _jsx(LoadingProvider, __assign({ callbackLoading: callbackLoading, useLoadingOverlay: useLoadingOverlay }, { children: _jsx(PopupContextProvider, { children: _jsx(QuestionnaireProvider, __assign({ questionnaireData: questionnaireData, submitQuestionnaire: submitQuestionnaire }, { children: _jsx(CMSProvider, __assign({ cmsData: cmsData, cmsFallback: cmsFallback, useCMS: useCMS }, { children: _jsx(FormDataProvider, __assign({ partialSubmit: partialSubmitQuery, usePartialSubmit: usePartialSubmit }, { children: _jsx(FormErrorsProvider, { children: _jsx(FormTouchedProvider, { children: _jsx(RoutesRedirection, { currentPath: currentPath, basePath: basePath, isAuthenticated: isAuthenticated, unauthenticatedPaths: unauthenticatedPaths, useAuthentication: useAuthentication, useLandingPage: useLandingPage, usePartialSubmit: usePartialSubmit, usePrivacyAgreementPage: usePrivacyAgreementPage }) }) }) })) })) })) }) })) })) })));
}
export default AllProviders;
//# sourceMappingURL=AllProviders.js.map