import { render, screen } from '../../../testHelpers/testUtils'
import { InputError } from '..'
import { InputErrorProps } from '.'

describe('Button', () => {
  let props: InputErrorProps

  beforeEach(() => {
    props = {
      message: 'Some input error',
      name: 'name'
    }
  })
  it('renders the button text', () => {
    render(<InputError {...props} />)

    expect(screen.getByText('Some input error')).toBeInTheDocument()
  })
})
