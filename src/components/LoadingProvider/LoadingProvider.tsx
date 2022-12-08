import { createContext, useContext, useEffect, useMemo, useState } from 'react'

export enum LoadingIds {
  formData = 'formData',
  formDataRefetch = 'formDataRefetch',
  submit = 'submit'
}

export interface NewLoadingState {
  id: LoadingIds
  isLoading: boolean
}

interface LoadingState {
  [key: string]: boolean
}

const initialState: LoadingState = {
  cmsData: false,
  formData: false,
  formDataRefetch: false,
  formSandbox: false,
  submit: false,
  verifyUser: false
}

export interface LoadingContextProps {
  loading: boolean
  setLoading(newLoadingState: NewLoadingState): void
}

export const LoadingContext = createContext<LoadingContextProps>(
  {} as LoadingContextProps
)

interface Props {
  children: JSX.Element
  useLoadingOverlay: boolean
  callbackLoading?(loading: boolean): void
}

function isLoading(loadingState: LoadingState) {
  return Object.values(loadingState).filter(Boolean).some(Boolean)
}

export function LoadingProvider({
  callbackLoading,
  children,
  useLoadingOverlay
}: Props): JSX.Element {
  const [loadingState, setLoadingState] = useState<LoadingState>(initialState)

  useEffect(() => {
    if (callbackLoading) {
      callbackLoading(isLoading(loadingState))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadingState])

  const memoisedValue = useMemo(() => {
    const setNewLoadingState = (newLoadingState: NewLoadingState) => {
      setLoadingState((prev) => {
        return {
          ...prev,
          [newLoadingState.id]: newLoadingState.isLoading
        }
      })
    }
    return {
      loading: isLoading(loadingState),
      setLoading: setNewLoadingState
    }
  }, [loadingState]) // Need to state the different attributes for the shallow compare

  return (
    <LoadingContext.Provider value={memoisedValue}>
      {memoisedValue.loading && useLoadingOverlay ? (
        <div className='overlay'>
          <div className='loader'>
            <div className='shadow' />
            <div className='box' />
          </div>
        </div>
      ) : null}
      {children}
    </LoadingContext.Provider>
  )
}

export const useLoading = () => useContext(LoadingContext)
