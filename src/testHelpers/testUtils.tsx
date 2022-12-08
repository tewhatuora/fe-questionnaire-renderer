import {
  render as rtlRender,
  RenderOptions,
  RenderResult
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { QueryClient, QueryClientProvider } from 'react-query'
import { MemoryRouter as Router } from 'react-router-dom'

import {
  defaultPartialSubmitQuery,
  FormDataProvider
} from '../components/FormDataProvider'
import { FormErrorsProvider } from '../components/FormErrorsProvider'
import { FormTouchedProvider } from '../components/FormTouchedProvider'
import { LoadingProvider } from '../components/LoadingProvider'
import { QuestionnaireProvider } from '../components/QuestionnaireProvider'
import { enrichQuestionnaireData } from '../components/QuestionnaireProvider/utils'
import testData from '../data/questionnaireTest.json'
import { IQuestionnaire } from '../types/fhir'

const questionnaire = JSON.parse(JSON.stringify(testData))
export const testQuestionnaire = enrichQuestionnaireData(questionnaire)

interface AllProvidersProps {
  children: JSX.Element
}

function AllProviders({ children }: AllProvidersProps) {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <LoadingProvider useLoadingOverlay={false}>
        <QuestionnaireProvider
          questionnaireData={{} as IQuestionnaire}
          submitQuestionnaire={() => ({} as any)}
        >
          <FormDataProvider
            partialSubmit={defaultPartialSubmitQuery}
            usePartialSubmit={false}
          >
            <FormErrorsProvider>
              <FormTouchedProvider>{children}</FormTouchedProvider>
            </FormErrorsProvider>
          </FormDataProvider>
        </QuestionnaireProvider>
      </LoadingProvider>
    </QueryClientProvider>
  )
}

export interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  route?: string
  withRouter?: boolean
}

const render = (
  ui: JSX.Element,
  options?: CustomRenderOptions
): RenderResult => {
  const {
    route = '/',
    withRouter = true,
    ...opts
  } = options || ({} as CustomRenderOptions)

  const rendered = withRouter
    ? rtlRender(
        <AllProviders>
          <Router initialEntries={[route]}>{ui}</Router>
        </AllProviders>,
        opts
      )
    : rtlRender(<AllProviders>{ui}</AllProviders>, opts)

  const { rerender: rtlRerender } = rendered

  const rerender = (updatedUi: JSX.Element) =>
    withRouter
      ? rtlRerender(
          <AllProviders>
            <Router>{updatedUi}</Router>
          </AllProviders>
        )
      : rtlRerender(<AllProviders>{updatedUi}</AllProviders>)

  return {
    ...rendered,
    rerender
  }
}

// Useful for when you want to match on text that is contained across
// multiple HTML tags e.g. `<div>Hello <span>world</span></div>`
// You can pass "Hello world" into this function, and then use it like so:
// `screen.getByText(textContentMatcher("Hello world"))`
const textContentMatcher =
  (text: string) =>
  (_content: string, node: Element | null): boolean => {
    const hasText = (n: Element) => n.textContent === text
    const nodeHasText = node && hasText(node)
    const childrenDontHaveText =
      node && Array.from(node.children).every((child) => !hasText(child))

    return !!(nodeHasText && childrenDontHaveText)
  }

export { render, textContentMatcher, userEvent }
export * from '@testing-library/react'
