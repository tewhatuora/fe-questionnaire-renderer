"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewPath = exports.questionnaireFormPath = exports.privacyPath = exports.fourOhFourPath = exports.formPath = exports.completedPath = exports.authPath = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_router_dom_1 = require("react-router-dom");
var AllProviders_1 = tslib_1.__importDefault(require("../components/AllProviders"));
var FormWizard_1 = tslib_1.__importStar(require("../components/FormWizard"));
var FourOhFour_1 = tslib_1.__importDefault(require("../components/FourOhFour"));
var PrivacyAgreement_1 = tslib_1.__importDefault(require("../components/PrivacyAgreement"));
var Reviews_1 = tslib_1.__importDefault(require("../components/Review/Reviews"));
var ScrollToTop_1 = tslib_1.__importDefault(require("../components/ScrollToTop"));
var buildLink_1 = tslib_1.__importDefault(require("../utils/buildLink"));
function formStepChildPath(child, args) {
    return (0, buildLink_1.default)(tslib_1.__assign(tslib_1.__assign({}, args), { path: child }));
}
function authPath() {
    return formStepChildPath('auth');
}
exports.authPath = authPath;
function completedPath() {
    return formStepChildPath('completed');
}
exports.completedPath = completedPath;
function formPath() {
    return formStepChildPath('form');
}
exports.formPath = formPath;
function fourOhFourPath() {
    return formStepChildPath('404');
}
exports.fourOhFourPath = fourOhFourPath;
function privacyPath() {
    return formStepChildPath('privacy');
}
exports.privacyPath = privacyPath;
function questionnaireFormPath(path) {
    return "".concat(formPath()).concat(path ? "/".concat(path) : '');
}
exports.questionnaireFormPath = questionnaireFormPath;
function reviewPath() {
    return formStepChildPath('review');
}
exports.reviewPath = reviewPath;
function QuestionnaireRenderer(props) {
    var basePath = props.basePath, CompletedPage = props.CompletedPage, _a = props.endFlowPath, endFlowPath = _a === void 0 ? '' : _a, formInputComponents = props.formInputComponents, LandingPage = props.LandingPage, _b = props.privacyAgreementPageContent, privacyAgreementPageContent = _b === void 0 ? (0, jsx_runtime_1.jsx)("div", {}) : _b, privacyAgreementInput = props.privacyAgreementInput, _c = props.useCompletedPage, useCompletedPage = _c === void 0 ? false : _c, _d = props.useFourOhFour, useFourOhFour = _d === void 0 ? false : _d, _e = props.useReviewPage, useReviewPage = _e === void 0 ? false : _e;
    var formStepProps = {
        basePath: basePath,
        inputComponents: formInputComponents,
        useCompletedPage: useCompletedPage,
        useReviewPage: useReviewPage
    };
    return ((0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { children: (0, jsx_runtime_1.jsx)(ScrollToTop_1.default, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Routes, { children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Route, tslib_1.__assign({ path: basePath, element: (0, jsx_runtime_1.jsx)(AllProviders_1.default, tslib_1.__assign({}, props)) }, { children: [LandingPage && (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { index: true, element: LandingPage }), privacyAgreementInput && ((0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: privacyPath(), element: (0, jsx_runtime_1.jsx)(PrivacyAgreement_1.default, { basePath: basePath, input: privacyAgreementInput, pageContent: privacyAgreementPageContent }) })), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Route, tslib_1.__assign({ path: formPath(), element: (0, jsx_runtime_1.jsx)(FormWizard_1.default, {}) }, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { index: true, element: (0, jsx_runtime_1.jsx)(FormWizard_1.FormStep, tslib_1.__assign({}, formStepProps)) }), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Route, tslib_1.__assign({ path: formStepChildPath(':stepId') }, { children: [(0, jsx_runtime_1.jsxs)(react_router_dom_1.Route, tslib_1.__assign({ path: ':pageId', element: (0, jsx_runtime_1.jsx)(FormWizard_1.FormStep, tslib_1.__assign({}, formStepProps)) }, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: ':arrayIndex', element: (0, jsx_runtime_1.jsx)(FormWizard_1.FormStep, tslib_1.__assign({}, formStepProps)) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: '', element: (0, jsx_runtime_1.jsx)(FormWizard_1.FormStep, tslib_1.__assign({}, formStepProps)) })] })), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: '', element: (0, jsx_runtime_1.jsx)(FormWizard_1.FormStep, tslib_1.__assign({}, formStepProps)) })] })), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: '', element: (0, jsx_runtime_1.jsx)(FormWizard_1.FormStep, tslib_1.__assign({}, formStepProps)) })] })), useReviewPage && ((0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: reviewPath(), element: (0, jsx_runtime_1.jsx)(Reviews_1.default, { basePath: basePath, nextPage: useCompletedPage ? completedPath() : endFlowPath }) })), useCompletedPage && ((0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: completedPath(), element: CompletedPage })), useFourOhFour && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: fourOhFourPath(), element: (0, jsx_runtime_1.jsx)(FourOhFour_1.default, { basePath: basePath }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: '*', element: (0, jsx_runtime_1.jsx)(FourOhFour_1.default, { basePath: basePath }) })] }))] })) }) }) }));
}
exports.default = QuestionnaireRenderer;
//# sourceMappingURL=QuestionnaireRenderer.js.map