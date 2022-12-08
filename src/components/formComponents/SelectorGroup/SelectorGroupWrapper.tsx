import { useErrors } from '../../../hooks/useErrors'
import { Input } from '../../../types'
import { getValidationFunction } from '../../../utils/fieldValidators'
import { useFormData } from '../../FormDataProvider'
import { FormGroupWrapper, LegendHelpText, SelectorGroup } from '..'

interface InputProps {
  input: Input
  transparentMode?: boolean
  type: 'radio' | 'checkbox'
}

export default function SelectorGroupWrapper(
  props: InputProps
): JSX.Element | null {
  const { input, type, transparentMode } = props
  const name = input.linkIdWithParent || ''

  const { error, isInvalid, validateField } = useErrors({
    fieldName: name,
    inputValidateField: getValidationFunction(input)
  })

  const { getFormValue, setFormValue } = useFormData()
  const val = getFormValue(name)
  const isRadio = type === 'radio'

  if (!input.answerOption) return null

  const setFieldValue = (value: string, checked: boolean) => {
    if (checked) {
      if (isRadio) {
        setFormValue(name, value)
        validateField(value, true)
      } else {
        setFormValue(name, val ? [...val, value] : [value])
        validateField(val ? [...val, value] : [value], true)
      }
    } else if (isRadio) {
      setFormValue(name, undefined)
      validateField(value, true)
    } else {
      const index = val.findIndex((v: string) => value === v)
      val.splice(index, 1)
      setFormValue(name, val)
      validateField(val, true)
    }
  }

  return (
    <FormGroupWrapper
      error={error}
      fieldName={name}
      input={input}
      isInvalid={isInvalid}
      transparentMode={transparentMode}
    >
      <fieldset aria-labelledby={`${name}Label`}>
        <LegendHelpText
          input={input}
          isInvalid={isInvalid}
          name={name}
          isFieldSet
        />
        <SelectorGroup
          input={input}
          isInvalid={isInvalid}
          type={type}
          setFieldValue={setFieldValue}
          validateField={validateField}
        />
      </fieldset>
    </FormGroupWrapper>
  )
}
