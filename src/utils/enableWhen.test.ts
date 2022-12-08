/* eslint-disable no-underscore-dangle */

import {
  Questionnaire_EnableWhenOperatorKind,
  Questionnaire_ItemEnableBehaviorKind
} from '../types/fhir'
import verifyEnableWhen from './enableWhen'

it('verifies if an item is enabled', async () => {
  const enableWhens = [
    {
      question: 'Agrees_Test',
      operator: Questionnaire_EnableWhenOperatorKind._equal,
      answerString: 'Yes'
    },
    {
      question: 'Had_Test',
      operator: Questionnaire_EnableWhenOperatorKind._equal,
      answerString: 'No or Bloods not taken'
    }
  ]

  expect(verifyEnableWhen({}, enableWhens)).toBeFalsy()
  expect(
    verifyEnableWhen({ Agrees_Test: 'Yes', Had_Test: 'No' }, enableWhens)
  ).toBeTruthy()
  expect(
    verifyEnableWhen(
      { Agrees_Test: 'Yes', Had_Test: 'No' },
      enableWhens,
      Questionnaire_ItemEnableBehaviorKind._all
    )
  ).toBeFalsy()
  expect(
    verifyEnableWhen(
      {
        Agrees_Test: 'Yes',
        Had_Test: ['No or Bloods not taken']
      },
      enableWhens,
      Questionnaire_ItemEnableBehaviorKind._all
    )
  ).toBeTruthy()
})
