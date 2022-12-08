import { useEffect, useState } from 'react'

export interface MaintenanceData {
  data: {
    inMaintenance: string
    maintenanceMessage: string
  }
  status: number
}

interface Props {
  children: JSX.Element
  pollInterval: number
  useMaintenancePage: boolean
  getMaintenanceMode(): Promise<any>
}

export default function MaintenancePage({
  children,
  getMaintenanceMode,
  pollInterval,
  useMaintenancePage
}: Props): JSX.Element {
  const [maintenanceMode, setMaintenanceMode] = useState(false)
  const [maintenanceMessage, setMaintenanceMessage] =
    useState('API Unavailable')

  const setMode = async () => {
    const captchaBadge =
      document.querySelector<HTMLElement>('.grecaptcha-badge')

    await getMaintenanceMode()
      .then((mode) => {
        if (maintenanceMode && mode.data.inMaintenance === 'false') {
          setMaintenanceMode(false)
          window.location.reload()
        } else {
          if (captchaBadge && mode.data.inMaintenance === 'true') {
            captchaBadge!.style.display = 'none'
          }
          setMaintenanceMessage(mode.data.maintenanceMessage)
          setMaintenanceMode(mode.data.inMaintenance === 'true')
        }
      })
      .catch(() => {
        if (captchaBadge) captchaBadge.style.display = 'none'
        setMaintenanceMode(true)
      })
  }

  useEffect(() => {
    if (!useMaintenancePage) return
    setMode()
    const timer = setInterval(() => setMode(), pollInterval)
    return () => clearInterval(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!useMaintenancePage) return children

  return maintenanceMode ? (
    <>
      <h1 className='size-h1'>This service is currently unavailable</h1>
      <p className='content-card'>{maintenanceMessage}</p>
    </>
  ) : (
    children
  )
}
