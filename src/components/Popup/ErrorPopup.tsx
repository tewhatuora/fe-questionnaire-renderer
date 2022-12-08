import errorIcon from '../../images/icons/error-icon.svg'
import { ButtonVariantTypes } from '../../types'
import { Button } from '../formComponents'
import { PopupParams } from '../PopupProvider/PopupProvider'

interface Props {
  popupParams: PopupParams
  onDismiss?: () => void
  onRetry?: () => void
}

function ErrorPopup({ popupParams, onDismiss, onRetry }: Props): JSX.Element {
  return (
    <div className='content-card content-card-padding-l popup-content'>
      <div className='error-icon'>
        <img alt='' aria-hidden src={errorIcon} />
      </div>
      <h2>{popupParams.title}</h2>
      <div className='popup-info'>
        <p>{popupParams.message}</p>
      </div>
      <div className={`${popupParams.onRetry ? 'button-row' : 'button'}`}>
        <Button
          variant={popupParams.buttonType || ButtonVariantTypes.primary}
          type='button'
          onClick={onDismiss || popupParams.onDismiss}
        >
          {popupParams.dismissButtonText
            ? popupParams.dismissButtonText
            : 'Dismiss'}
        </Button>
        {popupParams.onRetry && (
          <Button
            variant={ButtonVariantTypes.primary}
            type='button'
            onClick={onRetry || popupParams.onRetry}
          >
            Try again
          </Button>
        )}
      </div>
    </div>
  )
}

export default ErrorPopup
