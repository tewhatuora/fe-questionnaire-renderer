import { useNavigate } from 'react-router-dom'

import { ButtonAttribute } from '../../../types'
import { errorSummaryId } from '../../../types/constants'
import { useFormErrors } from '../../FormErrorsProvider'
import { useFormTouched } from '../../FormTouchedProvider'
import { Button } from '..'

// Basic button input
interface InputProps {
  ariaLabel?: string
  className?: string
  content?: string | JSX.Element
  buttonAttributes?: ButtonAttribute
  to?: string
}

function LinkAsButton(props: InputProps): JSX.Element | null {
  const navigate = useNavigate()
  const { formErrors } = useFormErrors()
  const { setFormTouched } = useFormTouched()
  const { ariaLabel, buttonAttributes, className, content, to } = props

  // Check if the button should be disabled
  const buttonDisabled =
    buttonAttributes?.shouldValidate && formErrors.length > 0

  // Creates the `to` attribute for the link based on the values in the input
  const getButtonLink = (): string => {
    if (buttonDisabled) return ''
    return to || ''
  }

  // Defines the onClick function for the button
  const onClick = async () => {
    if (buttonAttributes?.shouldValidate) {
      // Focuses the first error of the page or the error summary
      if (formErrors.length > 2) {
        const summary = document.getElementById(errorSummaryId)
        if (summary) summary.scrollIntoView({ block: 'center' })
      } else if (formErrors.length > 0) {
        const firstError = document.getElementById(formErrors[0].name)
        if (firstError) firstError.focus()
      }

      formErrors.forEach((e) => setFormTouched(e.name))
    }
    if (!buttonAttributes && to) return navigate(getButtonLink())
    if (buttonDisabled || !buttonAttributes) return undefined

    if (buttonAttributes.onClick) {
      await buttonAttributes
        .onClick()
        .then(() => navigate(getButtonLink()))
        .catch(() => {})
    } else {
      navigate(getButtonLink())
    }
  }

  const buildClasses = () => {
    if (className) return className
    let classes = 'button'
    if (buttonAttributes?.variant) {
      classes += ` button-variant-${buttonAttributes.variant}`
    }
    return classes
  }

  return (
    <div className='form-group'>
      <Button
        ariaLabel={ariaLabel}
        className={buildClasses()}
        type='button'
        onClick={onClick}
      >
        {buttonAttributes?.content || content}
      </Button>
    </div>
  )
}

export default LinkAsButton
