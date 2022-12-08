"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var ErrorIcon_1 = tslib_1.__importDefault(require("../../../images/icons/ErrorIcon"));
var constants_1 = require("../../../types/constants");
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
    return ((0, jsx_runtime_1.jsx)("div", tslib_1.__assign({ className: formErrorsFiltered.length > 2 ? 'margin-top-6' : '', id: constants_1.errorSummaryId }, { children: formErrorsFiltered.length > 2 ? ((0, jsx_runtime_1.jsxs)("div", tslib_1.__assign({ className: 'error-summary' }, { children: [(0, jsx_runtime_1.jsxs)("div", tslib_1.__assign({ className: 'error-summary-title' }, { children: [(0, jsx_runtime_1.jsx)(ErrorIcon_1.default, {}), (0, jsx_runtime_1.jsx)("p", { children: "There are some errors on this page" })] })), formErrorsFiltered.map(function (e) { return ((0, jsx_runtime_1.jsx)("button", tslib_1.__assign({ onClick: function () { return handleClick((e === null || e === void 0 ? void 0 : e.name) || ''); }, className: 'error-summary-link', type: 'button' }, { children: transformErrorMessage((e === null || e === void 0 ? void 0 : e.message) || '') }), e === null || e === void 0 ? void 0 : e.name)); })] }))) : null })));
}
exports.default = ErrorSummary;
//# sourceMappingURL=ErrorSummary.js.map