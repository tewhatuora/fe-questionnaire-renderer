"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var html_react_parser_1 = tslib_1.__importDefault(require("html-react-parser"));
var lodash_get_1 = tslib_1.__importDefault(require("lodash.get"));
var react_markdown_1 = tslib_1.__importDefault(require("react-markdown"));
var types_1 = require("../../../types");
var extensions_1 = require("../../../utils/extensions");
var CMSProvider_1 = require("../../CMSProvider");
var __1 = require("..");
function Display(_a) {
    var _b, _c;
    var input = _a.input;
    var cms = (0, CMSProvider_1.useCMS)();
    var name = input.linkIdWithParent || '';
    var cmsExtension = input.extension && (0, extensions_1.getExtension)(input, types_1.Extensions.cmsExtension);
    var cmsVal = (_c = (0, lodash_get_1.default)(cms, ((_b = cmsExtension === null || cmsExtension === void 0 ? void 0 : cmsExtension.valueCoding) === null || _b === void 0 ? void 0 : _b.display) || '')) === null || _c === void 0 ? void 0 : _c.toString();
    return ((0, jsx_runtime_1.jsx)(__1.FormGroupWrapper, tslib_1.__assign({ fieldName: name, input: input, isInvalid: false }, { children: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [cmsVal && (0, jsx_runtime_1.jsx)("div", tslib_1.__assign({ className: 'content-cms cms-link' }, { children: (0, html_react_parser_1.default)(cmsVal) })), input.text && ((0, jsx_runtime_1.jsx)(react_markdown_1.default, tslib_1.__assign({ className: 'content-cms cms-link break-spaces' }, { children: input.text.replace(/\\n/g, '\n') || '' })))] }) })));
}
exports.default = Display;
//# sourceMappingURL=Display.js.map