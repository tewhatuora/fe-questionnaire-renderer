"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var lodash_get_1 = tslib_1.__importDefault(require("lodash.get"));
var react_router_dom_1 = require("react-router-dom");
var QuestionnaireRenderer_1 = require("../../../QuestionnaireRenderer");
var types_1 = require("../../../types");
var formComponents_1 = require("../../formComponents");
var FormDataProvider_1 = require("../../FormDataProvider");
function TextValue(_a) {
    var _b;
    var basePath = _a.basePath, formatValue = _a.formatValue, input = _a.input;
    var formData = (0, FormDataProvider_1.useFormData)().formData;
    var navigate = (0, react_router_dom_1.useNavigate)();
    var value = (0, lodash_get_1.default)(formData, input.linkIdWithParent || '');
    var formattedValue = value !== undefined && value !== null && formatValue
        ? formatValue(value)
        : value;
    var splitLinkId = (_b = input.linkId) === null || _b === void 0 ? void 0 : _b.split('.');
    var path = splitLinkId === null || splitLinkId === void 0 ? void 0 : splitLinkId.splice(0, splitLinkId.length - 1);
    return ((0, jsx_runtime_1.jsxs)("dl", tslib_1.__assign({ className: 'list-review' }, { children: [(0, jsx_runtime_1.jsx)("dt", { children: input.text }), (0, jsx_runtime_1.jsx)("dd", { children: formattedValue || 'Not answered' }), (0, jsx_runtime_1.jsx)("div", tslib_1.__assign({ className: 'flex direction-row margin-bottom-4' }, { children: (0, jsx_runtime_1.jsx)(formComponents_1.Button, tslib_1.__assign({ ariaLabel: "Edit ".concat(input.text), onClick: function () {
                        return path &&
                            navigate("".concat(basePath, "/").concat((0, QuestionnaireRenderer_1.questionnaireFormPath)(path.join('/'))), {
                                state: { editFromReview: true }
                            });
                    }, variant: types_1.ButtonVariantTypes.edit, type: 'submit' }, { children: "Edit" })) }))] })));
}
exports.default = TextValue;
//# sourceMappingURL=TextValue.js.map