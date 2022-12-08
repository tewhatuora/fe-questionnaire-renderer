"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var dayjs_1 = tslib_1.__importDefault(require("dayjs"));
var types_1 = require("../types");
var fieldValidators_1 = require("./fieldValidators");
it('required validation', function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        expect((0, fieldValidators_1.validateBasicRequired)({
            formValues: {},
            params: {},
            extension: [],
            value: ''
        })).toEqual('Required');
        expect((0, fieldValidators_1.validateBasicRequired)({
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
        expect((0, fieldValidators_1.validateBasicRequired)({
            formValues: {},
            params: {},
            extension: [],
            value: 'Test'
        })).toEqual(undefined);
        return [2 /*return*/];
    });
}); });
it('max period date validation', function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        expect((0, fieldValidators_1.validateDateMaxPeriod)({
            formValues: {},
            params: {},
            extension: [],
            value: ''
        })).toEqual(undefined);
        expect((0, fieldValidators_1.validateDateMaxPeriod)({
            formValues: {},
            params: {},
            extension: {
                extension: [
                    {
                        url: 'http://hl7.org/fhir/StructureDefinition/validationDateMaxPeriod',
                        id: 'validationDateMaxPeriod'
                    }
                ]
            },
            value: '2022-01-05'
        })).toEqual('Select a correct date');
        expect((0, fieldValidators_1.validateDateMaxPeriod)({
            formValues: {},
            params: {},
            extension: {
                extension: [
                    {
                        url: 'http://hl7.org/fhir/StructureDefinition/validationDateMaxPeriod',
                        id: 'validationDateMaxPeriod',
                        valueString: 'Select a date in the last 4 days',
                        extension: [
                            {
                                url: 'http://hl7.org/fhir/StructureDefinition/validationDateMaxPeriodValue',
                                id: 'validationDateMaxPeriodValue',
                                valueInteger: 4
                            }
                        ]
                    }
                ]
            },
            value: '2022-01-05'
        })).toEqual('Select a date in the last 4 days');
        expect((0, fieldValidators_1.validateDateMaxPeriod)({
            formValues: {},
            params: {},
            extension: {
                extension: [
                    {
                        url: 'http://hl7.org/fhir/StructureDefinition/validationDateMaxPeriod',
                        id: 'validationDateMaxPeriod'
                    }
                ]
            },
            value: (0, dayjs_1.default)().subtract(2, 'day')
        })).toEqual(undefined);
        return [2 /*return*/];
    });
}); });
it('forbidden characters validation', function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        expect((0, fieldValidators_1.validateForbiddenCharacters)({
            formValues: {},
            params: {},
            extension: [],
            value: ''
        })).toEqual(undefined);
        expect((0, fieldValidators_1.validateForbiddenCharacters)({
            formValues: {},
            params: {},
            extension: {
                extension: [
                    {
                        url: 'http://hl7.org/fhir/StructureDefinition/validationForbiddenCharacters',
                        id: 'validationForbiddenCharacters'
                    }
                ]
            },
            value: 'Test'
        })).toEqual(undefined);
        expect((0, fieldValidators_1.validateForbiddenCharacters)({
            formValues: {},
            params: {},
            extension: {
                extension: [
                    {
                        url: 'http://hl7.org/fhir/StructureDefinition/validationForbiddenCharacters',
                        id: 'validationForbiddenCharacters'
                    }
                ]
            },
            value: 'Te%st'
        })).toEqual('Invalid input, please remove special characters like $, %');
        expect((0, fieldValidators_1.validateForbiddenCharacters)({
            formValues: {},
            params: {},
            extension: {
                extension: [
                    {
                        url: 'http://hl7.org/fhir/StructureDefinition/validationForbiddenCharacters',
                        id: 'validationForbiddenCharacters',
                        valueString: 'Forbidden characters found'
                    }
                ]
            },
            value: 'Te%st'
        })).toEqual('Forbidden characters found');
        return [2 /*return*/];
    });
}); });
it('true value validation', function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        expect((0, fieldValidators_1.validateTrueValue)({
            formValues: {},
            params: {},
            extension: [],
            value: ''
        })).toEqual('Required');
        expect((0, fieldValidators_1.validateTrueValue)({
            formValues: {},
            params: {},
            extension: {
                extension: [
                    {
                        id: types_1.ValidationExtensions.validationTrueValue,
                        valueString: 'Required field'
                    }
                ]
            },
            value: ''
        })).toEqual('Required field');
        expect((0, fieldValidators_1.validateTrueValue)({
            formValues: {},
            params: {},
            extension: [],
            value: false
        })).toEqual('Required');
        expect((0, fieldValidators_1.validateTrueValue)({
            formValues: {},
            params: {},
            extension: [],
            value: true
        })).toEqual(undefined);
        return [2 /*return*/];
    });
}); });
//# sourceMappingURL=fieldValidators.test.js.map