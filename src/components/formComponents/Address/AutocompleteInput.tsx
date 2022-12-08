import { useEffect } from 'react'

import { AddressAutocompleteInputProps, Input } from '../../../types'
import { useFormData } from '../../FormDataProvider'
import { useFormErrors } from '../../FormErrorsProvider'
import { useFormTouched } from '../../FormTouchedProvider'
import { AddressDetails, FormAddress } from './types'

export interface ESamAutocompleteInputProps {
  input: Input
  isInvalid: boolean
  AutocompleteComponent(props: AddressAutocompleteInputProps): JSX.Element
  validateField(
    value?: any,
    setError?: boolean,
    resetError?: boolean
  ): string | undefined
}

function formatAddress(address: FormAddress): string {
  return [
    address.addressLine1,
    address.addressLine2,
    address.suburb,
    address.city,
    address.postcode
  ]
    .filter(Boolean)
    .join(', ')
}

function AutocompleteInput({
  AutocompleteComponent,
  input,
  isInvalid,
  validateField
}: ESamAutocompleteInputProps): JSX.Element {
  const name = input.linkIdWithParent || ''

  const { getFormValue, setFormValue } = useFormData()
  const { setFormError } = useFormErrors()
  const { setFormTouched } = useFormTouched()

  useEffect(() => {
    // Remove custom error on unmount
    return () => setFormError(name, '', false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function handleSelectAddress(address: AddressDetails) {
    const { addressLine1, addressLine2, cityTown, mailTown, postcode, suburb } =
      address
    const city = cityTown || mailTown || ''

    const formAddress = { ...address, city }

    setFormValue(`${name}_addressLine1`, addressLine1 || '')

    if (addressLine2 !== suburb && addressLine2 !== `${city} ${postcode}`) {
      setFormValue(`${name}_addressLine2`, addressLine2 || '')
    } else {
      delete formAddress.addressLine2
    }

    if (suburb !== city) {
      setFormValue(`${name}_suburb`, suburb || '')
    } else {
      delete formAddress.suburb
    }

    setFormValue(`${name}_city`, city)
    setFormValue(`${name}_postcode`, postcode || '')

    setFormValue(name, formatAddress(formAddress))
    validateField(formatAddress(formAddress), true)
  }

  function handleClearAddress() {
    setFormValue(name, undefined)
    setFormValue(`${name}_addressLine1`, undefined)
    setFormValue(`${name}_addressLine2`, undefined)
    setFormValue(`${name}_city`, undefined)
    setFormValue(`${name}_suburb`, undefined)
    setFormValue(`${name}_postcode`, undefined)
  }

  function formattedAddressValue(): string {
    const fullAddress = getFormValue(name)

    if (fullAddress) return fullAddress

    const address = {
      addressLine1: getFormValue(`${name}_addressLine1`),
      addressLine2: getFormValue(`${name}_addressLine2`),
      city: getFormValue(`${name}_city`),
      suburb: getFormValue(`${name}_suburb`),
      postcode: getFormValue(`${name}_postcode`)
    }

    return address.addressLine1 && address.city && address.postcode
      ? formatAddress(address)
      : ''
  }

  return (
    <>
      <label className='a11y' htmlFor={name}>
        Address autocomplete
      </label>
      <AutocompleteComponent
        id={name}
        isInvalid={isInvalid}
        name={name}
        onBlur={() => {
          validateField(undefined, true)
          setFormTouched(name)
        }}
        onClear={handleClearAddress}
        onSelect={handleSelectAddress}
        value={formattedAddressValue()}
      />
    </>
  )
}

export default AutocompleteInput
