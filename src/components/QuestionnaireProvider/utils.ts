import { Input, Questionnaire } from '../../types'
import { IQuestionnaire, IQuestionnaire_Item } from '../../types/fhir'
import { getId } from '../../utils/utils'

// Find the number of repeatable items
export function getIndexRepeatable(
  items: IQuestionnaire_Item[],
  id: string,
  index: number
) {
  return items.slice(0, index + 1).filter((i) => getId(i) === id).length - 1
}

// Enrich the questionnaire items with values for repeatable rules
export function enrichItemData(
  item: IQuestionnaire_Item[],
  linkIdWithParent?: string,
  index?: string
): Input[] {
  return item.reduce((acc, cur, ind) => {
    const id = getId(cur)
    let idWithParent = linkIdWithParent ? `${linkIdWithParent}.${id}` : id

    // If repeatable add the index
    let repeat
    if (cur.repeats) {
      repeat = { indexRepeat: getIndexRepeatable(item, id, ind) }
      idWithParent = `${idWithParent}.${repeat.indexRepeat}`
    }

    // Stores the position of the item, in the item array
    const itemPos = `${index !== undefined ? `${index}.` : ''}${ind}`

    // If it's a group of items, create new answers
    if (cur.item) {
      const newItems = enrichItemData(cur.item, idWithParent, itemPos)
      if (newItems.length === 0) return acc
      return [
        ...acc,
        {
          ...cur,
          ...repeat,
          linkIdWithParent: idWithParent,
          item: newItems,
          questionnairePosition: itemPos
        }
      ]
    }

    return [
      ...acc,
      {
        ...cur,
        ...repeat,
        linkIdWithParent: idWithParent,
        questionnairePosition: itemPos
      }
    ]
  }, [] as IQuestionnaire_Item[])
}

export function enrichQuestionnaireData(quest: IQuestionnaire): Questionnaire {
  const enrichedItems =
    quest && quest.item ? { item: enrichItemData(quest.item) } : {}

  return {
    ...quest,
    ...enrichedItems
  }
}
