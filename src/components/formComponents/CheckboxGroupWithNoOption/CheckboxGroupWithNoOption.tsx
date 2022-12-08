/* eslint-disable no-underscore-dangle */

import { useEffect, useMemo } from 'react'

import { useErrors } from '../../../hooks/useErrors'
import { Extensions, Input, ValidateFieldProps } from '../../../types'
import { getExtension } from '../../../utils/extensions'
import { useFormData } from '../../FormDataProvider'
import { useFormTouched } from '../../FormTouchedProvider'
import Divider from '../Divider'
import FormGroupWrapper from '../FormGroupWrapper'
import LegendHelpText from '../LegendHelpText'
import SelectorGroup from '../SelectorGroup'
import SoloCheckbox from '../SoloCheckbox'
import validateCheckboxNoOption from './validation'

export interface CheckboxGroupWithNoOptionProps {
  input: Input
}

function CheckboxGroupWithNoOption({
  input
}: CheckboxGroupWithNoOptionProps): JSX.Element {
  const name = input.linkIdWithParent || ''
  const noOptionName = `${name}_noOption`

  const extension =
    input.extension && getExtension(input, Extensions.validationExtension)

  const { formData, getFormValue, setFormValue } = useFormData()
  const { formTouched, setFormTouched } = useFormTouched()
  const { error, isInvalid, touched, validateField } = useErrors({
    fieldName: name,
    inputValidateField: (props: ValidateFieldProps) =>
      validateCheckboxNoOption({ ...props, extension }),
    useValidationOnMount: false
  })

  const value = getFormValue(name) || []
  const valueNoOption = getFormValue(noOptionName)

  const { noOptionInput, selectorInput } = useMemo(() => {
    const ext =
      input.extension && getExtension(input, Extensions.noOptionExtension)
    return {
      noOptionInput: {
        linkIdWithParent: noOptionName,
        text: ext?.valueString || ''
      },
      selectorInput: { ...input, required: false, extension: [] }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input])

  function timeoutFieldTouched() {
    if (!touched) setTimeout(() => setFormTouched(name), 100)
  }

  useEffect(() => {
    validateField(value, true, false, {
      secondaryValue: valueNoOption,
      formValues: formData
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value.length, valueNoOption])

  // Removes error and touched on unmount
  useEffect(() => {
    return () => {
      validateField(undefined, true, true)
      if (formTouched.find((ft) => ft.name === name)) {
        setFormTouched(name, false)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function setSelectorGroupValue(val: string, checked: boolean) {
    setFormValue(noOptionName, undefined)
    if (checked) setFormValue(name, value ? [...value, val] : [val])
    else {
      const index = value.findIndex((v: string) => val === v)
      value.splice(index, 1)
      setFormValue(name, value)
    }
    timeoutFieldTouched()
  }

  function setSoloCheckboxValue(val: string) {
    setFormValue(noOptionName, val)
    setFormValue(name, [])
    timeoutFieldTouched()
  }

  return (
    <FormGroupWrapper
      error={error}
      fieldName={noOptionName}
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
        <SelectorGroup
          input={selectorInput}
          isInvalid={isInvalid}
          setFieldValue={setSelectorGroupValue}
          type='checkbox'
          validateField={() => undefined}
        />
        <div className='margin-top-4 margin-bottom-4'>
          <Divider input={input} transparentMode />
        </div>
        <label htmlFor={noOptionName}>
          <SoloCheckbox
            classNames='border-none'
            checked={!!valueNoOption}
            input={noOptionInput}
            setField={setSoloCheckboxValue}
          />
        </label>
      </fieldset>
    </FormGroupWrapper>
  )
}

export default CheckboxGroupWithNoOption
