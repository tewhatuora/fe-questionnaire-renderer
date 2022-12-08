import { ReactNode } from 'react'

export interface LabelProps {
  children: ReactNode
  className?: string
  htmlFor: string
}

export default function Label({
  children,
  className,
  htmlFor
}: LabelProps): JSX.Element {
  const buildClasses = () => {
    if (className) return `input-label ${className}`

    return 'input-label'
  }

  return (
    <label className={buildClasses()} htmlFor={htmlFor}>
      {children}
    </label>
  )
}
