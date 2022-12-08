/* eslint-disable no-underscore-dangle */
import { __assign, __awaiter, __generator } from "tslib";
import { Extensions } from '../types';
import { ContactPointSystemKind, Questionnaire_ItemTypeKind } from '../types/fhir';
import { getExtension, isExtension, isPhoneExtension } from './extensions';
it('returns an extension if available in an item', function () { return __awaiter(void 0, void 0, void 0, function () {
    var input;
    return __generator(this, function (_a) {
        input = {
            type: Questionnaire_ItemTypeKind._string,
            linkId: 'input'
        };
        expect(getExtension(input, Extensions.cmsProjectIdExtension)).toBeFalsy();
        expect(getExtension(__assign(__assign({}, input), { extension: [
                {
                    url: 'http://hl7.org/fhir/StructureDefinition/progressIndicatorExtension',
                    id: Extensions.cmsProjectIdExtension,
                    valueString: 'testId'
                }
            ] }), Extensions.cmsProjectIdExtension)).toEqual({
            url: 'http://hl7.org/fhir/StructureDefinition/progressIndicatorExtension',
            id: Extensions.cmsProjectIdExtension,
            valueString: 'testId'
        });
        return [2 /*return*/];
    });
}); });
it('returns if the input matches an extension', function () { return __awaiter(void 0, void 0, void 0, function () {
    var input;
    return __generator(this, function (_a) {
        input = {
            type: Questionnaire_ItemTypeKind._string,
            linkId: 'input'
        };
        expect(isExtension(input, Extensions.progressIndicatorExtension)).toBeFalsy();
        expect(isExtension(__assign(__assign({}, input), { extension: [
                {
                    url: 'http://hl7.org/fhir/StructureDefinition/progressIndicatorExtension',
                    id: 'progressIndicatorExtension'
                }
            ] }), Extensions.progressIndicatorExtension)).toBeTruthy();
        return [2 /*return*/];
    });
}); });
it('returns if the input has a phone extension', function () { return __awaiter(void 0, void 0, void 0, function () {
    var input;
    return __generator(this, function (_a) {
        input = {
            type: Questionnaire_ItemTypeKind._string,
            linkId: 'input'
        };
        expect(isPhoneExtension(input)).toBeFalsy();
        expect(isPhoneExtension(__assign(__assign({}, input), { extension: [
                {
                    id: 'extension',
                    valueContactDetail: {
                        telecom: [
                            {
                                system: ContactPointSystemKind._phone
                            }
                        ]
                    }
                }
            ] }))).toBeTruthy();
        return [2 /*return*/];
    });
}); });
//# sourceMappingURL=extensions.test.js.map