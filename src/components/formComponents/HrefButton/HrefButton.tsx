import ExternalIcon from '../../../images/icons/ExternalIcon'
import { ButtonAttribute } from '../../../types'

export interface ButtonProps {
  buttonAttributes?: ButtonAttribute
  target?: string
}

export default function Button({
  buttonAttributes,
  target = '_blank'
}: ButtonProps) {
  const classes = `button button-variant-${buttonAttributes?.variant}`

  return (
    <a
      className={classes}
      href={buttonAttributes?.href}
      rel='noopener noreferrer'
      target={target}
    >
      {buttonAttributes?.content}
      <div className='margin-left-4' aria-hidden>
        <ExternalIcon />
      </div>
    </a>
  )
}
