import { useEffect } from 'react'

import { Input } from '../../../types'
import { getId } from '../../../utils/utils'
import { useFormTouched } from '../../FormTouchedProvider'

interface FieldWrapperChildren {
  'aria-describedby'?: string
  'aria-invalid': boolean
  'aria-required'?: boolean
  className: string
  fieldName?: string
  id: string
  name: string
  value?: any
}

interface FieldWrapperProps {
  checked?: boolean
  className?: string
  fieldName?: string
  id: string
  input: Input
  isInvalid: boolean
  mask?: (string | RegExp)[]
  value?: any
  children(props: FieldWrapperChildren): any
  validateField(
    value?: any,
    setError?: boolean,
    resetError?: boolean
  ): string | undefined
}

export default function FieldWrapper({
  children,
  className = '',
  fieldName,
  input,
  isInvalid,
  validateField,
  ...rest
}: FieldWrapperProps): JSX.Element {
  const { formTouched, setFormTouched } = useFormTouched()

  const name = fieldName || getId(input)

  const buildClasses = (): string => {
    if (isInvalid) return `${className} is-invalid`
    return className
  }

  const buildAriaDescribedBy = () => {
    if (isInvalid) return `${name}Error`
    return undefined
  }

  // Removes error and touched on unmount
  useEffect(() => {
    return () => {
      validateField(undefined, true, true)
      if (formTouched.find((ft) => ft.name === name)) {
        setFormTouched(name, false)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return children({
    'aria-describedby': buildAriaDescribedBy(),
    'aria-invalid': isInvalid,
    'aria-required': input.required,
    className: buildClasses(),
    name,
    ...rest
  })
}
