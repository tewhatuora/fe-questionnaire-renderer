import selectEvent from 'react-select-event'

import { renderWithFormDataProvider } from '../../../testHelpers/componentWrappers'
import { screen, userEvent, waitFor } from '../../../testHelpers/testUtils'
import { PhoneNumberInput } from '..'
import { PhoneNumberInputProps } from '.'

describe('PhoneNumberInput', () => {
  let props: PhoneNumberInputProps

  const initialValues = {
    timelineContactPhoneNumber: {
      country: 'NZ',
      countryCallingCode: '64',
      nationalNumber: '',
      number: ''
    } as any
  }

  beforeEach(() => {
    props = {
      input: {
        linkId: 'timelineContactPhoneNumber',
        text: 'Phone number'
      }
    }
  })

  it('renders the label, country select input and tel input', () => {
    renderWithFormDataProvider(
      <PhoneNumberInput {...props} />,
      {},
      initialValues
    )

    // Country select input - gets title of the flag SVG
    expect(screen.getByTitle('New Zealand')).toBeInTheDocument()

    expect(screen.queryByText('New Zealand +64')).not.toBeInTheDocument() // The first option
    expect(screen.queryByText('Australia +61')).not.toBeInTheDocument() // Another option

    selectEvent.openMenu(screen.getByTitle('New Zealand'))

    expect(screen.getAllByText('New Zealand +64')[0]).toBeInTheDocument() // The first option
    expect(screen.getByText('Ascension Island +247')).toBeInTheDocument() // Another option

    // Tel input & label. Fieldset so has 2 different inputs
    expect(screen.getAllByLabelText('Phone number')).toHaveLength(2)
  })

  it('allows the user to select a different country calling code', async () => {
    renderWithFormDataProvider(
      <PhoneNumberInput {...props} />,
      {},
      initialValues
    )

    // Gets title of the flag SVG
    expect(screen.getByTitle('New Zealand')).toBeInTheDocument()

    expect(screen.queryByText('New Zealand +64')).not.toBeInTheDocument() // The first option
    expect(screen.queryByText('Ascension Island +247')).not.toBeInTheDocument() // Another option

    selectEvent.openMenu(screen.getByTitle('New Zealand'))

    expect(screen.getAllByText('New Zealand +64')[0]).toBeInTheDocument() // The first option

    const button = screen.getByText('Ascension Island +247') // Another option
    expect(button).toBeInTheDocument()
    userEvent.click(button)

    // Gets title of the flag SVG
    await waitFor(() => {
      expect(screen.getByTitle('New Zealand')).toBeInTheDocument()
    })
  })

  it('updates the value with the correct formatting when the user types a phone number', async () => {
    renderWithFormDataProvider(
      <PhoneNumberInput {...props} />,
      {},
      initialValues
    )

    // Tel input & label
    const telInput = screen.getByRole('textbox') as HTMLInputElement
    expect(telInput).toBeInTheDocument()

    userEvent.type(telInput, '0211234567')

    await waitFor(() => {
      expect(telInput.value).toBe('021 123 4567')
    })
  })
})
