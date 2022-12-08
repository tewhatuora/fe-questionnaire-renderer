import { render, screen } from '../../../testHelpers/testUtils'
import { ButtonVariantTypes } from '../../../types'
import { HrefButton } from '..'

describe('Button', () => {
  it('renders the button text', () => {
    render(
      <HrefButton
        buttonAttributes={{
          content: 'Click me',
          href: 'https://github.com/',
          variant: ButtonVariantTypes.primary
        }}
      />
    )

    expect(screen.getByText('Click me')).toBeInTheDocument()
  })
})
