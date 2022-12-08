import cx from 'classnames'
import { useEffect, useRef, useState } from 'react'

import { useErrors } from '../../../hooks/useErrors'
import { Input } from '../../../types'
import { getValidationFunction } from '../../../utils/fieldValidators'
import { getAllFocusableComponents } from '../../../utils/utils'
import { useFormData } from '../../FormDataProvider'
import { useFormTouched } from '../../FormTouchedProvider'
import { CustomSelector, FieldWrapper, RequiredOptional } from '..'

export interface SoloCheckboxProps {
  checked: boolean
  classNames?: string
  input: Input
  value?: any
  setField?(value: string): void
}

function SoloCheckbox({
  checked,
  classNames,
  input,
  setField,
  value
}: SoloCheckboxProps): JSX.Element {
  const name = input.linkIdWithParent || ''

  const containerRef = useRef<HTMLDivElement>(null)
  const ref = useRef<HTMLInputElement>(null)
  const [focus, setFocus] = useState(false)
  const [hover, setHover] = useState(false)
  const { setFormValue } = useFormData()
  const { isInvalid, validateField } = useErrors({
    fieldName: name,
    inputValidateField: getValidationFunction(input)
  })
  const { setFormTouched } = useFormTouched()

  const keyDownHandler = (event: KeyboardEvent) => {
    // Gets all the tab-able elements
    const all = getAllFocusableComponents()
    if (ref && ref.current) {
      const indRef = all.findIndex((a) => a === ref.current)
      const indCurr = all.findIndex((a) => a === event.target)
      // If the checkbox is the next one and tab is pressed
      if (event.key === 'Tab' && !event.shiftKey && indRef === indCurr + 1) {
        setFocus(true)
        // If the checkbox is the previous one and tab is pressed with shift pressed
      } else if (
        event.key === 'Tab' &&
        event.shiftKey &&
        indRef === indCurr - 1
      ) {
        setFocus(true)
      } else if (event.key === 'Tab') {
        setFocus(false)
      }
    }
  }

  const mouseDownHandler = (event: MouseEvent) => {
    // Removes focus if click on other element
    if (
      containerRef &&
      containerRef.current &&
      event.target !== containerRef.current
    ) {
      setFocus(false)
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', keyDownHandler)
    document.addEventListener('mousedown', mouseDownHandler)

    return () => {
      document.removeEventListener('keydown', keyDownHandler)
      document.removeEventListener('mousedown', mouseDownHandler)
    }
  })

  const className = cx(
    'checkbox-input',
    {
      focus
    },
    classNames
  )

  return (
    <div>
      <div
        className={className}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        ref={containerRef}
      >
        <FieldWrapper
          fieldName={name}
          id={value}
          input={input}
          isInvalid={isInvalid}
          validateField={validateField}
        >
          {() => (
            <CustomSelector
              checked={checked}
              hover={hover}
              // ID is used to focus the input on error
              id={name}
              name={name}
              ref={ref}
              setFieldValue={(n: string, v: any) => {
                setFormTouched(name)
                validateField(v, true)
                if (setField) setField(v)
                else setFormValue(n, v)
              }}
              type='checkbox'
              value={value}
            />
          )}
        </FieldWrapper>
        <div className='flex direction-column'>
          {input.text}
          <RequiredOptional
            className=' margin-top-2'
            required={input.required}
          />
        </div>
      </div>
    </div>
  )
}

export default SoloCheckbox
