import { ButtonVariantTypes, Input } from '../../../types'
import Button from '../Button/Button'
import LegendHelpText from '../LegendHelpText'

export interface CustomAddressToggleProps {
  fieldName: string
  input: Input
  isInvalid: boolean
  isAutocomplete: boolean
  handleToggle(): void
}

function AddressToggle({
  fieldName,
  handleToggle,
  input,
  isAutocomplete,
  isInvalid
}: CustomAddressToggleProps): JSX.Element {
  return (
    <div className='flex direction-row justify-space-between align-start'>
      <div>
        <LegendHelpText
          className='margin-bottom-2'
          input={input}
          isInvalid={isInvalid}
          name={fieldName}
        />
      </div>
      <Button
        className='margin-top-1'
        onClick={handleToggle}
        type='button'
        variant={ButtonVariantTypes.link}
      >
        {isAutocomplete ? 'Enter address manually' : 'Search for my address'}
      </Button>
    </div>
  )
}

export default AddressToggle
