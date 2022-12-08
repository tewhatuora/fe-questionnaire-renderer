"use strict";
/* eslint-disable no-underscore-dangle */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var expr_eval_1 = require("expr-eval");
var lodash_get_1 = tslib_1.__importDefault(require("lodash.get"));
var lodash_omit_1 = tslib_1.__importDefault(require("lodash.omit"));
var fhir_1 = require("../types/fhir");
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
function verifyEnableWhen(values, ews, enableBehavior) {
    var parser = new expr_eval_1.Parser();
    var results = ews.map(function (ew) {
        if (!ew.question)
            return false;
        var val = (0, lodash_get_1.default)(values, ew.question);
        if (val === undefined)
            return false;
        // Each value is a different prop on the ew object (valueString, valueBoolean etc.)
        var toOmit = ['operator', 'question'];
        var valToCompare = Object.values((0, lodash_omit_1.default)(ew, toOmit))[0];
        var expr = getExpression(val, ew);
        var exprParse = parser.parse(expr);
        return exprParse.evaluate({
            $VALUE: val,
            $COMPARE: valToCompare
        });
    });
    if (enableBehavior === fhir_1.Questionnaire_ItemEnableBehaviorKind._all)
        return results.every(function (r) { return r; });
    return results.some(function (r) { return r; });
}
exports.default = verifyEnableWhen;
//# sourceMappingURL=enableWhen.js.map