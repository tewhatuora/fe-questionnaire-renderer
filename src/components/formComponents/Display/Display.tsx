import parse from 'html-react-parser'
import get from 'lodash.get'
import ReactMarkdown from 'react-markdown'

import { Extensions, Input } from '../../../types'
import { getExtension } from '../../../utils/extensions'
import { useCMS } from '../../CMSProvider'
import { FormGroupWrapper } from '..'

interface Props {
  input: Input
}

export default function Display({ input }: Props): JSX.Element | null {
  const cms = useCMS()

  const name = input.linkIdWithParent || ''

  const cmsExtension =
    input.extension && getExtension(input, Extensions.cmsExtension)
  const cmsVal = get(cms, cmsExtension?.valueCoding?.display || '')?.toString()

  return (
    <FormGroupWrapper fieldName={name} input={input} isInvalid={false}>
      <>
        {cmsVal && <div className='content-cms cms-link'>{parse(cmsVal)}</div>}
        {input.text && (
          <ReactMarkdown className='content-cms cms-link break-spaces'>
            {input.text.replace(/\\n/g, '\n') || ''}
          </ReactMarkdown>
        )}
      </>
    </FormGroupWrapper>
  )
}
