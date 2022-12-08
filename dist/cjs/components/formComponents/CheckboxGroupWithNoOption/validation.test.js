"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var _1 = require(".");
it('checkbox no option validation', function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        expect((0, _1.validateCheckboxNoOption)({
            formValues: {},
            params: {},
            extension: [],
            value: []
        })).toEqual('Required');
        expect((0, _1.validateCheckboxNoOption)({
            formValues: {},
            params: {},
            extension: {
                extension: [
                    {
                        url: 'http://hl7.org/fhir/StructureDefinition/validationRequired',
                        id: 'validationRequired',
                        valueString: 'Required field'
                    }
                ]
            },
            value: ''
        })).toEqual('Required field');
        expect((0, _1.validateCheckboxNoOption)({
            formValues: {},
            params: {},
            extension: [],
            value: ['Test']
        })).toEqual(undefined);
        expect((0, _1.validateCheckboxNoOption)({
            formValues: { test_noOption: true },
            params: {},
            extension: [],
            value: [],
            fieldName: 'test'
        })).toEqual(undefined);
        expect((0, _1.validateCheckboxNoOption)({
            formValues: { test_noOption: false },
            params: {},
            extension: [],
            value: [],
            fieldName: 'test'
        })).toEqual('Required');
        return [2 /*return*/];
    });
}); });
//# sourceMappingURL=validation.test.js.map