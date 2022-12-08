/* eslint-disable no-underscore-dangle */
import { Parser } from 'expr-eval';
import get from 'lodash.get';
import omit from 'lodash.omit';
import { Questionnaire_ItemEnableBehaviorKind } from '../types/fhir';
// Transforms the fhir operators to an expr-eval expression
function getExpression(val, ew) {
    if (Array.isArray(val)) {
        if (ew.operator === '=') {
            // 'in' operator to get an element in an array
            return "$COMPARE in $VALUE";
        }
        if (ew.operator === '!=') {
            // 'not in' operator to see an element is not in an array
            return "$COMPARE not in $VALUE";
        }
        return "$COMPARE not in $VALUE";
    }
    if (ew.operator === '=') {
        // The = operator is == in expr-eval. Rewrite when more operators will be used
        return "$VALUE == $COMPARE";
    }
    return "$VALUE ".concat(ew.operator, " $COMPARE");
}
// Returns if an item is enabled based on its conditions
export default function verifyEnableWhen(values, ews, enableBehavior) {
    var parser = new Parser();
    var results = ews.map(function (ew) {
        if (!ew.question)
            return false;
        var val = get(values, ew.question);
        if (val === undefined)
            return false;
        // Each value is a different prop on the ew object (valueString, valueBoolean etc.)
        var toOmit = ['operator', 'question'];
        var valToCompare = Object.values(omit(ew, toOmit))[0];
        var expr = getExpression(val, ew);
        var exprParse = parser.parse(expr);
        return exprParse.evaluate({
            $VALUE: val,
            $COMPARE: valToCompare
        });
    });
    if (enableBehavior === Questionnaire_ItemEnableBehaviorKind._all)
        return results.every(function (r) { return r; });
    return results.some(function (r) { return r; });
}
//# sourceMappingURL=enableWhen.js.map