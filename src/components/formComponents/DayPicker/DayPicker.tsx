import moment from 'moment'
import { useEffect, useMemo, useState } from 'react'
import { DayOfWeekShape, DayPickerSingleDateController } from 'react-dates'

import { useErrors } from '../../../hooks/useErrors'
import CaretIcon from '../../../images/icons/CaretIcon'
import { Input } from '../../../types'
import { getValidationFunction } from '../../../utils/fieldValidators'
import { API_DATE_FORMAT } from '../../../utils/utils'
import { useFormData } from '../../FormDataProvider'
import { FormGroupWrapper, LegendHelpText } from '..'

export interface DayPickerProps {
  input: Input
  children?(handleDateChange: (date: any) => void): JSX.Element
}

interface NavButtonProps {
  next: boolean
}

function NavButton({ next }: NavButtonProps): JSX.Element {
  const className = next ? 'calendar__next' : 'calendar__prev'
  return (
    <div className={className}>
      <CaretIcon />
    </div>
  )
}

const defaultProps = {
  // day presentation and interaction related props
  enableOutsideDays: false,
  isDayBlocked: () => false,
  isDayHighlighted: () => false,
  isOutsideRange: (day: any) => {
    return (
      moment(day).isBefore(moment().subtract(1, 'months'), 'day') ||
      moment(day).isAfter(moment(), 'day')
    )
  },
  renderCalendarDay: undefined,
  renderDayContents: null,

  // calendar presentation and interaction related props
  firstDayOfWeek: 1 as DayOfWeekShape, // Monday
  hideKeyboardShortcutsPanel: true,
  isRTL: false,
  keepOpenOnDateSelect: false,
  noBorder: true,
  numberOfMonths: 1,
  onOutsideClick() {},
  renderCalendarInfo: null,
  withPortal: false,

  // navigation related props
  navNext: <NavButton next />,
  navPrev: <NavButton next={false} />,
  onNextMonthClick() {},
  onPrevMonthClick() {},
  renderNavNextButton: null,
  renderNavPrevButton: null,

  // internationalization
  monthFormat: 'MMMM YYYY',
  weekDayFormat: 'ddd'
}

export default function DayPicker({
  children,
  input
}: DayPickerProps): JSX.Element {
  const name = input.linkIdWithParent || ''

  const { getFormValue, setFormValue, formData } = useFormData()
  const { error, isInvalid, validateField } = useErrors({
    fieldName: name,
    inputValidateField: getValidationFunction(input)
  })

  const [focused, setFocused] = useState<boolean>(true)

  const handleDateChange = (newDate: any) => {
    setFormValue(name, newDate.format(API_DATE_FORMAT))
    validateField(newDate.format(API_DATE_FORMAT), true)
  }

  const handleFocusChange = () => {
    setFocused(!focused)
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const dateValue = useMemo(() => getFormValue(name), [name, formData])

  useEffect(() => {
    return () => {
      validateField(undefined, true, true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <FormGroupWrapper
      error={error}
      isInvalid={isInvalid}
      input={input}
      fieldName={name}
    >
      <div id={name}>
        <fieldset aria-labelledby={`${name}Label`}>
          <LegendHelpText
            isInvalid={isInvalid}
            input={input}
            name={name}
            isFieldSet
          />
          <DayPickerSingleDateController
            {...defaultProps}
            date={dateValue ? moment(dateValue) : null}
            focused={focused}
            initialVisibleMonth={() =>
              dateValue ? moment(getFormValue(name)) : moment()
            }
            onDateChange={handleDateChange}
            onFocusChange={handleFocusChange}
          />
        </fieldset>
        {children ? children(handleDateChange) : null}
      </div>
    </FormGroupWrapper>
  )
}
