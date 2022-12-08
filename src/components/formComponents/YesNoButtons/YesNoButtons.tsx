import { booleanOptions } from '../../../data/options'
import { useErrors } from '../../../hooks/useErrors'
import { Input } from '../../../types'
import { getValidationFunction } from '../../../utils/fieldValidators'
import { useFormData } from '../../FormDataProvider'
import { Button, FieldWrapper, FormGroupWrapper, LegendHelpText } from '..'

export interface YesNoButtonsProps {
  input: Omit<Input, 'page' | 'type'>
}

function YesNoButtons(props: YesNoButtonsProps): JSX.Element | null {
  const { input } = props
  const name = input.linkIdWithParent || ''

  const { getFormValue, setFormValue } = useFormData()
  const { error, isInvalid, validateField } = useErrors({
    fieldName: name,
    inputValidateField: getValidationFunction(input)
  })

  const options = booleanOptions

  return (
    <FormGroupWrapper
      error={error}
      fieldName={name}
      input={input}
      isInvalid={isInvalid}
    >
      <fieldset aria-labelledby={`${name}Label`}>
        <LegendHelpText
          input={input}
          isInvalid={isInvalid}
          name={name}
          isFieldSet
        />
        {options.length ? (
          <div className='flex direction-row padding-top-2 padding-bottom-2'>
            {options.map((option, ind) => (
              <FieldWrapper
                id={`${input.id}.${option.id}`}
                isInvalid={isInvalid}
                key={option.label}
                validateField={validateField}
                value={option.value}
                {...props}
              >
                {(fieldProps) => {
                  const selected = getFormValue(name) === option.value
                  return (
                    <Button
                      {...fieldProps}
                      ariaLabel={option.label}
                      className={`yes-no-button${selected ? ' selected' : ''}${
                        isInvalid ? ' error' : ''
                      }`}
                      // Needed for focusing the input on error
                      id={ind === 0 ? name : undefined}
                      key={option.label}
                      onClick={() => {
                        validateField(option.value, true)
                        setFormValue(name, option.value)
                      }}
                      type='button'
                    >
                      {option.label}
                    </Button>
                  )
                }}
              </FieldWrapper>
            ))}
          </div>
        ) : null}
      </fieldset>
    </FormGroupWrapper>
  )
}

export default YesNoButtons
