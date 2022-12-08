import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { render as rtlRender } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MemoryRouter as Router } from 'react-router-dom';
import { defaultPartialSubmitQuery, FormDataProvider } from '../components/FormDataProvider';
import { FormErrorsProvider } from '../components/FormErrorsProvider';
import { FormTouchedProvider } from '../components/FormTouchedProvider';
import { LoadingProvider } from '../components/LoadingProvider';
import { QuestionnaireProvider } from '../components/QuestionnaireProvider';
import { enrichQuestionnaireData } from '../components/QuestionnaireProvider/utils';
import testData from '../data/questionnaireTest.json';
var questionnaire = JSON.parse(JSON.stringify(testData));
export var testQuestionnaire = enrichQuestionnaireData(questionnaire);
function AllProviders(_a) {
    var children = _a.children;
    var queryClient = new QueryClient();
    return (_jsx(QueryClientProvider, __assign({ client: queryClient }, { children: _jsx(LoadingProvider, __assign({ useLoadingOverlay: false }, { children: _jsx(QuestionnaireProvider, __assign({ questionnaireData: {}, submitQuestionnaire: function () { return ({}); } }, { children: _jsx(FormDataProvider, __assign({ partialSubmit: defaultPartialSubmitQuery, usePartialSubmit: false }, { children: _jsx(FormErrorsProvider, { children: _jsx(FormTouchedProvider, { children: children }) }) })) })) })) })));
}
var render = function (ui, options) {
    var _a = options || {}, _b = _a.route, route = _b === void 0 ? '/' : _b, _c = _a.withRouter, withRouter = _c === void 0 ? true : _c, opts = __rest(_a, ["route", "withRouter"]);
    var rendered = withRouter
        ? rtlRender(_jsx(AllProviders, { children: _jsx(Router, __assign({ initialEntries: [route] }, { children: ui })) }), opts)
        : rtlRender(_jsx(AllProviders, { children: ui }), opts);
    var rtlRerender = rendered.rerender;
    var rerender = function (updatedUi) {
        return withRouter
            ? rtlRerender(_jsx(AllProviders, { children: _jsx(Router, { children: updatedUi }) }))
            : rtlRerender(_jsx(AllProviders, { children: updatedUi }));
    };
    return __assign(__assign({}, rendered), { rerender: rerender });
};
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
export { render, textContentMatcher, userEvent };
export * from '@testing-library/react';
//# sourceMappingURL=testUtils.js.map