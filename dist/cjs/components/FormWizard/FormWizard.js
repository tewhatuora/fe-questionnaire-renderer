"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_router_dom_1 = require("react-router-dom");
var FormDataProvider_1 = require("../FormDataProvider");
var QuestionnaireProvider_1 = require("../QuestionnaireProvider");
function FormWizard() {
    var formData = (0, FormDataProvider_1.useFormData)().formData;
    var questionnaire = (0, QuestionnaireProvider_1.useQuestionnaire)().questionnaire;
    if (!questionnaire || !formData)
        return null;
    return ((0, jsx_runtime_1.jsx)("form", tslib_1.__assign({ className: 'form', onSubmit: function (e) { return e.preventDefault(); } }, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Outlet, {}) })));
}
exports.default = FormWizard;
//# sourceMappingURL=FormWizard.js.map