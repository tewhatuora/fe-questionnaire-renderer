import dayjs from 'dayjs'

import {
  Extensions,
  Input,
  ValidateFieldProps,
  ValidationExtensions
} from '../types'
import { IExtension } from '../types/fhir'
import { getExtension } from './extensions'

const defaultPeriod = 7

// Required fields validation
export function validateBasicRequired({
  extension,
  value
}: ValidateFieldProps) {
  const extensionMessage =
    extension?.extension &&
    getExtension(extension, ValidationExtensions.validationRequired)
      ?.valueString
  const valMessage = extensionMessage || 'Required'

  if (value === undefined || value === null || value.length === 0)
    return valMessage

  if (
    (typeof value === 'string' || value instanceof String) &&
    value.trim() === ''
  ) {
    return valMessage
  }

  return undefined
}

// Date period validation
export function validateDateMaxPeriod({
  extension,
  value
}: ValidateFieldProps) {
  const ext =
    extension?.extension &&
    getExtension(extension, ValidationExtensions.validationDateMaxPeriod)

  if (!ext) return

  const { valueString, extension: valExt } = ext
  const period =
    (valExt &&
      getExtension(extension, ValidationExtensions.validationDateMaxPeriodValue)
        ?.valueInteger) ||
    defaultPeriod

  if (dayjs(value).isBefore(dayjs().subtract(period, 'day'))) {
    return valueString || 'Select a correct date'
  }

  return undefined
}

// Forbidden characters validation
export function validateForbiddenCharacters({
  extension,
  value
}: ValidateFieldProps) {
  const extensionMessage =
    extension?.extension &&
    getExtension(extension, ValidationExtensions.validationForbiddenCharacters)
      ?.valueString

  if (value && value.match(/[${}%]/g)) {
    return (
      extensionMessage ||
      'Invalid input, please remove special characters like $, %'
    )
  }

  return undefined
}

// Value where true is the only option validation
export function validateTrueValue({ extension, value }: ValidateFieldProps) {
  const extensionMessage =
    extension?.extension &&
    getExtension(extension, ValidationExtensions.validationTrueValue)
      ?.valueString
  const valMessage = extensionMessage || 'Required'

  if (!value) return valMessage
  return undefined
}

// If an input should be validated by multiple functions
type ValidationFunction = (props: ValidateFieldProps) => string | undefined
function pipeFunctions(
  previousFunction: ValidationFunction | undefined,
  newFunction: ValidationFunction,
  extension?: IExtension
): ValidationFunction {
  return (props: ValidateFieldProps) => {
    const prev = previousFunction && previousFunction(props)
    return prev || newFunction({ ...props, extension })
  }
}

// Returns the validation function or the concatenation of validation functions based on extensions
export function getValidationFunction(input: Input) {
  const extension =
    input.extension && getExtension(input, Extensions.validationExtension)

  let func: ValidationFunction | undefined

  if (input.required) {
    func = (props: ValidateFieldProps) =>
      validateBasicRequired({ ...props, extension })
  }

  if (!extension || !extension.extension) return func

  if (getExtension(extension, ValidationExtensions.validationDateMaxPeriod)) {
    func = pipeFunctions(func, validateDateMaxPeriod, extension)
  }

  if (
    getExtension(extension, ValidationExtensions.validationForbiddenCharacters)
  ) {
    func = pipeFunctions(func, validateForbiddenCharacters, extension)
  }

  if (getExtension(extension, ValidationExtensions.validationTrueValue)) {
    func = pipeFunctions(func, validateTrueValue, extension)
  }

  return func
}
