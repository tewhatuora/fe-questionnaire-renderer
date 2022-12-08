import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { Outlet } from 'react-router-dom';
import { useFormData } from '../FormDataProvider';
import { useQuestionnaire } from '../QuestionnaireProvider';
export default function FormWizard() {
    var formData = useFormData().formData;
    var questionnaire = useQuestionnaire().questionnaire;
    if (!questionnaire || !formData)
        return null;
    return (_jsx("form", __assign({ className: 'form', onSubmit: function (e) { return e.preventDefault(); } }, { children: _jsx(Outlet, {}) })));
}
//# sourceMappingURL=FormWizard.js.map