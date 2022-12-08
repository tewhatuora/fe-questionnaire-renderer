import { useMemo } from 'react'

import { Input } from '../../../types'
import { useFormData } from '../../FormDataProvider'
import SelectorGroupInput from './SelectorGroupInput'

interface InputProps {
  input: Input
  isInvalid: boolean
  type: 'radio' | 'checkbox'
  setFieldValue(value: string, checked: boolean): void
  validateField(
    value?: any,
    setError?: boolean,
    resetError?: boolean
  ): string | undefined
}

export default function SelectorGroup(props: InputProps): JSX.Element | null {
  const { input, isInvalid, type, setFieldValue, validateField } = props
  const name = input.linkIdWithParent || ''

  const { getFormValue } = useFormData()
  const val = getFormValue(name)

  const options = useMemo(() => {
    if (!input.answerOption) return []
    return input.answerOption.map((ao, ind) => ({
      id: `${input.id}.${ind}`,
      label: ao.valueString || '',
      value: ao.valueString || ''
    }))
  }, [input])

  if (!input.answerOption) return null

  return (
    <div className='flex direction-column'>
      {options.map((option, ind) => (
        <SelectorGroupInput
          fieldName={name}
          id={ind === 0 ? name : `${name}-${option.value}`}
          input={input}
          isInvalid={isInvalid}
          key={option.value}
          option={option}
          setFieldValue={setFieldValue}
          type={type}
          val={val}
          validateField={validateField}
        />
      ))}
    </div>
  )
}
