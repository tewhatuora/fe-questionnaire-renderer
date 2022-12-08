import get from 'lodash.get'

import { ValidateFieldProps, ValidationExtensions } from '../../../types'
import { getExtension } from '../../../utils/extensions'

export default function validateCheckboxNoOption({
  extension,
  fieldName,
  formValues,
  value
}: ValidateFieldProps) {
  const extensionMessage =
    extension?.extension &&
    getExtension(extension, ValidationExtensions.validationRequired)
      ?.valueString
  const valMessage = extensionMessage || 'Required'

  const valueNoOption = get(formValues, `${fieldName}_noOption`)

  if ((!value || value.length === 0) && !valueNoOption) return valMessage

  return undefined
}
