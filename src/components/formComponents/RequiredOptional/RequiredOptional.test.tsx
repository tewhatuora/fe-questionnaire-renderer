import { render, screen } from '../../../testHelpers/testUtils'
import { RequiredOptional } from '..'
import { RequiredOptionalProps } from '.'

describe('RequiredOptional', () => {
  let props: RequiredOptionalProps

  it(`renders just the label text`, () => {
    render(<RequiredOptional {...props} />)

    expect(screen.queryByText('Optional')).not.toBeInTheDocument()
    expect(screen.queryByText('Required')).not.toBeInTheDocument()
  })

  describe(`when the input is 'optional'`, () => {
    it(`renders the 'optional' text`, () => {
      render(<RequiredOptional required={false} />)

      expect(screen.queryByText('Required')).not.toBeInTheDocument()
      expect(screen.getByText('Optional')).toBeInTheDocument()
    })
  })

  describe(`when the input is 'required'`, () => {
    it(`renders the 'required' text`, () => {
      render(<RequiredOptional required />)

      expect(screen.queryByText('Optional')).not.toBeInTheDocument()
      expect(screen.getByText('Required')).toBeInTheDocument()
    })
  })
})
