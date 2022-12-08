import { useMemo } from 'react'
import PhoneInput, {
  Country,
  getCountryCallingCode,
  parsePhoneNumber
} from 'react-phone-number-input/input'
import en from 'react-phone-number-input/locale/en.json'
import { SingleValue } from 'react-select'

import { useErrors } from '../../../hooks/useErrors'
import { Input, PhoneNumber } from '../../../types'
import { getValidationFunction } from '../../../utils/fieldValidators'
import { useFormData } from '../../FormDataProvider'
import { useFormTouched } from '../../FormTouchedProvider'
import FieldWrapper from '../FieldWrapper'
import FormGroupWrapper from '../FormGroupWrapper'
import LegendHelpText from '../LegendHelpText'
import CountrySelect, { CountrySelectOption } from './CountrySelect'

export interface PhoneNumberInputProps {
  input: Input
}

const defaultCountryCode: Country = 'NZ'

const defaultCountry: CountrySelectOption = {
  value: defaultCountryCode,
  label: `${en[defaultCountryCode]} +${getCountryCallingCode(
    defaultCountryCode
  )}`
}

export default function PhoneNumberInput(props: PhoneNumberInputProps) {
  const { input } = props
  const name = input.linkIdWithParent || ''

  const { getFormValue, setFormValue, formData } = useFormData()
  const { error, isInvalid, validateField } = useErrors({
    fieldName: name,
    inputValidateField: getValidationFunction(input)
  })
  const { setFormTouched } = useFormTouched()

  const value: PhoneNumber = useMemo(
    () => getFormValue(name),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [formData]
  )

  const countryCode = useMemo(() => {
    if (value?.country) {
      const code = value.country as Country
      return {
        value: code,
        label: `${en[code]} +${getCountryCallingCode(code)}`
      }
    }
    return defaultCountry
  }, [value])

  function handleChangeCountry(newCountry: SingleValue<CountrySelectOption>) {
    if (newCountry) {
      const countryCallingCode = getCountryCallingCode(newCountry.value)

      const newPhoneNumber = {
        ...value,
        countryCallingCode,
        country: newCountry.value,
        number:
          value?.nationalNumber &&
          `+${countryCallingCode}${value?.nationalNumber}`
      }

      setFormValue(name, newPhoneNumber)
      validateField(newPhoneNumber, true)
    }
  }

  function handleChangeNumber(newValue: any) {
    if (newValue) {
      const parsedNumber = parsePhoneNumber(newValue)

      const newPhoneNumber = {
        ...value,
        nationalNumber: parsedNumber?.nationalNumber,
        number: newValue
      }

      setFormValue(name, newPhoneNumber)
      validateField(newPhoneNumber, true)
    } else {
      setFormValue(name, '')
      validateField('', true)
    }
  }

  return (
    <FormGroupWrapper
      error={error}
      isInvalid={isInvalid}
      input={input}
      fieldName={name}
    >
      <fieldset aria-labelledby={`${name}Label`}>
        <LegendHelpText
          input={input}
          isInvalid={isInvalid}
          name={name}
          isFieldSet
        />
        <div className='flex'>
          <CountrySelect
            defaultCountry={defaultCountry}
            input={input}
            labels={en}
            name={name}
            onChange={handleChangeCountry}
            value={countryCode}
          />
          <div className='width-100'>
            <FieldWrapper
              aria-labelledby={`${name}Label`}
              id={name}
              isInvalid={isInvalid}
              validateField={validateField}
              value={value?.number}
              {...props}
            >
              {(fieldProps) => (
                <PhoneInput
                  {...fieldProps}
                  country={countryCode.value}
                  onBlur={() => {
                    validateField()
                    setFormTouched(name)
                  }}
                  onChange={handleChangeNumber}
                  placeholder='XXX XXX XXXX'
                />
              )}
            </FieldWrapper>
          </div>
        </div>
      </fieldset>
    </FormGroupWrapper>
  )
}
