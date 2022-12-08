"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCMS = exports.CMSProvider = exports.CMSContext = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var lodash_merge_1 = tslib_1.__importDefault(require("lodash.merge"));
var react_1 = require("react");
exports.CMSContext = (0, react_1.createContext)({});
function CMSProvider(_a) {
    var children = _a.children, cmsData = _a.cmsData, _b = _a.cmsFallback, cmsFallback = _b === void 0 ? {} : _b, useCMS = _a.useCMS;
    var _c = (0, react_1.useState)({}), CMSData = _c[0], setCMSData = _c[1];
    // Mutates the CMS data to add classes etc.
    (0, react_1.useEffect)(function () {
        // All projects will have common keys for the Landing Page etc.
        // Defaulting to the fallback ensure we'll always content to display
        if (useCMS)
            setCMSData((0, lodash_merge_1.default)(cmsFallback, cmsData));
    }, [cmsFallback, cmsData, useCMS]);
    return (0, jsx_runtime_1.jsx)(exports.CMSContext.Provider, tslib_1.__assign({ value: CMSData }, { children: children }));
}
exports.CMSProvider = CMSProvider;
var useCMS = function () { return (0, react_1.useContext)(exports.CMSContext); };
exports.useCMS = useCMS;
//# sourceMappingURL=CMSProvider.js.map