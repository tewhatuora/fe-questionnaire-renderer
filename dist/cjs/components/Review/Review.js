"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable no-underscore-dangle */
var moment_1 = tslib_1.__importDefault(require("moment"));
var types_1 = require("../../types");
var fhir_1 = require("../../types/fhir");
var enableWhen_1 = tslib_1.__importDefault(require("../../utils/enableWhen"));
var extensions_1 = require("../../utils/extensions");
var utils_1 = require("../../utils/utils");
var formComponents_1 = require("../formComponents");
var FormDataProvider_1 = require("../FormDataProvider");
var TextValue_1 = tslib_1.__importDefault(require("./TextValue"));
function ReviewArray(val) {
    if (!val)
        return undefined;
    return ((0, jsx_runtime_1.jsx)("ul", tslib_1.__assign({ style: { paddingLeft: 32 } }, { children: val.map(function (v, ind) { return ((0, jsx_runtime_1.jsx)("li", { children: v }, ind)); }) })));
}
function Review(_a) {
    var basePath = _a.basePath, input = _a.input;
    var formData = (0, FormDataProvider_1.useFormData)().formData;
    if (!formData)
        return null;
    // Don't display the accordion if the step is not enabled
    if (input.enableWhen) {
        if (!(0, enableWhen_1.default)(formData, input.enableWhen, input.enableBehavior))
            return (0, jsx_runtime_1.jsx)("div", {});
    }
    // Don't display the accordion if the step is not a group
    if (input.type !== fhir_1.Questionnaire_ItemTypeKind._group) {
        return (0, jsx_runtime_1.jsx)("div", {});
    }
    var getReviewComponent = function (reviewInput) {
        var _a, _b;
        switch (reviewInput.type) {
            case fhir_1.Questionnaire_ItemTypeKind._boolean:
                return ((0, jsx_runtime_1.jsx)(TextValue_1.default, { basePath: basePath, formatValue: function (val) { return (val ? 'Yes' : 'No'); }, input: reviewInput }));
            case fhir_1.Questionnaire_ItemTypeKind._choice:
                return (0, jsx_runtime_1.jsx)(TextValue_1.default, { basePath: basePath, input: reviewInput });
            case fhir_1.Questionnaire_ItemTypeKind._date:
                return ((0, jsx_runtime_1.jsx)(TextValue_1.default, { basePath: basePath, formatValue: function (val) {
                        return (0, moment_1.default)(val).format(utils_1.CALENDAR_LABEL_DATE_FORMAT);
                    }, input: reviewInput }));
            case fhir_1.Questionnaire_ItemTypeKind._display:
                return null;
            case fhir_1.Questionnaire_ItemTypeKind._group:
                if (!reviewInput.item)
                    return null;
                if (!reviewInput.text)
                    return reviewInput.item.map(function (i, ind) { return ((0, jsx_runtime_1.jsx)("div", { children: getReviewComponent(i) }, "".concat(reviewInput.linkId).concat(ind, "}"))); });
                return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(Review, { basePath: basePath, input: reviewInput }) }, reviewInput.linkId));
            case fhir_1.Questionnaire_ItemTypeKind._openChoice:
                if ((0, extensions_1.isExtension)(reviewInput, types_1.Extensions.checkboxGroupWithNoOption)) {
                    var valNo_1 = (_b = (_a = reviewInput.extension) === null || _a === void 0 ? void 0 : _a.find(function (e) { return e.id === types_1.Extensions.noOptionExtension; })) === null || _b === void 0 ? void 0 : _b.valueString;
                    return ((0, jsx_runtime_1.jsx)(TextValue_1.default, { basePath: basePath, formatValue: function (val) {
                            return !val || val.length === 0 ? valNo_1 : ReviewArray(val);
                        }, input: reviewInput }));
                }
                if ((0, extensions_1.isExtension)(reviewInput, types_1.Extensions.soloCheckboxExtension)) {
                    return ((0, jsx_runtime_1.jsx)(TextValue_1.default, { basePath: basePath, formatValue: function (val) { return (val ? 'Yes' : 'No'); }, input: reviewInput }));
                }
                return ((0, jsx_runtime_1.jsx)(TextValue_1.default, { basePath: basePath, formatValue: ReviewArray, input: reviewInput }));
            case fhir_1.Questionnaire_ItemTypeKind._string:
                if ((0, extensions_1.isPhoneExtension)(reviewInput)) {
                    return ((0, jsx_runtime_1.jsx)(TextValue_1.default, { basePath: basePath, formatValue: function (val) { return val.number; }, input: reviewInput }));
                }
                return (0, jsx_runtime_1.jsx)(TextValue_1.default, { basePath: basePath, input: reviewInput });
            case fhir_1.Questionnaire_ItemTypeKind._text:
                return (0, jsx_runtime_1.jsx)(TextValue_1.default, { basePath: basePath, input: reviewInput });
            default:
                return null;
        }
    };
    var buildAccordionDetails = function () {
        if (!input.item)
            return (0, jsx_runtime_1.jsx)("div", {});
        var details = input.item.map(function (i) {
            // Check if the item should be displayed
            if (i.enableWhen) {
                if (!(0, enableWhen_1.default)(formData, i.enableWhen))
                    return undefined;
            }
            return getReviewComponent(i);
        });
        if (!details.some(function (s) { return s; }))
            return undefined;
        return ((0, jsx_runtime_1.jsx)("div", { children: details.map(function (d, dInd) {
                return (0, jsx_runtime_1.jsx)("div", { children: d }, dInd);
            }) }));
    };
    var buildAccordionSummary = function () {
        return input.text || '';
    };
    var accordionData = [
        {
            id: 'review',
            details: buildAccordionDetails(),
            summary: buildAccordionSummary()
        }
    ];
    return ((0, jsx_runtime_1.jsx)("div", tslib_1.__assign({ className: 'form-group' }, { children: (0, jsx_runtime_1.jsx)(formComponents_1.Accordion, { data: accordionData }) })));
}
exports.default = Review;
//# sourceMappingURL=Review.js.map