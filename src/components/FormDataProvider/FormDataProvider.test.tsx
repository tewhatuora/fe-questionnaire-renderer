/* eslint-disable react/jsx-no-constructed-context-values */

import { renderHook, screen } from '@testing-library/react'
import dayjs from 'dayjs'
import { QueryClient, QueryClientProvider } from 'react-query'

import {
  defaultQuestionnaireProviderProps,
  renderWithFormDataProvider
} from '../../testHelpers/componentWrappers'
import { API_DATE_FORMAT } from '../../utils/utils'
import { LoadingProvider } from '../LoadingProvider'
import { QuestionnaireContext } from '../QuestionnaireProvider'
import { defaultPartialSubmitQuery, FormDataProvider, useFormData } from '.'

const queryClient = new QueryClient()
describe(`useFormData`, () => {
  function TestComponent(): JSX.Element {
    const { formData } = useFormData()

    return (
      <div>
        <h1>Form data:</h1>
        <dl>
          <dt>Test 1:</dt>
          <dd>{formData?.step1 || 'Not found'}</dd>
          <dt>Test 2:</dt>
          <dd>{formData?.step2 || 'Not found'}</dd>
          <dt>Test 3:</dt>
          <dd>{formData?.step3 || 'Not found'}</dd>
        </dl>
      </div>
    )
  }

  describe(`with form data`, () => {
    it(`renders the form data`, () => {
      renderWithFormDataProvider(
        <QueryClientProvider client={queryClient}>
          <TestComponent />{' '}
        </QueryClientProvider>,
        {},
        {
          step1: 'step1',
          step2: 'step2'
        }
      )

      expect(screen.getByText('Form data:')).toBeInTheDocument()

      expect(screen.getByText('Test 1:')).toBeInTheDocument()
      expect(screen.getByText('step1')).toBeInTheDocument()

      expect(screen.getByText('Test 2:')).toBeInTheDocument()
      expect(screen.getByText('step2')).toBeInTheDocument()

      expect(screen.getByText('Test 3:')).toBeInTheDocument()
      expect(screen.getByText('Not found')).toBeInTheDocument()
    })
  })

  describe(`transformFormValues`, () => {
    const wrapper = ({ children }: { children: JSX.Element }) => {
      return (
        <QueryClientProvider client={queryClient}>
          <LoadingProvider
            callbackLoading={() => undefined}
            useLoadingOverlay={false}
          >
            <QuestionnaireContext.Provider
              value={{
                ...defaultQuestionnaireProviderProps,
                formInitialPagePath: '',
                submitQuestionnaireData: () => undefined
              }}
            >
              <FormDataProvider
                partialSubmit={defaultPartialSubmitQuery}
                usePartialSubmit={false}
              >
                {children}
              </FormDataProvider>
            </QuestionnaireContext.Provider>
          </LoadingProvider>
        </QueryClientProvider>
      )
    }

    it(`returns formValues ready to submit to API`, async () => {
      const { result } = renderHook(() => useFormData(), {
        wrapper
      })

      const transformFormValues = result.current.transformFormValues()
      expect(transformFormValues).not.toBeNull()

      const expectedResponse = {
        author: {
          display: 'Dottie McStuffins',
          identifier: {
            system: 'https://xxx',
            use: 'official',
            value: 'xxx'
          },
          type: 'Practitioner'
        },
        authored: dayjs().format(API_DATE_FORMAT),
        encounter: {
          reference: 'Encounter/{{T-EncounterId}}'
        },
        questionnaire: 'testUrl',
        resourceType: 'QuestionnaireResponse',
        source: {
          display: 'Carey Carrington',
          identifier: {
            system: 'https://xxx',
            use: 'official',
            value: 'xxx'
          },
          type: 'Patient'
        },
        status: 'completed',
        subject: {
          display: 'Carey Carrington',
          identifier: {
            system: 'https://xxx',
            use: 'official',
            value: 'xxx'
          },
          type: 'Patient'
        },
        item: [
          {
            item: [
              {
                item: [
                  {
                    answer: [
                      {
                        valueBoolean: ''
                      }
                    ],
                    linkId: 'step1.page1.input1',
                    text: 'Are you happy?'
                  },
                  {
                    answer: [
                      {
                        valueString: ''
                      }
                    ],
                    linkId: 'step1.page1.input3',
                    text: 'How happy?'
                  },
                  {
                    answer: [
                      {
                        valueString: ''
                      }
                    ],
                    linkId: 'step1.page1.input4',
                    text: 'First name:'
                  },
                  {
                    item: [
                      {
                        answer: [
                          {
                            valueString: ''
                          }
                        ],
                        linkId: 'step1.page1.input5a',
                        text: 'Reason:'
                      },
                      {
                        answer: [
                          {
                            valueBoolean: ''
                          }
                        ],
                        linkId: 'step1.page1.input5b',
                        text: 'Still sad:'
                      }
                    ],
                    linkId: 'step1.page1.input5'
                  }
                ],
                linkId: 'step1.page1',
                text: 'Page 1'
              }
            ],
            linkId: 'step1',
            text: 'Step 1'
          },
          {
            item: [
              {
                answer: [
                  {
                    valueString: ''
                  }
                ],
                linkId: 'step2.input4',
                text: 'Last name:'
              },
              {
                answer: [
                  {
                    valueDate: ''
                  }
                ],
                linkId: 'step2.input5',
                text: 'Symptoms date:'
              }
            ],
            linkId: 'step2',
            text: 'Step 2'
          },
          {
            item: [
              {
                answer: [
                  {
                    valueString: ''
                  }
                ],
                linkId: 'step3.input7',
                text: 'Comments:'
              }
            ],
            linkId: 'step3',
            text: 'Step 3'
          },
          {
            item: [
              {
                item: [
                  {
                    answer: [
                      {
                        valueString: ''
                      }
                    ],
                    linkId: 'step4.input9a',
                    text: 'Text input test:'
                  },
                  {
                    answer: [
                      {
                        valueString: ''
                      }
                    ],
                    linkId: 'step4.input9b',
                    text: 'Text input test second:'
                  }
                ],
                linkId: 'step4.input9'
              },
              {
                item: [
                  {
                    answer: [
                      {
                        valueDate: ''
                      }
                    ],
                    linkId: 'step4.input10a',
                    text: 'Day picker test:'
                  }
                ],
                linkId: 'step4.input10'
              },
              {
                item: [
                  {
                    answer: [
                      {
                        valueString: ''
                      }
                    ],
                    linkId: 'step4.input11a',
                    text: 'Radio test:'
                  }
                ],
                linkId: 'step4.input11'
              },
              {
                item: [
                  {
                    answer: [
                      {
                        valueString: ''
                      }
                    ],
                    linkId: 'step4.input12a',
                    text: 'Checkbox test:'
                  }
                ],
                linkId: 'step4.input12'
              },
              {
                item: [
                  {
                    answer: [
                      {
                        valueBoolean: ''
                      }
                    ],
                    linkId: 'step4.input13a',
                    text: 'Boolean test:'
                  }
                ],
                linkId: 'step4.input13'
              },
              {
                item: [
                  {
                    answer: [
                      {
                        valueString: undefined
                      }
                    ],
                    linkId: 'step4.input14a',
                    text: 'Phone number test:'
                  }
                ],
                linkId: 'step4.input14'
              },
              {
                item: [
                  {
                    answer: [
                      {
                        valueDate: ''
                      }
                    ],
                    linkId: 'step4.input16a',
                    text: 'Date input test:'
                  }
                ],
                linkId: 'step4.input16'
              },
              {
                item: [
                  {
                    answer: [
                      {
                        valueString: ''
                      }
                    ],
                    linkId: 'step4.input17a',
                    text: 'Address test:'
                  }
                ],
                linkId: 'step4.input17'
              },
              {
                item: [
                  {
                    answer: [
                      {
                        valueString: ''
                      }
                    ],
                    linkId: 'step4.input18a',
                    text: 'Checkbox with no option test:'
                  }
                ],
                linkId: 'step4.input18'
              },
              {
                item: [
                  {
                    answer: [
                      {
                        valueDate: ''
                      }
                    ],
                    linkId: 'step4.input19a',
                    text: 'Date of birth test:'
                  }
                ],
                linkId: 'step4.input19'
              },
              {
                item: [
                  {
                    answer: [
                      {
                        valueBoolean: ''
                      }
                    ],
                    linkId: 'step4.input20a',
                    text: 'Solo checkbox test'
                  }
                ],
                linkId: 'step4.input20'
              }
            ],
            linkId: 'step4',
            text: 'Step 4'
          }
        ]
      }

      expect(transformFormValues).toEqual(expectedResponse)
    })
  })
})
