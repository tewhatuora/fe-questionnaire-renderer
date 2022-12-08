import { DatePart, DateState } from './types'

export function createDefaultInput(value: string | undefined): DateState {
  return { value: value || '', touched: false }
}

export function getInitialValues(initialValue: string | undefined) {
  const splitValues = initialValue?.split('/')

  return {
    day: createDefaultInput(splitValues?.[0]),
    month: createDefaultInput(splitValues?.[1]),
    year: createDefaultInput(splitValues?.[2])
  }
}

export function dayMax(month: string, year: string): number {
  const currentYear = new Date().getFullYear().toString()

  if (month === '') {
    return 31
  }

  // if no year - assume this year
  const fallbackYear = year && year.length > 3 ? year : currentYear

  return new Date(+fallbackYear, +month, 0).getDate()
}

export function dateFromParts(day: string, month: string, year: string) {
  if (day.length === 0 || month.length === 0 || year.length === 0) return ''

  const formattedDay = `${day}`.length === 1 ? `0${day}` : day
  const formattedMonth = `${month}`.length === 1 ? `0${month}` : month

  return `${formattedDay}/${formattedMonth}/${year}`
}

export function getError(
  fieldValue: string | undefined,
  fieldTouched: boolean,
  day: DatePart,
  month: DatePart,
  year: DatePart
): {
  source: 'day' | 'month' | 'year' | 'field' | 'none'
  message: string | undefined
} {
  if (day.touched && !!day.error) return { source: 'day', message: day.error }
  if (month.touched && !!month.error)
    return { source: 'month', message: month.error }
  if (year.touched && !!year.error)
    return { source: 'year', message: year.error }
  if (fieldTouched && !!fieldValue)
    return { source: 'field', message: fieldValue }

  return { source: 'none', message: undefined }
}
