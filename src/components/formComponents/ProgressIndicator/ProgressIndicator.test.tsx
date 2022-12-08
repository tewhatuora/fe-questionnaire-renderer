import { screen } from '@testing-library/react'

import { renderWithQuestionnaireProvider } from '../../../testHelpers/componentWrappers'
import { ProgressIndicator } from '..'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({
    stepId: 'step1',
    pageId: 'page1'
  })
}))

describe('Progress Indicator', () => {
  it(`renders the 3 steps indicators`, () => {
    renderWithQuestionnaireProvider(<ProgressIndicator />)

    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
  })
})
