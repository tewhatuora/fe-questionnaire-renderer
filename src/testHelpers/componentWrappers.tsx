import get from 'lodash.get'

import { CMSContext } from '../components/CMSProvider'
import {
  FormDataContext,
  FormDataContextProps
} from '../components/FormDataProvider'
import {
  FormErrorsContext,
  FormErrorsContextType
} from '../components/FormErrorsProvider'
import {
  LoadingContext,
  LoadingContextProps
} from '../components/LoadingProvider'
import { QuestionnaireContext } from '../components/QuestionnaireProvider'
import { QuestionnaireContextProps } from '../components/QuestionnaireProvider/QuestionnaireProvider'
import cmsMock from '../data/cmsTest.json'
import { CMSContextProps, FormValues, Questionnaire } from '../types'
import { CustomRenderOptions, render, testQuestionnaire } from './testUtils'

interface CMSProviderProps {
  value: CMSContextProps
}

interface CustomRenderWithCMSProviderOptions extends CustomRenderOptions {
  providerProps?: CMSProviderProps
}

interface QuestionnaireProviderProps {
  value: QuestionnaireContextProps
}

interface CustomRenderWithQuestionnaireProviderOptions
  extends CustomRenderOptions {
  providerProps?: QuestionnaireProviderProps
}

interface FormDataProviderProps {
  value: FormDataContextProps
}

interface CustomRenderWithFormDataProviderOptions extends CustomRenderOptions {
  providerProps?: FormDataProviderProps
}

interface FormErrorsProviderProps {
  value: FormErrorsContextType
}

interface CustomRenderWithFormErrorsProviderOptions
  extends CustomRenderOptions {
  providerProps: FormErrorsProviderProps
}

interface LoadingProviderProps {
  value: LoadingContextProps
}

interface CustomRenderWithLoadingProviderOptions extends CustomRenderOptions {
  providerProps?: LoadingProviderProps
}

const withCMSProvider = (ui: JSX.Element, providerProps: CMSProviderProps) => (
  <CMSContext.Provider {...providerProps}>{ui}</CMSContext.Provider>
)

const renderWithCMSProvider = (
  ui: JSX.Element,
  options?: CustomRenderWithCMSProviderOptions
) => {
  const renderOptions = { ...options }
  return render(withCMSProvider(ui, { value: cmsMock }), renderOptions)
}

const withFormDataProvider = (
  ui: JSX.Element,
  providerProps: FormDataProviderProps
) => (
  <FormDataContext.Provider {...providerProps}>{ui}</FormDataContext.Provider>
)

const renderWithFormDataProvider = (
  ui: JSX.Element,
  options?: CustomRenderWithFormDataProviderOptions,
  formDataInitial?: FormValues
) => {
  if (options || formDataInitial) {
    const renderOptions = { ...options }
    if (renderOptions?.providerProps) delete renderOptions.providerProps

    const providerProps = {
      value: {
        formData: formDataInitial || {},
        getFormValue: formDataInitial
          ? (name: string) => get(formDataInitial, name)
          : jest.fn(),
        refetchFormData: jest.fn(),
        setFormValue: jest.fn(),
        setFormData: jest.fn(),
        transformFormValues: jest.fn()
      }
    }
    return render(withFormDataProvider(ui, providerProps), renderOptions)
  }
  return render(ui)
}

const withFormErrorsProvider = (
  ui: JSX.Element,
  providerProps: FormErrorsProviderProps
) => (
  <FormErrorsContext.Provider {...providerProps}>
    {ui}
  </FormErrorsContext.Provider>
)

const renderWithFormErrorsProvider = (
  ui: JSX.Element,
  options: CustomRenderWithFormErrorsProviderOptions
) => {
  const renderOptions = { ...options }

  return render(
    withFormErrorsProvider(ui, options.providerProps),
    renderOptions
  )
}

const withLoadingProvider = (
  ui: JSX.Element,
  providerProps: LoadingProviderProps
) => (
  <CMSContext.Provider value={cmsMock}>
    <LoadingContext.Provider {...providerProps}>{ui}</LoadingContext.Provider>
  </CMSContext.Provider>
)

const renderWithLoadingProvider = (
  ui: JSX.Element,
  options?: CustomRenderWithLoadingProviderOptions
) => {
  if (options?.providerProps) {
    const renderOptions = { ...options }
    if (renderOptions?.providerProps) delete renderOptions.providerProps

    return render(
      withLoadingProvider(ui, options?.providerProps),
      renderOptions
    )
  }

  return null
}

const withQuestionnaireProvider = (
  ui: JSX.Element,
  providerProps: QuestionnaireProviderProps
) => (
  <QuestionnaireContext.Provider {...providerProps}>
    {ui}
  </QuestionnaireContext.Provider>
)

const defaultQuestionnaireProviderProps = {
  formInitialPagePath: '/form/step1/page1',
  questionnaire: testQuestionnaire,
  addRepeatableItem: () => undefined,
  deleteRepeatableItem: () => undefined,
  setQuestionnaireData: () => undefined
}

const renderWithQuestionnaireProvider = (
  ui: JSX.Element,
  options?: CustomRenderWithQuestionnaireProviderOptions,
  questionnaire?: Questionnaire
) => {
  const renderOptions = { ...options }
  return render(
    withQuestionnaireProvider(ui, {
      value: {
        ...defaultQuestionnaireProviderProps,
        questionnaire: questionnaire || testQuestionnaire,
        submitQuestionnaireData: () => undefined
      }
    }),
    renderOptions
  )
}

export {
  defaultQuestionnaireProviderProps,
  renderWithCMSProvider,
  renderWithFormDataProvider,
  renderWithFormErrorsProvider,
  renderWithLoadingProvider,
  renderWithQuestionnaireProvider,
  withFormDataProvider
}
