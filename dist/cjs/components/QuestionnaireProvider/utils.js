"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enrichQuestionnaireData = exports.enrichItemData = exports.getIndexRepeatable = void 0;
var tslib_1 = require("tslib");
var utils_1 = require("../../utils/utils");
// Find the number of repeatable items
function getIndexRepeatable(items, id, index) {
    return items.slice(0, index + 1).filter(function (i) { return (0, utils_1.getId)(i) === id; }).length - 1;
}
exports.getIndexRepeatable = getIndexRepeatable;
// Enrich the questionnaire items with values for repeatable rules
function enrichItemData(item, linkIdWithParent, index) {
    return item.reduce(function (acc, cur, ind) {
        var id = (0, utils_1.getId)(cur);
        var idWithParent = linkIdWithParent ? "".concat(linkIdWithParent, ".").concat(id) : id;
        // If repeatable add the index
        var repeat;
        if (cur.repeats) {
            repeat = { indexRepeat: getIndexRepeatable(item, id, ind) };
            idWithParent = "".concat(idWithParent, ".").concat(repeat.indexRepeat);
        }
        // Stores the position of the item, in the item array
        var itemPos = "".concat(index !== undefined ? "".concat(index, ".") : '').concat(ind);
        // If it's a group of items, create new answers
        if (cur.item) {
            var newItems = enrichItemData(cur.item, idWithParent, itemPos);
            if (newItems.length === 0)
                return acc;
            return tslib_1.__spreadArray(tslib_1.__spreadArray([], acc, true), [
                tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, cur), repeat), { linkIdWithParent: idWithParent, item: newItems, questionnairePosition: itemPos })
            ], false);
        }
        return tslib_1.__spreadArray(tslib_1.__spreadArray([], acc, true), [
            tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, cur), repeat), { linkIdWithParent: idWithParent, questionnairePosition: itemPos })
        ], false);
    }, []);
}
exports.enrichItemData = enrichItemData;
function enrichQuestionnaireData(quest) {
    var enrichedItems = quest && quest.item ? { item: enrichItemData(quest.item) } : {};
    return tslib_1.__assign(tslib_1.__assign({}, quest), enrichedItems);
}
exports.enrichQuestionnaireData = enrichQuestionnaireData;
//# sourceMappingURL=utils.js.map