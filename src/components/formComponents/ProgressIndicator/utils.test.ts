import { testQuestionnaire } from '../../../testHelpers/testUtils'
import { IQuestionnaire } from '../../../types/fhir'
import { getStepPageIds, getTitlePage } from './utils'

it('get an array of step and page ids', async () => {
  expect(getStepPageIds(testQuestionnaire).length).toEqual(4)
  expect(getStepPageIds(testQuestionnaire)).toEqual([
    'step1',
    'step2',
    'step3',
    'step4'
  ])
})

it('gets the title of a page', async () => {
  expect(getTitlePage({ stepId: 'step1' }, {} as IQuestionnaire)).toEqual(null)
  expect(getTitlePage({ stepId: 'step1' }, testQuestionnaire)).toEqual('Step 1')
  expect(
    getTitlePage({ stepId: 'step1', pageId: 'page1' }, testQuestionnaire)
  ).toEqual('Page 1')
})
