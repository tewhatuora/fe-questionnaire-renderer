import { ChangeEvent } from 'react'
import MaskedInput from 'react-text-mask'

import { useErrors } from '../../../hooks/useErrors'
import { Input } from '../../../types'
import { getValidationFunction } from '../../../utils/fieldValidators'
import { dateOfBirthMask } from '../../../utils/masks'
import { useFormData } from '../../FormDataProvider'
import { FieldWrapper, FormGroupWrapper, LegendHelpText } from '..'

interface InputProps {
  input: Input
}

export default function DateInput({ input }: InputProps): JSX.Element {
  const name = input.linkIdWithParent || ''

  const { getFormValue, setFormValue } = useFormData()
  const value = getFormValue(name)

  const { error, isInvalid, validateField } = useErrors({
    fieldName: name,
    inputValidateField: getValidationFunction(input)
  })

  return (
    <FormGroupWrapper
      error={error}
      fieldName={name}
      input={input}
      isInvalid={isInvalid}
    >
      <>
        <LegendHelpText input={input} isInvalid={isInvalid} name={name} />
        <FieldWrapper
          id={name}
          input={input}
          isInvalid={isInvalid}
          validateField={validateField}
          value={value}
        >
          {(fieldProps) => (
            <MaskedInput
              {...fieldProps}
              guide={false}
              mask={dateOfBirthMask}
              placeholder='DD/MM/YYYY'
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setFormValue(name, e.target.value)
                validateField(e.target.value, true)
              }}
              type='text'
            />
          )}
        </FieldWrapper>
      </>
    </FormGroupWrapper>
  )
}
