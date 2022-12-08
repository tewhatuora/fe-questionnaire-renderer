import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import cx from 'classnames';
import InputError from '../InputError';
import ItemRepeatButtons from './ItemRepeatButtons';
export default function FormGroupWrapper(_a) {
    var children = _a.children, className = _a.className, customDisplayError = _a.customDisplayError, customErrorMessage = _a.customErrorMessage, error = _a.error, _b = _a.fieldName, fieldName = _b === void 0 ? '' : _b, input = _a.input, isInvalid = _a.isInvalid, transparentMode = _a.transparentMode;
    // Used for some more complex inputs like the CheckboxGroupWithNoOption
    if (transparentMode)
        return children;
    var isLastElemFormSection = input.isLastElemFormSection;
    var classNames = cx('form-section', {
        'last-form-section': isLastElemFormSection
    }, className);
    return (_jsxs("div", __assign({ className: classNames }, { children: [children, (customDisplayError || isInvalid) && (_jsx(InputError, { name: fieldName, message: customDisplayError ? customErrorMessage : error })), input.indexRepeat !== undefined && _jsx(ItemRepeatButtons, { input: input })] })));
}
//# sourceMappingURL=FormGroupWrapper.js.map