/* eslint-disable react/jsx-no-constructed-context-values */

import { screen } from '@testing-library/react'

import {
  defaultQuestionnaireProviderProps,
  renderWithFormDataProvider
} from '../../../testHelpers/componentWrappers'
import { QuestionnaireContext } from '../../QuestionnaireProvider'
import { FormStep } from '..'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({
    stepId: 'step3'
  })
}))

const formStepProps = {
  basePath: '',
  inputComponents: {},
  useCompletedPage: false,
  useReviewPage: false
}

describe('Form step 3', () => {
  function TestComponent({ path }: { path: string }): JSX.Element {
    return (
      <QuestionnaireContext.Provider
        value={{
          ...defaultQuestionnaireProviderProps,
          formInitialPagePath: path,
          submitQuestionnaireData: () => undefined
        }}
      >
        <FormStep {...formStepProps} />
      </QuestionnaireContext.Provider>
    )
  }

  describe(`with populated values`, () => {
    it(`renders the third page`, async () => {
      renderWithFormDataProvider(
        <TestComponent path='/form/step3' />,
        {
          route: '/step3'
        },
        { step1: { step1_page1: { step1_page1_input1: true } } }
      )

      expect(
        screen.getByRole('heading', { name: 'Step 3' })
      ).toBeInTheDocument()

      expect(
        screen.getByRole('textbox', { name: 'Comments:' })
      ).toBeInTheDocument()

      expect(
        screen.getByRole('button', {
          name: 'Continue'
        })
      ).toBeInTheDocument()
      expect(
        screen.getByRole('button', {
          name: 'Back'
        })
      ).toBeInTheDocument()

      expect(
        screen.getByText(
          'Change your answer for the happiness question on the first page to change this page displaying or not.',
          { exact: false }
        )
      )
    })
  })
})
