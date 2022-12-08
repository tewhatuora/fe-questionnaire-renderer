import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
import { ButtonVariantTypes } from '../../types';
import { Button } from '../formComponents';
import { useFormData } from '../FormDataProvider';
import { useQuestionnaire } from '../QuestionnaireProvider';
import Review from './Review';
export default function Reviews(_a) {
    var basePath = _a.basePath, nextPage = _a.nextPage;
    var transformFormValues = useFormData().transformFormValues;
    var navigate = useNavigate();
    var _b = useQuestionnaire(), questionnaire = _b.questionnaire, submitQuestionnaireData = _b.submitQuestionnaireData;
    if (!questionnaire || !questionnaire.item)
        return null;
    function handleSubmit(e) {
        e.preventDefault();
        var response = transformFormValues();
        submitQuestionnaireData(response, function () { return navigate("".concat(basePath, "/").concat(nextPage)); });
    }
    return (_jsxs("form", __assign({ className: 'form', onSubmit: function (e) { return handleSubmit(e); } }, { children: [_jsx("h1", __assign({ className: 'size-h1 page-title' }, { children: "Review" })), questionnaire.item.map(function (i) { return (_jsx(Review, { basePath: basePath, input: i }, i.linkId)); }), _jsx("div", __assign({ className: 'button-group' }, { children: _jsx(Button, __assign({ variant: ButtonVariantTypes.primary, type: 'submit' }, { children: "Submit" })) }))] })));
}
//# sourceMappingURL=Reviews.js.map