import { __assign, __spreadArray } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable no-underscore-dangle */
import { useEffect, useMemo } from 'react';
import { useErrors } from '../../../hooks/useErrors';
import { Extensions } from '../../../types';
import { getExtension } from '../../../utils/extensions';
import { useFormData } from '../../FormDataProvider';
import { useFormTouched } from '../../FormTouchedProvider';
import Divider from '../Divider';
import FormGroupWrapper from '../FormGroupWrapper';
import LegendHelpText from '../LegendHelpText';
import SelectorGroup from '../SelectorGroup';
import SoloCheckbox from '../SoloCheckbox';
import validateCheckboxNoOption from './validation';
function CheckboxGroupWithNoOption(_a) {
    var input = _a.input;
    var name = input.linkIdWithParent || '';
    var noOptionName = "".concat(name, "_noOption");
    var extension = input.extension && getExtension(input, Extensions.validationExtension);
    var _b = useFormData(), formData = _b.formData, getFormValue = _b.getFormValue, setFormValue = _b.setFormValue;
    var _c = useFormTouched(), formTouched = _c.formTouched, setFormTouched = _c.setFormTouched;
    var _d = useErrors({
        fieldName: name,
        inputValidateField: function (props) {
            return validateCheckboxNoOption(__assign(__assign({}, props), { extension: extension }));
        },
        useValidationOnMount: false
    }), error = _d.error, isInvalid = _d.isInvalid, touched = _d.touched, validateField = _d.validateField;
    var value = getFormValue(name) || [];
    var valueNoOption = getFormValue(noOptionName);
    var _e = useMemo(function () {
        var ext = input.extension && getExtension(input, Extensions.noOptionExtension);
        return {
            noOptionInput: {
                linkIdWithParent: noOptionName,
                text: (ext === null || ext === void 0 ? void 0 : ext.valueString) || ''
            },
            selectorInput: __assign(__assign({}, input), { required: false, extension: [] })
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [input]), noOptionInput = _e.noOptionInput, selectorInput = _e.selectorInput;
    function timeoutFieldTouched() {
        if (!touched)
            setTimeout(function () { return setFormTouched(name); }, 100);
    }
    useEffect(function () {
        validateField(value, true, false, {
            secondaryValue: valueNoOption,
            formValues: formData
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value.length, valueNoOption]);
    // Removes error and touched on unmount
    useEffect(function () {
        return function () {
            validateField(undefined, true, true);
            if (formTouched.find(function (ft) { return ft.name === name; })) {
                setFormTouched(name, false);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    function setSelectorGroupValue(val, checked) {
        setFormValue(noOptionName, undefined);
        if (checked)
            setFormValue(name, value ? __spreadArray(__spreadArray([], value, true), [val], false) : [val]);
        else {
            var index = value.findIndex(function (v) { return val === v; });
            value.splice(index, 1);
            setFormValue(name, value);
        }
        timeoutFieldTouched();
    }
    function setSoloCheckboxValue(val) {
        setFormValue(noOptionName, val);
        setFormValue(name, []);
        timeoutFieldTouched();
    }
    return (_jsx(FormGroupWrapper, __assign({ error: error, fieldName: noOptionName, input: input, isInvalid: isInvalid }, { children: _jsxs("fieldset", __assign({ "aria-labelledby": "".concat(name, "Label") }, { children: [_jsx(LegendHelpText, { input: input, isInvalid: isInvalid, name: name, isFieldSet: true }), _jsx(SelectorGroup, { input: selectorInput, isInvalid: isInvalid, setFieldValue: setSelectorGroupValue, type: 'checkbox', validateField: function () { return undefined; } }), _jsx("div", __assign({ className: 'margin-top-4 margin-bottom-4' }, { children: _jsx(Divider, { input: input, transparentMode: true }) })), _jsx("label", __assign({ htmlFor: noOptionName }, { children: _jsx(SoloCheckbox, { classNames: 'border-none', checked: !!valueNoOption, input: noOptionInput, setField: setSoloCheckboxValue }) }))] })) })));
}
export default CheckboxGroupWithNoOption;
//# sourceMappingURL=CheckboxGroupWithNoOption.js.map