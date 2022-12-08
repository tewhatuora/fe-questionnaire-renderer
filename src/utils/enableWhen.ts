/* eslint-disable no-underscore-dangle */

import { Parser, Value } from 'expr-eval'
import get from 'lodash.get'
import omit from 'lodash.omit'

import { FormValues } from '../types'
import {
  IQuestionnaire_EnableWhen,
  Questionnaire_ItemEnableBehaviorKind
} from '../types/fhir'

// Transforms the fhir operators to an expr-eval expression
function getExpression(val: any, ew: IQuestionnaire_EnableWhen) {
  if (Array.isArray(val)) {
    if (ew.operator === '=') {
      // 'in' operator to get an element in an array
      return `$COMPARE in $VALUE`
    }
    if (ew.operator === '!=') {
      // 'not in' operator to see an element is not in an array
      return `$COMPARE not in $VALUE`
    }
    return `$COMPARE not in $VALUE`
  }
  if (ew.operator === '=') {
    // The = operator is == in expr-eval. Rewrite when more operators will be used
    return `$VALUE == $COMPARE`
  }
  return `$VALUE ${ew.operator} $COMPARE`
}

// Returns if an item is enabled based on its conditions
export default function verifyEnableWhen(
  values: FormValues,
  ews: IQuestionnaire_EnableWhen[],
  enableBehavior?: Questionnaire_ItemEnableBehaviorKind
): boolean {
  const parser = new Parser()

  const results = ews.map((ew) => {
    if (!ew.question) return false

    const val = get(values, ew.question)
    if (val === undefined) return false

    // Each value is a different prop on the ew object (valueString, valueBoolean etc.)
    const toOmit = ['operator', 'question']
    const valToCompare = Object.values(omit(ew, toOmit))[0]

    const expr = getExpression(val, ew)
    const exprParse = parser.parse(expr)
    return exprParse.evaluate({
      $VALUE: val as Value,
      $COMPARE: valToCompare as Value
    })
  })

  if (enableBehavior === Questionnaire_ItemEnableBehaviorKind._all)
    return results.every((r) => r)
  return results.some((r) => r)
}
