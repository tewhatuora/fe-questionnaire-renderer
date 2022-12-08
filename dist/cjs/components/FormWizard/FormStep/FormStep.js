"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var lodash_flatten_1 = tslib_1.__importDefault(require("lodash.flatten"));
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var formComponents_1 = require("../../formComponents");
var FormDataProvider_1 = require("../../FormDataProvider");
var FormErrorsProvider_1 = require("../../FormErrorsProvider");
var FormTouchedProvider_1 = require("../../FormTouchedProvider");
var QuestionnaireProvider_1 = require("../../QuestionnaireProvider");
var utils_1 = require("../utils");
var FormStepInputs_1 = tslib_1.__importDefault(require("./FormStepInputs"));
function FormStep(_a) {
    var inputComponents = _a.inputComponents, rest = tslib_1.__rest(_a, ["inputComponents"]);
    var formData = (0, FormDataProvider_1.useFormData)().formData;
    var formErrors = (0, FormErrorsProvider_1.useFormErrors)().formErrors;
    var formTouched = (0, FormTouchedProvider_1.useFormTouched)().formTouched;
    var params = (0, react_router_dom_1.useParams)();
    var questionnaire = (0, QuestionnaireProvider_1.useQuestionnaire)().questionnaire;
    var form = (0, utils_1.getCurrentPageInputs)(params, formData || {}, questionnaire);
    var formErrorsFiltered = (0, react_1.useMemo)(function () {
        function inputLinkIds(inputs) {
            return inputs.map(function (i) {
                if (i.item)
                    return inputLinkIds(i.item);
                return i.linkIdWithParent;
            });
        }
        return (0, lodash_flatten_1.default)(inputLinkIds(form))
            .map(function (fii) { return formErrors.find(function (fe) { return fe.name === fii; }); })
            .filter(function (s) { return s && !!formTouched.find(function (ft) { return ft.name === s.name; }); });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [form, formErrors, formTouched]);
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("section", tslib_1.__assign({ className: 'section' }, { children: (0, jsx_runtime_1.jsx)(formComponents_1.ProgressIndicator, {}) })), (0, jsx_runtime_1.jsxs)("section", tslib_1.__assign({ className: 'section' }, { children: [(0, jsx_runtime_1.jsx)(formComponents_1.ErrorSummary, { formErrorsFiltered: formErrorsFiltered }), (0, jsx_runtime_1.jsx)(FormStepInputs_1.default, { inputComponents: inputComponents, inputs: form }), (0, jsx_runtime_1.jsx)(formComponents_1.NavigationButtons, tslib_1.__assign({}, rest))] }))] }));
}
exports.default = FormStep;
//# sourceMappingURL=FormStep.js.map