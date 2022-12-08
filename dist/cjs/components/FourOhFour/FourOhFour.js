"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_router_dom_1 = require("react-router-dom");
var types_1 = require("../../types");
var formComponents_1 = require("../formComponents");
function FourOhFour(_a) {
    var basePath = _a.basePath;
    var navigate = (0, react_router_dom_1.useNavigate)();
    function handleClick() {
        navigate(basePath);
    }
    return ((0, jsx_runtime_1.jsxs)("div", tslib_1.__assign({ className: 'form' }, { children: [(0, jsx_runtime_1.jsxs)("div", tslib_1.__assign({ className: 'margin-bottom-6' }, { children: [(0, jsx_runtime_1.jsx)("h2", { children: "We\u2019re sorry. Aroha mai." }), (0, jsx_runtime_1.jsx)("h2", { children: "We can\u2019t find that page anywhere." })] })), (0, jsx_runtime_1.jsx)(formComponents_1.Button, tslib_1.__assign({ variant: types_1.ButtonVariantTypes.tertiary, type: 'button', onClick: handleClick }, { children: "Back to home page" }))] })));
}
exports.default = FourOhFour;
//# sourceMappingURL=FourOhFour.js.map