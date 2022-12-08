import { screen } from '@testing-library/react'

import { renderWithFormDataProvider } from '../../../testHelpers/componentWrappers'
import { TextInput } from '..'

describe('Text input', () => {
  it('renders a text input', () => {
    renderWithFormDataProvider(<TextInput input={{ text: 'Test checkbox' }} />)

    expect(screen.getByText('Test checkbox')).toBeInTheDocument()
  })
})
