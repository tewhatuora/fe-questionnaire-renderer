/* eslint-disable no-underscore-dangle */

import { InputHTMLAttributes, useMemo, useState } from 'react'

import { useErrors } from '../../../hooks/useErrors'
import { AddressAutocompleteInputProps, Input } from '../../../types'
import { getValidationFunction } from '../../../utils/fieldValidators'
import { getId } from '../../../utils/utils'
import { useFormData } from '../../FormDataProvider'
import { useFormErrors } from '../../FormErrorsProvider'
import { useFormTouched } from '../../FormTouchedProvider'
import FormGroupWrapper from '../FormGroupWrapper'
import TextInput from '../TextInput'
import AddressToggle from './AddressToggle'
import AutocompleteInput from './AutocompleteInput'
import getAddressFields from './manualAddressFields'

export interface AddressProps {
  input: Input
  AutocompleteComponent?(props: AddressAutocompleteInputProps): JSX.Element
  TextInputComponent?(
    props: InputHTMLAttributes<HTMLTextAreaElement | HTMLInputElement>
  ): JSX.Element
}

function Address({
  AutocompleteComponent,
  input,
  TextInputComponent
}: AddressProps): JSX.Element {
  const name = input.linkIdWithParent || ''

  const { formErrors } = useFormErrors()
  const { setFormValue } = useFormData()
  const { formTouched } = useFormTouched()
  const [showAutocomplete, setShowAutocomplete] = useState(true)

  const { error, isInvalid, validateField } = useErrors({
    fieldName: name,
    inputValidateField: getValidationFunction(input)
  })

  function handleToggle() {
    if (!showAutocomplete) setFormValue(name, undefined)
    setShowAutocomplete(!showAutocomplete)
  }

  const { manualError, manualFields } = useMemo(() => {
    const fields = getAddressFields(input.linkIdWithParent || '')

    const manError = formErrors.find((e) => {
      const field = fields.find((f) => getId(f) === e.name)
      const touch = field && formTouched.find((ft) => ft.name === getId(field))
      return !!field && !!touch
    })

    return {
      manualFields: fields,
      manualError: manError
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input.linkId, formErrors.length, formTouched])

  return (
    <FormGroupWrapper
      error={error || manualError?.message}
      fieldName={name}
      input={input}
      isInvalid={isInvalid || !!manualError}
    >
      <>
        <AddressToggle
          fieldName={name}
          handleToggle={handleToggle}
          input={input}
          isInvalid={isInvalid || !!manualError}
          isAutocomplete={showAutocomplete}
        />
        {showAutocomplete && AutocompleteComponent ? (
          <AutocompleteInput
            AutocompleteComponent={AutocompleteComponent}
            input={input}
            isInvalid={isInvalid}
            validateField={validateField}
          />
        ) : (
          <div className='margin-top-4'>
            {manualFields.map((af) => (
              <TextInput
                key={af.linkIdWithParent}
                InputComponent={TextInputComponent}
                input={af}
                transparentMode
              />
            ))}
          </div>
        )}
      </>
    </FormGroupWrapper>
  )
}

export default Address
