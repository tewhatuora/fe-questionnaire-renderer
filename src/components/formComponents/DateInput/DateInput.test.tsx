import { screen } from '@testing-library/react'

import { renderWithFormDataProvider } from '../../../testHelpers/componentWrappers'
import { DateInput } from '..'

describe('Date input', () => {
  it('renders a date input', () => {
    renderWithFormDataProvider(<DateInput input={{ text: 'Test checkbox' }} />)

    expect(screen.getByText('Test checkbox')).toBeInTheDocument()
  })
})
