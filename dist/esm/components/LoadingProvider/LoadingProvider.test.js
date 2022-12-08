import { jsx as _jsx } from "react/jsx-runtime";
import { renderWithLoadingProvider } from '../../testHelpers/componentWrappers';
import { render, screen } from '../../testHelpers/testUtils';
import { useLoading } from '.';
describe('useLoading', function () {
    function TestComponent() {
        var loading = useLoading().loading;
        return _jsx("div", { children: loading ? 'Loading...' : 'Test content' });
    }
    it("renders the test content", function () {
        render(_jsx(TestComponent, {}));
        expect(screen.getByText('Test content')).toBeInTheDocument();
    });
    describe("with 'loading=true'", function () {
        it("renders the 'Loading...' text", function () {
            renderWithLoadingProvider(_jsx(TestComponent, {}), {
                providerProps: {
                    value: {
                        loading: true,
                        setLoading: function () { }
                    }
                }
            });
            expect(screen.getByText('Loading...')).toBeInTheDocument();
        });
    });
});
//# sourceMappingURL=LoadingProvider.test.js.map