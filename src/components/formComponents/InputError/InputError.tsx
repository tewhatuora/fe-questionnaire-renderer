import parse from 'html-react-parser'

import ErrorIcon from '../../../images/icons/ErrorIcon'

export interface InputErrorProps {
  message?: string
  name: string
}

export default function InputError(props: InputErrorProps) {
  const { message, name } = props

  return (
    <div className='invalid-input-container'>
      <ErrorIcon />
      <p className='font-size-p2' id={`${name}Error`}>
        {parse(message || '')}
      </p>
    </div>
  )
}
