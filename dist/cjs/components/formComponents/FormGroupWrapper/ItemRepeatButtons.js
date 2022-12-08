"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var react_1 = require("react");
var types_1 = require("../../../types");
var FormDataProvider_1 = require("../../FormDataProvider");
var PopupProvider_1 = require("../../PopupProvider");
var PopupProvider_2 = require("../../PopupProvider/PopupProvider");
var QuestionnaireProvider_1 = require("../../QuestionnaireProvider");
var __1 = require("..");
function ItemRepeatButtons(_a) {
    var input = _a.input;
    var _b = (0, QuestionnaireProvider_1.useQuestionnaire)(), addRepeatableItem = _b.addRepeatableItem, deleteRepeatableItem = _b.deleteRepeatableItem;
    var _c = (0, FormDataProvider_1.useFormData)(), getFormValue = _c.getFormValue, setFormValue = _c.setFormValue;
    var callPopup = (0, PopupProvider_1.usePopup)().callPopup;
    var baseId = (0, react_1.useMemo)(function () {
        return ((input.linkIdWithParent || '').split('.').slice(0, -1).join('.') ||
            input.linkIdWithParent ||
            '');
    }, [input.linkIdWithParent]);
    var baseValue = getFormValue(baseId);
    if (baseValue === undefined)
        return null;
    function addRepeatItem() {
        addRepeatableItem(input.questionnairePosition || '');
    }
    function removeRepeatItem() {
        callPopup({
            message: 'Are you sure you want to delete this entry?',
            confirmButtonText: 'Confirm',
            dismissButtonText: 'Dismiss',
            onConfirm: function () {
                // Delete in the array and call the questionnaire function
                setFormValue(baseId, tslib_1.__spreadArray(tslib_1.__spreadArray([], baseValue.slice(0, input.indexRepeat), true), baseValue.slice((input.indexRepeat || 0) + 1), true));
                deleteRepeatableItem(input.questionnairePosition || '');
            },
            type: PopupProvider_2.PopupType.confirmation
        });
    }
    var classNames = (0, classnames_1.default)('margin-top-2', {
        'margin-bottom-6': (input.indexRepeat || 0) > 0
    });
    return ((0, jsx_runtime_1.jsxs)("div", tslib_1.__assign({ className: classNames }, { children: [input.indexRepeat === baseValue.length - 1 && ((0, jsx_runtime_1.jsx)(__1.Button, tslib_1.__assign({ className: (input.indexRepeat || 0) > 0 ? 'margin-right-4' : '', onClick: addRepeatItem, type: 'button', variant: types_1.ButtonVariantTypes.primary }, { children: "Add" }))), (input.indexRepeat || 0) > 0 && ((0, jsx_runtime_1.jsx)(__1.Button, tslib_1.__assign({ onClick: removeRepeatItem, type: 'button', variant: types_1.ButtonVariantTypes.delete }, { children: "Delete" })))] })));
}
exports.default = ItemRepeatButtons;
//# sourceMappingURL=ItemRepeatButtons.js.map