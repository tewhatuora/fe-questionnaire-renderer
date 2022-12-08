"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userEvent = exports.textContentMatcher = exports.render = exports.testQuestionnaire = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("@testing-library/react");
var user_event_1 = tslib_1.__importDefault(require("@testing-library/user-event"));
exports.userEvent = user_event_1.default;
var react_query_1 = require("react-query");
var react_router_dom_1 = require("react-router-dom");
var FormDataProvider_1 = require("../components/FormDataProvider");
var FormErrorsProvider_1 = require("../components/FormErrorsProvider");
var FormTouchedProvider_1 = require("../components/FormTouchedProvider");
var LoadingProvider_1 = require("../components/LoadingProvider");
var QuestionnaireProvider_1 = require("../components/QuestionnaireProvider");
var utils_1 = require("../components/QuestionnaireProvider/utils");
var questionnaireTest_json_1 = tslib_1.__importDefault(require("../data/questionnaireTest.json"));
var questionnaire = JSON.parse(JSON.stringify(questionnaireTest_json_1.default));
exports.testQuestionnaire = (0, utils_1.enrichQuestionnaireData)(questionnaire);
function AllProviders(_a) {
    var children = _a.children;
    var queryClient = new react_query_1.QueryClient();
    return ((0, jsx_runtime_1.jsx)(react_query_1.QueryClientProvider, tslib_1.__assign({ client: queryClient }, { children: (0, jsx_runtime_1.jsx)(LoadingProvider_1.LoadingProvider, tslib_1.__assign({ useLoadingOverlay: false }, { children: (0, jsx_runtime_1.jsx)(QuestionnaireProvider_1.QuestionnaireProvider, tslib_1.__assign({ questionnaireData: {}, submitQuestionnaire: function () { return ({}); } }, { children: (0, jsx_runtime_1.jsx)(FormDataProvider_1.FormDataProvider, tslib_1.__assign({ partialSubmit: FormDataProvider_1.defaultPartialSubmitQuery, usePartialSubmit: false }, { children: (0, jsx_runtime_1.jsx)(FormErrorsProvider_1.FormErrorsProvider, { children: (0, jsx_runtime_1.jsx)(FormTouchedProvider_1.FormTouchedProvider, { children: children }) }) })) })) })) })));
}
var render = function (ui, options) {
    var _a = options || {}, _b = _a.route, route = _b === void 0 ? '/' : _b, _c = _a.withRouter, withRouter = _c === void 0 ? true : _c, opts = tslib_1.__rest(_a, ["route", "withRouter"]);
    var rendered = withRouter
        ? (0, react_1.render)((0, jsx_runtime_1.jsx)(AllProviders, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.MemoryRouter, tslib_1.__assign({ initialEntries: [route] }, { children: ui })) }), opts)
        : (0, react_1.render)((0, jsx_runtime_1.jsx)(AllProviders, { children: ui }), opts);
    var rtlRerender = rendered.rerender;
    var rerender = function (updatedUi) {
        return withRouter
            ? rtlRerender((0, jsx_runtime_1.jsx)(AllProviders, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.MemoryRouter, { children: updatedUi }) }))
            : rtlRerender((0, jsx_runtime_1.jsx)(AllProviders, { children: updatedUi }));
    };
    return tslib_1.__assign(tslib_1.__assign({}, rendered), { rerender: rerender });
};
exports.render = render;
// Useful for when you want to match on text that is contained across
// multiple HTML tags e.g. `<div>Hello <span>world</span></div>`
// You can pass "Hello world" into this function, and then use it like so:
// `screen.getByText(textContentMatcher("Hello world"))`
var textContentMatcher = function (text) {
    return function (_content, node) {
        var hasText = function (n) { return n.textContent === text; };
        var nodeHasText = node && hasText(node);
        var childrenDontHaveText = node && Array.from(node.children).every(function (child) { return !hasText(child); });
        return !!(nodeHasText && childrenDontHaveText);
    };
};
exports.textContentMatcher = textContentMatcher;
tslib_1.__exportStar(require("@testing-library/react"), exports);
//# sourceMappingURL=testUtils.js.map