"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable no-underscore-dangle */
var componentWrappers_1 = require("../../testHelpers/componentWrappers");
var testUtils_1 = require("../../testHelpers/testUtils");
var types_1 = require("../../types");
var constants_1 = require("../../types/constants");
var fhir_1 = require("../../types/fhir");
var _1 = tslib_1.__importDefault(require("."));
var content = ((0, jsx_runtime_1.jsxs)("section", tslib_1.__assign({ className: 'section' }, { children: [(0, jsx_runtime_1.jsx)("h1", tslib_1.__assign({ className: 'size-h1' }, { children: "Privacy and how we use your information" })), (0, jsx_runtime_1.jsxs)("div", tslib_1.__assign({ className: 'content-cms' }, { children: [(0, jsx_runtime_1.jsx)("p", { children: "This form lets you share:" }), (0, jsx_runtime_1.jsxs)("p", { children: ["This information will only be used securely. ", (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {}), " We will only share information with agencies who are helping with this work."] })] })), (0, jsx_runtime_1.jsx)("p", tslib_1.__assign({ className: 'content-card privacy-link margin-top-4' }, { children: (0, jsx_runtime_1.jsx)("a", tslib_1.__assign({ href: '/privacy' }, { children: "Privacy Statement" })) }))] })));
var input = {
    extension: [
        {
            url: 'http://hl7.org/fhir/StructureDefinition/validation',
            id: 'validationExtension',
            extension: [
                {
                    url: 'http://hl7.org/fhir/StructureDefinition/validationTrueValue',
                    id: types_1.ValidationExtensions.validationTrueValue,
                    valueString: 'Please tick you have read the privacy statement'
                }
            ]
        }
    ],
    isFormSection: true,
    isLastElemFormSection: true,
    linkIdWithParent: constants_1.privacyAgreementAcceptedKey,
    required: true,
    text: 'I accept the privacy statement and understand how the information I provide will be used.',
    type: fhir_1.Questionnaire_ItemTypeKind._openChoice
};
describe('PrivacyAgreement', function () {
    it("renders the 'Privacy and how we use your information' heading", function () {
        (0, testUtils_1.render)((0, jsx_runtime_1.jsx)(_1.default, { basePath: '', pageContent: content, input: input }));
        expect(testUtils_1.screen.getByRole('heading', {
            name: 'Privacy and how we use your information'
        })).toBeInTheDocument();
    });
    it("renders the privacy statement link", function () {
        // NOTE this test will need to be updated when htmlContent from cms gets processed
        (0, testUtils_1.render)((0, jsx_runtime_1.jsx)(_1.default, { basePath: '', pageContent: content, input: input }));
        expect(testUtils_1.screen.getByText('This form lets you share:', { exact: false })).toBeInTheDocument();
        expect(testUtils_1.screen.getByText('This information will only be used securely. We will only share information with agencies who are helping with this work.', { exact: false })).toBeInTheDocument();
        expect(testUtils_1.screen.getAllByText('Privacy Statement', {
            exact: false
        })).toHaveLength(2);
    });
    it("renders the expected inputs and button", function () {
        (0, testUtils_1.render)((0, jsx_runtime_1.jsx)(_1.default, { basePath: '', pageContent: content, input: input }));
        expect(testUtils_1.screen.getByText('I accept the privacy statement and understand how the information I provide will be used.')).toBeInTheDocument();
        expect(testUtils_1.screen.getByRole('button', { name: 'Accept and continue' })).toBeInTheDocument();
    });
    describe("with privacyStatementAccepted=true in formState", function () {
        it("renders the input as checked", function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
            var checkbox;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        (0, componentWrappers_1.renderWithFormDataProvider)((0, jsx_runtime_1.jsx)(_1.default, { basePath: '', pageContent: content, input: input }), {}, { privacyAgreementAccepted: true });
                        checkbox = testUtils_1.screen.getByRole('checkbox', {
                            name: 'I accept the privacy statement and understand how the information I provide will be used. Required'
                        });
                        expect(checkbox).toBeInTheDocument();
                        return [4 /*yield*/, (0, testUtils_1.waitFor)(function () {
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