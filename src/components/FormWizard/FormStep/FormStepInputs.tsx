/* eslint-disable no-underscore-dangle */

import { Fragment } from 'react'

import { Extensions, FormInputComponents, Input } from '../../../types'
import { Questionnaire_ItemTypeKind } from '../../../types/fhir'
import { isExtension, isPhoneExtension } from '../../../utils/extensions'
import {
  Address,
  CheckboxGroupWithNoOption,
  CheckboxInput,
  DateInput,
  DateOfBirthInput,
  DayPicker,
  Display,
  Divider,
  HrefButton,
  PhoneNumberInput,
  TextInput,
  YesNoButtons
} from '../../formComponents'
import ItemRepeatButtons from '../../formComponents/FormGroupWrapper/ItemRepeatButtons'
import SelectorGroupWrapper from '../../formComponents/SelectorGroup/SelectorGroupWrapper'

interface Props {
  inputComponents?: FormInputComponents
  inputs: Input[]
}

export default function FormStepInputs({
  inputComponents,
  inputs
}: Props): JSX.Element | null {
  const getInputComponent = (input: Input) => {
    if (input.extension) {
      if (isPhoneExtension(input)) return <PhoneNumberInput input={input} />
      if (isExtension(input, Extensions.addressExtension)) {
        return (
          <Address
            AutocompleteComponent={inputComponents?.AddressAutocompleteInput}
            input={input}
            TextInputComponent={inputComponents?.TextInput}
          />
        )
      }
      if (isExtension(input, Extensions.checkboxGroupWithNoOption)) {
        return <CheckboxGroupWithNoOption input={input} />
      }
      if (isExtension(input, Extensions.dateInputExtension)) {
        return <DateInput input={input} />
      }
      if (isExtension(input, Extensions.dateOfBirthExtension)) {
        return <DateOfBirthInput input={input} />
      }
      if (isExtension(input, Extensions.dividerExtension)) {
        return <Divider input={input} />
      }
      if (isExtension(input, Extensions.soloCheckboxExtension)) {
        return <CheckboxInput input={input} />
      }
    }

    switch (input.type) {
      case Questionnaire_ItemTypeKind._boolean:
        return <YesNoButtons input={input} />
      case Questionnaire_ItemTypeKind._choice:
        return <SelectorGroupWrapper type='radio' input={input} />
      case Questionnaire_ItemTypeKind._date:
        return <DayPicker input={input} />
      case Questionnaire_ItemTypeKind._display:
        return <Display input={input} />
      case Questionnaire_ItemTypeKind._group:
        return (
          <>
            <FormStepInputs
              inputComponents={inputComponents}
              inputs={input.item || []}
            />
            {input.indexRepeat !== undefined && (
              <ItemRepeatButtons input={input} />
            )}
          </>
        )
      case Questionnaire_ItemTypeKind._openChoice:
        return <SelectorGroupWrapper type='checkbox' input={input} />
      case Questionnaire_ItemTypeKind._string:
        return (
          <TextInput
            input={input}
            InputComponent={inputComponents?.TextInput}
          />
        )
      case Questionnaire_ItemTypeKind._text:
        return (
          <TextInput
            input={input}
            InputComponent={inputComponents?.TextInput}
          />
        )
      case Questionnaire_ItemTypeKind._url:
        return <HrefButton />
      default:
        return null
    }
  }

  return (
    <>
      {inputs.map((i, ind) => {
        const isLast = ind === inputs.length - 1
        const input = {
          ...i,
          isLastElemFormSection:
            isLast ||
            (!isLast &&
              inputs[ind + 1].type === Questionnaire_ItemTypeKind._group)
        }
        return (
          <Fragment key={`${i.linkId}.${ind}`}>
            {i.type === Questionnaire_ItemTypeKind._group && i.text && (
              <h2 className='size-h3'>{i.text}</h2>
            )}
            {getInputComponent(input)}
          </Fragment>
        )
      })}
    </>
  )
}
