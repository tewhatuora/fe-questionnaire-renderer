import { renderWithFormDataProvider } from '../../../testHelpers/componentWrappers'
import { screen, userEvent } from '../../../testHelpers/testUtils'
import { Address } from '..'

describe(`AddressToggle`, () => {
  it(`renders the 'Enter address manually' button text`, () => {
    renderWithFormDataProvider(<Address input={{}} />)

    expect(
      screen.getByRole('button', { name: 'Enter address manually' })
    ).toBeInTheDocument()
  })

  it(`renders the 'Search for my address' button text once clicked`, () => {
    renderWithFormDataProvider(<Address input={{}} />)

    const button = screen.getByRole('button', {
      name: 'Enter address manually'
    })

    userEvent.click(button)

    expect(
      screen.queryByRole('button', { name: 'Enter address manually' })
    ).not.toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Search for my address' })
    ).toBeInTheDocument()
  })
})
