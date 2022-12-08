import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { useMemo } from 'react';
import { useFormData } from '../../FormDataProvider';
import SelectorGroupInput from './SelectorGroupInput';
export default function SelectorGroup(props) {
    var input = props.input, isInvalid = props.isInvalid, type = props.type, setFieldValue = props.setFieldValue, validateField = props.validateField;
    var name = input.linkIdWithParent || '';
    var getFormValue = useFormData().getFormValue;
    var val = getFormValue(name);
    var options = useMemo(function () {
        if (!input.answerOption)
            return [];
        return input.answerOption.map(function (ao, ind) { return ({
            id: "".concat(input.id, ".").concat(ind),
            label: ao.valueString || '',
            value: ao.valueString || ''
        }); });
    }, [input]);
    if (!input.answerOption)
        return null;
    return (_jsx("div", __assign({ className: 'flex direction-column' }, { children: options.map(function (option, ind) { return (_jsx(SelectorGroupInput, { fieldName: name, id: ind === 0 ? name : "".concat(name, "-").concat(option.value), input: input, isInvalid: isInvalid, option: option, setFieldValue: setFieldValue, type: type, val: val, validateField: validateField }, option.value)); }) })));
}
//# sourceMappingURL=SelectorGroup.js.map