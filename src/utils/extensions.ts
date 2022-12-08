/* eslint-disable no-underscore-dangle */

import { Input, Questionnaire } from '../types'
import { ContactPointSystemKind } from '../types/fhir'

export function getExtension(item: Input | Questionnaire, extensionId: string) {
  return item.extension
    ? item.extension.find((e) => e.id === extensionId)
    : undefined
}

export function isExtension(item: Input | Questionnaire, extensionId: string) {
  return item.extension && !!getExtension(item, extensionId)
}

export function isPhoneExtension(input: Input) {
  return (
    input.extension &&
    !!input.extension.find(
      (e) =>
        e.valueContactDetail &&
        e.valueContactDetail.telecom &&
        e.valueContactDetail.telecom.find(
          (vcd) => vcd.system === ContactPointSystemKind._phone
        )
    )
  )
}
