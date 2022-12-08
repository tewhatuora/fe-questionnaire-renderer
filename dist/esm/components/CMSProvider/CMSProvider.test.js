import { jsx as _jsx } from "react/jsx-runtime";
import parse from 'html-react-parser';
import { renderWithCMSProvider } from '../../testHelpers/componentWrappers';
import { render, screen } from '../../testHelpers/testUtils';
import { useCMS } from './CMSProvider';
describe('CMSContext', function () {
    function TestComponent() {
        var _a;
        var CMSData = useCMS();
        return (_jsx("div", { children: _jsx("div", { children: parse(((_a = CMSData === null || CMSData === void 0 ? void 0 : CMSData['Landing Page']) === null || _a === void 0 ? void 0 : _a.Introduction.htmlContent) || 'Not found') }) }));
    }
    it("renders no text from CMS", function () {
        render(_jsx(TestComponent, {}));
        expect(screen.getAllByText('Not found').length).toBe(1);
    });
    it("renders the text from the CMS", function () {
        renderWithCMSProvider(_jsx(TestComponent, {}));
        expect(screen.getByText('Welcome on this questionnaire.')).toBeInTheDocument();
    });
});
//# sourceMappingURL=CMSProvider.test.js.map