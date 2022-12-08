"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_router_dom_1 = require("react-router-dom");
var types_1 = require("../../types");
var formComponents_1 = require("../formComponents");
var FormDataProvider_1 = require("../FormDataProvider");
var QuestionnaireProvider_1 = require("../QuestionnaireProvider");
var Review_1 = tslib_1.__importDefault(require("./Review"));
function Reviews(_a) {
    var basePath = _a.basePath, nextPage = _a.nextPage;
    var transformFormValues = (0, FormDataProvider_1.useFormData)().transformFormValues;
    var navigate = (0, react_router_dom_1.useNavigate)();
    var _b = (0, QuestionnaireProvider_1.useQuestionnaire)(), questionnaire = _b.questionnaire, submitQuestionnaireData = _b.submitQuestionnaireData;
    if (!questionnaire || !questionnaire.item)
        return null;
    function handleSubmit(e) {
        e.preventDefault();
        var response = transformFormValues();
        submitQuestionnaireData(response, function () { return navigate("".concat(basePath, "/").concat(nextPage)); });
    }
    return ((0, jsx_runtime_1.jsxs)("form", tslib_1.__assign({ className: 'form', onSubmit: function (e) { return handleSubmit(e); } }, { children: [(0, jsx_runtime_1.jsx)("h1", tslib_1.__assign({ className: 'size-h1 page-title' }, { children: "Review" })), questionnaire.item.map(function (i) { return ((0, jsx_runtime_1.jsx)(Review_1.default, { basePath: basePath, input: i }, i.linkId)); }), (0, jsx_runtime_1.jsx)("div", tslib_1.__assign({ className: 'button-group' }, { children: (0, jsx_runtime_1.jsx)(formComponents_1.Button, tslib_1.__assign({ variant: types_1.ButtonVariantTypes.primary, type: 'submit' }, { children: "Submit" })) }))] })));
}
exports.default = Reviews;
//# sourceMappingURL=Reviews.js.map