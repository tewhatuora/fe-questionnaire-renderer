import { __awaiter, __generator } from "tslib";
import { validateCheckboxNoOption } from '.';
it('checkbox no option validation', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        expect(validateCheckboxNoOption({
            formValues: {},
            params: {},
            extension: [],
            value: []
        })).toEqual('Required');
        expect(validateCheckboxNoOption({
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
        expect(validateCheckboxNoOption({
            formValues: {},
            params: {},
            extension: [],
            value: ['Test']
        })).toEqual(undefined);
        expect(validateCheckboxNoOption({
            formValues: { test_noOption: true },
            params: {},
            extension: [],
            value: [],
            fieldName: 'test'
        })).toEqual(undefined);
        expect(validateCheckboxNoOption({
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