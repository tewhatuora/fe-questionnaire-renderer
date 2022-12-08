import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import { AccordionButtonFontSizes, AccordionDetailBackgroundColors } from '../../../types';
function AccordionSegment(_a) {
    var _b = _a.buttonFontSize, buttonFontSize = _b === void 0 ? AccordionButtonFontSizes.large : _b, _c = _a.detailBackgroundColor, detailBackgroundColor = _c === void 0 ? AccordionDetailBackgroundColors.white : _c, details = _a.details, id = _a.id, summary = _a.summary, variantClassName = _a.variantClassName;
    var _d = useState(false), isPanelOpen = _d[0], setIsPanelOpen = _d[1];
    var panelNode = useRef(null);
    var expandPanel = function () {
        var element = panelNode.current;
        if (element) {
            element.style.display = 'block';
        }
    };
    var collapsePanel = function () {
        var element = panelNode.current;
        if (element) {
            element.style.display = 'none';
        }
    };
    useEffect(function () {
        if (isPanelOpen)
            expandPanel();
        else
            collapsePanel();
    }, [isPanelOpen]);
    if (!details)
        return null;
    function handleTogglePanel() {
        setIsPanelOpen(!isPanelOpen);
    }
    var buildClasses = function () {
        var className = 'accordion';
        if (isPanelOpen)
            className += ' active';
        if (variantClassName)
            className += " ".concat(variantClassName);
        return className;
    };
    var buildButtonClasses = function () {
        var className = 'accordion-button';
        if (buttonFontSize === 'small') {
            className += ' accordion-button-font-size-small';
        }
        if (detailBackgroundColor === 'blue') {
            className += ' accordion-button-blue';
        }
        return className;
    };
    var buildPanelClasses = function () {
        var className = 'accordion-panel';
        if (detailBackgroundColor === 'blue') {
            className += ' accordion-panel-blue';
        }
        return className;
    };
    return (_jsxs("div", __assign({ id: id, className: buildClasses() }, { children: [_jsx("button", __assign({ className: buildButtonClasses(), onClick: handleTogglePanel, type: 'button' }, { children: summary })), _jsx("div", __assign({ className: buildPanelClasses(), ref: panelNode }, { children: details }))] })));
}
export default function Accordion(_a) {
    var data = _a.data;
    return (_jsx("div", { children: data.map(function (d) { return (_jsx(AccordionSegment, __assign({}, d), d.id)); }) }));
}
//# sourceMappingURL=Accordion.js.map