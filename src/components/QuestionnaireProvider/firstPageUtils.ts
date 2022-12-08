import { questionnaireFormPath } from '../../QuestionnaireRenderer'
import { IQuestionnaire, IQuestionnaire_Item } from '../../types/fhir'
import { getUrlSection } from '../../utils/questionnaire'

// Recursively builds the path to the first page of the form
export function buildPathFirstPage(
  items: IQuestionnaire_Item[],
  currentPath: string
): string {
  if (items[0].item) {
    return buildPathFirstPage(
      items[0].item,
      `${currentPath}/${getUrlSection(items[0].linkId)}`
    )
  }
  return currentPath
}

// Returns the first page of the form
export function findFirstPage(quest: IQuestionnaire) {
  if (!quest || !quest.item) return ''
  if (!quest.item[0].item)
    return questionnaireFormPath(getUrlSection(quest.item[0].linkId))
  return buildPathFirstPage(quest.item, questionnaireFormPath())
}
