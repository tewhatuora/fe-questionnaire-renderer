import { __awaiter, __generator } from "tslib";
import dayjs from 'dayjs';
import { ValidationExtensions } from '../types';
import { validateBasicRequired, validateDateMaxPeriod, validateForbiddenCharacters, validateTrueValue } from './fieldValidators';
it('required validation', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        expect(validateBasicRequired({
            formValues: {},
            params: {},
            extension: [],
            value: ''
        })).toEqual('Required');
        expect(validateBasicRequired({
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
        expect(validateBasicRequired({
            formValues: {},
            params: {},
            extension: [],
            value: 'Test'
        })).toEqual(undefined);
        return [2 /*return*/];
    });
}); });
it('max period date validation', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        expect(validateDateMaxPeriod({
            formValues: {},
            params: {},
            extension: [],
            value: ''
        })).toEqual(undefined);
        expect(validateDateMaxPeriod({
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
        expect(validateDateMaxPeriod({
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
        expect(validateDateMaxPeriod({
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
            value: dayjs().subtract(2, 'day')
        })).toEqual(undefined);
        return [2 /*return*/];
    });
}); });
it('forbidden characters validation', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        expect(validateForbiddenCharacters({
            formValues: {},
            params: {},
            extension: [],
            value: ''
        })).toEqual(undefined);
        expect(validateForbiddenCharacters({
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
        expect(validateForbiddenCharacters({
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
        expect(validateForbiddenCharacters({
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
it('true value validation', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        expect(validateTrueValue({
            formValues: {},
            params: {},
            extension: [],
            value: ''
        })).toEqual('Required');
        expect(validateTrueValue({
            formValues: {},
            params: {},
            extension: {
                extension: [
                    {
                        id: ValidationExtensions.validationTrueValue,
                        valueString: 'Required field'
                    }
                ]
            },
            value: ''
        })).toEqual('Required field');
        expect(validateTrueValue({
            formValues: {},
            params: {},
            extension: [],
            value: false
        })).toEqual('Required');
        expect(validateTrueValue({
            formValues: {},
            params: {},
            extension: [],
            value: true
        })).toEqual(undefined);
        return [2 /*return*/];
    });
}); });
//# sourceMappingURL=fieldValidators.test.js.map