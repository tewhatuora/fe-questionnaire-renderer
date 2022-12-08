import { act, render, screen, userEvent } from '../../testHelpers/testUtils'
import { PopupContextType } from '../PopupProvider'
import { PopupContext, PopupType } from '../PopupProvider/PopupProvider'
import Popup from '.'

let props: PopupContextType

describe('Call Emergency popup', () => {
  beforeEach(() => {
    props = {
      beenClosed: false,
      isPopupOpen: false,
      popupParams: {},
      callPopup: () => undefined,
      closePopup: () => undefined
    }
  })

  it(`renders nothing`, () => {
    const { container } = render(
      <PopupContext.Provider value={props}>
        <Popup />
      </PopupContext.Provider>
    )

    expect(container.textContent).toEqual('')
  })

  describe(`when 'isOpen=true'`, () => {
    const dismissSpy = jest.fn()

    it(`doesn't display then button if no type provided`, () => {
      props = {
        beenClosed: false,
        isPopupOpen: true,
        popupParams: {
          dismissButtonText: 'Test dismiss'
        },
        callPopup: () => undefined,
        closePopup: () => undefined
      }

      render(
        <PopupContext.Provider value={props}>
          <Popup />
        </PopupContext.Provider>
      )
      const button = screen.queryByText('Test dismiss')

      expect(button).not.toBeInTheDocument()
    })

    it(`calls the provided function when clicking on the dismiss button in emergency type`, () => {
      props = {
        beenClosed: false,
        isPopupOpen: true,
        popupParams: {
          dismissButtonText: 'Test dismiss',
          onDismiss: dismissSpy,
          type: PopupType.confirmation
        },
        callPopup: () => undefined,
        closePopup: () => undefined
      }

      render(
        <PopupContext.Provider value={props}>
          <Popup />
        </PopupContext.Provider>
      )

      const button = screen.getByText('Test dismiss')

      expect(button).toBeInTheDocument()

      act(() => {
        userEvent.click(button)
      })

      expect(dismissSpy).toHaveBeenCalled()
    })
  })
})
