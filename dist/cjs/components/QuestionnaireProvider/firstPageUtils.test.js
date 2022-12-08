"use strict";
/* eslint-disable no-underscore-dangle */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var testUtils_1 = require("../../testHelpers/testUtils");
var fhir_1 = require("../../types/fhir");
var firstPageUtils_1 = require("./firstPageUtils");
it('returns the first page', function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        expect((0, firstPageUtils_1.findFirstPage)({})).toEqual('');
        expect((0, firstPageUtils_1.findFirstPage)({
            item: [
                {
                    linkId: 'step1.page1.input3',
                    type: fhir_1.Questionnaire_ItemTypeKind._string
                }
            ]
        })).toEqual('form/input3');
        expect((0, firstPageUtils_1.findFirstPage)(testUtils_1.testQuestionnaire)).toEqual('form/step1/page1');
        return [2 /*return*/];
    });
}); });
//# sourceMappingURL=firstPageUtils.test.js.map