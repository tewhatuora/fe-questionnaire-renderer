import flatten from 'lodash.flatten'
import { useMemo } from 'react'
import { useParams } from 'react-router-dom'

import { FormInputComponents, Input } from '../../../types'
import {
  ErrorSummary,
  NavigationButtons,
  ProgressIndicator
} from '../../formComponents'
import { useFormData } from '../../FormDataProvider'
import { useFormErrors } from '../../FormErrorsProvider'
import { useFormTouched } from '../../FormTouchedProvider'
import { useQuestionnaire } from '../../QuestionnaireProvider'
import { getCurrentPageInputs } from '../utils'
import FormStepInputs from './FormStepInputs'

interface Props {
  basePath: string
  inputComponents?: FormInputComponents
  useCompletedPage: boolean
  useReviewPage: boolean
}

export default function FormStep({
  inputComponents,
  ...rest
}: Props): JSX.Element | null {
  const { formData } = useFormData()
  const { formErrors } = useFormErrors()
  const { formTouched } = useFormTouched()
  const params = useParams()
  const { questionnaire } = useQuestionnaire()

  const form = getCurrentPageInputs(params, formData || {}, questionnaire)

  const formErrorsFiltered = useMemo(() => {
    function inputLinkIds(inputs: Input[]): any {
      return inputs.map((i) => {
        if (i.item) return inputLinkIds(i.item)
        return i.linkIdWithParent
      })
    }

    return flatten(inputLinkIds(form))
      .map((fii) => formErrors.find((fe) => fe.name === fii))
      .filter(
        (s) => s && !!formTouched.find((ft) => ft.name === s.name)
      ) as Error[]
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form, formErrors, formTouched])

  return (
    <div>
      <section className='section'>
        <ProgressIndicator />
      </section>
      <section className='section'>
        <ErrorSummary formErrorsFiltered={formErrorsFiltered} />
        <FormStepInputs inputComponents={inputComponents} inputs={form} />
        <NavigationButtons {...rest} />
      </section>
    </div>
  )
}
