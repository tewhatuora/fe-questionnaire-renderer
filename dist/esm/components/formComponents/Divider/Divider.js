import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { FormGroupWrapper } from '..';
export default function Divider(_a) {
    var color = _a.color, input = _a.input, transparentMode = _a.transparentMode;
    var name = input.linkIdWithParent || '';
    var buildClasses = function () {
        if (color)
            return "divider-".concat(color);
        return 'divider';
    };
    return (_jsx(FormGroupWrapper, __assign({ fieldName: name, input: input, isInvalid: false, transparentMode: transparentMode }, { children: _jsx("div", { className: buildClasses() }) })));
}
//# sourceMappingURL=Divider.js.map