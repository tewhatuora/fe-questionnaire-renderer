/* eslint-disable no-underscore-dangle */

import get from 'lodash.get'
import set from 'lodash.set'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { useQuery } from 'react-query'

import { FormValues } from '../../types'
import { IQuestionnaireResponse } from '../../types/fhir'
import transformFormValues from '../../utils/createQuestionnaireResponse'
import { buildInitialValues } from '../FormWizard/utils'
import { LoadingIds, useLoading } from '../LoadingProvider'
import { useQuestionnaire } from '../QuestionnaireProvider'

export interface FormDataContextProps {
  formData: FormValues | undefined
  getFormValue(name: string): any
  refetchFormData(): Promise<any>
  setFormData(val: FormValues): void
  setFormValue(name: string, value: any): void
  transformFormValues(): IQuestionnaireResponse
}

export const FormDataContext = createContext<FormDataContextProps>(
  {} as FormDataContextProps
)

interface Props {
  children: JSX.Element
  partialSubmit(): Promise<any>
  usePartialSubmit: boolean
}

export function FormDataProvider({
  children,
  partialSubmit,
  usePartialSubmit
}: Props): JSX.Element {
  const { setLoading } = useLoading()
  const { questionnaire } = useQuestionnaire()

  const [formData, setFormData] = useState<FormValues | undefined>(undefined)

  const {
    isLoading: formDataLoading,
    isRefetching: formDataRefetching,
    refetch
  } = useQuery('formData', () => partialSubmit(), {
    enabled: false,
    retry: false,
    onSuccess: (response) => {
      setFormData(response)
    }
  })

  function refetchFormData() {
    if (usePartialSubmit) refetch()
  }

  // Handles loading for the queries
  useEffect(() => {
    setLoading({
      isLoading: formDataRefetching,
      id: LoadingIds.formDataRefetch
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formDataRefetching])
  useEffect(() => {
    setLoading({ isLoading: formDataLoading, id: LoadingIds.formData })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formDataLoading])

  function getFormValue(name: string) {
    if (!formData) return undefined
    return get(formData, name)
  }

  function setFormValue(name: string, value: any) {
    if (!formData) return
    setFormData((prev) => {
      const newFormData = { ...prev }
      set(newFormData, name, value)
      return newFormData
    })
  }

  useEffect(() => {
    if (!questionnaire) return
    setFormData(buildInitialValues(questionnaire, formData))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questionnaire])

  const memoisedValue = useMemo(
    () => ({
      formData,
      getFormValue,
      refetchFormData,
      setFormData,
      setFormValue,
      transformFormValues: () => transformFormValues(questionnaire, formData)
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [formData]
  )

  return (
    <FormDataContext.Provider value={memoisedValue as any}>
      {children}
    </FormDataContext.Provider>
  )
}

export const useFormData = () => useContext(FormDataContext)
