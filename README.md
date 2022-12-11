# fe-questionnaire-renderer

The purpose of this library is to create a multi-pages form based on a FHIR questionnaire resource provided.
It includes a few options to customize the form, navigate to different pages etc.
This is still a WIP.

## Attributes

| Name                          | Type                                                      | Default   | Required | Description                                                           |
|-------------------------------|-----------------------------------------------------------|-----------|----------|-----------------------------------------------------------------------|
| `basePath`                    | `string`                                                  | -         | true     | Base path for the internal router                                     |
| `cmsData`                     | `CMSContextProps { [key: string]: any }`                  | `{}`      | false    | CMS data                                                              |
| `cmsFallback`                 | `CMSContextProps { [key: string]: any }`                  | `{}`      | false    | CMS fallback data if server unavailable                               |
| `CompletedPage`               | `JSX.Element`                                             | -         | false    | Page displayed for the completion of the form                         |
| `currentPath`                 | `string`                                                  | -         | true     | Current path in the application router to be passed to the lib router |
| `endFlowPath`                 | `string`                                                  | ''        | false    | Path to be navigated to after the flow                                |
| `formInputComponents`         | `FormInputComponents`                                     | -         | false    | Custom components                                                     |
| `isAuthenticated`             | `boolean`                                                 | `false`   | false    | Is the user authenticated                                             |
| `LandingPage`                 | `JSX.Element`                                             | -         | false    | Landing page for the form                                             |
| `maintenancePollInterval`     | `number`                                                  | `60000`   | false    | Poll interval for the maintenance healthcheck                         |
| `privacyAgreementPageContent` | `JSX.Element`                                             | `<div />` | false    | Content for the privacy agreement page                                |
| `privacyAgreementInput`       | `Input`                                                   | -         | false    | Checkbox input for the privacy agreement page                         |
| `questionnaireData`           | `IQuestionnaire`                                          | -         | true     | Questionnaire data                                                    |
| `unauthenticatedPaths`        | `string[]`                                                | `[]`      | false    | List of paths that can be accessed when unauthenticated               |
| `useAuthentication`           | `boolean`                                                 | `false`   | false    | Use authentication flow                                               |
| `useCompletedPage`            | `boolean`                                                 | `false`   | false    | Use a completion page                                                 |
| `useFourOhFour`               | `boolean`                                                 | `false`   | false    | Use the internal router 404 page                                      |
| `useLandingPage`              | `boolean`                                                 | `false`   | false    | Use a landing page                                                    |
| `useLoadingOverlay`           | `boolean`                                                 | `false`   | false    | Use the internal loading overlay                                      |
| `useMaintenancePage`          | `boolean`                                                 | `false`   | false    | Use the maintenance page                                              |
| `usePartialSubmit`            | `boolean`                                                 | `false`   | false    | Use the partial submit logic                                          |
| `usePrivacyAgreementPage`     | `boolean`                                                 | `false`   | false    | Use a privacy agreement page                                          |
| `useReviewPage`               | `boolean`                                                 | `false`   | false    | Use a review page after the main flow                                 |
| `callbackLoading`             | `(isLoading: boolean) => void`                            | -         | false    | Callback when the library is loading                                  |
| `maintenanceModeQuery`        | `() => Promise<MaintenanceData>`                          | -         | false    | Query for the maintenance healthcheck                                 |
| `partialSubmitQuery`          | `() => Promise<any>`                                      | `false`   | -        | Query for the partial save                                            |
| `submitQuestionnaire`         | `(questionnaire: IQuestionnaireResponse) => Promise<any>` | -         | true     | Query for the end of the flow when submitting the results             |

### Types used above

#### CMSContextProps

```typescript
interface CMSContextProps {
  [key: string]: any
}
```

#### FormInputComponents

```typescript
interface AddressDetails {
  addressLine1: string
  addressLine2?: string
  cityTown?: string
  fullAddress: string
  mailTown?: string
  postcode: string
  suburb?: string
}

interface AddressAutocompleteInputProps {
  id: string
  isInvalid: boolean
  name: string
  onBlur: () => void
  onClear: () => void
  onSelect: (address: AddressDetails) => void
  value: string
}

interface FormInputComponents {
  AddressAutocompleteInput?: (
          props: AddressAutocompleteInputProps
  ) => JSX.Element
  TextInput?: (
          props: React.InputHTMLAttributes<HTMLTextAreaElement | HTMLInputElement>
  ) => JSX.Element
}
```

#### Input

```typescript
interface Input extends IQuestionnaire_Item {
  indexRepeat?: number
  isFormSection?: boolean
  isLastElemFormSection?: boolean
  linkIdWithParent?: string
  questionnairePosition?: string
}
```

#### MaintenanceData

```typescript
interface MaintenanceData {
  data: {
    inMaintenance: string
    maintenanceMessage: string
  }
  status: number
}
```

## Exposing

- `AddressTypes` => [address type](src/components/formComponents/Address/types.ts)
- `FHIRTypes` => [questionnaire types](src/types/fhir.ts)
- `QuestionnaireRenderer` => [main component](src/QuestionnaireRenderer/QuestionnaireRenderer.tsx)
- `useFormData` => [hook to access the form data](src/components/FormDataProvider/FormDataProvider.tsx)

## Example usage

```typescript jsx
<QuestionnaireRenderer
  basePath={`/${questionnaireId}`}
  cmsData={cms}
  cmsFallback={cmsFallback}
  CompletedPage={<Completed />}
  currentPath={pathname}
  endFlowPath={undefined}
  formInputComponents={{
    AddressAutocompleteInput: ESamWidget,
    TextInput
  }}
  isAuthenticated
  LandingPage={<FormLandingPage />}
  maintenancePollInterval={60000}
  privacyAgreementPageContent={<PrivacyAgreementContent />}
  privacyAgreementInput={{
    extension: [
      {
        url: 'http://hl7.org/fhir/StructureDefinition/validation',
        id: 'validationExtension',
        extension: [
          {
            url: 'http://hl7.org/fhir/StructureDefinition/validationTrueValue',
            id: ValidationExtensions.validationTrueValue,
            valueString:
              'Please tick you have read the privacy statement'
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
  }}
  questionnaireData={questionnaire}
  unauthenticatedPaths={[
    `/${questionnaireId}/`,
    `/${questionnaireId}/privacy/`
  ]}
  useCMS
  useAuthentication={false}
  useCompletedPage
  useFourOhFour
  useLandingPage
  useLoadingOverlay={false}
  useMaintenancePage
  usePartialSubmit={false}
  usePrivacyAgreementPage
  useReviewPage
  callbackLoading={callbackLoading}
  maintenanceModeQuery={maintenanceModeQuery}
  partialSubmitQuery={undefined}
  submitQuestionnaire={submitQuestionnaireQuery}
/>
```

## License

[MIT](LICENSE)