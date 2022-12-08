import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import cx from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { useErrors } from '../../../hooks/useErrors';
import { getValidationFunction } from '../../../utils/fieldValidators';
import { getAllFocusableComponents } from '../../../utils/utils';
import { useFormData } from '../../FormDataProvider';
import { useFormTouched } from '../../FormTouchedProvider';
import { CustomSelector, FieldWrapper, RequiredOptional } from '..';
function SoloCheckbox(_a) {
    var checked = _a.checked, classNames = _a.classNames, input = _a.input, setField = _a.setField, value = _a.value;
    var name = input.linkIdWithParent || '';
    var containerRef = useRef(null);
    var ref = useRef(null);
    var _b = useState(false), focus = _b[0], setFocus = _b[1];
    var _c = useState(false), hover = _c[0], setHover = _c[1];
    var setFormValue = useFormData().setFormValue;
    var _d = useErrors({
        fieldName: name,
        inputValidateField: getValidationFunction(input)
    }), isInvalid = _d.isInvalid, validateField = _d.validateField;
    var setFormTouched = useFormTouched().setFormTouched;
    var keyDownHandler = function (event) {
        // Gets all the tab-able elements
        var all = getAllFocusableComponents();
        if (ref && ref.current) {
            var indRef = all.findIndex(function (a) { return a === ref.current; });
            var indCurr = all.findIndex(function (a) { return a === event.target; });
            // If the checkbox is the next one and tab is pressed
            if (event.key === 'Tab' && !event.shiftKey && indRef === indCurr + 1) {
                setFocus(true);
                // If the checkbox is the previous one and tab is pressed with shift pressed
            }
            else if (event.key === 'Tab' &&
                event.shiftKey &&
                indRef === indCurr - 1) {
                setFocus(true);
            }
            else if (event.key === 'Tab') {
                setFocus(false);
            }
        }
    };
    var mouseDownHandler = function (event) {
        // Removes focus if click on other element
        if (containerRef &&
            containerRef.current &&
            event.target !== containerRef.current) {
            setFocus(false);
        }
    };
    useEffect(function () {
        document.addEventListener('keydown', keyDownHandler);
        document.addEventListener('mousedown', mouseDownHandler);
        return function () {
            document.removeEventListener('keydown', keyDownHandler);
            document.removeEventListener('mousedown', mouseDownHandler);
        };
    });
    var className = cx('checkbox-input', {
        focus: focus
    }, classNames);
    return (_jsx("div", { children: _jsxs("div", __assign({ className: className, onMouseEnter: function () { return setHover(true); }, onMouseLeave: function () { return setHover(false); }, ref: containerRef }, { children: [_jsx(FieldWrapper, __assign({ fieldName: name, id: value, input: input, isInvalid: isInvalid, validateField: validateField }, { children: function () { return (_jsx(CustomSelector, { checked: checked, hover: hover, 
                        // ID is used to focus the input on error
                        id: name, name: name, ref: ref, setFieldValue: function (n, v) {
                            setFormTouched(name);
                            validateField(v, true);
                            if (setField)
                                setField(v);
                            else
                                setFormValue(n, v);
                        }, type: 'checkbox', value: value })); } })), _jsxs("div", __assign({ className: 'flex direction-column' }, { children: [input.text, _jsx(RequiredOptional, { className: ' margin-top-2', required: input.required })] }))] })) }));
}
export default SoloCheckbox;
//# sourceMappingURL=SoloCheckbox.js.map