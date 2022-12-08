import { render, screen } from '../../../testHelpers/testUtils'
import Accordion, { AccordionProps } from './Accordion'

describe(`Accordion`, () => {
  let props: AccordionProps

  beforeEach(() => {
    props = {
      data: [
        {
          id: 'summary1',
          summary: 'Summary 1',
          details: 'A bit of detail for the first summary'
        },
        {
          id: 'summary2',
          summary: 'Summary 2',
          details: 'Expanding further on the second summary'
        }
      ]
    }
  })

  it(`renders the summary points and their details`, () => {
    render(<Accordion {...props} />)

    expect(
      screen.getByRole('button', { name: 'Summary 1' })
    ).toBeInTheDocument()
    expect(
      screen.getByText('A bit of detail for the first summary')
    ).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: 'Summary 2' })
    ).toBeInTheDocument()
    expect(
      screen.getByText('Expanding further on the second summary')
    ).toBeInTheDocument()
  })

  it(`renders an element as accordion details`, () => {
    props = {
      data: [
        {
          id: 'summaryTest',
          summary: 'Summary test element',
          details: <span>Test details element</span>
        }
      ]
    }

    render(<Accordion {...props} />)

    expect(
      screen.getByRole('button', { name: 'Summary test element' })
    ).toBeInTheDocument()
    expect(screen.getByText('Test details element')).toBeInTheDocument()
  })
})
