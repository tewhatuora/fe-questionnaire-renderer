import { Params } from 'react-router-dom'

import { IQuestionnaire } from '../../../types/fhir'
import { getUrlSection } from '../../../utils/questionnaire'

// Returns the ids of all the steps of the form
export function getStepPageIds(questionnaire: IQuestionnaire) {
  if (!questionnaire.item) return []

  return questionnaire.item
    .filter((i) => i.item)
    .map((i) => getUrlSection(i.linkId))
}

// Returns the title of the current page
export function getTitlePage(
  params: Params,
  quest: IQuestionnaire
): string | null {
  if (!quest || !quest.item) return null
  const { stepId, pageId } = params
  const step = quest.item.find((i) => getUrlSection(i.linkId) === stepId)
  if (step && step.item && pageId) {
    const page = step.item.find((i) => getUrlSection(i.linkId) === pageId)
    if (page && page.text) return page.text
  }
  if (step && step.text && step.item) return step.text
  return null
}
