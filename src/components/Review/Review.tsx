/* eslint-disable no-underscore-dangle */

import moment from 'moment'

import { Extensions, Input } from '../../types'
import { Questionnaire_ItemTypeKind } from '../../types/fhir'
import verifyEnableWhen from '../../utils/enableWhen'
import { isExtension, isPhoneExtension } from '../../utils/extensions'
import { CALENDAR_LABEL_DATE_FORMAT } from '../../utils/utils'
import { Accordion } from '../formComponents'
import { useFormData } from '../FormDataProvider'
import TextValue from './TextValue'

interface Props {
  basePath: string
  input: Input
}

function ReviewArray(val: string[]) {
  if (!val) return undefined

  return (
    <ul style={{ paddingLeft: 32 }}>
      {/* eslint-disable-next-line react/destructuring-assignment */}
      {val.map((v, ind) => (
        <li key={ind}>{v}</li>
      ))}
    </ul>
  )
}

export default function Review({ basePath, input }: Props): JSX.Element | null {
  const { formData } = useFormData()

  if (!formData) return null

  // Don't display the accordion if the step is not enabled
  if (input.enableWhen) {
    if (!verifyEnableWhen(formData, input.enableWhen, input.enableBehavior))
      return <div />
  }
  // Don't display the accordion if the step is not a group
  if (input.type !== Questionnaire_ItemTypeKind._group) {
    return <div />
  }

  const getReviewComponent = (
    reviewInput: Input
  ): JSX.Element | null | any[] => {
    switch (reviewInput.type) {
      case Questionnaire_ItemTypeKind._boolean:
        return (
          <TextValue
            basePath={basePath}
            formatValue={(val) => (val ? 'Yes' : 'No')}
            input={reviewInput}
          />
        )
      case Questionnaire_ItemTypeKind._choice:
        return <TextValue basePath={basePath} input={reviewInput} />
      case Questionnaire_ItemTypeKind._date:
        return (
          <TextValue
            basePath={basePath}
            formatValue={(val) =>
              moment(val).format(CALENDAR_LABEL_DATE_FORMAT)
            }
            input={reviewInput}
          />
        )
      case Questionnaire_ItemTypeKind._display:
        return null
      case Questionnaire_ItemTypeKind._group:
        if (!reviewInput.item) return null
        if (!reviewInput.text)
          return reviewInput.item.map((i, ind) => (
            <div key={`${reviewInput.linkId}${ind}}`}>
              {getReviewComponent(i)}
            </div>
          ))
        return (
          <div key={reviewInput.linkId}>
            <Review basePath={basePath} input={reviewInput} />
          </div>
        )
      case Questionnaire_ItemTypeKind._openChoice:
        if (isExtension(reviewInput, Extensions.checkboxGroupWithNoOption)) {
          const valNo = reviewInput.extension?.find(
            (e) => e.id === Extensions.noOptionExtension
          )?.valueString
          return (
            <TextValue
              basePath={basePath}
              formatValue={(val) => {
                return !val || val.length === 0 ? valNo : ReviewArray(val)
              }}
              input={reviewInput}
            />
          )
        }
        if (isExtension(reviewInput, Extensions.soloCheckboxExtension)) {
          return (
            <TextValue
              basePath={basePath}
              formatValue={(val) => (val ? 'Yes' : 'No')}
              input={reviewInput}
            />
          )
        }
        return (
          <TextValue
            basePath={basePath}
            formatValue={ReviewArray}
            input={reviewInput}
          />
        )
      case Questionnaire_ItemTypeKind._string:
        if (isPhoneExtension(reviewInput)) {
          return (
            <TextValue
              basePath={basePath}
              formatValue={(val) => val.number}
              input={reviewInput}
            />
          )
        }
        return <TextValue basePath={basePath} input={reviewInput} />
      case Questionnaire_ItemTypeKind._text:
        return <TextValue basePath={basePath} input={reviewInput} />
      default:
        return null
    }
  }

  const buildAccordionDetails = () => {
    if (!input.item) return <div />
    const details = input.item.map((i) => {
      // Check if the item should be displayed
      if (i.enableWhen) {
        if (!verifyEnableWhen(formData, i.enableWhen)) return undefined
      }
      return getReviewComponent(i)
    })

    if (!details.some((s) => s)) return undefined
    return (
      <div>
        {details.map((d, dInd) => {
          return <div key={dInd}>{d}</div>
        })}
      </div>
    )
  }

  const buildAccordionSummary = () => {
    return input.text || ''
  }

  const accordionData = [
    {
      id: 'review',
      details: buildAccordionDetails(),
      summary: buildAccordionSummary()
    }
  ]

  return (
    <div className='form-group'>
      <Accordion data={accordionData} />
    </div>
  )
}
