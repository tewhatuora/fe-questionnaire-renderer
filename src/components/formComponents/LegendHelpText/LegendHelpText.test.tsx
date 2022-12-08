import { screen } from '@testing-library/react'

import { renderWithFormDataProvider } from '../../../testHelpers/componentWrappers'
import { LegendHelpText } from '..'
import { LegendHelpTextProps } from '.'

describe('LegendHelpText', () => {
  let props: LegendHelpTextProps

  it(`renders just the label text when plain text`, () => {
    props = {
      input: {
        linkId: 'testInput',
        text: 'Are these Yes/No buttons?',
        required: true
      },
      name: 'legendHelpText'
    } as LegendHelpTextProps

    renderWithFormDataProvider(
      <LegendHelpText {...props}>Test label</LegendHelpText>
    )

    expect(screen.getByText('Are these Yes/No buttons?')).toBeInTheDocument()
    expect(screen.getByText('Required')).toBeInTheDocument()
  })
})
