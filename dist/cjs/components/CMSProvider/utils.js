"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cmsEnhancer = exports.setExternalLinkClassName = void 0;
var tslib_1 = require("tslib");
var setExternalLinkClassName = function (anchorHtmlContent) {
    var isInternalLink = anchorHtmlContent.includes('tel:') || anchorHtmlContent.includes('mailto:');
    if (isInternalLink)
        return anchorHtmlContent;
    return anchorHtmlContent.replace(/<a href/g, '<a class="link-external-cms" href');
};
exports.setExternalLinkClassName = setExternalLinkClassName;
var cmsEnhancer = function (data) {
    return Object.entries(data).reduce(function (acc, _a) {
        var _b;
        var key = _a[0], val = _a[1];
        var cmsValues = Object.entries(val).reduce(function (accItem, _a) {
            var _b, _c;
            var _d;
            var keyItem = _a[0], valItem = _a[1];
            if (((_d = valItem.htmlContent) === null || _d === void 0 ? void 0 : _d.includes('<a href')) &&
                valItem.htmlContent.includes('target="_blank"')) {
                return tslib_1.__assign(tslib_1.__assign({}, accItem), (_b = {},
                    _b[keyItem] = {
                        htmlContent: (0, exports.setExternalLinkClassName)(valItem.htmlContent)
                    },
                    _b));
            }
            return tslib_1.__assign(tslib_1.__assign({}, accItem), (_c = {}, _c[keyItem] = tslib_1.__assign({}, valItem), _c));
        }, {});
        return tslib_1.__assign(tslib_1.__assign({}, acc), (_b = {}, _b[key] = cmsValues, _b));
    }, {});
};
exports.cmsEnhancer = cmsEnhancer;
//# sourceMappingURL=utils.js.map