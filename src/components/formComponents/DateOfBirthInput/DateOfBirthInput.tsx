import { ChangeEvent, useEffect, useRef } from 'react'

import { Input } from '../../../types'
import { useFormData } from '../../FormDataProvider'
import { useFormErrors } from '../../FormErrorsProvider'
import { useFormTouched } from '../../FormTouchedProvider'
import FormGroupWrapper from '../FormGroupWrapper/index'
import LegendHelpText from '../LegendHelpText/index'
import DateOfBirthSplit from './DateOfBirthSplit'
import { useSplitDate } from './useSplitDate'
import { dateFromParts, getError } from './utils'
import { useDateValidator } from './validation'

export interface DateInputProps {
  input: Input
  touchedAuthentication?: boolean
}

export default function DateInput({
  input,
  touchedAuthentication
}: DateInputProps): JSX.Element {
  const name = input.linkIdWithParent || ''
  const isRequired = !!input.required

  const { setFormValue } = useFormData()
  const { formErrors, setFormError } = useFormErrors()
  const { formTouched, setFormTouched } = useFormTouched()
  const { day, setDay, month, setMonth, year, setYear } = useSplitDate(
    name,
    isRequired
  )

  const monthInputRef = useRef<HTMLInputElement>(null)
  const yearInputRef = useRef<HTMLInputElement>(null)

  const validate = useDateValidator(day.error, month.error, year.error)

  const dateValue = dateFromParts(day.value, month.value, year.value)
  const touched = !!formTouched.find((ft) => ft.name === name)
  const mainError = formErrors.find((e) => e.name === name)?.message
  const error = getError(mainError, touched, day, month, year)

  useEffect(() => {
    // validate date on mount
    // we need a required error on mount for the next-button validation to work
    const validation = validate(dateValue)
    setFormError(name, validation || '', !!validate)

    // Removes error and touched on unmount
    return () => {
      setFormError(name, '', false)
      if (formTouched.find((ft) => ft.name === name)) {
        setFormTouched(name, false)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const validation = validate(dateValue)
    setFormValue(name, dateValue)
    setFormError(name, validation || '', !!validate)
    // revalidate if date parts have changed - this will set new errors based on date parts
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateValue, day.value, month.value, year.value])

  useEffect(() => {
    if (touchedAuthentication) {
      setDay({ touched: true })
      setMonth({ touched: true })
      setYear({ touched: true })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [touchedAuthentication])

  useEffect(() => {
    const partsTouched = day.touched && month.touched && year.touched

    if (partsTouched && !touched) {
      // don't validate on touch - we revalidate when the value changes
      // if we validate on touch it can use outdated values
      // timeout makes sure touched will update AFTER validation has been run on value updates
      // This is because if called in the same render Formik will update touched BEFORE the validation
      // it's too fast for users to see, but it can trigger other bugs i.e. Google Analytics events being fired
      setTimeout(() => setFormTouched(name, true), 10)
    }

    if ((touched || touchedAuthentication) && !partsTouched) {
      // touchedAuthentication is here because DoB on the authentication page is not part
      // of the main form. It touches split inputs when the user clicks on the login button
      setDay({ touched: true })
      setMonth({ touched: true })
      setYear({ touched: true })
    }
  }, [
    touchedAuthentication,
    touched,
    name,
    day.touched,
    month.touched,
    year.touched,
    setDay,
    setMonth,
    setYear,
    setFormTouched
  ])

  const dayOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 2 && +e.target.value <= 31) {
      setDay({ value: e.target.value })
    }

    if (
      e.target.value.length >= 2 ||
      (e.target.value.length >= 1 &&
        !['0', '1', '2', '3'].includes(e.target.value[0]))
    ) {
      setDay({ touched: true })
      if (monthInputRef?.current) monthInputRef.current.focus()
    }
  }

  const monthOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 2 && +e.target.value <= 12) {
      setMonth({ value: e.target.value })
    }

    if (
      e.target.value.length >= 2 ||
      (e.target.value.length === 1 && !['0', '1'].includes(e.target.value[0]))
    ) {
      setMonth({ touched: true })
      if (yearInputRef?.current) yearInputRef.current.focus()
    }
  }

  const yearOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 4) {
      setYear({ value: e.target.value })
    }

    if (e.target.value.length && e.target.value.length >= 4) {
      setYear({ touched: true })
    }
  }

  return (
    <FormGroupWrapper
      customDisplayError={!!error.message}
      customErrorMessage={error.message}
      fieldName={name}
      input={input}
      isInvalid={!!error.message}
    >
      <>
        <LegendHelpText input={input} isInvalid={!!error.message} name={name} />
        <div className='date-of-birth-inputs'>
          <DateOfBirthSplit
            datePart={day}
            hasError={['field', 'day'].includes(error?.source)}
            label='Day'
            max={31}
            min={1}
            name={`${name}.day`}
            onChange={dayOnChangeHandler}
            placeholder='DD'
            required={isRequired}
            setDatePart={setDay}
          />
          <DateOfBirthSplit
            datePart={month}
            hasError={['field', 'month'].includes(error?.source)}
            label='Month'
            max={12}
            min={1}
            name={`${name}.month`}
            onChange={monthOnChangeHandler}
            placeholder='MM'
            ref={monthInputRef}
            required={isRequired}
            setDatePart={setMonth}
          />
          <DateOfBirthSplit
            datePart={year}
            hasError={['field', 'year'].includes(error?.source)}
            label='Year'
            min={1900}
            name={`${name}.year`}
            onChange={yearOnChangeHandler}
            placeholder='YYYY'
            ref={yearInputRef}
            required={isRequired}
            setDatePart={setYear}
          />
        </div>
      </>
    </FormGroupWrapper>
  )
}
