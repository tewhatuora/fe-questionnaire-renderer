import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ButtonVariantTypes } from '../../types';
import { CheckboxInput, LinkAsButton } from '../formComponents';
import { useQuestionnaire } from '../QuestionnaireProvider';
export default function PrivacyAgreement(_a) {
    var basePath = _a.basePath, input = _a.input, pageContent = _a.pageContent;
    var formInitialPagePath = useQuestionnaire().formInitialPagePath;
    if (!input)
        return null;
    return (_jsxs("div", __assign({ className: 'form' }, { children: [pageContent, _jsx("section", __assign({ className: 'section' }, { children: _jsxs("form", __assign({ onSubmit: function (e) { return e.preventDefault(); } }, { children: [_jsx(CheckboxInput, { input: input }), _jsx("div", __assign({ className: 'button-group' }, { children: _jsx(LinkAsButton, { content: 'Accept and continue', to: "".concat(basePath, "/").concat(formInitialPagePath), buttonAttributes: {
                                    variant: ButtonVariantTypes.primary,
                                    shouldValidate: true
                                } }) }))] })) }))] })));
}
//# sourceMappingURL=PrivacyAgreement.js.map