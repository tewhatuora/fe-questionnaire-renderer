/* eslint-disable no-underscore-dangle */

import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'

import { FormValues, Input } from '../types'

export const API_DATE_FORMAT = 'YYYY-MM-DD'
export const CALENDAR_LABEL_DATE_FORMAT = 'dddd, MMMM D, YYYY'
export const UI_DATE_FORMAT = 'DD/MM/YYYY'

type DateFormats =
  | typeof API_DATE_FORMAT
  | typeof CALENDAR_LABEL_DATE_FORMAT
  | typeof UI_DATE_FORMAT

export function formatDate({
  date,
  inputFormat,
  outputFormat
}: {
  date: string
  inputFormat?: DateFormats
  outputFormat: DateFormats
}): string {
  dayjs.extend(customParseFormat)

  if (inputFormat) {
    return dayjs(date, inputFormat).format(outputFormat)
  }

  return dayjs(date).format(outputFormat)
}

// Change the dotted notation to a _ notation because of FHIR standards
// A conditional input id is often derived of the parent with a dot, messing with the tree
// e.g 1.1.1 conditional of 1.1 but not a child of 1.1
export const transformToSnake = (value: string) => value.replace(/\./g, '_')
export function getId(input: Input): string {
  if (!input.linkId) return ''
  return transformToSnake(input.linkId)
}

// Flatten the form values object
export function flattenValues(formValues: FormValues): any {
  return Object.assign(
    {},
    ...(function flatten(o): any {
      return [].concat(
        ...Object.keys(o).map((k) =>
          typeof o[k] !== 'object' || Array.isArray(o[k])
            ? { [k]: o[k] }
            : flatten(o[k])
        )
      )
    })(formValues)
  )
}

export function flattenObjectToDotted(res: string[], obj: any, current: any) {
  Object.keys(obj).forEach((key) => {
    const value = obj[key]
    const newKey = current ? `${current}.${key}` : key
    if (value && typeof value === 'object') {
      flattenObjectToDotted(res, value, newKey)
    } else if (value !== undefined) {
      res.push(newKey)
    }
  })
}

// Returns an array of all the focusable elements on a page
export function getAllFocusableComponents() {
  const elements =
    '#reset-focus, a[href], button, input, textarea, select, details'
  return Array.prototype.slice.call(document.querySelectorAll(elements))
}

// Returns a promise for timeouts
export function timeout(ms: number) {
  // eslint-disable-next-line no-promise-executor-return
  return new Promise((resolve) => setTimeout(resolve, ms))
}
