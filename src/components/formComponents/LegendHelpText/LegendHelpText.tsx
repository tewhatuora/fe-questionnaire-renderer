import cx from 'classnames'

import { IQuestionnaire_Item } from '../../../types/fhir'
import { Label, RequiredOptional } from '..'

export interface LegendHelpTextProps {
  className?: string
  input: IQuestionnaire_Item
  isFieldSet?: boolean
  isInvalid: boolean
  name: string
}

function LegendHelpText({
  className,
  input,
  isFieldSet = false,
  isInvalid,
  name
}: LegendHelpTextProps): JSX.Element | null {
  const classNames = cx(
    {
      error: isInvalid,
      'input-label': isFieldSet
    },
    className
  )

  const getLabel = () => {
    if (isFieldSet)
      return (
        <legend className={classNames} id={`${name}Label`}>
          {input.text}
        </legend>
      )
    return (
      <Label className={classNames} htmlFor={name}>
        {input.text}
      </Label>
    )
  }

  return (
    <>
      {getLabel()}
      <RequiredOptional required={input.required} />
    </>
  )
}

export default LegendHelpText
