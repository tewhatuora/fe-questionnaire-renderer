"use strict";
/* eslint-disable no-underscore-dangle */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var types_1 = require("../types");
var fhir_1 = require("../types/fhir");
var extensions_1 = require("./extensions");
it('returns an extension if available in an item', function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var input;
    return tslib_1.__generator(this, function (_a) {
        input = {
            type: fhir_1.Questionnaire_ItemTypeKind._string,
            linkId: 'input'
        };
        expect((0, extensions_1.getExtension)(input, types_1.Extensions.cmsProjectIdExtension)).toBeFalsy();
        expect((0, extensions_1.getExtension)(tslib_1.__assign(tslib_1.__assign({}, input), { extension: [
                {
                    url: 'http://hl7.org/fhir/StructureDefinition/progressIndicatorExtension',
                    id: types_1.Extensions.cmsProjectIdExtension,
                    valueString: 'testId'
                }
            ] }), types_1.Extensions.cmsProjectIdExtension)).toEqual({
            url: 'http://hl7.org/fhir/StructureDefinition/progressIndicatorExtension',
            id: types_1.Extensions.cmsProjectIdExtension,
            valueString: 'testId'
        });
        return [2 /*return*/];
    });
}); });
it('returns if the input matches an extension', function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var input;
    return tslib_1.__generator(this, function (_a) {
        input = {
            type: fhir_1.Questionnaire_ItemTypeKind._string,
            linkId: 'input'
        };
        expect((0, extensions_1.isExtension)(input, types_1.Extensions.progressIndicatorExtension)).toBeFalsy();
        expect((0, extensions_1.isExtension)(tslib_1.__assign(tslib_1.__assign({}, input), { extension: [
                {
                    url: 'http://hl7.org/fhir/StructureDefinition/progressIndicatorExtension',
                    id: 'progressIndicatorExtension'
                }
            ] }), types_1.Extensions.progressIndicatorExtension)).toBeTruthy();
        return [2 /*return*/];
    });
}); });
it('returns if the input has a phone extension', function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var input;
    return tslib_1.__generator(this, function (_a) {
        input = {
            type: fhir_1.Questionnaire_ItemTypeKind._string,
            linkId: 'input'
        };
        expect((0, extensions_1.isPhoneExtension)(input)).toBeFalsy();
        expect((0, extensions_1.isPhoneExtension)(tslib_1.__assign(tslib_1.__assign({}, input), { extension: [
                {
                    id: 'extension',
                    valueContactDetail: {
                        telecom: [
                            {
                                system: fhir_1.ContactPointSystemKind._phone
                            }
                        ]
                    }
                }
            ] }))).toBeTruthy();
        return [2 /*return*/];
    });
}); });
//# sourceMappingURL=extensions.test.js.map