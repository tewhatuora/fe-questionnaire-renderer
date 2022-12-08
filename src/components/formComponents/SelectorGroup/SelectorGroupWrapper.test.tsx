import { screen } from '@testing-library/react'

import { renderWithFormDataProvider } from '../../../testHelpers/componentWrappers'
import SelectorGroupWrapper from './SelectorGroupWrapper'

describe('Selector group', () => {
  it('renders a selector group', () => {
    renderWithFormDataProvider(
      <SelectorGroupWrapper input={{ text: 'Test radio' }} type='radio' />
    )

    expect(screen.queryByText('Test radio')).not.toBeInTheDocument()
  })

  it('renders a selector group', () => {
    renderWithFormDataProvider(
      <SelectorGroupWrapper input={{ text: 'Test checkbox' }} type='checkbox' />
    )

    expect(screen.queryByText('Test checkbox')).not.toBeInTheDocument()
  })

  it('renders a selector group', () => {
    renderWithFormDataProvider(
      <SelectorGroupWrapper
        input={{
          text: 'Test radio',
          answerOption: [
            { valueString: 'Test 1' },
            { valueString: 'Test 2' },
            { valueString: 'Test 3' }
          ]
        }}
        type='radio'
      />
    )

    expect(screen.getByText('Test radio')).toBeInTheDocument()

    expect(screen.getByRole('radio', { name: 'Test 1' })).toBeInTheDocument()
    expect(screen.getByRole('radio', { name: 'Test 2' })).toBeInTheDocument()
    expect(screen.getByRole('radio', { name: 'Test 3' })).toBeInTheDocument()
  })

  it('renders a selector group', () => {
    renderWithFormDataProvider(
      <SelectorGroupWrapper
        input={{
          text: 'Test checkbox',
          answerOption: [
            { valueString: 'Test 1' },
            { valueString: 'Test 2' },
            { valueString: 'Test 3' }
          ]
        }}
        type='checkbox'
      />
    )

    expect(screen.getByText('Test checkbox')).toBeInTheDocument()

    expect(screen.getByRole('checkbox', { name: 'Test 1' })).toBeInTheDocument()
    expect(screen.getByRole('checkbox', { name: 'Test 2' })).toBeInTheDocument()
    expect(screen.getByRole('checkbox', { name: 'Test 3' })).toBeInTheDocument()
  })
})
