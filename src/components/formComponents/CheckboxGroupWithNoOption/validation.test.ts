import { IExtension } from '../../../types/fhir'
import { validateCheckboxNoOption } from '.'

it('checkbox no option validation', async () => {
  expect(
    validateCheckboxNoOption({
      formValues: {},
      params: {},
      extension: [] as IExtension,
      value: []
    })
  ).toEqual('Required')

  expect(
    validateCheckboxNoOption({
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
    })
  ).toEqual('Required field')

  expect(
    validateCheckboxNoOption({
      formValues: {},
      params: {},
      extension: [] as IExtension,
      value: ['Test']
    })
  ).toEqual(undefined)

  expect(
    validateCheckboxNoOption({
      formValues: { test_noOption: true },
      params: {},
      extension: [] as IExtension,
      value: [],
      fieldName: 'test'
    })
  ).toEqual(undefined)

  expect(
    validateCheckboxNoOption({
      formValues: { test_noOption: false },
      params: {},
      extension: [] as IExtension,
      value: [],
      fieldName: 'test'
    })
  ).toEqual('Required')
})
