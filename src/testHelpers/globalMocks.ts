const { alert } = window

beforeAll(() => {
  Object.defineProperty(window, 'alert', {
    value: jest.fn()
  })
})

afterAll(() => {
  Object.defineProperty(window, 'alert', {
    value: alert
  })
})

// NOTE: Removing all the noise in the tests around "act"
const originalError = global.console.error
beforeAll(() => {
  global.console.error = jest.fn((...args) => {
    if (typeof args[0] === 'string') {
      return
    }
    return originalError.call(console, args)
  })
})

afterAll(() => {
  const {
    console: { error }
  } = global as any
  error.mockRestore()
})

// NOTE: Required to fix TS warning as per:
// https://medium.com/@muravitskiy.mail/cannot-redeclare-block-scoped-variable-varname-how-to-fix-b1c3d9cc8206
export {}
