import { ChangeEvent, ForwardedRef, forwardRef, KeyboardEvent } from 'react'

import { DatePart } from './types'

interface Props {
  datePart: DatePart
  hasError: boolean
  label: string
  max?: number
  min?: number
  name: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  required?: boolean
  setDatePart: (partialDay: Partial<DatePart>) => void
}

function buildClasses(invalid: boolean): string {
  return invalid ? ' is-invalid' : ''
}

function buildAriaDescribedBy(name: string, invalid: boolean) {
  if (invalid) return `${name}Error`
  return undefined
}

const ignoreKeys = (keys: string[]) => (e: KeyboardEvent) => {
  if (keys.includes(e.key)) {
    e.preventDefault()
    return ''
  }
  return e
}

const DateOfBirthSplit = forwardRef(
  (
    {
      datePart,
      hasError: hasErrorProps,
      label,
      max,
      min,
      name,
      onChange,
      placeholder,
      required = true,
      setDatePart
    }: Props,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const hasError = hasErrorProps || (datePart.touched && !!datePart.error)

    return (
      <div className='date-of-birth-input'>
        <label className={buildClasses(hasError)} htmlFor={name}>
          {label}
        </label>
        <input
          aria-describedby={buildAriaDescribedBy(name, hasError)}
          aria-invalid={hasError}
          aria-required={required}
          className={buildClasses(hasError)}
          id={name}
          key={name}
          max={max}
          min={min}
          onBlur={() => setDatePart({ touched: true })}
          onChange={onChange}
          onKeyDown={ignoreKeys(['.', '-', 'e'])}
          placeholder={placeholder}
          ref={ref}
          type='number'
          value={datePart.value}
        />
      </div>
    )
  }
)

export default DateOfBirthSplit
