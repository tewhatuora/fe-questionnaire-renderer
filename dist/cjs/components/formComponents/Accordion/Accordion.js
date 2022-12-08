"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var types_1 = require("../../../types");
function AccordionSegment(_a) {
    var _b = _a.buttonFontSize, buttonFontSize = _b === void 0 ? types_1.AccordionButtonFontSizes.large : _b, _c = _a.detailBackgroundColor, detailBackgroundColor = _c === void 0 ? types_1.AccordionDetailBackgroundColors.white : _c, details = _a.details, id = _a.id, summary = _a.summary, variantClassName = _a.variantClassName;
    var _d = (0, react_1.useState)(false), isPanelOpen = _d[0], setIsPanelOpen = _d[1];
    var panelNode = (0, react_1.useRef)(null);
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
    (0, react_1.useEffect)(function () {
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
    return ((0, jsx_runtime_1.jsxs)("div", tslib_1.__assign({ id: id, className: buildClasses() }, { children: [(0, jsx_runtime_1.jsx)("button", tslib_1.__assign({ className: buildButtonClasses(), onClick: handleTogglePanel, type: 'button' }, { children: summary })), (0, jsx_runtime_1.jsx)("div", tslib_1.__assign({ className: buildPanelClasses(), ref: panelNode }, { children: details }))] })));
}
function Accordion(_a) {
    var data = _a.data;
    return ((0, jsx_runtime_1.jsx)("div", { children: data.map(function (d) { return ((0, jsx_runtime_1.jsx)(AccordionSegment, tslib_1.__assign({}, d), d.id)); }) }));
}
exports.default = Accordion;
//# sourceMappingURL=Accordion.js.map