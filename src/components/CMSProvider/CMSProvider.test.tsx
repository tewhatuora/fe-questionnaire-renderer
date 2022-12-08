import parse from 'html-react-parser'

import { renderWithCMSProvider } from '../../testHelpers/componentWrappers'
import { render, screen } from '../../testHelpers/testUtils'
import { useCMS } from './CMSProvider'

describe('CMSContext', () => {
  function TestComponent(): JSX.Element {
    const CMSData = useCMS()

    return (
      <div>
        <div>
          {parse(
            CMSData?.['Landing Page']?.Introduction.htmlContent || 'Not found'
          )}
        </div>
      </div>
    )
  }

  it(`renders no text from CMS`, () => {
    render(<TestComponent />)

    expect(screen.getAllByText('Not found').length).toBe(1)
  })

  it(`renders the text from the CMS`, () => {
    renderWithCMSProvider(<TestComponent />)

    expect(
      screen.getByText('Welcome on this questionnaire.')
    ).toBeInTheDocument()
  })
})
