import { useNavigate } from 'react-router-dom'

import { ButtonVariantTypes } from '../../types'
import { Button } from '../formComponents'

interface Props {
  basePath: string
}

export default function FourOhFour({ basePath }: Props): JSX.Element {
  const navigate = useNavigate()

  function handleClick() {
    navigate(basePath)
  }

  return (
    <div className='form'>
      <div className='margin-bottom-6'>
        <h2>We’re sorry. Aroha mai.</h2>
        <h2>We can’t find that page anywhere.</h2>
      </div>

      <Button
        variant={ButtonVariantTypes.tertiary}
        type='button'
        onClick={handleClick}
      >
        Back to home page
      </Button>
    </div>
  )
}
