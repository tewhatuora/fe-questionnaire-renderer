import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import get from 'lodash.get';
import { useNavigate } from 'react-router-dom';
import { questionnaireFormPath } from '../../../QuestionnaireRenderer';
import { ButtonVariantTypes } from '../../../types';
import { Button } from '../../formComponents';
import { useFormData } from '../../FormDataProvider';
function TextValue(_a) {
    var _b;
    var basePath = _a.basePath, formatValue = _a.formatValue, input = _a.input;
    var formData = useFormData().formData;
    var navigate = useNavigate();
    var value = get(formData, input.linkIdWithParent || '');
    var formattedValue = value !== undefined && value !== null && formatValue
        ? formatValue(value)
        : value;
    var splitLinkId = (_b = input.linkId) === null || _b === void 0 ? void 0 : _b.split('.');
    var path = splitLinkId === null || splitLinkId === void 0 ? void 0 : splitLinkId.splice(0, splitLinkId.length - 1);
    return (_jsxs("dl", __assign({ className: 'list-review' }, { children: [_jsx("dt", { children: input.text }), _jsx("dd", { children: formattedValue || 'Not answered' }), _jsx("div", __assign({ className: 'flex direction-row margin-bottom-4' }, { children: _jsx(Button, __assign({ ariaLabel: "Edit ".concat(input.text), onClick: function () {
                        return path &&
                            navigate("".concat(basePath, "/").concat(questionnaireFormPath(path.join('/'))), {
                                state: { editFromReview: true }
                            });
                    }, variant: ButtonVariantTypes.edit, type: 'submit' }, { children: "Edit" })) }))] })));
}
export default TextValue;
//# sourceMappingURL=TextValue.js.map