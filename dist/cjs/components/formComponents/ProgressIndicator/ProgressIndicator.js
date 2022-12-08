"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var types_1 = require("../../../types");
var extensions_1 = require("../../../utils/extensions");
var QuestionnaireProvider_1 = require("../../QuestionnaireProvider");
var utils_1 = require("./utils");
function ProgressIndicator() {
    var questionnaire = (0, QuestionnaireProvider_1.useQuestionnaire)().questionnaire;
    var params = (0, react_router_dom_1.useParams)();
    var stepId = params.stepId;
    var title = (0, react_1.useMemo)(function () {
        if (!questionnaire)
            return null;
        return (0, utils_1.getTitlePage)(params, questionnaire);
    }, [params, questionnaire]);
    var _a = (0, react_1.useMemo)(function () {
        return {
            displayProgressIndicator: questionnaire &&
                !!(questionnaire.extension &&
                    !!(0, extensions_1.getExtension)(questionnaire, types_1.Extensions.progressIndicatorExtension)),
            arrayIds: questionnaire ? (0, utils_1.getStepPageIds)(questionnaire) : []
        };
    }, [questionnaire]), displayProgressIndicator = _a.displayProgressIndicator, arrayIds = _a.arrayIds;
    var currentStepIndex = arrayIds.indexOf(stepId || '');
    if (!questionnaire || !title)
        return null;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("h1", tslib_1.__assign({ className: 'size-h1 page-title' }, { children: title })), displayProgressIndicator ? ((0, jsx_runtime_1.jsx)("nav", tslib_1.__assign({ "aria-hidden": true }, { children: (0, jsx_runtime_1.jsx)("ul", tslib_1.__assign({ className: 'step-list' }, { children: arrayIds.map(function (id, i) {
                        var isStepComplete = currentStepIndex >= i;
                        return ((0, jsx_runtime_1.jsx)("li", tslib_1.__assign({ className: "step".concat(isStepComplete ? ' step-complete' : '') }, { children: (0, jsx_runtime_1.jsx)("span", tslib_1.__assign({ className: 'step-text' }, { children: i + 1 })) }), id));
                    }) })) }))) : null] }));
}
exports.default = ProgressIndicator;
//# sourceMappingURL=ProgressIndicator.js.map