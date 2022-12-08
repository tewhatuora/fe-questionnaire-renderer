export interface SuggestedAddress {
  uniqueId: string
  fullAddress: string
}

export interface AddressDetails {
  addressLine1: string
  addressLine2?: string
  cityTown?: string
  fullAddress: string
  mailTown?: string
  postcode: string
  suburb?: string
}

export interface FormAddress {
  addressLine1: string
  addressLine2?: string
  city: string
  postcode: string
  suburb?: string
}
