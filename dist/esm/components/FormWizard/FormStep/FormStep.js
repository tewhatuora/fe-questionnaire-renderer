import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import flatten from 'lodash.flatten';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { ErrorSummary, NavigationButtons, ProgressIndicator } from '../../formComponents';
import { useFormData } from '../../FormDataProvider';
import { useFormErrors } from '../../FormErrorsProvider';
import { useFormTouched } from '../../FormTouchedProvider';
import { useQuestionnaire } from '../../QuestionnaireProvider';
import { getCurrentPageInputs } from '../utils';
import FormStepInputs from './FormStepInputs';
export default function FormStep(_a) {
    var inputComponents = _a.inputComponents, rest = __rest(_a, ["inputComponents"]);
    var formData = useFormData().formData;
    var formErrors = useFormErrors().formErrors;
    var formTouched = useFormTouched().formTouched;
    var params = useParams();
    var questionnaire = useQuestionnaire().questionnaire;
    var form = getCurrentPageInputs(params, formData || {}, questionnaire);
    var formErrorsFiltered = useMemo(function () {
        function inputLinkIds(inputs) {
            return inputs.map(function (i) {
                if (i.item)
                    return inputLinkIds(i.item);
                return i.linkIdWithParent;
            });
        }
        return flatten(inputLinkIds(form))
            .map(function (fii) { return formErrors.find(function (fe) { return fe.name === fii; }); })
            .filter(function (s) { return s && !!formTouched.find(function (ft) { return ft.name === s.name; }); });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [form, formErrors, formTouched]);
    return (_jsxs("div", { children: [_jsx("section", __assign({ className: 'section' }, { children: _jsx(ProgressIndicator, {}) })), _jsxs("section", __assign({ className: 'section' }, { children: [_jsx(ErrorSummary, { formErrorsFiltered: formErrorsFiltered }), _jsx(FormStepInputs, { inputComponents: inputComponents, inputs: form }), _jsx(NavigationButtons, __assign({}, rest))] }))] }));
}
//# sourceMappingURL=FormStep.js.map