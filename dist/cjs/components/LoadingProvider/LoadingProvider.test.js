"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var componentWrappers_1 = require("../../testHelpers/componentWrappers");
var testUtils_1 = require("../../testHelpers/testUtils");
var _1 = require(".");
describe('useLoading', function () {
    function TestComponent() {
        var loading = (0, _1.useLoading)().loading;
        return (0, jsx_runtime_1.jsx)("div", { children: loading ? 'Loading...' : 'Test content' });
    }
    it("renders the test content", function () {
        (0, testUtils_1.render)((0, jsx_runtime_1.jsx)(TestComponent, {}));
        expect(testUtils_1.screen.getByText('Test content')).toBeInTheDocument();
    });
    describe("with 'loading=true'", function () {
        it("renders the 'Loading...' text", function () {
            (0, componentWrappers_1.renderWithLoadingProvider)((0, jsx_runtime_1.jsx)(TestComponent, {}), {
                providerProps: {
                    value: {
                        loading: true,
                        setLoading: function () { }
                    }
                }
            });
            expect(testUtils_1.screen.getByText('Loading...')).toBeInTheDocument();
        });
    });
});
//# sourceMappingURL=LoadingProvider.test.js.map