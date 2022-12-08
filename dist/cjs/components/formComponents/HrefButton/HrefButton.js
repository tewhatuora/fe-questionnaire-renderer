"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var ExternalIcon_1 = tslib_1.__importDefault(require("../../../images/icons/ExternalIcon"));
function Button(_a) {
    var buttonAttributes = _a.buttonAttributes, _b = _a.target, target = _b === void 0 ? '_blank' : _b;
    var classes = "button button-variant-".concat(buttonAttributes === null || buttonAttributes === void 0 ? void 0 : buttonAttributes.variant);
    return ((0, jsx_runtime_1.jsxs)("a", tslib_1.__assign({ className: classes, href: buttonAttributes === null || buttonAttributes === void 0 ? void 0 : buttonAttributes.href, rel: 'noopener noreferrer', target: target }, { children: [buttonAttributes === null || buttonAttributes === void 0 ? void 0 : buttonAttributes.content, (0, jsx_runtime_1.jsx)("div", tslib_1.__assign({ className: 'margin-left-4', "aria-hidden": true }, { children: (0, jsx_runtime_1.jsx)(ExternalIcon_1.default, {}) }))] })));
}
exports.default = Button;
//# sourceMappingURL=HrefButton.js.map