import queryString from 'query-string';
import { generatePath } from 'react-router-dom';
var buildLink = function (_a) {
    var path = _a.path, routeParams = _a.routeParams, queryParams = _a.queryParams;
    var pathname = routeParams ? generatePath(path, routeParams) : path;
    var search = queryParams ? "?".concat(queryString.stringify(queryParams)) : '';
    return "".concat(pathname).concat(search);
};
export default buildLink;
//# sourceMappingURL=buildLink.js.map