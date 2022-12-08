import { renderWithQuestionnaireProvider } from '../../testHelpers/componentWrappers'
import { render, screen } from '../../testHelpers/testUtils'
import { useQuestionnaire } from '.'

describe('CMSContext', () => {
  function TestComponent(): JSX.Element {
    const { questionnaire } = useQuestionnaire()

    return (
      <div>
        <div>{questionnaire?.title || 'Not found'}</div>
        <div>{questionnaire?.publisher || 'Not found'}</div>
      </div>
    )
  }

  it(`renders no text`, () => {
    render(<TestComponent />)

    expect(screen.getAllByText('Not found').length).toBe(2)
  })

  it(`renders the text`, () => {
    renderWithQuestionnaireProvider(<TestComponent />)

    expect(screen.getByText('Demo Form')).toBeInTheDocument()

    expect(screen.getByText('Test NZ')).toBeInTheDocument()
  })
})
