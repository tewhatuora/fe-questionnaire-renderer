import { screen } from '@testing-library/react'

import { renderWithCMSProvider } from '../../../testHelpers/componentWrappers'
import { Display } from '..'

describe('Display', () => {
  it(`renders the text from the CMS`, () => {
    renderWithCMSProvider(
      <Display
        input={{
          linkId: 'input1',
          extension: [
            {
              url: 'http://hl7.org/fhir/StructureDefinition/content-management-system',
              id: 'cmsExtension',
              valueCoding: {
                system: 'https://gathercontent.com/',
                version: '1',
                code: 'Survey',
                display: 'Landing Page.Introduction.htmlContent'
              }
            }
          ]
        }}
      />
    )

    expect(
      screen.getByText('Welcome on this questionnaire.')
    ).toBeInTheDocument()
  })

  it(`renders the text from md`, () => {
    renderWithCMSProvider(
      <Display
        input={{
          linkId: 'input1',
          text: 'Markdown'
        }}
      />
    )

    expect(screen.getByText('Markdown')).toBeInTheDocument()
  })
})
