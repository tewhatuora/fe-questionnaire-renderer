import CrossIcon from '../../images/icons/CrossIcon'
import { ButtonVariantTypes } from '../../types'
import { Button } from '../formComponents'
import { PopupParams } from '../PopupProvider/PopupProvider'

interface Props {
  popupParams: PopupParams
  onConfirm?: () => void
  onDismiss?: () => void
}

function ConfirmationPopup(props: Props): JSX.Element | null {
  const { onConfirm, onDismiss, popupParams } = props

  return (
    <div className='content-card content-card-padding-l popup-content'>
      {popupParams.title && <h2>{popupParams.title}</h2>}
      {popupParams.message && <p>{popupParams.message}</p>}
      <div className='margin-top-4 flex direction-column flex-item-margin-4'>
        <Button
          variant={ButtonVariantTypes.primary}
          type='button'
          onClick={onConfirm || popupParams.onConfirm}
        >
          {popupParams.confirmButtonText
            ? popupParams.confirmButtonText
            : 'Confirm'}
        </Button>
        {popupParams.dismissButtonText && (
          <Button
            variant={ButtonVariantTypes.link}
            type='button'
            onClick={onDismiss || popupParams.onDismiss}
          >
            {popupParams.dismissButtonText}
          </Button>
        )}
      </div>
      <div
        aria-hidden
        className='close-button-icon'
        onClick={onDismiss || popupParams.onDismiss}
      >
        <CrossIcon />
      </div>
    </div>
  )
}

export default ConfirmationPopup
