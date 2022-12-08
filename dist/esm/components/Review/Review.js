import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
/* eslint-disable no-underscore-dangle */
import moment from 'moment';
import { Extensions } from '../../types';
import { Questionnaire_ItemTypeKind } from '../../types/fhir';
import verifyEnableWhen from '../../utils/enableWhen';
import { isExtension, isPhoneExtension } from '../../utils/extensions';
import { CALENDAR_LABEL_DATE_FORMAT } from '../../utils/utils';
import { Accordion } from '../formComponents';
import { useFormData } from '../FormDataProvider';
import TextValue from './TextValue';
function ReviewArray(val) {
    if (!val)
        return undefined;
    return (_jsx("ul", __assign({ style: { paddingLeft: 32 } }, { children: val.map(function (v, ind) { return (_jsx("li", { children: v }, ind)); }) })));
}
export default function Review(_a) {
    var basePath = _a.basePath, input = _a.input;
    var formData = useFormData().formData;
    if (!formData)
        return null;
    // Don't display the accordion if the step is not enabled
    if (input.enableWhen) {
        if (!verifyEnableWhen(formData, input.enableWhen, input.enableBehavior))
            return _jsx("div", {});
    }
    // Don't display the accordion if the step is not a group
    if (input.type !== Questionnaire_ItemTypeKind._group) {
        return _jsx("div", {});
    }
    var getReviewComponent = function (reviewInput) {
        var _a, _b;
        switch (reviewInput.type) {
            case Questionnaire_ItemTypeKind._boolean:
                return (_jsx(TextValue, { basePath: basePath, formatValue: function (val) { return (val ? 'Yes' : 'No'); }, input: reviewInput }));
            case Questionnaire_ItemTypeKind._choice:
                return _jsx(TextValue, { basePath: basePath, input: reviewInput });
            case Questionnaire_ItemTypeKind._date:
                return (_jsx(TextValue, { basePath: basePath, formatValue: function (val) {
                        return moment(val).format(CALENDAR_LABEL_DATE_FORMAT);
                    }, input: reviewInput }));
            case Questionnaire_ItemTypeKind._display:
                return null;
            case Questionnaire_ItemTypeKind._group:
                if (!reviewInput.item)
                    return null;
                if (!reviewInput.text)
                    return reviewInput.item.map(function (i, ind) { return (_jsx("div", { children: getReviewComponent(i) }, "".concat(reviewInput.linkId).concat(ind, "}"))); });
                return (_jsx("div", { children: _jsx(Review, { basePath: basePath, input: reviewInput }) }, reviewInput.linkId));
            case Questionnaire_ItemTypeKind._openChoice:
                if (isExtension(reviewInput, Extensions.checkboxGroupWithNoOption)) {
                    var valNo_1 = (_b = (_a = reviewInput.extension) === null || _a === void 0 ? void 0 : _a.find(function (e) { return e.id === Extensions.noOptionExtension; })) === null || _b === void 0 ? void 0 : _b.valueString;
                    return (_jsx(TextValue, { basePath: basePath, formatValue: function (val) {
                            return !val || val.length === 0 ? valNo_1 : ReviewArray(val);
                        }, input: reviewInput }));
                }
                if (isExtension(reviewInput, Extensions.soloCheckboxExtension)) {
                    return (_jsx(TextValue, { basePath: basePath, formatValue: function (val) { return (val ? 'Yes' : 'No'); }, input: reviewInput }));
                }
                return (_jsx(TextValue, { basePath: basePath, formatValue: ReviewArray, input: reviewInput }));
            case Questionnaire_ItemTypeKind._string:
                if (isPhoneExtension(reviewInput)) {
                    return (_jsx(TextValue, { basePath: basePath, formatValue: function (val) { return val.number; }, input: reviewInput }));
                }
                return _jsx(TextValue, { basePath: basePath, input: reviewInput });
            case Questionnaire_ItemTypeKind._text:
                return _jsx(TextValue, { basePath: basePath, input: reviewInput });
            default:
                return null;
        }
    };
    var buildAccordionDetails = function () {
        if (!input.item)
            return _jsx("div", {});
        var details = input.item.map(function (i) {
            // Check if the item should be displayed
            if (i.enableWhen) {
                if (!verifyEnableWhen(formData, i.enableWhen))
                    return undefined;
            }
            return getReviewComponent(i);
        });
        if (!details.some(function (s) { return s; }))
            return undefined;
        return (_jsx("div", { children: details.map(function (d, dInd) {
                return _jsx("div", { children: d }, dInd);
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
    return (_jsx("div", __assign({ className: 'form-group' }, { children: _jsx(Accordion, { data: accordionData }) })));
}
//# sourceMappingURL=Review.js.map