import { createContext, useContext, useMemo, useState } from 'react'

interface Props {
  children: JSX.Element
}

export interface FormTouchedContextType {
  formTouched: Touched[]
  resetTouched(): void
  setFormTouched(name: string, setTouch?: boolean): void
}

export const FormTouchedContext = createContext<FormTouchedContextType>(
  {} as FormTouchedContextType
)

export interface Touched {
  name: string
}

export function FormTouchedProvider({ children }: Props) {
  const [touched, setTouched] = useState([] as Touched[])

  function resetTouched() {
    setTouched([])
  }

  function setFormTouched(name: string, setTouch = true) {
    setTouched((prev) => {
      const index = prev.findIndex((e) => name === e.name)
      if (setTouch) {
        if (index !== -1) {
          return [...prev.slice(0, index), { name }, ...prev.slice(index + 1)]
        }
        return [...prev, { name }]
      }
      if (index !== -1) {
        return [...prev.slice(0, index), ...prev.slice(index + 1)]
      }
      return prev
    })
  }

  const memoisedValue = useMemo(
    () => ({
      formTouched: touched,
      resetTouched,
      setFormTouched
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [touched]
  )

  return (
    <FormTouchedContext.Provider value={memoisedValue}>
      {children}
    </FormTouchedContext.Provider>
  )
}

export const useFormTouched = () => useContext(FormTouchedContext)
