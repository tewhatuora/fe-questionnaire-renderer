import { __assign, __awaiter, __generator } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable no-underscore-dangle */
import { renderWithFormDataProvider } from '../../testHelpers/componentWrappers';
import { render, screen, waitFor } from '../../testHelpers/testUtils';
import { ValidationExtensions } from '../../types';
import { privacyAgreementAcceptedKey } from '../../types/constants';
import { Questionnaire_ItemTypeKind } from '../../types/fhir';
import PrivacyAgreement from '.';
var content = (_jsxs("section", __assign({ className: 'section' }, { children: [_jsx("h1", __assign({ className: 'size-h1' }, { children: "Privacy and how we use your information" })), _jsxs("div", __assign({ className: 'content-cms' }, { children: [_jsx("p", { children: "This form lets you share:" }), _jsxs("p", { children: ["This information will only be used securely. ", _jsx("br", {}), _jsx("br", {}), " We will only share information with agencies who are helping with this work."] })] })), _jsx("p", __assign({ className: 'content-card privacy-link margin-top-4' }, { children: _jsx("a", __assign({ href: '/privacy' }, { children: "Privacy Statement" })) }))] })));
var input = {
    extension: [
        {
            url: 'http://hl7.org/fhir/StructureDefinition/validation',
            id: 'validationExtension',
            extension: [
                {
                    url: 'http://hl7.org/fhir/StructureDefinition/validationTrueValue',
                    id: ValidationExtensions.validationTrueValue,
                    valueString: 'Please tick you have read the privacy statement'
                }
            ]
        }
    ],
    isFormSection: true,
    isLastElemFormSection: true,
    linkIdWithParent: privacyAgreementAcceptedKey,
    required: true,
    text: 'I accept the privacy statement and understand how the information I provide will be used.',
    type: Questionnaire_ItemTypeKind._openChoice
};
describe('PrivacyAgreement', function () {
    it("renders the 'Privacy and how we use your information' heading", function () {
        render(_jsx(PrivacyAgreement, { basePath: '', pageContent: content, input: input }));
        expect(screen.getByRole('heading', {
            name: 'Privacy and how we use your information'
        })).toBeInTheDocument();
    });
    it("renders the privacy statement link", function () {
        // NOTE this test will need to be updated when htmlContent from cms gets processed
        render(_jsx(PrivacyAgreement, { basePath: '', pageContent: content, input: input }));
        expect(screen.getByText('This form lets you share:', { exact: false })).toBeInTheDocument();
        expect(screen.getByText('This information will only be used securely. We will only share information with agencies who are helping with this work.', { exact: false })).toBeInTheDocument();
        expect(screen.getAllByText('Privacy Statement', {
            exact: false
        })).toHaveLength(2);
    });
    it("renders the expected inputs and button", function () {
        render(_jsx(PrivacyAgreement, { basePath: '', pageContent: content, input: input }));
        expect(screen.getByText('I accept the privacy statement and understand how the information I provide will be used.')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Accept and continue' })).toBeInTheDocument();
    });
    describe("with privacyStatementAccepted=true in formState", function () {
        it("renders the input as checked", function () { return __awaiter(void 0, void 0, void 0, function () {
            var checkbox;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        renderWithFormDataProvider(_jsx(PrivacyAgreement, { basePath: '', pageContent: content, input: input }), {}, { privacyAgreementAccepted: true });
                        checkbox = screen.getByRole('checkbox', {
                            name: 'I accept the privacy statement and understand how the information I provide will be used. Required'
                        });
                        expect(checkbox).toBeInTheDocument();
                        return [4 /*yield*/, waitFor(function () {
                                expect(checkbox).toBeChecked();
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
//# sourceMappingURL=PrivacyAgreement.test.js.map