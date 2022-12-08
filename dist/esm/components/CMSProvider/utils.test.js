import { __awaiter, __generator } from "tslib";
import { cmsEnhancer, setExternalLinkClassName } from './utils';
describe('Enriched CMS data', function () {
    it('adds the className to external links', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            expect(setExternalLinkClassName('<a href="www.google.com" target="_blank">link</a>')).toEqual('<a class="link-external-cms" href="www.google.com" target="_blank">link</a>');
            return [2 /*return*/];
        });
    }); });
    it("don't change the link if tel:", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            expect(setExternalLinkClassName('<a href="tel:www.google.com" target="_blank">tel</a>')).toEqual('<a href="tel:www.google.com" target="_blank">tel</a>');
            return [2 /*return*/];
        });
    }); });
    it("don't change the link if mailto:", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            expect(setExternalLinkClassName('<a href="mailto:www.google.com">mail</a>')).toEqual('<a href="mailto:www.google.com">mail</a>');
            return [2 /*return*/];
        });
    }); });
    it('enriches the cms data', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            expect(cmsEnhancer({
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
    it("doesn't change the cms data if not needed", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            expect(cmsEnhancer({
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