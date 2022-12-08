"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var types_1 = require("../../types");
var formComponents_1 = require("../formComponents");
var QuestionnaireProvider_1 = require("../QuestionnaireProvider");
function PrivacyAgreement(_a) {
    var basePath = _a.basePath, input = _a.input, pageContent = _a.pageContent;
    var formInitialPagePath = (0, QuestionnaireProvider_1.useQuestionnaire)().formInitialPagePath;
    if (!input)
        return null;
    return ((0, jsx_runtime_1.jsxs)("div", tslib_1.__assign({ className: 'form' }, { children: [pageContent, (0, jsx_runtime_1.jsx)("section", tslib_1.__assign({ className: 'section' }, { children: (0, jsx_runtime_1.jsxs)("form", tslib_1.__assign({ onSubmit: function (e) { return e.preventDefault(); } }, { children: [(0, jsx_runtime_1.jsx)(formComponents_1.CheckboxInput, { input: input }), (0, jsx_runtime_1.jsx)("div", tslib_1.__assign({ className: 'button-group' }, { children: (0, jsx_runtime_1.jsx)(formComponents_1.LinkAsButton, { content: 'Accept and continue', to: "".concat(basePath, "/").concat(formInitialPagePath), buttonAttributes: {
                                    variant: types_1.ButtonVariantTypes.primary,
                                    shouldValidate: true
                                } }) }))] })) }))] })));
}
exports.default = PrivacyAgreement;
//# sourceMappingURL=PrivacyAgreement.js.map