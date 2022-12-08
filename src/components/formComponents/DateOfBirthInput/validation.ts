import dayTz from '../../../utils/daytz'
import { dayMax } from './utils'

export function validateDateWithinRange(value: string | undefined) {
  if (!value) return undefined

  const today = dayTz(new Date())
  const fieldDate = dayTz(value, 'DD/MM/YYYY')

  if (fieldDate.isAfter(today)) {
    return 'Error, select a valid date'
  }
  if (today.diff(fieldDate, 'year') > 120) {
    return 'Error, select a valid date'
  }

  return undefined
}

export function useDateValidator(
  dayError: string | undefined,
  monthError: string | undefined,
  yearError: string | undefined
) {
  return (date: string) => {
    const error = validateDateWithinRange(date)
    if (error) return error

    // fallback to date part errors
    return dayError || monthError || yearError
  }
}

export function validateDatePart(
  value: string,
  min: number,
  max: number
): boolean {
  if (+value < min) return true
  return +value > max
}

export function validateDay(
  day: string,
  month: string,
  year: string,
  required: boolean
) {
  const isRequired = required || !!month || !!year
  const maxDay = dayMax(month, year)

  if (!day)
    return isRequired ? 'Error, please enter the date of birth day' : undefined

  if (validateDatePart(day, 1, maxDay))
    return 'Error, enter a valid date of birth'

  return undefined
}

export function validateMonth(
  day: string,
  month: string,
  year: string,
  required: boolean
) {
  const isRequired = required || !!day || !!year

  if (!month)
    return isRequired
      ? 'Error, please enter the date of birth month'
      : undefined

  if (validateDatePart(month, 1, 12))
    return 'Error, please enter the date of birth month'

  return undefined
}

export function validateYear(
  day: string,
  month: string,
  year: string,
  required: boolean
) {
  const isRequired = required || !!day || !!month

  if (!year || year.length < 4)
    return isRequired ? 'Error, please enter the date of birth year' : undefined

  return undefined
}
