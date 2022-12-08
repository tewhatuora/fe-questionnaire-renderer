/* eslint-disable no-underscore-dangle */

import { renderWithFormDataProvider } from '../../testHelpers/componentWrappers'
import { render, screen, waitFor } from '../../testHelpers/testUtils'
import { ValidationExtensions } from '../../types'
import { privacyAgreementAcceptedKey } from '../../types/constants'
import { Questionnaire_ItemTypeKind } from '../../types/fhir'
import PrivacyAgreement from '.'

const content = (
  <section className='section'>
    <h1 className='size-h1'>Privacy and how we use your information</h1>
    <div className='content-cms'>
      <p>This form lets you share:</p>
      <p>
        This information will only be used securely. <br />
        <br /> We will only share information with agencies who are helping with
        this work.
      </p>
    </div>
    <p className='content-card privacy-link margin-top-4'>
      <a href='/privacy'>Privacy Statement</a>
    </p>
  </section>
)

const input = {
  extension: [
    {
      url: 'http://hl7.org/fhir/StructureDefinition/validation',
      id: 'validationExtension',
      extension: [
        {
          url: 'http://hl7.org/fhir/StructureDefinition/validationTrueValue',
          id: ValidationExtensions.validationTrueValue,
          valueString: 'Please tick you have read the privacy statement'
        }
      ]
    }
  ],
  isFormSection: true,
  isLastElemFormSection: true,
  linkIdWithParent: privacyAgreementAcceptedKey,
  required: true,
  text: 'I accept the privacy statement and understand how the information I provide will be used.',
  type: Questionnaire_ItemTypeKind._openChoice
}

describe('PrivacyAgreement', () => {
  it(`renders the 'Privacy and how we use your information' heading`, () => {
    render(<PrivacyAgreement basePath='' pageContent={content} input={input} />)

    expect(
      screen.getByRole('heading', {
        name: 'Privacy and how we use your information'
      })
    ).toBeInTheDocument()
  })

  it(`renders the privacy statement link`, () => {
    // NOTE this test will need to be updated when htmlContent from cms gets processed
    render(<PrivacyAgreement basePath='' pageContent={content} input={input} />)

    expect(
      screen.getByText('This form lets you share:', { exact: false })
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        'This information will only be used securely. We will only share information with agencies who are helping with this work.',
        { exact: false }
      )
    ).toBeInTheDocument()
    expect(
      screen.getAllByText('Privacy Statement', {
        exact: false
      })
    ).toHaveLength(2)
  })

  it(`renders the expected inputs and button`, () => {
    render(<PrivacyAgreement basePath='' pageContent={content} input={input} />)

    expect(
      screen.getByText(
        'I accept the privacy statement and understand how the information I provide will be used.'
      )
    ).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: 'Accept and continue' })
    ).toBeInTheDocument()
  })

  describe(`with privacyStatementAccepted=true in formState`, () => {
    it(`renders the input as checked`, async () => {
      renderWithFormDataProvider(
        <PrivacyAgreement basePath='' pageContent={content} input={input} />,
        {},
        { privacyAgreementAccepted: true }
      )

      const checkbox: any = screen.getByRole('checkbox', {
        name: 'I accept the privacy statement and understand how the information I provide will be used. Required'
      })

      expect(checkbox).toBeInTheDocument()

      await waitFor(() => {
        expect(checkbox).toBeChecked()
      })
    })
  })
})
