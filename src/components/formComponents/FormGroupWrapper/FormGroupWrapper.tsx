import cx from 'classnames'

import { Input } from '../../../types'
import InputError from '../InputError'
import ItemRepeatButtons from './ItemRepeatButtons'

interface Props {
  children: JSX.Element
  className?: string
  customDisplayError?: boolean
  customErrorMessage?: string
  error?: string
  fieldName?: string
  input: Input
  isInvalid: boolean
  transparentMode?: boolean
}

export default function FormGroupWrapper({
  children,
  className,
  customDisplayError,
  customErrorMessage,
  error,
  fieldName = '',
  input,
  isInvalid,
  transparentMode
}: Props): JSX.Element {
  // Used for some more complex inputs like the CheckboxGroupWithNoOption
  if (transparentMode) return children

  const { isLastElemFormSection } = input

  const classNames = cx(
    'form-section',
    {
      'last-form-section': isLastElemFormSection
    },
    className
  )

  return (
    <div className={classNames}>
      {children}
      {(customDisplayError || isInvalid) && (
        <InputError
          name={fieldName}
          message={customDisplayError ? customErrorMessage : error}
        />
      )}
      {input.indexRepeat !== undefined && <ItemRepeatButtons input={input} />}
    </div>
  )
}
