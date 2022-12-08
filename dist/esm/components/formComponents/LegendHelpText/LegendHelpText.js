import { __assign } from "tslib";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import cx from 'classnames';
import { Label, RequiredOptional } from '..';
function LegendHelpText(_a) {
    var className = _a.className, input = _a.input, _b = _a.isFieldSet, isFieldSet = _b === void 0 ? false : _b, isInvalid = _a.isInvalid, name = _a.name;
    var classNames = cx({
        error: isInvalid,
        'input-label': isFieldSet
    }, className);
    var getLabel = function () {
        if (isFieldSet)
            return (_jsx("legend", __assign({ className: classNames, id: "".concat(name, "Label") }, { children: input.text })));
        return (_jsx(Label, __assign({ className: classNames, htmlFor: name }, { children: input.text })));
    };
    return (_jsxs(_Fragment, { children: [getLabel(), _jsx(RequiredOptional, { required: input.required })] }));
}
export default LegendHelpText;
//# sourceMappingURL=LegendHelpText.js.map