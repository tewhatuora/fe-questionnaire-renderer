export interface RequiredOptionalProps {
  className?: string
  required?: boolean
}

export default function RequiredOptional({
  className,
  required
}: RequiredOptionalProps): JSX.Element | null {
  if (required === undefined) return null

  return (
    <div className={`optional-required${className || ''}`}>
      <span>{required ? 'Required' : 'Optional'}</span>
    </div>
  )
}
