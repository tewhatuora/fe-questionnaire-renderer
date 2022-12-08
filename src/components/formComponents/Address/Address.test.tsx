import { renderWithFormDataProvider } from '../../../testHelpers/componentWrappers'
import { screen, userEvent } from '../../../testHelpers/testUtils'
import Address from './Address'

describe(`Address`, () => {
  it(`renders the manual address text fields`, () => {
    renderWithFormDataProvider(
      <Address input={{ linkIdWithParent: 'testAddress' } as any} />
    )

    expect(
      screen.getByRole('button', { name: 'Enter address manually' })
    ).toBeInTheDocument()

    const button = screen.getByRole('button', {
      name: 'Enter address manually'
    })

    userEvent.click(button)

    expect(
      screen.getByRole('textbox', { name: 'Address line 1' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('textbox', { name: 'Address line 2' })
    ).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: 'Suburb' })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: 'City' })).toBeInTheDocument()
    expect(
      screen.getByRole('textbox', { name: 'Postcode' })
    ).toBeInTheDocument()
  })

  it(`renders the autocomplete input`, () => {
    renderWithFormDataProvider(
      <Address input={{ linkIdWithParent: 'testAddress' } as any} />
    )

    expect(
      screen.getByRole('button', { name: 'Enter address manually' })
    ).toBeInTheDocument()
  })
})
