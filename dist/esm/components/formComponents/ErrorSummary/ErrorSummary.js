import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ErrorIcon from '../../../images/icons/ErrorIcon';
import { errorSummaryId } from '../../../types/constants';
function ErrorSummary(_a) {
    var formErrorsFiltered = _a.formErrorsFiltered;
    function transformErrorMessage(message) {
        var noError = message.replace('Error, ', '');
        return "".concat(noError.charAt(0).toUpperCase()).concat(noError.slice(1), ".");
    }
    function handleClick(name) {
        var currentError = document.getElementById(name);
        if (currentError) {
            if (currentError.tagName === 'INPUT')
                currentError.focus();
            else
                currentError.scrollIntoView({ block: 'center' });
        }
    }
    // Always returns something, so we can scroll to the component before the list populates
    return (_jsx("div", __assign({ className: formErrorsFiltered.length > 2 ? 'margin-top-6' : '', id: errorSummaryId }, { children: formErrorsFiltered.length > 2 ? (_jsxs("div", __assign({ className: 'error-summary' }, { children: [_jsxs("div", __assign({ className: 'error-summary-title' }, { children: [_jsx(ErrorIcon, {}), _jsx("p", { children: "There are some errors on this page" })] })), formErrorsFiltered.map(function (e) { return (_jsx("button", __assign({ onClick: function () { return handleClick((e === null || e === void 0 ? void 0 : e.name) || ''); }, className: 'error-summary-link', type: 'button' }, { children: transformErrorMessage((e === null || e === void 0 ? void 0 : e.message) || '') }), e === null || e === void 0 ? void 0 : e.name)); })] }))) : null })));
}
export default ErrorSummary;
//# sourceMappingURL=ErrorSummary.js.map