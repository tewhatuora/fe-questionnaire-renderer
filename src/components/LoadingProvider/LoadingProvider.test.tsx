import { renderWithLoadingProvider } from '../../testHelpers/componentWrappers'
import { render, screen } from '../../testHelpers/testUtils'
import { useLoading } from '.'

describe('useLoading', () => {
  function TestComponent(): JSX.Element {
    const { loading } = useLoading()

    return <div>{loading ? 'Loading...' : 'Test content'}</div>
  }

  it(`renders the test content`, () => {
    render(<TestComponent />)

    expect(screen.getByText('Test content')).toBeInTheDocument()
  })

  describe(`with 'loading=true'`, () => {
    it(`renders the 'Loading...' text`, () => {
      renderWithLoadingProvider(<TestComponent />, {
        providerProps: {
          value: {
            loading: true,
            setLoading: () => {}
          }
        }
      })

      expect(screen.getByText('Loading...')).toBeInTheDocument()
    })
  })
})
