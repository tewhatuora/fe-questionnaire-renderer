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
    stepId: 'step2'
  })
}))

const formStepProps = {
  basePath: '',
  inputComponents: {},
  useCompletedPage: false,
  useReviewPage: true
}

describe('Form step 2', () => {
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
    it(`renders the second page`, async () => {
      renderWithFormDataProvider(
        <TestComponent path='/form/step2' />,
        {
          route: '/step2'
        },
        { step1: { step1_page1: { step1_page1_input1: false } } }
      )

      expect(
        screen.getByRole('heading', { name: 'Step 2' })
      ).toBeInTheDocument()

      expect(
        screen.getByRole('textbox', { name: 'Last name:' })
      ).toBeInTheDocument()

      expect(
        screen.getByRole('group', { name: 'Symptoms date:' })
      ).toBeInTheDocument()

      expect(
        screen.getByRole('application', { name: 'Calendar' })
      ).toBeInTheDocument()

      expect(
        screen.getByRole('button', {
          name: 'Move backward to switch to the previous month.'
        })
      ).toBeInTheDocument()
      expect(
        screen.getByRole('button', {
          name: 'Review'
        })
      ).toBeInTheDocument()
      expect(
        screen.getByRole('button', {
          name: 'Back'
        })
      ).toBeInTheDocument()
    })

    it(`renders the button to the third page when conditions are met`, async () => {
      renderWithFormDataProvider(
        <TestComponent path='/form/step2' />,
        {
          route: '/step2'
        },
        { step1: { step1_page1: { step1_page1_input1: true } } }
      )

      expect(
        screen.getByRole('button', {
          name: 'Continue'
        })
      ).toBeInTheDocument()
    })
  })
})
