"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var html_react_parser_1 = tslib_1.__importDefault(require("html-react-parser"));
var componentWrappers_1 = require("../../testHelpers/componentWrappers");
var testUtils_1 = require("../../testHelpers/testUtils");
var CMSProvider_1 = require("./CMSProvider");
describe('CMSContext', function () {
    function TestComponent() {
        var _a;
        var CMSData = (0, CMSProvider_1.useCMS)();
        return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("div", { children: (0, html_react_parser_1.default)(((_a = CMSData === null || CMSData === void 0 ? void 0 : CMSData['Landing Page']) === null || _a === void 0 ? void 0 : _a.Introduction.htmlContent) || 'Not found') }) }));
    }
    it("renders no text from CMS", function () {
        (0, testUtils_1.render)((0, jsx_runtime_1.jsx)(TestComponent, {}));
        expect(testUtils_1.screen.getAllByText('Not found').length).toBe(1);
    });
    it("renders the text from the CMS", function () {
        (0, componentWrappers_1.renderWithCMSProvider)((0, jsx_runtime_1.jsx)(TestComponent, {}));
        expect(testUtils_1.screen.getByText('Welcome on this questionnaire.')).toBeInTheDocument();
    });
});
//# sourceMappingURL=CMSProvider.test.js.map