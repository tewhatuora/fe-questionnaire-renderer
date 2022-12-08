import { render, screen, waitFor } from '../../testHelpers/testUtils'
import MaintenancePage from '.'
import defaultMaintenanceModeQuery from './maintenance'

jest.mock('./maintenance')
const mockedGetMaintenanceMode = defaultMaintenanceModeQuery as jest.Mock<
  Promise<any>
>

describe('MaintenancePage', () => {
  function TestComponent(): JSX.Element {
    return <h1>Test Component</h1>
  }

  describe('use maintenance to false', () => {
    it(`shows Test Component with 'useMaintenancePage=false'`, async () => {
      render(
        <MaintenancePage
          getMaintenanceMode={defaultMaintenanceModeQuery}
          pollInterval={10}
          useMaintenancePage={false}
        >
          {TestComponent()}
        </MaintenancePage>
      )

      await waitFor(() => {
        expect(screen.getByText('Test Component')).toBeInTheDocument()
      })
    })
  })

  describe('Healthcheck maintenance response to false', () => {
    beforeEach(() => {
      mockedGetMaintenanceMode.mockResolvedValue({
        status: 200,
        data: {
          inMaintenance: 'false',
          maintenanceMessage: 'Please try again later'
        }
      })
    })

    it(`shows Test Component with 'maintenanceMode=false'`, async () => {
      render(
        <MaintenancePage
          getMaintenanceMode={defaultMaintenanceModeQuery}
          pollInterval={10}
          useMaintenancePage
        >
          {TestComponent()}
        </MaintenancePage>
      )

      await waitFor(() => {
        expect(screen.getByText('Test Component')).toBeInTheDocument()
      })
    })
  })

  describe('Healthcheck maintenance response set to true', () => {
    beforeEach(() => {
      mockedGetMaintenanceMode.mockResolvedValue({
        status: 200,
        data: {
          inMaintenance: 'true',
          maintenanceMessage: 'Please try again later'
        }
      })
    })

    it(`shows MaintenancePage with custom message with 'maintenanceMode=true'`, async () => {
      render(
        <MaintenancePage
          getMaintenanceMode={mockedGetMaintenanceMode as any}
          pollInterval={10}
          useMaintenancePage
        >
          {TestComponent()}
        </MaintenancePage>
      )

      await waitFor(() => {
        expect(
          screen.getByText('This service is currently unavailable')
        ).toBeInTheDocument()
        expect(screen.getByText('Please try again later')).toBeInTheDocument()
      })
    })
  })

  describe('response status 400', () => {
    beforeEach(() => {
      mockedGetMaintenanceMode.mockRejectedValue(new Error('Bad request mate.'))
    })

    it(`shows MaintenancePage with default message if response status >= 400`, async () => {
      render(
        <MaintenancePage
          getMaintenanceMode={mockedGetMaintenanceMode as any}
          pollInterval={10}
          useMaintenancePage
        >
          {TestComponent()}
        </MaintenancePage>
      )

      await waitFor(() => {
        expect(
          screen.getByText('This service is currently unavailable')
        ).toBeInTheDocument()
        expect(screen.getByText('API Unavailable')).toBeInTheDocument()
      })
    })
  })
})
