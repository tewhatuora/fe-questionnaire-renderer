"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var query_string_1 = tslib_1.__importDefault(require("query-string"));
var react_router_dom_1 = require("react-router-dom");
var buildLink = function (_a) {
    var path = _a.path, routeParams = _a.routeParams, queryParams = _a.queryParams;
    var pathname = routeParams ? (0, react_router_dom_1.generatePath)(path, routeParams) : path;
    var search = queryParams ? "?".concat(query_string_1.default.stringify(queryParams)) : '';
    return "".concat(pathname).concat(search);
};
exports.default = buildLink;
//# sourceMappingURL=buildLink.js.map