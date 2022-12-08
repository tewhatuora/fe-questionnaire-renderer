import { forwardRef, useState } from 'react'

// The original checkbox input is still focusable with keyboard but just invisible
interface CustomCheckboxProps {
  checked: boolean
  hover: boolean
  id?: string
  name: string
  type: 'checkbox' | 'radio'
  value?: any
  setFieldValue(name: string, value: any): void
}

const CustomSelector = forwardRef(
  (
    {
      checked,
      hover,
      id,
      name,
      value,
      setFieldValue,
      type
    }: CustomCheckboxProps,
    ref: any
  ) => {
    // Set the focus style on the fake checkbox when the real one is focused
    const fieldName = value || name
    const [focus, setFocus] = useState(false)
    const isRadio = type === 'radio'

    const setValue = () => {
      if (value) {
        if (checked) setFieldValue(name, undefined)
        else setFieldValue(name, value)
      } else {
        setFieldValue(name, !checked)
      }
    }

    let className = isRadio ? 'custom-radio' : 'custom-checkbox'
    if (hover) className = `${className} hover`
    if (focus) className = `${className} focus`
    if (checked) className = `${className} checked`

    return (
      <>
        <input
          checked={checked}
          aria-labelledby={fieldName}
          id={id || fieldName}
          name={fieldName}
          onBlur={() => setFocus(false)}
          onChange={() => setValue()}
          onFocus={() => setFocus(true)}
          ref={ref}
          type={type}
        />
        <div className={className} />
      </>
    )
  }
)

export default CustomSelector
