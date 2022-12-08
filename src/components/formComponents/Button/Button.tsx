import { ReactNode } from 'react'

import { ButtonVariantTypes } from '../../../types'

export interface ButtonProps {
  ariaLabel?: string
  children?: ReactNode
  className?: string
  disabled?: boolean
  id?: string
  type: 'button' | 'submit'
  variant?: ButtonVariantTypes
  onClick?: () => void
}

export default function Button({
  ariaLabel,
  children,
  className,
  disabled,
  id,
  onClick,
  type,
  variant
}: ButtonProps) {
  const classes = variant
    ? `button-variant-${variant}${className ? ` ${className}` : ''}`
    : className

  return (
    <button
      aria-label={ariaLabel}
      className={classes}
      disabled={disabled}
      id={id}
      onClick={onClick}
      type={type === 'submit' ? 'submit' : 'button'}
    >
      {children}
    </button>
  )
}
