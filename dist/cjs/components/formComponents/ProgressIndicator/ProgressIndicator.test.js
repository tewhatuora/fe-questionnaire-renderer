"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("@testing-library/react");
var componentWrappers_1 = require("../../../testHelpers/componentWrappers");
var __1 = require("..");
jest.mock('react-router-dom', function () { return (tslib_1.__assign(tslib_1.__assign({}, jest.requireActual('react-router-dom')), { useParams: function () { return ({
        stepId: 'step1',
        pageId: 'page1'
    }); } })); });
describe('Progress Indicator', function () {
    it("renders the 3 steps indicators", function () {
        (0, componentWrappers_1.renderWithQuestionnaireProvider)((0, jsx_runtime_1.jsx)(__1.ProgressIndicator, {}));
        expect(react_1.screen.getByText('1')).toBeInTheDocument();
        expect(react_1.screen.getByText('2')).toBeInTheDocument();
        expect(react_1.screen.getByText('3')).toBeInTheDocument();
    });
});
//# sourceMappingURL=ProgressIndicator.test.js.map