import ErrorIcon from '../../../images/icons/ErrorIcon'
import { errorSummaryId } from '../../../types/constants'

interface Props {
  formErrorsFiltered: Error[]
}

function ErrorSummary({ formErrorsFiltered }: Props): JSX.Element | null {
  function transformErrorMessage(message: string): string {
    const noError = message.replace('Error, ', '')
    return `${noError.charAt(0).toUpperCase()}${noError.slice(1)}.`
  }

  function handleClick(name: string) {
    const currentError = document.getElementById(name)
    if (currentError) {
      if (currentError.tagName === 'INPUT') currentError.focus()
      else currentError.scrollIntoView({ block: 'center' })
    }
  }

  // Always returns something, so we can scroll to the component before the list populates
  return (
    <div
      className={formErrorsFiltered.length > 2 ? 'margin-top-6' : ''}
      id={errorSummaryId}
    >
      {formErrorsFiltered.length > 2 ? (
        <div className='error-summary'>
          <div className='error-summary-title'>
            <ErrorIcon />
            <p>There are some errors on this page</p>
          </div>
          {formErrorsFiltered.map((e) => (
            <button
              key={e?.name}
              onClick={() => handleClick(e?.name || '')}
              className='error-summary-link'
              type='button'
            >
              {transformErrorMessage(e?.message || '')}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default ErrorSummary
