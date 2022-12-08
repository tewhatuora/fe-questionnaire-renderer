import { screen } from '@testing-library/react'

import { renderWithFormDataProvider } from '../../../testHelpers/componentWrappers'
import { YesNoButtons } from '..'
import { YesNoButtonsProps } from '.'

describe(`YesNoButtons`, () => {
  let props: YesNoButtonsProps

  beforeEach(() => {
    props = {
      input: {
        linkId: 'testInput',
        text: 'Are these Yes/No buttons?',
        required: true
      }
    }
  })

  it(`renders the fieldset label, help text, and the Yes and No buttons`, () => {
    renderWithFormDataProvider(<YesNoButtons {...props} />)

    expect(
      screen.getByLabelText('Are these Yes/No buttons?')
    ).toBeInTheDocument()

    expect(screen.getByLabelText('Yes')).toBeInTheDocument()
    expect(screen.getByLabelText('No')).toBeInTheDocument()
  })
})
