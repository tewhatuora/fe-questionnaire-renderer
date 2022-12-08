"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("@testing-library/react");
var componentWrappers_1 = require("../../../testHelpers/componentWrappers");
var __1 = require("..");
describe('Display', function () {
    it("renders the text from the CMS", function () {
        (0, componentWrappers_1.renderWithCMSProvider)((0, jsx_runtime_1.jsx)(__1.Display, { input: {
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
        expect(react_1.screen.getByText('Welcome on this questionnaire.')).toBeInTheDocument();
    });
    it("renders the text from md", function () {
        (0, componentWrappers_1.renderWithCMSProvider)((0, jsx_runtime_1.jsx)(__1.Display, { input: {
                linkId: 'input1',
                text: 'Markdown'
            } }));
        expect(react_1.screen.getByText('Markdown')).toBeInTheDocument();
    });
});
//# sourceMappingURL=Display.test.js.map