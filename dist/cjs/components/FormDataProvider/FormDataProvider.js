"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFormData = exports.FormDataProvider = exports.FormDataContext = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable no-underscore-dangle */
var lodash_get_1 = tslib_1.__importDefault(require("lodash.get"));
var lodash_set_1 = tslib_1.__importDefault(require("lodash.set"));
var react_1 = require("react");
var react_query_1 = require("react-query");
var createQuestionnaireResponse_1 = tslib_1.__importDefault(require("../../utils/createQuestionnaireResponse"));
var utils_1 = require("../FormWizard/utils");
var LoadingProvider_1 = require("../LoadingProvider");
var QuestionnaireProvider_1 = require("../QuestionnaireProvider");
exports.FormDataContext = (0, react_1.createContext)({});
function FormDataProvider(_a) {
    var children = _a.children, partialSubmit = _a.partialSubmit, usePartialSubmit = _a.usePartialSubmit;
    var setLoading = (0, LoadingProvider_1.useLoading)().setLoading;
    var questionnaire = (0, QuestionnaireProvider_1.useQuestionnaire)().questionnaire;
    var _b = (0, react_1.useState)(undefined), formData = _b[0], setFormData = _b[1];
    var _c = (0, react_query_1.useQuery)('formData', function () { return partialSubmit(); }, {
        enabled: false,
        retry: false,
        onSuccess: function (response) {
            setFormData(response);
        }
    }), formDataLoading = _c.isLoading, formDataRefetching = _c.isRefetching, refetch = _c.refetch;
    function refetchFormData() {
        if (usePartialSubmit)
            refetch();
    }
    // Handles loading for the queries
    (0, react_1.useEffect)(function () {
        setLoading({
            isLoading: formDataRefetching,
            id: LoadingProvider_1.LoadingIds.formDataRefetch
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formDataRefetching]);
    (0, react_1.useEffect)(function () {
        setLoading({ isLoading: formDataLoading, id: LoadingProvider_1.LoadingIds.formData });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formDataLoading]);
    function getFormValue(name) {
        if (!formData)
            return undefined;
        return (0, lodash_get_1.default)(formData, name);
    }
    function setFormValue(name, value) {
        if (!formData)
            return;
        setFormData(function (prev) {
            var newFormData = tslib_1.__assign({}, prev);
            (0, lodash_set_1.default)(newFormData, name, value);
            return newFormData;
        });
    }
    (0, react_1.useEffect)(function () {
        if (!questionnaire)
            return;
        setFormData((0, utils_1.buildInitialValues)(questionnaire, formData));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [questionnaire]);
    var memoisedValue = (0, react_1.useMemo)(function () { return ({
        formData: formData,
        getFormValue: getFormValue,
        refetchFormData: refetchFormData,
        setFormData: setFormData,
        setFormValue: setFormValue,
        transformFormValues: function () { return (0, createQuestionnaireResponse_1.default)(questionnaire, formData); }
    }); }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [formData]);
    return ((0, jsx_runtime_1.jsx)(exports.FormDataContext.Provider, tslib_1.__assign({ value: memoisedValue }, { children: children })));
}
exports.FormDataProvider = FormDataProvider;
var useFormData = function () { return (0, react_1.useContext)(exports.FormDataContext); };
exports.useFormData = useFormData;
//# sourceMappingURL=FormDataProvider.js.map