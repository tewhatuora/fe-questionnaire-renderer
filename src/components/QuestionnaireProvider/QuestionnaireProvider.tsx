import get from 'lodash.get'
import set from 'lodash.set'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'

import { Questionnaire } from '../../types'
import {
  IQuestionnaire,
  IQuestionnaire_Item,
  IQuestionnaireResponse
} from '../../types/fhir'
import { LoadingIds, useLoading } from '../LoadingProvider'
import { usePopup } from '../PopupProvider'
import { PopupType } from '../PopupProvider/PopupProvider'
import { findFirstPage } from './firstPageUtils'
import { enrichQuestionnaireData } from './utils'

export interface QuestionnaireContextProps {
  formInitialPagePath: string
  questionnaire?: IQuestionnaire
  addRepeatableItem(id: string): void
  deleteRepeatableItem(id: string): void
  setQuestionnaireData(questionnaire: IQuestionnaire): void
  submitQuestionnaireData(
    questionnaire: IQuestionnaireResponse,
    callBack: () => void
  ): void
}

export const QuestionnaireContext = createContext<QuestionnaireContextProps>(
  {} as any
)

interface Props {
  children: JSX.Element
  questionnaireData: IQuestionnaire
  submitQuestionnaire(questionnaire: IQuestionnaireResponse): Promise<any>
}

export function QuestionnaireProvider({
  children,
  questionnaireData,
  submitQuestionnaire
}: Props): JSX.Element {
  const { setLoading } = useLoading()
  const { callPopup } = usePopup()

  const [questionnaire, setQuestionnaire] = useState<Questionnaire>(
    {} as Questionnaire
  )

  useEffect(() => {
    setQuestionnaire(enrichQuestionnaireData(questionnaireData))
  }, [questionnaireData])

  async function submitQuestionnaireData(
    quest: IQuestionnaireResponse,
    callBack: () => void
  ) {
    setLoading({
      isLoading: true,
      id: LoadingIds.submit
    })

    try {
      await submitQuestionnaire(quest).then(() => {
        callBack()
      })
    } catch (error: any) {
      callPopup({
        message: error.message,
        title: 'Something went wrong',
        type: PopupType.error
      })
    }

    setLoading({
      isLoading: false,
      id: LoadingIds.submit
    })
  }

  const memoized = useMemo(() => {
    function setQuestionnaireData(quest: IQuestionnaire) {
      setQuestionnaire(enrichQuestionnaireData(quest))
    }

    // To add / or remove a repeatable item, we find the equivalent one and copy it in the item array
    // We also create empty values in the form data
    function addRepeatableItem(id: string) {
      setQuestionnaire((prev) => {
        const split = id.split('.')
        const parentPos = split.slice(0, -1).join('.item.')
        const parent: any = get(prev, `item.${parentPos}`)
        const itemInd = split[split.length - 1]
        const item = parent.item[itemInd] as IQuestionnaire_Item

        const newQuest = { ...prev }
        set(newQuest, `item.${parentPos}`, {
          ...parent,
          item: [
            ...parent.item.slice(0, +itemInd + 1),
            item,
            ...parent.item.slice(+itemInd + 1)
          ]
        })
        return enrichQuestionnaireData(newQuest)
      })
    }

    function deleteRepeatableItem(id: string) {
      setQuestionnaire((prev) => {
        const split = id.split('.')
        const parentPos = split.slice(0, -1).join('.item.')
        const parent: any = get(prev, `item.${parentPos}`)
        const itemInd = split[split.length - 1]

        const newQuest = { ...prev }
        set(newQuest, `item.${parentPos}`, {
          ...parent,
          item: [
            ...parent.item.slice(0, +itemInd),
            ...parent.item.slice(+itemInd + 1)
          ]
        })
        return enrichQuestionnaireData(newQuest)
      })
    }

    return {
      addRepeatableItem,
      deleteRepeatableItem,
      formInitialPagePath: questionnaire ? findFirstPage(questionnaire) : '',
      questionnaire,
      setQuestionnaireData,
      submitQuestionnaireData
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questionnaire])

  return (
    <QuestionnaireContext.Provider value={memoized}>
      {children}
    </QuestionnaireContext.Provider>
  )
}

export const useQuestionnaire = () => useContext(QuestionnaireContext)
