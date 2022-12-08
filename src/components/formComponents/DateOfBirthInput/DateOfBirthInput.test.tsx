/* eslint-disable no-underscore-dangle */

import { renderWithFormDataProvider } from '../../../testHelpers/componentWrappers'
import { screen, userEvent } from '../../../testHelpers/testUtils'
import { Questionnaire_ItemTypeKind } from '../../../types/fhir'
import { DateOfBirthInput } from '..'
import { DateInputProps } from '.'

async function enterDateByParts(day: string, month: string, year: string) {
  const dayInput = screen.getByLabelText('Day') as HTMLInputElement
  dayInput.focus()
  userEvent.type(dayInput, day)

  const monthInput = screen.getByLabelText('Month') as HTMLInputElement
  monthInput.focus()
  userEvent.type(monthInput, month)

  const yearInput = screen.getByLabelText('Year') as HTMLInputElement
  yearInput.focus()
  userEvent.type(yearInput, year)
  yearInput.blur()
}

async function enterDate(date: Date) {
  await enterDateByParts(
    date.getDate().toString(),
    (date.getMonth() + 1).toString(),
    date.getFullYear().toString()
  )
}

describe(`DateInput`, () => {
  let props: DateInputProps

  beforeEach(() => {
    props = {
      input: {
        linkId: 'step4.input19a',
        prefix: 'step4.input19a.',
        text: 'Date of birth test:',
        required: true,
        type: Questionnaire_ItemTypeKind._date,
        extension: [
          {
            url: 'http://hl7.org/fhir/StructureDefinition/date-of-birth',
            id: 'dateOfBirthExtension'
          }
        ]
      }
    }
  })

  it(`renders the date text, and the inputs`, () => {
    renderWithFormDataProvider(<DateOfBirthInput {...props} />)

    const dateInput = screen.getByText(
      'Date of birth test:'
    ) as HTMLInputElement
    expect(dateInput).toBeInTheDocument()

    const dayInput = screen.getByLabelText('Day') as HTMLInputElement
    expect(dayInput).toBeInTheDocument()
    expect(screen.getByText('Day')).toBeInTheDocument()

    const monthInput = screen.getByLabelText('Month') as HTMLInputElement
    expect(monthInput).toBeInTheDocument()
    expect(screen.getByText('Month')).toBeInTheDocument()

    const yearInput = screen.getByLabelText('Year') as HTMLInputElement
    expect(yearInput).toBeInTheDocument()
    expect(screen.getByText('Year')).toBeInTheDocument()
  })

  it(`prevents entering an day larger than 31`, () => {
    renderWithFormDataProvider(<DateOfBirthInput {...props} />)

    const dayInput = screen.getByLabelText('Day') as HTMLInputElement
    expect(dayInput).toBeInTheDocument()

    dayInput.focus()
    userEvent.type(dayInput, '32')
    dayInput.blur()

    expect(dayInput.value).toEqual('3')
  })

  it(`prevents entering an month larger than 12`, () => {
    renderWithFormDataProvider(<DateOfBirthInput {...props} />)

    const monthInput = screen.getByLabelText('Month') as HTMLInputElement
    expect(monthInput).toBeInTheDocument()

    monthInput.focus()
    userEvent.type(monthInput, '22')
    monthInput.blur()

    expect(monthInput.value).toEqual('2')
  })

  it(`renders error message when the year is too short`, async () => {
    renderWithFormDataProvider(<DateOfBirthInput {...props} />)

    await enterDateByParts('01', '01', '10')

    expect(
      screen.getByText('Error, please enter the date of birth year')
    ).toBeInTheDocument()
  })

  it(`renders error message when the day is invalid`, async () => {
    renderWithFormDataProvider(<DateOfBirthInput {...props} />)

    await enterDateByParts('31', '2', '2001')

    expect(
      screen.getByText('Error, enter a valid date of birth')
    ).toBeInTheDocument()
  })

  it(`does not render an error message when the date is today`, async () => {
    renderWithFormDataProvider(<DateOfBirthInput {...props} />)

    const today = new Date()
    await enterDate(today)

    expect(screen.queryByText('Error, select a valid date')).toBe(null)
  })

  it(`renders error message when the date is more than 100 years old`, async () => {
    renderWithFormDataProvider(<DateOfBirthInput {...props} />)

    const lastCentury = new Date()
    lastCentury.setFullYear(lastCentury.getFullYear() - 121)
    await enterDate(lastCentury)

    expect(
      await screen.findByText('Error, select a valid date')
    ).toBeInTheDocument()
  })

  it(`renders error message when the date is after today`, async () => {
    renderWithFormDataProvider(<DateOfBirthInput {...props} />)

    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    await enterDate(tomorrow)

    expect(
      await screen.findByText('Error, select a valid date')
    ).toBeInTheDocument()
  })
})
