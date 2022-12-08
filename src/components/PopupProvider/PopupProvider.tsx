import { createContext, useContext, useMemo, useState } from 'react'

import { ButtonVariantTypes } from '../../types'

interface Props {
  children: JSX.Element
}

export enum PopupType {
  confirmation = 'confirmation',
  error = 'error'
}

export interface PopupParams {
  buttonType?: ButtonVariantTypes
  confirmButtonText?: string
  dismissButtonText?: string
  resetButtonText?: string
  message?: string
  title?: string
  type?: PopupType
  onConfirm?(): void
  onDismiss?(): void
  onReset?(): void
  onRetry?(): void
}

export interface PopupContextType {
  beenClosed: boolean
  isPopupOpen: boolean
  popupParams: PopupParams
  callPopup(popupParams: PopupParams): void
  closePopup(): void
  onConfirm?(): void
  onDismiss?(): void
  onReset?(): void
  onRetry?(): void
}

export const PopupContext = createContext<PopupContextType>(
  {} as PopupContextType
)

export function PopupContextProvider({ children }: Props) {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [beenClosed, setBeenClosed] = useState(false)
  const [popupParams, setPopupParams] = useState<PopupParams>({})

  function openPopup(params: PopupParams) {
    setIsPopupOpen(true)
    setPopupParams(params)
  }

  function closePopup() {
    setBeenClosed(true)
    setIsPopupOpen(false)
    setPopupParams({})
  }

  const memoisedValue = useMemo(() => {
    function onDismiss() {
      if (popupParams.onDismiss) popupParams.onDismiss()
      closePopup()
    }

    function onConfirm() {
      if (popupParams.onConfirm) popupParams.onConfirm()
      closePopup()
    }

    function onRetry() {
      if (popupParams.onRetry) popupParams.onRetry()
      closePopup()
    }

    function onReset() {
      if (popupParams.onReset) popupParams.onReset()
      closePopup()
    }

    function callPopup(params: PopupParams) {
      openPopup(params)
    }

    return {
      beenClosed,
      callPopup,
      closePopup,
      isPopupOpen,
      onConfirm,
      onDismiss,
      onReset,
      onRetry,
      popupParams
    }
  }, [isPopupOpen, popupParams, beenClosed])

  return (
    <PopupContext.Provider value={memoisedValue}>
      {children}
    </PopupContext.Provider>
  )
}

export const usePopup = () => useContext(PopupContext)
