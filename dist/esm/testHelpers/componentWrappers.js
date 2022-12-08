import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import get from 'lodash.get';
import { CMSContext } from '../components/CMSProvider';
import { FormDataContext } from '../components/FormDataProvider';
import { FormErrorsContext } from '../components/FormErrorsProvider';
import { LoadingContext } from '../components/LoadingProvider';
import { QuestionnaireContext } from '../components/QuestionnaireProvider';
import cmsMock from '../data/cmsTest.json';
import { render, testQuestionnaire } from './testUtils';
var withCMSProvider = function (ui, providerProps) { return (_jsx(CMSContext.Provider, __assign({}, providerProps, { children: ui }))); };
var renderWithCMSProvider = function (ui, options) {
    var renderOptions = __assign({}, options);
    return render(withCMSProvider(ui, { value: cmsMock }), renderOptions);
};
var withFormDataProvider = function (ui, providerProps) { return (_jsx(FormDataContext.Provider, __assign({}, providerProps, { children: ui }))); };
var renderWithFormDataProvider = function (ui, options, formDataInitial) {
    if (options || formDataInitial) {
        var renderOptions = __assign({}, options);
        if (renderOptions === null || renderOptions === void 0 ? void 0 : renderOptions.providerProps)
            delete renderOptions.providerProps;
        var providerProps = {
            value: {
                formData: formDataInitial || {},
                getFormValue: formDataInitial
                    ? function (name) { return get(formDataInitial, name); }
                    : jest.fn(),
                refetchFormData: jest.fn(),
                setFormValue: jest.fn(),
                setFormData: jest.fn(),
                transformFormValues: jest.fn()
            }
        };
        return render(withFormDataProvider(ui, providerProps), renderOptions);
    }
    return render(ui);
};
var withFormErrorsProvider = function (ui, providerProps) { return (_jsx(FormErrorsContext.Provider, __assign({}, providerProps, { children: ui }))); };
var renderWithFormErrorsProvider = function (ui, options) {
    var renderOptions = __assign({}, options);
    return render(withFormErrorsProvider(ui, options.providerProps), renderOptions);
};
var withLoadingProvider = function (ui, providerProps) { return (_jsx(CMSContext.Provider, __assign({ value: cmsMock }, { children: _jsx(LoadingContext.Provider, __assign({}, providerProps, { children: ui })) }))); };
var renderWithLoadingProvider = function (ui, options) {
    if (options === null || options === void 0 ? void 0 : options.providerProps) {
        var renderOptions = __assign({}, options);
        if (renderOptions === null || renderOptions === void 0 ? void 0 : renderOptions.providerProps)
            delete renderOptions.providerProps;
        return render(withLoadingProvider(ui, options === null || options === void 0 ? void 0 : options.providerProps), renderOptions);
    }
    return null;
};
var withQuestionnaireProvider = function (ui, providerProps) { return (_jsx(QuestionnaireContext.Provider, __assign({}, providerProps, { children: ui }))); };
var defaultQuestionnaireProviderProps = {
    formInitialPagePath: '/form/step1/page1',
    questionnaire: testQuestionnaire,
    addRepeatableItem: function () { return undefined; },
    deleteRepeatableItem: function () { return undefined; },
    setQuestionnaireData: function () { return undefined; }
};
var renderWithQuestionnaireProvider = function (ui, options, questionnaire) {
    var renderOptions = __assign({}, options);
    return render(withQuestionnaireProvider(ui, {
        value: __assign(__assign({}, defaultQuestionnaireProviderProps), { questionnaire: questionnaire || testQuestionnaire, submitQuestionnaireData: function () { return undefined; } })
    }), renderOptions);
};
export { defaultQuestionnaireProviderProps, renderWithCMSProvider, renderWithFormDataProvider, renderWithFormErrorsProvider, renderWithLoadingProvider, renderWithQuestionnaireProvider, withFormDataProvider };
//# sourceMappingURL=componentWrappers.js.map