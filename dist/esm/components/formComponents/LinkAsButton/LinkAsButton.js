import { __assign, __awaiter, __generator } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
import { errorSummaryId } from '../../../types/constants';
import { useFormErrors } from '../../FormErrorsProvider';
import { useFormTouched } from '../../FormTouchedProvider';
import { Button } from '..';
function LinkAsButton(props) {
    var _this = this;
    var navigate = useNavigate();
    var formErrors = useFormErrors().formErrors;
    var setFormTouched = useFormTouched().setFormTouched;
    var ariaLabel = props.ariaLabel, buttonAttributes = props.buttonAttributes, className = props.className, content = props.content, to = props.to;
    // Check if the button should be disabled
    var buttonDisabled = (buttonAttributes === null || buttonAttributes === void 0 ? void 0 : buttonAttributes.shouldValidate) && formErrors.length > 0;
    // Creates the `to` attribute for the link based on the values in the input
    var getButtonLink = function () {
        if (buttonDisabled)
            return '';
        return to || '';
    };
    // Defines the onClick function for the button
    var onClick = function () { return __awaiter(_this, void 0, void 0, function () {
        var summary, firstError;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (buttonAttributes === null || buttonAttributes === void 0 ? void 0 : buttonAttributes.shouldValidate) {
                        // Focuses the first error of the page or the error summary
                        if (formErrors.length > 2) {
                            summary = document.getElementById(errorSummaryId);
                            if (summary)
                                summary.scrollIntoView({ block: 'center' });
                        }
                        else if (formErrors.length > 0) {
                            firstError = document.getElementById(formErrors[0].name);
                            if (firstError)
                                firstError.focus();
                        }
                        formErrors.forEach(function (e) { return setFormTouched(e.name); });
                    }
                    if (!buttonAttributes && to)
                        return [2 /*return*/, navigate(getButtonLink())];
                    if (buttonDisabled || !buttonAttributes)
                        return [2 /*return*/, undefined];
                    if (!buttonAttributes.onClick) return [3 /*break*/, 2];
                    return [4 /*yield*/, buttonAttributes
                            .onClick()
                            .then(function () { return navigate(getButtonLink()); })
                            .catch(function () { })];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    navigate(getButtonLink());
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var buildClasses = function () {
        if (className)
            return className;
        var classes = 'button';
        if (buttonAttributes === null || buttonAttributes === void 0 ? void 0 : buttonAttributes.variant) {
            classes += " button-variant-".concat(buttonAttributes.variant);
        }
        return classes;
    };
    return (_jsx("div", __assign({ className: 'form-group' }, { children: _jsx(Button, __assign({ ariaLabel: ariaLabel, className: buildClasses(), type: 'button', onClick: onClick }, { children: (buttonAttributes === null || buttonAttributes === void 0 ? void 0 : buttonAttributes.content) || content })) })));
}
export default LinkAsButton;
//# sourceMappingURL=LinkAsButton.js.map