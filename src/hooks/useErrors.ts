import { useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'

import { useFormData } from '../components/FormDataProvider'
import { useFormErrors } from '../components/FormErrorsProvider'
import { useFormTouched } from '../components/FormTouchedProvider'
import { ValidateFieldProps } from '../types'

export interface ErrorsHookType {
  error?: string
  formErrors: Error[]
  formValue: any
  hasError: boolean
  isInvalid: boolean
  touched?: boolean
  touchedPaths: string[]
  validateField(
    value?: any,
    setError?: boolean,
    resetError?: boolean,
    additionalProps?: any
  ): string | undefined
}

export interface ErrorsProps {
  fieldName?: string
  useValidationOnMount?: boolean
  inputValidateField?(props: ValidateFieldProps): string | undefined
}

export function useErrors({
  fieldName,
  inputValidateField,
  useValidationOnMount = true
}: ErrorsProps): ErrorsHookType {
  const params = useParams()
  const { getFormValue, formData } = useFormData()
  const { formErrors, setFormError } = useFormErrors()
  const { formTouched } = useFormTouched()

  const formValue = getFormValue(fieldName || '')
  const error = formErrors.find((e) => e.name === fieldName)?.message

  function validateField(
    value?: any,
    setError?: boolean,
    resetError?: boolean,
    additionalProps?: any
  ): string | undefined {
    if (resetError && fieldName) {
      setFormError(fieldName, '', false)
      return
    }
    if (inputValidateField) {
      const val = inputValidateField({
        value: value !== undefined ? value : formValue,
        fieldName,
        formData,
        params,
        ...additionalProps
      })
      if (setError && fieldName) {
        setFormError(fieldName || '', val || '', !!val)
      }
      return val
    }
    return undefined
  }

  const memoized = useMemo(() => {
    const touchedPaths: string[] = formTouched.map((ft) => ft.name)
    const hasError = !!formErrors.find((e) => e.name === fieldName)
    const touch = touchedPaths.find((t) => t === fieldName)
    const isInvalid = !!(hasError && touch)

    return {
      error,
      formErrors,
      formValue,
      hasError,
      isInvalid,
      touched: !!touch,
      touchedPaths
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formErrors, formTouched, fieldName, error, formValue])

  // Validation on mount
  useEffect(() => {
    if (!useValidationOnMount) return
    if (!error && inputValidateField && validateField()) {
      validateField(undefined, true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error])

  return { ...memoized, validateField }
}
