import { useErrors } from '../../../hooks/useErrors'
import { Input } from '../../../types'
import { getValidationFunction } from '../../../utils/fieldValidators'
import { useFormData } from '../../FormDataProvider'
import { FormGroupWrapper, SoloCheckbox } from '..'

interface CheckboxInputProps {
  input: Input
}

export default function CheckboxInput({
  input
}: CheckboxInputProps): JSX.Element {
  const name = input.linkIdWithParent || ''

  const { isInvalid, error } = useErrors({
    fieldName: name,
    inputValidateField: getValidationFunction(input)
  })
  const { getFormValue } = useFormData()
  const checked = getFormValue(name) || false

  return (
    <FormGroupWrapper
      error={error}
      fieldName={name}
      input={input}
      isInvalid={isInvalid}
    >
      <label htmlFor={name}>
        <SoloCheckbox checked={checked} input={input} />
      </label>
    </FormGroupWrapper>
  )
}
