import { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import { ButtonVariantTypes } from '../../types'
import { Button } from '../formComponents'
import { useFormData } from '../FormDataProvider'
import { useQuestionnaire } from '../QuestionnaireProvider'
import Review from './Review'

interface Props {
  basePath: string
  nextPage: string
}

export default function Reviews({
  basePath,
  nextPage
}: Props): JSX.Element | null {
  const { transformFormValues } = useFormData()
  const navigate = useNavigate()
  const { questionnaire, submitQuestionnaireData } = useQuestionnaire()

  if (!questionnaire || !questionnaire.item) return null

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const response = transformFormValues()
    submitQuestionnaireData(response, () => navigate(`${basePath}/${nextPage}`))
  }

  return (
    <form className='form' onSubmit={(e) => handleSubmit(e)}>
      <h1 className='size-h1 page-title'>Review</h1>
      {questionnaire.item.map((i) => (
        <Review basePath={basePath} key={i.linkId} input={i} />
      ))}
      <div className='button-group'>
        <Button variant={ButtonVariantTypes.primary} type='submit'>
          Submit
        </Button>
      </div>
    </form>
  )
}
