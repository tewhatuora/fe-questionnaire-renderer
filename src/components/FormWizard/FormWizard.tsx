import { Outlet } from 'react-router-dom'

import { useFormData } from '../FormDataProvider'
import { useQuestionnaire } from '../QuestionnaireProvider'

export default function FormWizard(): JSX.Element | null {
  const { formData } = useFormData()
  const { questionnaire } = useQuestionnaire()

  if (!questionnaire || !formData) return null

  return (
    <form className='form' onSubmit={(e) => e.preventDefault()}>
      <Outlet />
    </form>
  )
}
