import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ExternalIcon from '../../../images/icons/ExternalIcon';
export default function Button(_a) {
    var buttonAttributes = _a.buttonAttributes, _b = _a.target, target = _b === void 0 ? '_blank' : _b;
    var classes = "button button-variant-".concat(buttonAttributes === null || buttonAttributes === void 0 ? void 0 : buttonAttributes.variant);
    return (_jsxs("a", __assign({ className: classes, href: buttonAttributes === null || buttonAttributes === void 0 ? void 0 : buttonAttributes.href, rel: 'noopener noreferrer', target: target }, { children: [buttonAttributes === null || buttonAttributes === void 0 ? void 0 : buttonAttributes.content, _jsx("div", __assign({ className: 'margin-left-4', "aria-hidden": true }, { children: _jsx(ExternalIcon, {}) }))] })));
}
//# sourceMappingURL=HrefButton.js.map