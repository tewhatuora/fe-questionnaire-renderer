import { __assign, __spreadArray } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import cx from 'classnames';
import { useMemo } from 'react';
import { ButtonVariantTypes } from '../../../types';
import { useFormData } from '../../FormDataProvider';
import { usePopup } from '../../PopupProvider';
import { PopupType } from '../../PopupProvider/PopupProvider';
import { useQuestionnaire } from '../../QuestionnaireProvider';
import { Button } from '..';
export default function ItemRepeatButtons(_a) {
    var input = _a.input;
    var _b = useQuestionnaire(), addRepeatableItem = _b.addRepeatableItem, deleteRepeatableItem = _b.deleteRepeatableItem;
    var _c = useFormData(), getFormValue = _c.getFormValue, setFormValue = _c.setFormValue;
    var callPopup = usePopup().callPopup;
    var baseId = useMemo(function () {
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
                setFormValue(baseId, __spreadArray(__spreadArray([], baseValue.slice(0, input.indexRepeat), true), baseValue.slice((input.indexRepeat || 0) + 1), true));
                deleteRepeatableItem(input.questionnairePosition || '');
            },
            type: PopupType.confirmation
        });
    }
    var classNames = cx('margin-top-2', {
        'margin-bottom-6': (input.indexRepeat || 0) > 0
    });
    return (_jsxs("div", __assign({ className: classNames }, { children: [input.indexRepeat === baseValue.length - 1 && (_jsx(Button, __assign({ className: (input.indexRepeat || 0) > 0 ? 'margin-right-4' : '', onClick: addRepeatItem, type: 'button', variant: ButtonVariantTypes.primary }, { children: "Add" }))), (input.indexRepeat || 0) > 0 && (_jsx(Button, __assign({ onClick: removeRepeatItem, type: 'button', variant: ButtonVariantTypes.delete }, { children: "Delete" })))] })));
}
//# sourceMappingURL=ItemRepeatButtons.js.map