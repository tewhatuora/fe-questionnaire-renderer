import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { act, render, screen, userEvent } from '../../testHelpers/testUtils';
import { PopupContext, PopupType } from '../PopupProvider/PopupProvider';
import Popup from '.';
var props;
describe('Call Emergency popup', function () {
    beforeEach(function () {
        props = {
            beenClosed: false,
            isPopupOpen: false,
            popupParams: {},
            callPopup: function () { return undefined; },
            closePopup: function () { return undefined; }
        };
    });
    it("renders nothing", function () {
        var container = render(_jsx(PopupContext.Provider, __assign({ value: props }, { children: _jsx(Popup, {}) }))).container;
        expect(container.textContent).toEqual('');
    });
    describe("when 'isOpen=true'", function () {
        var dismissSpy = jest.fn();
        it("doesn't display then button if no type provided", function () {
            props = {
                beenClosed: false,
                isPopupOpen: true,
                popupParams: {
                    dismissButtonText: 'Test dismiss'
                },
                callPopup: function () { return undefined; },
                closePopup: function () { return undefined; }
            };
            render(_jsx(PopupContext.Provider, __assign({ value: props }, { children: _jsx(Popup, {}) })));
            var button = screen.queryByText('Test dismiss');
            expect(button).not.toBeInTheDocument();
        });
        it("calls the provided function when clicking on the dismiss button in emergency type", function () {
            props = {
                beenClosed: false,
                isPopupOpen: true,
                popupParams: {
                    dismissButtonText: 'Test dismiss',
                    onDismiss: dismissSpy,
                    type: PopupType.confirmation
                },
                callPopup: function () { return undefined; },
                closePopup: function () { return undefined; }
            };
            render(_jsx(PopupContext.Provider, __assign({ value: props }, { children: _jsx(Popup, {}) })));
            var button = screen.getByText('Test dismiss');
            expect(button).toBeInTheDocument();
            act(function () {
                userEvent.click(button);
            });
            expect(dismissSpy).toHaveBeenCalled();
        });
    });
});
//# sourceMappingURL=Popup.test.js.map