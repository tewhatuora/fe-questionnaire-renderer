/* eslint-disable no-underscore-dangle,@typescript-eslint/no-use-before-define */

import { Params } from 'react-router-dom'

import { questionnaireFormPath } from '../QuestionnaireRenderer'
import { PreviousNextProps } from '../types'
import {
  IQuestionnaire,
  IQuestionnaire_Item,
  Questionnaire_ItemTypeKind
} from '../types/fhir'
import verifyEnableWhen from './enableWhen'

// Splits the linkId to create URL sections
export function getUrlSection(linkId?: string) {
  if (!linkId) return ''
  const split = linkId.split('.')
  return split[split.length - 1]
}

// Builds the next or previous url page based on the current ones
export function buildPageUrl(props: PreviousNextProps): string | undefined {
  const { formData, params, questionnaire } = props
  const { stepId } = params
  if (!questionnaire || !questionnaire.item || !formData) return undefined

  const currentStep = questionnaire.item.find(
    (i) => getUrlSection(i.linkId) === stepId
  )
  // If the current step has pages to be iterated over
  if (currentStep && currentStep.item) {
    const nextPageUrl = getNewPageUrl(currentStep, props)
    if (nextPageUrl) return nextPageUrl
  }

  // If the app has to find the next or previous step
  const newStepUrl = getNewStepUrl(questionnaire, props)
  if (newStepUrl) return newStepUrl

  return undefined
}

// Returns if more items are available in a given group
function hasMoreItems(
  group: IQuestionnaire_Item | IQuestionnaire,
  index: number,
  isNext: boolean
) {
  const currentIndexExists = index > -1
  const items = (group.item && group.item.length) || 0
  const notLast = isNext && index < items - 1
  const notFirst = !isNext && index > 0
  return currentIndexExists && items && (notLast || notFirst)
}

// If the current step has pages that could be eligible for next or previous
function getNewPageUrl(
  currentStep: IQuestionnaire_Item,
  props: PreviousNextProps
): string | undefined {
  const { isNext, formData, params } = props
  const { stepId, pageId } = params
  if (!currentStep.item || !formData) return undefined

  const currentPageInd = currentStep.item.findIndex(
    (i) => getUrlSection(i.linkId) === pageId
  )
  // If the page is defined and either not the first one or the last one
  if (hasMoreItems(currentStep, currentPageInd, isNext)) {
    // Previous or next page in the step
    const newPage = currentStep.item[currentPageInd + (isNext ? 1 : -1)]
    // Check if the page is enabled or loop the function to find the next available one
    if (newPage.item && newPage.enableWhen) {
      const enabled = verifyEnableWhen(
        formData,
        newPage.enableWhen,
        newPage.enableBehavior
      )
      if (!enabled) {
        return buildPageUrl({
          ...props,
          params: { stepId, pageId: getUrlSection(newPage.linkId) }
        })
      }
    }

    const pagePath =
      newPage && newPage.item ? getUrlSection(newPage.linkId) : ''
    return questionnaireFormPath(
      `${getUrlSection(currentStep.linkId)}/${pagePath}`
    )
  }

  return undefined
}

// If the app has to find the next or previous step
function getNewStepUrl(
  questionnaire: IQuestionnaire,
  props: PreviousNextProps
): string | undefined {
  const { isNext, formData, params } = props
  const { stepId } = params
  if (!questionnaire.item || !formData) return undefined

  const buildHelp = (newParams: Params) =>
    buildPageUrl({ ...props, ...{ params: newParams } })

  const currentStepInd = questionnaire.item.findIndex(
    (i) => getUrlSection(i.linkId) === stepId
  )

  // If the form has more steps to be displayed
  if (hasMoreItems(questionnaire, currentStepInd, isNext)) {
    const ns = questionnaire.item[currentStepInd + (isNext ? 1 : -1)]

    // Skip items that are not groups
    let toSkip = ns.type !== Questionnaire_ItemTypeKind._group
    // Skip the disabled items
    if (ns.enableWhen && !toSkip) {
      toSkip = !verifyEnableWhen(formData, ns.enableWhen, ns.enableBehavior)
    }
    if (toSkip) {
      return buildHelp({ stepId: getUrlSection(ns.linkId) })
    }

    // Gets the first or last page in the new step and check if it's enabled
    const page = ns.item![isNext ? 0 : ns.item!.length - 1]
    if (page?.enableWhen) {
      const enabled = verifyEnableWhen(
        formData,
        page.enableWhen,
        page.enableBehavior
      )
      if (!enabled) {
        return buildHelp({
          stepId: getUrlSection(ns.linkId),
          pageId: getUrlSection(page.linkId)
        })
      }
    }

    return questionnaireFormPath(
      `${getUrlSection(ns.linkId)}/${
        page && page.item && ns.item ? getUrlSection(page.linkId) : ''
      }`
    )
  }

  return undefined
}
