/* eslint-disable no-underscore-dangle */

import { testQuestionnaire } from '../../testHelpers/testUtils'
import { IQuestionnaire, Questionnaire_ItemTypeKind } from '../../types/fhir'
import { findFirstPage } from './firstPageUtils'

it('returns the first page', async () => {
  expect(findFirstPage({} as IQuestionnaire)).toEqual('')
  expect(
    findFirstPage({
      item: [
        {
          linkId: 'step1.page1.input3',
          type: Questionnaire_ItemTypeKind._string
        }
      ]
    } as IQuestionnaire)
  ).toEqual('form/input3')
  expect(findFirstPage(testQuestionnaire)).toEqual('form/step1/page1')
})
