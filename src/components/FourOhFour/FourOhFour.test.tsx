import { screen } from '@testing-library/react'

import { renderWithCMSProvider } from '../../testHelpers/componentWrappers'
import FourOhFour from '.'

describe('FourOhFour', () => {
  it(`renders the headings and the button`, () => {
    renderWithCMSProvider(<FourOhFour basePath='' />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'We’re sorry. Aroha mai.' })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'We can’t find that page anywhere.'
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: 'Back to home page' })
    ).toBeInTheDocument()
  })
})
