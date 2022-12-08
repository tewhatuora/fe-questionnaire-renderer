import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import parse from 'html-react-parser';
import ErrorIcon from '../../../images/icons/ErrorIcon';
export default function InputError(props) {
    var message = props.message, name = props.name;
    return (_jsxs("div", __assign({ className: 'invalid-input-container' }, { children: [_jsx(ErrorIcon, {}), _jsx("p", __assign({ className: 'font-size-p2', id: "".concat(name, "Error") }, { children: parse(message || '') }))] })));
}
//# sourceMappingURL=InputError.js.map