import { MaintenanceData } from './MaintenancePage'

export default async function defaultMaintenanceModeQuery(
  result?: MaintenanceData
) {
  return new Promise<MaintenanceData>((resolve) => {
    resolve(
      result || {
        data: { inMaintenance: 'false', maintenanceMessage: '' },
        status: 200
      }
    )
  })
}
