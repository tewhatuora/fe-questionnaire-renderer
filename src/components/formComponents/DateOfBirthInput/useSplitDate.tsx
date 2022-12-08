import { Dispatch, SetStateAction, useCallback, useState } from 'react'

import { useFormData } from '../../FormDataProvider'
import { DatePart, DateState } from './types'
import { getInitialValues } from './utils'
import { validateDay, validateMonth, validateYear } from './validation'

// eslint-disable-next-line @typescript-eslint/ban-types
function usePartialUpdate<T extends Object>(
  setState: Dispatch<SetStateAction<DateState>>
) {
  return useCallback(
    (newState: Partial<T>) =>
      setState((oldState) => ({ ...oldState, ...newState })),
    [setState]
  )
}

export function useDateState(
  initialValue: DateState
): [DateState, (newState: Partial<DateState>) => void] {
  const [datePart, setDatePart] = useState<DateState>(initialValue)

  const updateDatePart = usePartialUpdate<DateState>(setDatePart)

  return [datePart, updateDatePart]
}

export function useSplitDate(name: string, isRequired: boolean) {
  const { getFormValue } = useFormData()
  const initialValues = getInitialValues(getFormValue(name))

  const [day, setDay] = useDateState(initialValues.day)
  const [month, setMonth] = useDateState(initialValues.month)
  const [year, setYear] = useDateState(initialValues.year)

  const dayError = validateDay(day.value, month.value, year.value, isRequired)
  const monthError = validateMonth(
    day.value,
    month.value,
    year.value,
    isRequired
  )
  const yearError = validateYear(day.value, month.value, year.value, isRequired)

  return {
    day: { ...day, error: dayError } as DatePart,
    setDay,
    month: { ...month, error: monthError } as DatePart,
    setMonth,
    year: { ...year, error: yearError } as DatePart,
    setYear
  }
}
