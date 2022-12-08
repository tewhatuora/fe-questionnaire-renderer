import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

import { completedPath, reviewPath } from '../../../QuestionnaireRenderer'
import { ButtonVariantTypes, NavigationState } from '../../../types'
import { buildPageUrl } from '../../../utils/questionnaire'
import { useFormData } from '../../FormDataProvider'
import { useQuestionnaire } from '../../QuestionnaireProvider'
import { LinkAsButton } from '..'

interface Props {
  basePath: string
  useCompletedPage: boolean
  useReviewPage: boolean
}

export default function NavigationButtons({
  basePath,
  useCompletedPage,
  useReviewPage
}: Props): JSX.Element | null {
  const { formData } = useFormData()
  const { pathname, state } = useLocation()
  const params = useParams()
  const { questionnaire } = useQuestionnaire()

  const [inEditReview, setInEditReview] = useState(false)

  useEffect(() => {
    if (state && (state as NavigationState).editFromReview) {
      setInEditReview(true)
    } else {
      setInEditReview(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  function createButton(content: string, path: string, shouldValidate = true) {
    return (
      <LinkAsButton
        content={content}
        to={path}
        buttonAttributes={{
          variant: ButtonVariantTypes.primary,
          shouldValidate
        }}
      />
    )
  }

  function getNextButtonComponent() {
    const nextPageUrl = buildPageUrl({
      params,
      questionnaire,
      formData,
      isNext: true
    })

    if (inEditReview) {
      return createButton(
        'Save and return to review',
        `${basePath}/${reviewPath()}`
      )
    }

    if (nextPageUrl)
      return createButton('Continue', `${basePath}/${nextPageUrl}`)

    const hasGroups =
      questionnaire &&
      questionnaire.item &&
      questionnaire.item.find((i) => !!i.item)

    // Goes in review only if there is groups to display
    if (hasGroups && useReviewPage) {
      return createButton('Review', `${basePath}/${reviewPath()}`)
    }

    if (useCompletedPage)
      return createButton('Submit', `${basePath}/${completedPath()}`)

    return createButton('End form', basePath)
  }

  const getPreviousButtonComponent = () => {
    const previousPageUrl = buildPageUrl({
      params,
      questionnaire,
      formData,
      isNext: false
    })
    if (previousPageUrl) {
      return (
        <LinkAsButton
          className='form-back-link back-arrow-link'
          content='Back'
          to={`${basePath}/${previousPageUrl}`}
        />
      )
    }
    return null
  }

  return (
    <div className='button-group'>
      {getNextButtonComponent()}
      {getPreviousButtonComponent()}
    </div>
  )
}
