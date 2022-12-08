"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var react_1 = require("react");
var useErrors_1 = require("../../../hooks/useErrors");
var fieldValidators_1 = require("../../../utils/fieldValidators");
var utils_1 = require("../../../utils/utils");
var FormDataProvider_1 = require("../../FormDataProvider");
var FormTouchedProvider_1 = require("../../FormTouchedProvider");
var __1 = require("..");
function SoloCheckbox(_a) {
    var checked = _a.checked, classNames = _a.classNames, input = _a.input, setField = _a.setField, value = _a.value;
    var name = input.linkIdWithParent || '';
    var containerRef = (0, react_1.useRef)(null);
    var ref = (0, react_1.useRef)(null);
    var _b = (0, react_1.useState)(false), focus = _b[0], setFocus = _b[1];
    var _c = (0, react_1.useState)(false), hover = _c[0], setHover = _c[1];
    var setFormValue = (0, FormDataProvider_1.useFormData)().setFormValue;
    var _d = (0, useErrors_1.useErrors)({
        fieldName: name,
        inputValidateField: (0, fieldValidators_1.getValidationFunction)(input)
    }), isInvalid = _d.isInvalid, validateField = _d.validateField;
    var setFormTouched = (0, FormTouchedProvider_1.useFormTouched)().setFormTouched;
    var keyDownHandler = function (event) {
        // Gets all the tab-able elements
        var all = (0, utils_1.getAllFocusableComponents)();
        if (ref && ref.current) {
            var indRef = all.findIndex(function (a) { return a === ref.current; });
            var indCurr = all.findIndex(function (a) { return a === event.target; });
            // If the checkbox is the next one and tab is pressed
            if (event.key === 'Tab' && !event.shiftKey && indRef === indCurr + 1) {
                setFocus(true);
                // If the checkbox is the previous one and tab is pressed with shift pressed
            }
            else if (event.key === 'Tab' &&
                event.shiftKey &&
                indRef === indCurr - 1) {
                setFocus(true);
            }
            else if (event.key === 'Tab') {
                setFocus(false);
            }
        }
    };
    var mouseDownHandler = function (event) {
        // Removes focus if click on other element
        if (containerRef &&
            containerRef.current &&
            event.target !== containerRef.current) {
            setFocus(false);
        }
    };
    (0, react_1.useEffect)(function () {
        document.addEventListener('keydown', keyDownHandler);
        document.addEventListener('mousedown', mouseDownHandler);
        return function () {
            document.removeEventListener('keydown', keyDownHandler);
            document.removeEventListener('mousedown', mouseDownHandler);
        };
    });
    var className = (0, classnames_1.default)('checkbox-input', {
        focus: focus
    }, classNames);
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)("div", tslib_1.__assign({ className: className, onMouseEnter: function () { return setHover(true); }, onMouseLeave: function () { return setHover(false); }, ref: containerRef }, { children: [(0, jsx_runtime_1.jsx)(__1.FieldWrapper, tslib_1.__assign({ fieldName: name, id: value, input: input, isInvalid: isInvalid, validateField: validateField }, { children: function () { return ((0, jsx_runtime_1.jsx)(__1.CustomSelector, { checked: checked, hover: hover, 
                        // ID is used to focus the input on error
                        id: name, name: name, ref: ref, setFieldValue: function (n, v) {
                            setFormTouched(name);
                            validateField(v, true);
                            if (setField)
                                setField(v);
                            else
                                setFormValue(n, v);
                        }, type: 'checkbox', value: value })); } })), (0, jsx_runtime_1.jsxs)("div", tslib_1.__assign({ className: 'flex direction-column' }, { children: [input.text, (0, jsx_runtime_1.jsx)(__1.RequiredOptional, { className: ' margin-top-2', required: input.required })] }))] })) }));
}
exports.default = SoloCheckbox;
//# sourceMappingURL=SoloCheckbox.js.map