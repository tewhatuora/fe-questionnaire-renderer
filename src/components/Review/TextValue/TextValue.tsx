import get from 'lodash.get'
import { useNavigate } from 'react-router-dom'

import { questionnaireFormPath } from '../../../QuestionnaireRenderer'
import { ButtonVariantTypes, Input } from '../../../types'
import { Button } from '../../formComponents'
import { useFormData } from '../../FormDataProvider'

export interface TextValueProps {
  basePath: string
  input: Input
  formatValue?(val: any): string | JSX.Element | undefined
}

function TextValue({
  basePath,
  formatValue,
  input
}: TextValueProps): JSX.Element | null {
  const { formData } = useFormData()
  const navigate = useNavigate()

  const value = get(formData, input.linkIdWithParent || '')
  const formattedValue =
    value !== undefined && value !== null && formatValue
      ? formatValue(value)
      : value

  const splitLinkId = input.linkId?.split('.')
  const path = splitLinkId?.splice(0, splitLinkId.length - 1)

  return (
    <dl className='list-review'>
      <dt>{input.text}</dt>
      <dd>{formattedValue || 'Not answered'}</dd>
      <div className='flex direction-row margin-bottom-4'>
        <Button
          ariaLabel={`Edit ${input.text}`}
          onClick={() =>
            path &&
            navigate(`${basePath}/${questionnaireFormPath(path.join('/'))}`, {
              state: { editFromReview: true }
            })
          }
          variant={ButtonVariantTypes.edit}
          type='submit'
        >
          Edit
        </Button>
      </div>
    </dl>
  )
}

export default TextValue
