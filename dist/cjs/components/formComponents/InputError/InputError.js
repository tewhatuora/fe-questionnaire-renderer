"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var html_react_parser_1 = tslib_1.__importDefault(require("html-react-parser"));
var ErrorIcon_1 = tslib_1.__importDefault(require("../../../images/icons/ErrorIcon"));
function InputError(props) {
    var message = props.message, name = props.name;
    return ((0, jsx_runtime_1.jsxs)("div", tslib_1.__assign({ className: 'invalid-input-container' }, { children: [(0, jsx_runtime_1.jsx)(ErrorIcon_1.default, {}), (0, jsx_runtime_1.jsx)("p", tslib_1.__assign({ className: 'font-size-p2', id: "".concat(name, "Error") }, { children: (0, html_react_parser_1.default)(message || '') }))] })));
}
exports.default = InputError;
//# sourceMappingURL=InputError.js.map