"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var utils_1 = require("./utils");
describe('Enriched CMS data', function () {
    it('adds the className to external links', function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            expect((0, utils_1.setExternalLinkClassName)('<a href="www.google.com" target="_blank">link</a>')).toEqual('<a class="link-external-cms" href="www.google.com" target="_blank">link</a>');
            return [2 /*return*/];
        });
    }); });
    it("don't change the link if tel:", function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            expect((0, utils_1.setExternalLinkClassName)('<a href="tel:www.google.com" target="_blank">tel</a>')).toEqual('<a href="tel:www.google.com" target="_blank">tel</a>');
            return [2 /*return*/];
        });
    }); });
    it("don't change the link if mailto:", function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            expect((0, utils_1.setExternalLinkClassName)('<a href="mailto:www.google.com">mail</a>')).toEqual('<a href="mailto:www.google.com">mail</a>');
            return [2 /*return*/];
        });
    }); });
    it('enriches the cms data', function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            expect((0, utils_1.cmsEnhancer)({
                'Test page': {
                    Introduction: {
                        htmlContent: '<p>Test content</p>'
                    }
                },
                'Test page 2': {
                    Description: {
                        htmlContent: '<h2>Title</h2><p><a href="www.google.com" target="_blank">link</a></p>'
                    }
                }
            })).toEqual({
                'Test page': {
                    Introduction: {
                        htmlContent: '<p>Test content</p>'
                    }
                },
                'Test page 2': {
                    Description: {
                        htmlContent: '<h2>Title</h2><p><a class="link-external-cms" href="www.google.com" target="_blank">link</a></p>'
                    }
                }
            });
            return [2 /*return*/];
        });
    }); });
    it("doesn't change the cms data if not needed", function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            expect((0, utils_1.cmsEnhancer)({
                'Test page': {
                    Introduction: {
                        htmlContent: '<p>Test content</p>'
                    }
                },
                'Test page 2': {
                    Description: {
                        htmlContent: '<h2>Title</h2><p><a href="www.google.com">link</a></p>'
                    }
                }
            })).toEqual({
                'Test page': {
                    Introduction: {
                        htmlContent: '<p>Test content</p>'
                    }
                },
                'Test page 2': {
                    Description: {
                        htmlContent: '<h2>Title</h2><p><a href="www.google.com">link</a></p>'
                    }
                }
            });
            return [2 /*return*/];
        });
    }); });
});
//# sourceMappingURL=utils.test.js.map