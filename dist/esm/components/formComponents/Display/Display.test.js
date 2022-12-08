import { jsx as _jsx } from "react/jsx-runtime";
import { screen } from '@testing-library/react';
import { renderWithCMSProvider } from '../../../testHelpers/componentWrappers';
import { Display } from '..';
describe('Display', function () {
    it("renders the text from the CMS", function () {
        renderWithCMSProvider(_jsx(Display, { input: {
                linkId: 'input1',
                extension: [
                    {
                        url: 'http://hl7.org/fhir/StructureDefinition/content-management-system',
                        id: 'cmsExtension',
                        valueCoding: {
                            system: 'https://gathercontent.com/',
                            version: '1',
                            code: 'Survey',
                            display: 'Landing Page.Introduction.htmlContent'
                        }
                    }
                ]
            } }));
        expect(screen.getByText('Welcome on this questionnaire.')).toBeInTheDocument();
    });
    it("renders the text from md", function () {
        renderWithCMSProvider(_jsx(Display, { input: {
                linkId: 'input1',
                text: 'Markdown'
            } }));
        expect(screen.getByText('Markdown')).toBeInTheDocument();
    });
});
//# sourceMappingURL=Display.test.js.map