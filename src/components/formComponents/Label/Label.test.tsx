import { render, screen } from '../../../testHelpers/testUtils'
import { Label } from '..'
import { LabelProps } from '.'

describe('Label', () => {
  let props: LabelProps

  beforeEach(() => {
    props = {
      htmlFor: 'testInput'
    } as LabelProps
  })

  it(`renders just the label text`, () => {
    render(<Label {...props}>Test label</Label>)

    expect(screen.getByText('Test label')).toBeInTheDocument()
  })
})
