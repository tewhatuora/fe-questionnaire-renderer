import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import merge from 'lodash.merge';
import { createContext, useContext, useEffect, useState } from 'react';
export var CMSContext = createContext({});
export function CMSProvider(_a) {
    var children = _a.children, cmsData = _a.cmsData, _b = _a.cmsFallback, cmsFallback = _b === void 0 ? {} : _b, useCMS = _a.useCMS;
    var _c = useState({}), CMSData = _c[0], setCMSData = _c[1];
    // Mutates the CMS data to add classes etc.
    useEffect(function () {
        // All projects will have common keys for the Landing Page etc.
        // Defaulting to the fallback ensure we'll always content to display
        if (useCMS)
            setCMSData(merge(cmsFallback, cmsData));
    }, [cmsFallback, cmsData, useCMS]);
    return _jsx(CMSContext.Provider, __assign({ value: CMSData }, { children: children }));
}
export var useCMS = function () { return useContext(CMSContext); };
//# sourceMappingURL=CMSProvider.js.map