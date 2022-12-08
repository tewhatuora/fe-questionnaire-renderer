import parse from 'html-react-parser'
import { useState } from 'react'

import { InputOption } from '../../../types'
import { IQuestionnaire_Item } from '../../../types/fhir'
import { CustomSelector, FieldWrapper } from '..'

interface InputProps {
  fieldName: string
  id?: string
  input: IQuestionnaire_Item
  isInvalid: boolean
  option: InputOption
  type: 'radio' | 'checkbox'
  val: any
  setFieldValue(value: string, checked: boolean): void
  validateField(
    value?: any,
    setError?: boolean,
    resetError?: boolean
  ): string | undefined
}

export default function SelectorGroupInput(
  props: InputProps
): JSX.Element | null {
  const {
    fieldName,
    id,
    input,
    isInvalid,
    option,
    setFieldValue,
    type,
    val,
    validateField
  } = props
  const [hover, setHover] = useState(false)

  let checked = false
  if (val && type === 'radio') checked = val === option.value
  if (val && type === 'checkbox') checked = val.includes(option.value)

  return (
    <label key={option.value} htmlFor={`${id || option.value}`}>
      <div
        key={option.id}
        className='selector-input-group'
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <FieldWrapper
          checked={checked}
          fieldName={fieldName}
          id={option.value}
          input={input}
          isInvalid={isInvalid}
          validateField={validateField}
          value={option.value}
        >
          {() => (
            <CustomSelector
              checked={checked}
              hover={hover}
              id={id}
              name={option.id}
              setFieldValue={(_n: string, value: any) => {
                setFieldValue(option.value, !!value)
              }}
              type={type}
              value={option.value}
            />
          )}
        </FieldWrapper>
        <span>{parse(option.label)}</span>
      </div>
    </label>
  )
}
