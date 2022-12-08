import { createContext, useContext, useMemo, useState } from 'react'

interface Props {
  children: JSX.Element
}

export interface FormErrorsContextType {
  formErrors: Error[]
  resetErrors(): void
  setFormError(name: string, message: string, addError?: boolean): void
}

export const FormErrorsContext = createContext<FormErrorsContextType>(
  {} as FormErrorsContextType
)

export interface Error {
  name: string
  message: string
}

export function FormErrorsProvider({ children }: Props) {
  const [errors, setErrors] = useState([] as Error[])

  function resetErrors() {
    setErrors([])
  }

  function setFormError(name: string, message: string, addError = true) {
    setErrors((prev) => {
      const index = prev.findIndex((e) => name === e.name)
      if (addError) {
        if (index !== -1) {
          return [
            ...prev.slice(0, index),
            { name, message },
            ...prev.slice(index + 1)
          ]
        }
        return [
          ...prev,
          {
            name,
            message
          }
        ]
      }
      if (index !== -1) {
        return [...prev.slice(0, index), ...prev.slice(index + 1)]
      }
      return prev
    })
  }

  const memoisedValue = useMemo(
    () => ({
      formErrors: errors,
      resetErrors,
      setFormError
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [errors]
  )

  return (
    <FormErrorsContext.Provider value={memoisedValue}>
      {children}
    </FormErrorsContext.Provider>
  )
}

export const useFormErrors = () => useContext(FormErrorsContext)
