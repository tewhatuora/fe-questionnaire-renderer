import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { completedPath, reviewPath } from '../../../QuestionnaireRenderer';
import { ButtonVariantTypes } from '../../../types';
import { buildPageUrl } from '../../../utils/questionnaire';
import { useFormData } from '../../FormDataProvider';
import { useQuestionnaire } from '../../QuestionnaireProvider';
import { LinkAsButton } from '..';
export default function NavigationButtons(_a) {
    var basePath = _a.basePath, useCompletedPage = _a.useCompletedPage, useReviewPage = _a.useReviewPage;
    var formData = useFormData().formData;
    var _b = useLocation(), pathname = _b.pathname, state = _b.state;
    var params = useParams();
    var questionnaire = useQuestionnaire().questionnaire;
    var _c = useState(false), inEditReview = _c[0], setInEditReview = _c[1];
    useEffect(function () {
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
        return (_jsx(LinkAsButton, { content: content, to: path, buttonAttributes: {
                variant: ButtonVariantTypes.primary,
                shouldValidate: shouldValidate
            } }));
    }
    function getNextButtonComponent() {
        var nextPageUrl = buildPageUrl({
            params: params,
            questionnaire: questionnaire,
            formData: formData,
            isNext: true
        });
        if (inEditReview) {
            return createButton('Save and return to review', "".concat(basePath, "/").concat(reviewPath()));
        }
        if (nextPageUrl)
            return createButton('Continue', "".concat(basePath, "/").concat(nextPageUrl));
        var hasGroups = questionnaire &&
            questionnaire.item &&
            questionnaire.item.find(function (i) { return !!i.item; });
        // Goes in review only if there is groups to display
        if (hasGroups && useReviewPage) {
            return createButton('Review', "".concat(basePath, "/").concat(reviewPath()));
        }
        if (useCompletedPage)
            return createButton('Submit', "".concat(basePath, "/").concat(completedPath()));
        return createButton('End form', basePath);
    }
    var getPreviousButtonComponent = function () {
        var previousPageUrl = buildPageUrl({
            params: params,
            questionnaire: questionnaire,
            formData: formData,
            isNext: false
        });
        if (previousPageUrl) {
            return (_jsx(LinkAsButton, { className: 'form-back-link back-arrow-link', content: 'Back', to: "".concat(basePath, "/").concat(previousPageUrl) }));
        }
        return null;
    };
    return (_jsxs("div", __assign({ className: 'button-group' }, { children: [getNextButtonComponent(), getPreviousButtonComponent()] })));
}
//# sourceMappingURL=NavigationButtons.js.map