import Flags from 'country-flag-icons/react/3x2'
import {
  Country,
  getCountries,
  getCountryCallingCode
} from 'react-phone-number-input/input'
import Select, { SingleValue } from 'react-select'

import { useErrors } from '../../../hooks/useErrors'
import { Input } from '../../../types'

export interface CountrySelectOption {
  label: string
  value: Country
}

export interface CountrySelectProps {
  defaultCountry: CountrySelectOption
  input: Input
  name: string
  labels: {
    [key: string]: string
  }
  onChange: (value: SingleValue<CountrySelectOption>) => void
  value: CountrySelectOption
}

export default function CountrySelect({
  defaultCountry,
  input,
  name,
  labels,
  onChange,
  value
}: CountrySelectProps) {
  const { isInvalid } = useErrors({ fieldName: name })
  const options: CountrySelectOption[] = [
    defaultCountry,
    ...getCountries().map((country) => ({
      value: country,
      label: `${labels[country]} +${getCountryCallingCode(country)}`
    }))
  ]

  const formatLabel = (
    data: CountrySelectOption,
    formatOptionLabelMeta: any
  ) => {
    // Styles the selected country code with a flag, and displays just the label
    // for the options inside the select dropdown
    if (formatOptionLabelMeta.context === 'value') {
      const country = data.value
      const Flag = Flags[country]

      return (
        <div className='flex direction-row align-center flex-item-margin-2'>
          <span>
            <Flag title={labels[country]} className='flag' />
          </span>
          <strong>{`+${getCountryCallingCode(country)}`}</strong>
        </div>
      )
    }

    return data.label
  }

  return (
    <Select
      aria-invalid={isInvalid}
      aria-required={input.required}
      aria-label='Select a phone number country extension. Mobile preferred'
      className='select-container select-country'
      classNamePrefix='select'
      formatOptionLabel={formatLabel}
      name={name}
      inputId={`${name}CountrySelect`}
      onChange={onChange}
      options={options}
      value={value}
    />
  )
}
