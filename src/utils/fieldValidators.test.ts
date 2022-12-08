import dayjs from 'dayjs'

import { ValidationExtensions } from '../types'
import { IExtension } from '../types/fhir'
import {
  validateBasicRequired,
  validateDateMaxPeriod,
  validateForbiddenCharacters,
  validateTrueValue
} from './fieldValidators'

it('required validation', async () => {
  expect(
    validateBasicRequired({
      formValues: {},
      params: {},
      extension: [] as IExtension,
      value: ''
    })
  ).toEqual('Required')

  expect(
    validateBasicRequired({
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
    validateBasicRequired({
      formValues: {},
      params: {},
      extension: [] as IExtension,
      value: 'Test'
    })
  ).toEqual(undefined)
})

it('max period date validation', async () => {
  expect(
    validateDateMaxPeriod({
      formValues: {},
      params: {},
      extension: [] as IExtension,
      value: ''
    })
  ).toEqual(undefined)

  expect(
    validateDateMaxPeriod({
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
    })
  ).toEqual('Select a correct date')

  expect(
    validateDateMaxPeriod({
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
    })
  ).toEqual('Select a date in the last 4 days')

  expect(
    validateDateMaxPeriod({
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
    })
  ).toEqual(undefined)
})

it('forbidden characters validation', async () => {
  expect(
    validateForbiddenCharacters({
      formValues: {},
      params: {},
      extension: [] as IExtension,
      value: ''
    })
  ).toEqual(undefined)

  expect(
    validateForbiddenCharacters({
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
    })
  ).toEqual(undefined)

  expect(
    validateForbiddenCharacters({
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
    })
  ).toEqual('Invalid input, please remove special characters like $, %')

  expect(
    validateForbiddenCharacters({
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
    })
  ).toEqual('Forbidden characters found')
})

it('true value validation', async () => {
  expect(
    validateTrueValue({
      formValues: {},
      params: {},
      extension: [] as IExtension,
      value: ''
    })
  ).toEqual('Required')

  expect(
    validateTrueValue({
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
    })
  ).toEqual('Required field')

  expect(
    validateTrueValue({
      formValues: {},
      params: {},
      extension: [] as IExtension,
      value: false
    })
  ).toEqual('Required')

  expect(
    validateTrueValue({
      formValues: {},
      params: {},
      extension: [] as IExtension,
      value: true
    })
  ).toEqual(undefined)
})
