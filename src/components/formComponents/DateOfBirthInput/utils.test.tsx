import {
  createDefaultInput,
  dateFromParts,
  dayMax,
  getError,
  getInitialValues
} from './utils'

describe('createDefaultInput', () => {
  it('creates default input from a value', () => {
    const defaultInput = createDefaultInput('test')

    expect(defaultInput.value).toBe('test')
    expect(defaultInput.touched).toBe(false)
  })

  it('creates default input from an empty value', () => {
    const defaultInput = createDefaultInput('')

    expect(defaultInput.value).toBe('')
    expect(defaultInput.touched).toBe(false)
  })

  it('creates default input from an undefined value', () => {
    const defaultInput = createDefaultInput(undefined)

    expect(defaultInput.value).toBe('')
    expect(defaultInput.touched).toBe(false)
  })
})

describe('getInitialValues', () => {
  it('creates initial values from an initial value', () => {
    const initialValues = getInitialValues('1/2/3')

    expect(initialValues.day.value).toBe('1')
    expect(initialValues.month.value).toBe('2')
    expect(initialValues.year.value).toBe('3')
  })

  it('creates initial values from a long initial value', () => {
    const initialValues = getInitialValues('1000/2000/3000')

    expect(initialValues.day.value).toBe('1000')
    expect(initialValues.month.value).toBe('2000')
    expect(initialValues.year.value).toBe('3000')
  })

  it('creates initial values from an undefined initial value', () => {
    const initialValues = getInitialValues(undefined)

    expect(initialValues.day.value).toBe('')
    expect(initialValues.month.value).toBe('')
    expect(initialValues.year.value).toBe('')
  })

  it('creates initial values from a malformed initial value', () => {
    const initialValues = getInitialValues('1/2')

    expect(initialValues.day.value).toBe('1')
    expect(initialValues.month.value).toBe('2')
    expect(initialValues.year.value).toBe('')
  })
})

describe('dayMax', () => {
  const leapYear = '2000'
  const nonLeapYear = '2001'

  it('returns the correct maxDays on a non leap-year', () => {
    const maxDayJan = dayMax(`1`, nonLeapYear)
    expect(maxDayJan).toBe(31)

    const maxDayFeb = dayMax(`2`, nonLeapYear)
    expect(maxDayFeb).toBe(28)

    const maxDayMar = dayMax(`3`, nonLeapYear)
    expect(maxDayMar).toBe(31)

    const maxDayApr = dayMax(`4`, nonLeapYear)
    expect(maxDayApr).toBe(30)

    const maxDayMay = dayMax(`5`, nonLeapYear)
    expect(maxDayMay).toBe(31)

    const maxDayJun = dayMax(`6`, nonLeapYear)
    expect(maxDayJun).toBe(30)

    const maxDayJul = dayMax(`7`, nonLeapYear)
    expect(maxDayJul).toBe(31)

    const maxDayAug = dayMax(`8`, nonLeapYear)
    expect(maxDayAug).toBe(31)

    const maxDaySep = dayMax(`9`, nonLeapYear)
    expect(maxDaySep).toBe(30)

    const maxDayOct = dayMax(`10`, nonLeapYear)
    expect(maxDayOct).toBe(31)

    const maxDayNov = dayMax(`11`, nonLeapYear)
    expect(maxDayNov).toBe(30)

    const maxDayDec = dayMax(`12`, nonLeapYear)
    expect(maxDayDec).toBe(31)
  })

  it('returns the correct maxDays on a leap-year', () => {
    const maxDayFeb = dayMax(`2`, leapYear)
    expect(maxDayFeb).toBe(29)
  })

  it('always retun 31 for an unset month', () => {
    const maxDay = dayMax('', leapYear)
    const maxDayLeapYear = dayMax('', nonLeapYear)

    expect(maxDay).toBe(31)
    expect(maxDayLeapYear).toBe(31)
  })
})

describe('dateFromParts', () => {
  it('creates date from parts', () => {
    const date = dateFromParts('01', '02', '0003')
    expect(date).toBe('01/02/0003')
  })

  it('pads values', () => {
    const date = dateFromParts('1', '2', '3')
    expect(date).toBe('01/02/3')
  })

  it('creates an empty date if an values missing', () => {
    const missingDay = dateFromParts('', '2', '3')
    expect(missingDay).toBe('')

    const missingMonth = dateFromParts('1', '', '3')
    expect(missingMonth).toBe('')

    const missingYear = dateFromParts('1', '2', '')
    expect(missingYear).toBe('')
  })
})

describe('getError', () => {
  const errorTouched = {
    value: '',
    touched: true,
    error: 'ErrorTouched'
  }
  const errorUntouched = {
    value: '',
    touched: false,
    error: 'ErrorUntouched'
  }

  it('only gets touched errors', () => {
    const noError = getError(
      'fieldError',
      false,
      errorUntouched,
      errorUntouched,
      errorUntouched
    )
    expect(noError.source).toBe('none')

    const oneError = getError(
      'fieldError',
      false,
      errorUntouched,
      errorTouched,
      errorUntouched
    )
    expect(oneError.source).toBe('month')
  })

  it('gets errors in order', () => {
    const dayError = getError(
      'fieldError',
      true,
      errorTouched,
      errorTouched,
      errorTouched
    )
    expect(dayError.source).toBe('day')

    const monthError = getError(
      'fieldError',
      true,
      errorUntouched,
      errorTouched,
      errorTouched
    )
    expect(monthError.source).toBe('month')

    const yearError = getError(
      'fieldError',
      true,
      errorUntouched,
      errorUntouched,
      errorTouched
    )
    expect(yearError.source).toBe('year')

    const fieldError = getError(
      'fieldError',
      true,
      errorUntouched,
      errorUntouched,
      errorUntouched
    )
    expect(fieldError.source).toBe('field')
  })
})
