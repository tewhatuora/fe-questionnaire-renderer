import merge from 'lodash.merge'
import { createContext, useContext, useEffect, useState } from 'react'

import { CMSContextProps } from '../../types'

export const CMSContext = createContext<CMSContextProps>({} as any)

interface Props {
  children: JSX.Element
  cmsData: CMSContextProps
  cmsFallback: CMSContextProps
  useCMS: boolean
}

export function CMSProvider({
  children,
  cmsData,
  cmsFallback = {},
  useCMS
}: Props): JSX.Element {
  const [CMSData, setCMSData] = useState<CMSContextProps>({})

  // Mutates the CMS data to add classes etc.
  useEffect(() => {
    // All projects will have common keys for the Landing Page etc.
    // Defaulting to the fallback ensure we'll always content to display
    if (useCMS) setCMSData(merge(cmsFallback, cmsData))
  }, [cmsFallback, cmsData, useCMS])

  return <CMSContext.Provider value={CMSData}>{children}</CMSContext.Provider>
}

export const useCMS = () => useContext(CMSContext)
