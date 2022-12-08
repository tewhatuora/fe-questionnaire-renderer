/* eslint-disable no-underscore-dangle */

import get from 'lodash.get'
import set from 'lodash.set'
import { Params } from 'react-router-dom'

import { Extensions, FormValues, Input, Questionnaire } from '../../types'
import { privacyAgreementAcceptedKey } from '../../types/constants'
import {
  IQuestionnaire,
  IQuestionnaire_Initial,
  IQuestionnaire_Item,
  Questionnaire_ItemTypeKind
} from '../../types/fhir'
import verifyEnableWhen from '../../utils/enableWhen'
import { isExtension } from '../../utils/extensions'
import { getUrlSection } from '../../utils/questionnaire'

export function filterEnabledItems(
  values: FormValues,
  quest: IQuestionnaire_Item[]
): IQuestionnaire_Item[] {
  return quest.filter((i) => {
    return (
      !i.enableWhen ||
      (i.enableWhen && verifyEnableWhen(values, i.enableWhen, i.enableBehavior))
    )
  })
}

export function filterEnabledAndAddRepeat(
  values: FormValues,
  quest: IQuestionnaire_Item[]
): Input[] {
  return filterEnabledItems(values, quest)
}

export function getCurrentPageInputs(
  params: Params,
  values: FormValues,
  quest?: IQuestionnaire
): Input[] {
  const { stepId, pageId } = params
  if (!quest || !quest.item) return []
  const currentStep = quest.item?.find(
    (i) => getUrlSection(i.linkId) === stepId
  )
  if (currentStep) {
    if (!pageId || !currentStep.item) {
      return filterEnabledItems(values, currentStep.item || quest.item)
    }
    const currentPage = currentStep.item.find(
      (i) => getUrlSection(i.linkId) === pageId
    )
    if (currentPage && currentPage.item)
      return filterEnabledItems(values, currentPage.item)
    return filterEnabledItems(values, currentStep.item)
  }
  return []
}

function getDefaultValue(item: Input) {
  const hasInit = item.initial && item.initial.length > 0

  // If the item is not repeatable returns the first of the initial values or a default
  switch (item.type) {
    case Questionnaire_ItemTypeKind._boolean:
      return hasInit
        ? (item.initial as IQuestionnaire_Initial[])[0].valueBoolean || ''
        : ''
    case Questionnaire_ItemTypeKind._reference:
      return hasInit
        ? Object.values((item.initial as IQuestionnaire_Initial[])[0])[0]
        : ''
    case Questionnaire_ItemTypeKind._string:
      return hasInit
        ? (item.initial as IQuestionnaire_Initial[])[0].valueString || ''
        : ''
    default:
      return ''
  }
}

function getInitialValues(
  values: FormValues,
  items: Input[],
  formData?: FormValues
): FormValues {
  items.forEach((i) => {
    if (!i.item) {
      if (i.extension) {
        if (isExtension(i, Extensions.checkboxGroupWithNoOption)) {
          const id = `${i.linkIdWithParent}_noOption`
          const val = formData ? get(formData, id) || '' : undefined
          set(values, id, val === undefined ? getDefaultValue(i) : val)
        }
      }

      const val =
        formData && i.linkIdWithParent
          ? get(formData, i.linkIdWithParent)
          : undefined

      set(
        values,
        i.linkIdWithParent || '',
        val === undefined ? getDefaultValue(i) : val
      )
    } else {
      getInitialValues(values, i.item, formData)
    }
  })
  return values
}

export function buildInitialValues(
  quest: Questionnaire,
  formData?: FormValues
) {
  if (!quest || !quest.item) return {}
  const initialValues = {
    [privacyAgreementAcceptedKey]: false
  }
  return getInitialValues(initialValues, quest.item, formData)
}
