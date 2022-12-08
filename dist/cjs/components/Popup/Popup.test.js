"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var testUtils_1 = require("../../testHelpers/testUtils");
var PopupProvider_1 = require("../PopupProvider/PopupProvider");
var _1 = tslib_1.__importDefault(require("."));
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
        var container = (0, testUtils_1.render)((0, jsx_runtime_1.jsx)(PopupProvider_1.PopupContext.Provider, tslib_1.__assign({ value: props }, { children: (0, jsx_runtime_1.jsx)(_1.default, {}) }))).container;
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
            (0, testUtils_1.render)((0, jsx_runtime_1.jsx)(PopupProvider_1.PopupContext.Provider, tslib_1.__assign({ value: props }, { children: (0, jsx_runtime_1.jsx)(_1.default, {}) })));
            var button = testUtils_1.screen.queryByText('Test dismiss');
            expect(button).not.toBeInTheDocument();
        });
        it("calls the provided function when clicking on the dismiss button in emergency type", function () {
            props = {
                beenClosed: false,
                isPopupOpen: true,
                popupParams: {
                    dismissButtonText: 'Test dismiss',
                    onDismiss: dismissSpy,
                    type: PopupProvider_1.PopupType.confirmation
                },
                callPopup: function () { return undefined; },
                closePopup: function () { return undefined; }
            };
            (0, testUtils_1.render)((0, jsx_runtime_1.jsx)(PopupProvider_1.PopupContext.Provider, tslib_1.__assign({ value: props }, { children: (0, jsx_runtime_1.jsx)(_1.default, {}) })));
            var button = testUtils_1.screen.getByText('Test dismiss');
            expect(button).toBeInTheDocument();
            (0, testUtils_1.act)(function () {
                testUtils_1.userEvent.click(button);
            });
            expect(dismissSpy).toHaveBeenCalled();
        });
    });
});
//# sourceMappingURL=Popup.test.js.map