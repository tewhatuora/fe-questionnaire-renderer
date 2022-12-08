import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllProviders from '../components/AllProviders';
import FormWizard, { FormStep } from '../components/FormWizard';
import FourOhFour from '../components/FourOhFour';
import PrivacyAgreement from '../components/PrivacyAgreement';
import Reviews from '../components/Review/Reviews';
import ScrollToTop from '../components/ScrollToTop';
import buildLink from '../utils/buildLink';
function formStepChildPath(child, args) {
    return buildLink(__assign(__assign({}, args), { path: child }));
}
export function authPath() {
    return formStepChildPath('auth');
}
export function completedPath() {
    return formStepChildPath('completed');
}
export function formPath() {
    return formStepChildPath('form');
}
export function fourOhFourPath() {
    return formStepChildPath('404');
}
export function privacyPath() {
    return formStepChildPath('privacy');
}
export function questionnaireFormPath(path) {
    return "".concat(formPath()).concat(path ? "/".concat(path) : '');
}
export function reviewPath() {
    return formStepChildPath('review');
}
function QuestionnaireRenderer(props) {
    var basePath = props.basePath, CompletedPage = props.CompletedPage, _a = props.endFlowPath, endFlowPath = _a === void 0 ? '' : _a, formInputComponents = props.formInputComponents, LandingPage = props.LandingPage, _b = props.privacyAgreementPageContent, privacyAgreementPageContent = _b === void 0 ? _jsx("div", {}) : _b, privacyAgreementInput = props.privacyAgreementInput, _c = props.useCompletedPage, useCompletedPage = _c === void 0 ? false : _c, _d = props.useFourOhFour, useFourOhFour = _d === void 0 ? false : _d, _e = props.useReviewPage, useReviewPage = _e === void 0 ? false : _e;
    var formStepProps = {
        basePath: basePath,
        inputComponents: formInputComponents,
        useCompletedPage: useCompletedPage,
        useReviewPage: useReviewPage
    };
    return (_jsx(Router, { children: _jsx(ScrollToTop, { children: _jsx(Routes, { children: _jsxs(Route, __assign({ path: basePath, element: _jsx(AllProviders, __assign({}, props)) }, { children: [LandingPage && _jsx(Route, { index: true, element: LandingPage }), privacyAgreementInput && (_jsx(Route, { path: privacyPath(), element: _jsx(PrivacyAgreement, { basePath: basePath, input: privacyAgreementInput, pageContent: privacyAgreementPageContent }) })), _jsxs(Route, __assign({ path: formPath(), element: _jsx(FormWizard, {}) }, { children: [_jsx(Route, { index: true, element: _jsx(FormStep, __assign({}, formStepProps)) }), _jsxs(Route, __assign({ path: formStepChildPath(':stepId') }, { children: [_jsxs(Route, __assign({ path: ':pageId', element: _jsx(FormStep, __assign({}, formStepProps)) }, { children: [_jsx(Route, { path: ':arrayIndex', element: _jsx(FormStep, __assign({}, formStepProps)) }), _jsx(Route, { path: '', element: _jsx(FormStep, __assign({}, formStepProps)) })] })), _jsx(Route, { path: '', element: _jsx(FormStep, __assign({}, formStepProps)) })] })), _jsx(Route, { path: '', element: _jsx(FormStep, __assign({}, formStepProps)) })] })), useReviewPage && (_jsx(Route, { path: reviewPath(), element: _jsx(Reviews, { basePath: basePath, nextPage: useCompletedPage ? completedPath() : endFlowPath }) })), useCompletedPage && (_jsx(Route, { path: completedPath(), element: CompletedPage })), useFourOhFour && (_jsxs(_Fragment, { children: [_jsx(Route, { path: fourOhFourPath(), element: _jsx(FourOhFour, { basePath: basePath }) }), _jsx(Route, { path: '*', element: _jsx(FourOhFour, { basePath: basePath }) })] }))] })) }) }) }));
}
export default QuestionnaireRenderer;
//# sourceMappingURL=QuestionnaireRenderer.js.map