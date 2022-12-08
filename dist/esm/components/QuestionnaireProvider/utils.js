import { __assign, __spreadArray } from "tslib";
import { getId } from '../../utils/utils';
// Find the number of repeatable items
export function getIndexRepeatable(items, id, index) {
    return items.slice(0, index + 1).filter(function (i) { return getId(i) === id; }).length - 1;
}
// Enrich the questionnaire items with values for repeatable rules
export function enrichItemData(item, linkIdWithParent, index) {
    return item.reduce(function (acc, cur, ind) {
        var id = getId(cur);
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
            return __spreadArray(__spreadArray([], acc, true), [
                __assign(__assign(__assign({}, cur), repeat), { linkIdWithParent: idWithParent, item: newItems, questionnairePosition: itemPos })
            ], false);
        }
        return __spreadArray(__spreadArray([], acc, true), [
            __assign(__assign(__assign({}, cur), repeat), { linkIdWithParent: idWithParent, questionnairePosition: itemPos })
        ], false);
    }, []);
}
export function enrichQuestionnaireData(quest) {
    var enrichedItems = quest && quest.item ? { item: enrichItemData(quest.item) } : {};
    return __assign(__assign({}, quest), enrichedItems);
}
//# sourceMappingURL=utils.js.map