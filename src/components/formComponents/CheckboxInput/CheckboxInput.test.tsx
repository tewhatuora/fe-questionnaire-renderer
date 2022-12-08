import { screen } from '@testing-library/react'

import { renderWithFormDataProvider } from '../../../testHelpers/componentWrappers'
import { CheckboxInput } from '..'

describe('Checkbox input', () => {
  it('renders a checkbox input', () => {
    renderWithFormDataProvider(
      <CheckboxInput input={{ text: 'Test checkbox' }} />
    )

    expect(screen.getByText('Test checkbox')).toBeInTheDocument()
  })
})
