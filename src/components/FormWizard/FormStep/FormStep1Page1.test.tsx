/* eslint-disable react/jsx-no-constructed-context-values */

import {
  defaultQuestionnaireProviderProps,
  renderWithFormDataProvider
} from '../../../testHelpers/componentWrappers'
import { screen, userEvent } from '../../../testHelpers/testUtils'
import { QuestionnaireContext } from '../../QuestionnaireProvider'
import { FormStep } from '..'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({
    stepId: 'step1',
    pageId: 'page1'
  })
}))

const formStepProps = {
  basePath: '',
  inputComponents: {},
  useCompletedPage: false,
  useReviewPage: false
}

describe('Form step 1 page 1', () => {
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
    it(`renders the first step and first page`, async () => {
      renderWithFormDataProvider(
        <TestComponent path='/questionnaireTests/form/step1/page1' />,
        {
          route: '/questionnaireTests/form/step1/page1'
        },
        {
          step1: { step1_page1: { step1_page1_input4: [''] } }
        }
      )

      expect(
        screen.getByRole('heading', { level: 1, name: 'Page 1' })
      ).toBeInTheDocument()

      expect(
        screen.getByRole('group', { name: 'Are you happy?' })
      ).toBeInTheDocument()
      expect(
        screen.getByRole('group', { name: 'How happy?' })
      ).toBeInTheDocument()

      expect(screen.getByRole('button', { name: 'Yes' })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: 'No' })).toBeInTheDocument()
      expect(
        screen.getByRole('button', { name: 'Continue' })
      ).toBeInTheDocument()
      expect(screen.getByRole('button', { name: 'Add' })).toBeInTheDocument()

      expect(screen.getByRole('radio', { name: 'Happy 1' })).toBeInTheDocument()
      expect(screen.getByRole('radio', { name: 'Happy 2' })).toBeInTheDocument()
      expect(screen.getByRole('radio', { name: 'Sad' })).toBeInTheDocument()

      expect(
        screen.getByRole('textbox', { name: 'First name:' })
      ).toBeInTheDocument()
      expect(
        screen.queryByRole('button', { name: 'Delete' })
      ).not.toBeInTheDocument()
      expect(screen.getByRole('button', { name: 'Add' })).toBeInTheDocument()
    })
  })

  describe(`conditional item`, () => {
    it(`renders the first step and first page`, async () => {
      renderWithFormDataProvider(
        <TestComponent path='/form/step1/page1' />,
        {
          route: '/form/step1/page1'
        },
        {
          step1: {
            step1_page1: {
              step1_page1_input3: 'Sad',
              step1_page1_input4: [''],
              step1_page1_input5: [
                { step1_page1_input5a: '', step1_page1_input5b: '' }
              ]
            }
          }
        }
      )

      expect(screen.getByRole('radio', { name: 'Sad' })).toBeInTheDocument()

      userEvent.click(screen.getByRole('radio', { name: 'Sad' }))

      expect(
        screen.getByRole('textbox', { name: 'Reason:' })
      ).toBeInTheDocument()
      expect(screen.getAllByRole('button', { name: 'Yes' })).toHaveLength(2)
      expect(screen.getAllByRole('button', { name: 'Add' })).toHaveLength(2)
    })
  })

  describe(`add repeatable items`, () => {
    it(`renders the first step and first page`, async () => {
      renderWithFormDataProvider(
        <TestComponent path='/form/step1/page1' />,
        {
          route: '/form/step1/page1'
        },
        {
          step1: {
            step1_page1: {
              step1_page1_input4: ['']
            }
          }
        }
      )

      expect(
        screen.getByRole('textbox', { name: 'First name:' })
      ).toBeInTheDocument()

      expect(
        screen.queryByRole('button', { name: 'Delete' })
      ).not.toBeInTheDocument()

      expect(screen.getByRole('button', { name: 'Add' })).toBeInTheDocument()
      userEvent.click(screen.getByRole('button', { name: 'Add' }))
    })
  })
})
