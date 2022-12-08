"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withFormDataProvider = exports.renderWithQuestionnaireProvider = exports.renderWithLoadingProvider = exports.renderWithFormErrorsProvider = exports.renderWithFormDataProvider = exports.renderWithCMSProvider = exports.defaultQuestionnaireProviderProps = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var lodash_get_1 = tslib_1.__importDefault(require("lodash.get"));
var CMSProvider_1 = require("../components/CMSProvider");
var FormDataProvider_1 = require("../components/FormDataProvider");
var FormErrorsProvider_1 = require("../components/FormErrorsProvider");
var LoadingProvider_1 = require("../components/LoadingProvider");
var QuestionnaireProvider_1 = require("../components/QuestionnaireProvider");
var cmsTest_json_1 = tslib_1.__importDefault(require("../data/cmsTest.json"));
var testUtils_1 = require("./testUtils");
var withCMSProvider = function (ui, providerProps) { return ((0, jsx_runtime_1.jsx)(CMSProvider_1.CMSContext.Provider, tslib_1.__assign({}, providerProps, { children: ui }))); };
var renderWithCMSProvider = function (ui, options) {
    var renderOptions = tslib_1.__assign({}, options);
    return (0, testUtils_1.render)(withCMSProvider(ui, { value: cmsTest_json_1.default }), renderOptions);
};
exports.renderWithCMSProvider = renderWithCMSProvider;
var withFormDataProvider = function (ui, providerProps) { return ((0, jsx_runtime_1.jsx)(FormDataProvider_1.FormDataContext.Provider, tslib_1.__assign({}, providerProps, { children: ui }))); };
exports.withFormDataProvider = withFormDataProvider;
var renderWithFormDataProvider = function (ui, options, formDataInitial) {
    if (options || formDataInitial) {
        var renderOptions = tslib_1.__assign({}, options);
        if (renderOptions === null || renderOptions === void 0 ? void 0 : renderOptions.providerProps)
            delete renderOptions.providerProps;
        var providerProps = {
            value: {
                formData: formDataInitial || {},
                getFormValue: formDataInitial
                    ? function (name) { return (0, lodash_get_1.default)(formDataInitial, name); }
                    : jest.fn(),
                refetchFormData: jest.fn(),
                setFormValue: jest.fn(),
                setFormData: jest.fn(),
                transformFormValues: jest.fn()
            }
        };
        return (0, testUtils_1.render)(withFormDataProvider(ui, providerProps), renderOptions);
    }
    return (0, testUtils_1.render)(ui);
};
exports.renderWithFormDataProvider = renderWithFormDataProvider;
var withFormErrorsProvider = function (ui, providerProps) { return ((0, jsx_runtime_1.jsx)(FormErrorsProvider_1.FormErrorsContext.Provider, tslib_1.__assign({}, providerProps, { children: ui }))); };
var renderWithFormErrorsProvider = function (ui, options) {
    var renderOptions = tslib_1.__assign({}, options);
    return (0, testUtils_1.render)(withFormErrorsProvider(ui, options.providerProps), renderOptions);
};
exports.renderWithFormErrorsProvider = renderWithFormErrorsProvider;
var withLoadingProvider = function (ui, providerProps) { return ((0, jsx_runtime_1.jsx)(CMSProvider_1.CMSContext.Provider, tslib_1.__assign({ value: cmsTest_json_1.default }, { children: (0, jsx_runtime_1.jsx)(LoadingProvider_1.LoadingContext.Provider, tslib_1.__assign({}, providerProps, { children: ui })) }))); };
var renderWithLoadingProvider = function (ui, options) {
    if (options === null || options === void 0 ? void 0 : options.providerProps) {
        var renderOptions = tslib_1.__assign({}, options);
        if (renderOptions === null || renderOptions === void 0 ? void 0 : renderOptions.providerProps)
            delete renderOptions.providerProps;
        return (0, testUtils_1.render)(withLoadingProvider(ui, options === null || options === void 0 ? void 0 : options.providerProps), renderOptions);
    }
    return null;
};
exports.renderWithLoadingProvider = renderWithLoadingProvider;
var withQuestionnaireProvider = function (ui, providerProps) { return ((0, jsx_runtime_1.jsx)(QuestionnaireProvider_1.QuestionnaireContext.Provider, tslib_1.__assign({}, providerProps, { children: ui }))); };
var defaultQuestionnaireProviderProps = {
    formInitialPagePath: '/form/step1/page1',
    questionnaire: testUtils_1.testQuestionnaire,
    addRepeatableItem: function () { return undefined; },
    deleteRepeatableItem: function () { return undefined; },
    setQuestionnaireData: function () { return undefined; }
};
exports.defaultQuestionnaireProviderProps = defaultQuestionnaireProviderProps;
var renderWithQuestionnaireProvider = function (ui, options, questionnaire) {
    var renderOptions = tslib_1.__assign({}, options);
    return (0, testUtils_1.render)(withQuestionnaireProvider(ui, {
        value: tslib_1.__assign(tslib_1.__assign({}, defaultQuestionnaireProviderProps), { questionnaire: questionnaire || testUtils_1.testQuestionnaire, submitQuestionnaireData: function () { return undefined; } })
    }), renderOptions);
};
exports.renderWithQuestionnaireProvider = renderWithQuestionnaireProvider;
//# sourceMappingURL=componentWrappers.js.map