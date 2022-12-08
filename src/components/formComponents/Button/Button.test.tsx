import { render, screen } from '../../../testHelpers/testUtils'
import { ButtonVariantTypes } from '../../../types'
import { Button, ButtonProps } from '..'

describe('Button', () => {
  let props: ButtonProps

  beforeEach(() => {
    props = {
      onClick: jest.fn(),
      type: 'button',
      variant: ButtonVariantTypes.primary
    }
  })

  it('renders the button text', () => {
    render(<Button {...props}>Click me</Button>)

    expect(screen.getByText('Click me')).toBeInTheDocument()
  })
})
