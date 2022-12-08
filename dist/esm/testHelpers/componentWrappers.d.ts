/// <reference types="react" />
import { FormDataContextProps } from '../components/FormDataProvider';
import { FormErrorsContextType } from '../components/FormErrorsProvider';
import { LoadingContextProps } from '../components/LoadingProvider';
import { QuestionnaireContextProps } from '../components/QuestionnaireProvider/QuestionnaireProvider';
import { CMSContextProps, FormValues, Questionnaire } from '../types';
import { CustomRenderOptions } from './testUtils';
interface CMSProviderProps {
    value: CMSContextProps;
}
interface CustomRenderWithCMSProviderOptions extends CustomRenderOptions {
    providerProps?: CMSProviderProps;
}
interface QuestionnaireProviderProps {
    value: QuestionnaireContextProps;
}
interface CustomRenderWithQuestionnaireProviderOptions extends CustomRenderOptions {
    providerProps?: QuestionnaireProviderProps;
}
interface FormDataProviderProps {
    value: FormDataContextProps;
}
interface CustomRenderWithFormDataProviderOptions extends CustomRenderOptions {
    providerProps?: FormDataProviderProps;
}
interface FormErrorsProviderProps {
    value: FormErrorsContextType;
}
interface CustomRenderWithFormErrorsProviderOptions extends CustomRenderOptions {
    providerProps: FormErrorsProviderProps;
}
interface LoadingProviderProps {
    value: LoadingContextProps;
}
interface CustomRenderWithLoadingProviderOptions extends CustomRenderOptions {
    providerProps?: LoadingProviderProps;
}
declare const renderWithCMSProvider: (ui: JSX.Element, options?: CustomRenderWithCMSProviderOptions) => import("@testing-library/react").RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement, HTMLElement>;
declare const withFormDataProvider: (ui: JSX.Element, providerProps: FormDataProviderProps) => JSX.Element;
declare const renderWithFormDataProvider: (ui: JSX.Element, options?: CustomRenderWithFormDataProviderOptions, formDataInitial?: FormValues) => import("@testing-library/react").RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement, HTMLElement>;
declare const renderWithFormErrorsProvider: (ui: JSX.Element, options: CustomRenderWithFormErrorsProviderOptions) => import("@testing-library/react").RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement, HTMLElement>;
declare const renderWithLoadingProvider: (ui: JSX.Element, options?: CustomRenderWithLoadingProviderOptions) => import("@testing-library/react").RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement, HTMLElement> | null;
declare const defaultQuestionnaireProviderProps: {
    formInitialPagePath: string;
    questionnaire: Questionnaire;
    addRepeatableItem: () => undefined;
    deleteRepeatableItem: () => undefined;
    setQuestionnaireData: () => undefined;
};
declare const renderWithQuestionnaireProvider: (ui: JSX.Element, options?: CustomRenderWithQuestionnaireProviderOptions, questionnaire?: Questionnaire) => import("@testing-library/react").RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement, HTMLElement>;
export { defaultQuestionnaireProviderProps, renderWithCMSProvider, renderWithFormDataProvider, renderWithFormErrorsProvider, renderWithLoadingProvider, renderWithQuestionnaireProvider, withFormDataProvider };
