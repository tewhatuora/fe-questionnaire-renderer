import { useMemo } from 'react'
import { useParams } from 'react-router-dom'

import { Extensions } from '../../../types'
import { getExtension } from '../../../utils/extensions'
import { useQuestionnaire } from '../../QuestionnaireProvider'
import { getStepPageIds, getTitlePage } from './utils'

export default function ProgressIndicator(): JSX.Element | null {
  const { questionnaire } = useQuestionnaire()
  const params = useParams()
  const { stepId } = params

  const title = useMemo(() => {
    if (!questionnaire) return null
    return getTitlePage(params, questionnaire)
  }, [params, questionnaire])

  const { displayProgressIndicator, arrayIds } = useMemo(() => {
    return {
      displayProgressIndicator:
        questionnaire &&
        !!(
          questionnaire.extension &&
          !!getExtension(questionnaire, Extensions.progressIndicatorExtension)
        ),
      arrayIds: questionnaire ? getStepPageIds(questionnaire) : []
    }
  }, [questionnaire])

  const currentStepIndex = arrayIds.indexOf(stepId || '')

  if (!questionnaire || !title) return null

  return (
    <>
      <h1 className='size-h1 page-title'>{title}</h1>
      {displayProgressIndicator ? (
        <nav aria-hidden>
          <ul className='step-list'>
            {arrayIds.map((id, i) => {
              const isStepComplete = currentStepIndex >= i

              return (
                <li
                  key={id}
                  className={`step${isStepComplete ? ' step-complete' : ''}`}
                >
                  <span className='step-text'>{i + 1}</span>
                </li>
              )
            })}
          </ul>
        </nav>
      ) : null}
    </>
  )
}
