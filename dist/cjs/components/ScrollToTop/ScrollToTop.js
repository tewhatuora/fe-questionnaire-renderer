"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrollToTop = void 0;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
function ScrollToTop(_a) {
    var children = _a.children;
    var pathname = (0, react_router_dom_1.useLocation)().pathname;
    (0, react_1.useEffect)(function () {
        window.scrollTo(0, 0);
    }, [pathname]);
    return children;
}
exports.ScrollToTop = ScrollToTop;
exports.default = ScrollToTop;
//# sourceMappingURL=ScrollToTop.js.map