import { ChangeEvent, InputHTMLAttributes } from 'react'

import { useErrors } from '../../../hooks/useErrors'
import { Input } from '../../../types'
import { getValidationFunction } from '../../../utils/fieldValidators'
import { useFormData } from '../../FormDataProvider'
import { useFormTouched } from '../../FormTouchedProvider'
import { FieldWrapper, FormGroupWrapper, LegendHelpText } from '..'

interface InputProps {
  input: Input
  InputComponent?: (
    props: InputHTMLAttributes<HTMLTextAreaElement | HTMLInputElement>
  ) => JSX.Element
  transparentMode?: boolean
}

function TextInput({
  input,
  InputComponent,
  transparentMode
}: InputProps): JSX.Element {
  const name = input.linkIdWithParent || ''

  const { error, isInvalid, validateField } = useErrors({
    fieldName: name,
    inputValidateField: getValidationFunction(input)
  })
  const { setFormTouched } = useFormTouched()
  const { getFormValue, setFormValue } = useFormData()
  const value = getFormValue(name) || ''

  const buildAriaDescribedBy = () => {
    if (isInvalid) return `${name}Error`
    return undefined
  }

  const inputProps = {
    'aria-describedby': buildAriaDescribedBy(),
    'aria-invalid': isInvalid,
    'aria-required': input.required,
    className: isInvalid ? 'is-invalid' : '',
    id: name,
    maxLength: input.maxLength,
    name,
    onBlur: () => {
      setFormValue(name, value ? value.trim() : '')
      setFormTouched(name)
    },
    onChange: (v: ChangeEvent<HTMLInputElement>) => {
      validateField(v.target.value, true)
      setFormValue(name, v.target.value)
    },
    type: 'text',
    value
  }

  return (
    <FormGroupWrapper
      error={error}
      fieldName={name}
      input={input}
      isInvalid={isInvalid}
      transparentMode={transparentMode}
    >
      <>
        <LegendHelpText input={input} isInvalid={isInvalid} name={name} />
        <FieldWrapper
          fieldName={name}
          id={name}
          input={input}
          isInvalid={isInvalid}
          validateField={validateField}
        >
          {(fieldProps) =>
            InputComponent ? (
              <InputComponent {...fieldProps} {...inputProps} />
            ) : (
              <input {...fieldProps} {...inputProps} />
            )
          }
        </FieldWrapper>
      </>
    </FormGroupWrapper>
  )
}

export default TextInput
