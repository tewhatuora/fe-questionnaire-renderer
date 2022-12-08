import { render, screen } from '../../../testHelpers/testUtils'
import { ErrorSummary } from '..'

describe('Error Summary', () => {
  it(`renders nothing when no errors`, () => {
    render(<ErrorSummary formErrorsFiltered={[]} />)

    expect(
      screen.queryByText('There are some errors on this page')
    ).not.toBeInTheDocument()
  })

  it(`renders nothing is 1 or 2 errors`, () => {
    render(<ErrorSummary formErrorsFiltered={[]} />)

    expect(
      screen.queryByText('There are some errors on this page')
    ).not.toBeInTheDocument()
  })

  it(`renders the summary when 3 or more errors`, () => {
    render(
      <ErrorSummary
        formErrorsFiltered={[
          {
            name: 'test1',
            message: 'test1'
          },
          {
            name: 'test2',
            message: 'test2'
          },
          {
            name: 'test3',
            message: 'test3'
          }
        ]}
      />
    )

    expect(
      screen.getByText('There are some errors on this page')
    ).toBeInTheDocument()

    expect(screen.getByRole('button', { name: 'Test1.' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Test2.' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Test3.' })).toBeInTheDocument()
  })
})
