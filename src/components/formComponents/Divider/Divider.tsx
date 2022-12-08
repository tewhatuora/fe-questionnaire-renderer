import { Input } from '../../../types'
import { FormGroupWrapper } from '..'

export interface DividerProps {
  color?: string
  input: Input
  transparentMode?: boolean
}

export default function Divider({
  color,
  input,
  transparentMode
}: DividerProps): JSX.Element {
  const name = input.linkIdWithParent || ''

  const buildClasses = (): string => {
    if (color) return `divider-${color}`
    return 'divider'
  }

  return (
    <FormGroupWrapper
      fieldName={name}
      input={input}
      isInvalid={false}
      transparentMode={transparentMode}
    >
      <div className={buildClasses()} />
    </FormGroupWrapper>
  )
}
