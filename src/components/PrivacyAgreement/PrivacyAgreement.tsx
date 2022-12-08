import { ButtonVariantTypes, Input } from '../../types'
import { CheckboxInput, LinkAsButton } from '../formComponents'
import { useQuestionnaire } from '../QuestionnaireProvider'

interface Props {
  basePath: string
  input?: Input
  pageContent: JSX.Element
}

export default function PrivacyAgreement({
  basePath,
  input,
  pageContent
}: Props): JSX.Element | null {
  const { formInitialPagePath } = useQuestionnaire()

  if (!input) return null

  return (
    <div className='form'>
      {pageContent}
      <section className='section'>
        <form onSubmit={(e) => e.preventDefault()}>
          <CheckboxInput input={input} />
          <div className='button-group'>
            <LinkAsButton
              content='Accept and continue'
              to={`${basePath}/${formInitialPagePath}`}
              buttonAttributes={{
                variant: ButtonVariantTypes.primary,
                shouldValidate: true
              }}
            />
          </div>
        </form>
      </section>
    </div>
  )
}
