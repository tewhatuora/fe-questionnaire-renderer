/* eslint-disable no-underscore-dangle */

import { Extensions, Input } from '../types'
import {
  ContactPointSystemKind,
  Questionnaire_ItemTypeKind
} from '../types/fhir'
import { getExtension, isExtension, isPhoneExtension } from './extensions'

it('returns an extension if available in an item', async () => {
  const input: Input = {
    type: Questionnaire_ItemTypeKind._string,
    linkId: 'input'
  }

  expect(getExtension(input, Extensions.cmsProjectIdExtension)).toBeFalsy()
  expect(
    getExtension(
      {
        ...input,
        extension: [
          {
            url: 'http://hl7.org/fhir/StructureDefinition/progressIndicatorExtension',
            id: Extensions.cmsProjectIdExtension,
            valueString: 'testId'
          }
        ]
      },
      Extensions.cmsProjectIdExtension
    )
  ).toEqual({
    url: 'http://hl7.org/fhir/StructureDefinition/progressIndicatorExtension',
    id: Extensions.cmsProjectIdExtension,
    valueString: 'testId'
  })
})

it('returns if the input matches an extension', async () => {
  const input: Input = {
    type: Questionnaire_ItemTypeKind._string,
    linkId: 'input'
  }

  expect(isExtension(input, Extensions.progressIndicatorExtension)).toBeFalsy()
  expect(
    isExtension(
      {
        ...input,
        extension: [
          {
            url: 'http://hl7.org/fhir/StructureDefinition/progressIndicatorExtension',
            id: 'progressIndicatorExtension'
          }
        ]
      },
      Extensions.progressIndicatorExtension
    )
  ).toBeTruthy()
})

it('returns if the input has a phone extension', async () => {
  const input: Input = {
    type: Questionnaire_ItemTypeKind._string,
    linkId: 'input'
  }

  expect(isPhoneExtension(input)).toBeFalsy()
  expect(
    isPhoneExtension({
      ...input,
      extension: [
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
      ]
    })
  ).toBeTruthy()
})
