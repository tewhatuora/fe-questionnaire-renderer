/* eslint-disable no-underscore-dangle */

import dayjs from 'dayjs'
import get from 'lodash.get'

import { Extensions, FormValues, Input } from '../types'
import {
  IdentifierUseKind,
  IQuestionnaire,
  IQuestionnaire_Item,
  IQuestionnaireResponse,
  Questionnaire_ItemTypeKind,
  QuestionnaireResponseStatusKind
} from '../types/fhir'
import { isExtension, isPhoneExtension } from './extensions'
import { API_DATE_FORMAT } from './utils'

function createAnswerObject(val: any, input: Input) {
  switch (input.type) {
    case Questionnaire_ItemTypeKind._boolean:
      return { valueBoolean: val }
    case Questionnaire_ItemTypeKind._choice:
      return { valueString: val }
    case Questionnaire_ItemTypeKind._date:
      return { valueDate: val }
    case Questionnaire_ItemTypeKind._openChoice:
      if (isExtension(input, Extensions.soloCheckboxExtension)) {
        return { valueBoolean: val }
      }
      return { valueString: val ? val.join(', ') : val }
    case Questionnaire_ItemTypeKind._string:
      if (isPhoneExtension(input)) return { valueString: val.number }
      return { valueString: val }
    case Questionnaire_ItemTypeKind._text:
      return { valueString: val }
    default:
      return undefined
  }
}

function createAnswers(
  item: Input[],
  formData?: FormValues
): IQuestionnaire_Item[] {
  return item.reduce((acc, cur) => {
    const common = {
      linkId: cur.linkId,
      ...(cur.text ? { text: cur.text } : undefined)
    }

    // If it's a group of items, create new answers
    // Repeatable group items are represented with multiple items with the same linkId
    if (cur.item) {
      const newItems = createAnswers(cur.item, formData)
      if (newItems.length === 0) return acc
      return [
        ...acc,
        {
          ...common,
          item: newItems
        }
      ]
    }

    // If it's not a group of items and the linkId already exists, returns (for repeatable items)
    if (acc.find((a) => a.linkId === cur.linkId)) return acc

    // If the item is repeatable, gets the array of answers
    const val = get(
      formData,
      cur.repeats
        ? cur.linkIdWithParent?.split('.').slice(0, -1) || ''
        : cur.linkIdWithParent || ''
    )

    // If the item is a repeatable one, creates an array of answers
    const value = cur.repeats
      ? val.map((v: any) => createAnswerObject(v, cur))
      : createAnswerObject(val, cur)

    if (!value) return acc
    return [
      ...acc,
      {
        ...common,
        answer: cur.repeats ? value : [value]
      }
    ]
  }, [] as IQuestionnaire_Item[])
}

export default function transformFormValues(
  questionnaire?: IQuestionnaire,
  formData?: FormValues
): IQuestionnaireResponse {
  const answers =
    questionnaire && questionnaire.item
      ? { item: createAnswers(questionnaire.item, formData) }
      : { item: [] }

  return {
    resourceType: 'QuestionnaireResponse',
    questionnaire: questionnaire?.url || '',
    status: QuestionnaireResponseStatusKind._completed,
    subject: {
      type: 'Patient',
      identifier: {
        system: 'https://xxx',
        use: IdentifierUseKind._official,
        value: 'xxx'
      },
      display: 'Carey Carrington'
    },
    encounter: {
      reference: 'Encounter/{{T-EncounterId}}'
    },
    authored: dayjs().format(API_DATE_FORMAT),
    author: {
      type: 'Practitioner',
      identifier: {
        system: 'https://xxx',
        use: IdentifierUseKind._official,
        value: 'xxx'
      },
      display: 'Dottie McStuffins'
    },
    source: {
      type: 'Patient',
      identifier: {
        system: 'https://xxx',
        use: IdentifierUseKind._official,
        value: 'xxx'
      },
      display: 'Carey Carrington'
    },
    ...answers
  }
}
