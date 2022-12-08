"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var QuestionnaireRenderer_1 = require("../../../QuestionnaireRenderer");
var types_1 = require("../../../types");
var questionnaire_1 = require("../../../utils/questionnaire");
var FormDataProvider_1 = require("../../FormDataProvider");
var QuestionnaireProvider_1 = require("../../QuestionnaireProvider");
var __1 = require("..");
function NavigationButtons(_a) {
    var basePath = _a.basePath, useCompletedPage = _a.useCompletedPage, useReviewPage = _a.useReviewPage;
    var formData = (0, FormDataProvider_1.useFormData)().formData;
    var _b = (0, react_router_dom_1.useLocation)(), pathname = _b.pathname, state = _b.state;
    var params = (0, react_router_dom_1.useParams)();
    var questionnaire = (0, QuestionnaireProvider_1.useQuestionnaire)().questionnaire;
    var _c = (0, react_1.useState)(false), inEditReview = _c[0], setInEditReview = _c[1];
    (0, react_1.useEffect)(function () {
        if (state && state.editFromReview) {
            setInEditReview(true);
        }
        else {
            setInEditReview(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);
    function createButton(content, path, shouldValidate) {
        if (shouldValidate === void 0) { shouldValidate = true; }
        return ((0, jsx_runtime_1.jsx)(__1.LinkAsButton, { content: content, to: path, buttonAttributes: {
                variant: types_1.ButtonVariantTypes.primary,
                shouldValidate: shouldValidate
            } }));
    }
    function getNextButtonComponent() {
        var nextPageUrl = (0, questionnaire_1.buildPageUrl)({
            params: params,
            questionnaire: questionnaire,
            formData: formData,
            isNext: true
        });
        if (inEditReview) {
            return createButton('Save and return to review', "".concat(basePath, "/").concat((0, QuestionnaireRenderer_1.reviewPath)()));
        }
        if (nextPageUrl)
            return createButton('Continue', "".concat(basePath, "/").concat(nextPageUrl));
        var hasGroups = questionnaire &&
            questionnaire.item &&
            questionnaire.item.find(function (i) { return !!i.item; });
        // Goes in review only if there is groups to display
        if (hasGroups && useReviewPage) {
            return createButton('Review', "".concat(basePath, "/").concat((0, QuestionnaireRenderer_1.reviewPath)()));
        }
        if (useCompletedPage)
            return createButton('Submit', "".concat(basePath, "/").concat((0, QuestionnaireRenderer_1.completedPath)()));
        return createButton('End form', basePath);
    }
    var getPreviousButtonComponent = function () {
        var previousPageUrl = (0, questionnaire_1.buildPageUrl)({
            params: params,
            questionnaire: questionnaire,
            formData: formData,
            isNext: false
        });
        if (previousPageUrl) {
            return ((0, jsx_runtime_1.jsx)(__1.LinkAsButton, { className: 'form-back-link back-arrow-link', content: 'Back', to: "".concat(basePath, "/").concat(previousPageUrl) }));
        }
        return null;
    };
    return ((0, jsx_runtime_1.jsxs)("div", tslib_1.__assign({ className: 'button-group' }, { children: [getNextButtonComponent(), getPreviousButtonComponent()] })));
}
exports.default = NavigationButtons;
//# sourceMappingURL=NavigationButtons.js.map