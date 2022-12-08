import { screen } from '@testing-library/react'

import { renderWithFormDataProvider } from '../../../testHelpers/componentWrappers'
import { Questionnaire_ItemTypeKind } from '../../../types/fhir'
import { DayPicker } from '..'
import { DayPickerProps } from './DayPicker'

describe('DayPicker', () => {
  let props: DayPickerProps

  beforeEach(() => {
    props = {
      input: {
        id: 'symptomsStartDate',
        text: 'When did you first start experiencing any of these symptoms?',
        required: true,
        // eslint-disable-next-line no-underscore-dangle
        type: Questionnaire_ItemTypeKind._date
      }
    }
  })

  it('renders the label and input', () => {
    renderWithFormDataProvider(<DayPicker {...props} />)

    expect(
      screen.getByText(
        'When did you first start experiencing any of these symptoms?'
      )
    ).toBeInTheDocument()

    // React-dates day picker has the following attribute `aria-label="Calendar"`
    expect(screen.getByLabelText('Calendar')).toBeInTheDocument()
  })
})
