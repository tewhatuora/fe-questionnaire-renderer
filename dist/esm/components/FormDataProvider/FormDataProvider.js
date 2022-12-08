import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
/* eslint-disable no-underscore-dangle */
import get from 'lodash.get';
import set from 'lodash.set';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import transformFormValues from '../../utils/createQuestionnaireResponse';
import { buildInitialValues } from '../FormWizard/utils';
import { LoadingIds, useLoading } from '../LoadingProvider';
import { useQuestionnaire } from '../QuestionnaireProvider';
export var FormDataContext = createContext({});
export function FormDataProvider(_a) {
    var children = _a.children, partialSubmit = _a.partialSubmit, usePartialSubmit = _a.usePartialSubmit;
    var setLoading = useLoading().setLoading;
    var questionnaire = useQuestionnaire().questionnaire;
    var _b = useState(undefined), formData = _b[0], setFormData = _b[1];
    var _c = useQuery('formData', function () { return partialSubmit(); }, {
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
    useEffect(function () {
        setLoading({
            isLoading: formDataRefetching,
            id: LoadingIds.formDataRefetch
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formDataRefetching]);
    useEffect(function () {
        setLoading({ isLoading: formDataLoading, id: LoadingIds.formData });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formDataLoading]);
    function getFormValue(name) {
        if (!formData)
            return undefined;
        return get(formData, name);
    }
    function setFormValue(name, value) {
        if (!formData)
            return;
        setFormData(function (prev) {
            var newFormData = __assign({}, prev);
            set(newFormData, name, value);
            return newFormData;
        });
    }
    useEffect(function () {
        if (!questionnaire)
            return;
        setFormData(buildInitialValues(questionnaire, formData));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [questionnaire]);
    var memoisedValue = useMemo(function () { return ({
        formData: formData,
        getFormValue: getFormValue,
        refetchFormData: refetchFormData,
        setFormData: setFormData,
        setFormValue: setFormValue,
        transformFormValues: function () { return transformFormValues(questionnaire, formData); }
    }); }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [formData]);
    return (_jsx(FormDataContext.Provider, __assign({ value: memoisedValue }, { children: children })));
}
export var useFormData = function () { return useContext(FormDataContext); };
//# sourceMappingURL=FormDataProvider.js.map