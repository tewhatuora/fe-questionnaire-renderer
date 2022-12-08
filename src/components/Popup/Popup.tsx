import * as focusTrap from 'focus-trap'
import { useEffect } from 'react'

import { usePopup } from '../PopupProvider'
import { PopupType } from '../PopupProvider/PopupProvider'
import ConfirmationPopup from './ConfirmationPopup'
import ErrorPopup from './ErrorPopup'

function Popup(): JSX.Element | null {
  const { isPopupOpen, onConfirm, onDismiss, popupParams, onRetry } = usePopup()

  const keyDownHandler = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      event.preventDefault()
      if (onDismiss) onDismiss()
      else if (popupParams.onDismiss) popupParams.onDismiss()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', keyDownHandler)
    return () => {
      document.removeEventListener('keydown', keyDownHandler)
    }
  })

  // Traps the focus on the popup when opened
  useEffect(() => {
    const trap = focusTrap.createFocusTrap('.popup', {
      initialFocus: '#popup-focus',
      checkCanFocusTrap: () => {
        // Return a promise that resolves when all the trap containers are able to receive focus
        return new Promise<void>((resolve) => {
          const interval = setInterval(() => {
            if (document.querySelectorAll('.popup').length > 0) {
              resolve()
              clearInterval(interval)
            }
          }, 5)
        })
      }
    })

    if (isPopupOpen) {
      trap.activate()
    }

    // Deactivate trap on unmount
    return () => {
      trap.deactivate()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPopupOpen])

  return isPopupOpen ? (
    <div className='popup'>
      <span id='popup-focus' tabIndex={-1} />
      {popupParams.type === PopupType.error && (
        <ErrorPopup
          popupParams={popupParams}
          onDismiss={onDismiss}
          onRetry={onRetry}
        />
      )}
      {popupParams.type === PopupType.confirmation && (
        <ConfirmationPopup
          popupParams={popupParams}
          onDismiss={onDismiss}
          onConfirm={onConfirm}
        />
      )}
    </div>
  ) : null
}

export default Popup
