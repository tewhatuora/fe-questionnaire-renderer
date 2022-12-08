"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findFirstPage = exports.buildPathFirstPage = void 0;
var QuestionnaireRenderer_1 = require("../../QuestionnaireRenderer");
var questionnaire_1 = require("../../utils/questionnaire");
// Recursively builds the path to the first page of the form
function buildPathFirstPage(items, currentPath) {
    if (items[0].item) {
        return buildPathFirstPage(items[0].item, "".concat(currentPath, "/").concat((0, questionnaire_1.getUrlSection)(items[0].linkId)));
    }
    return currentPath;
}
exports.buildPathFirstPage = buildPathFirstPage;
// Returns the first page of the form
function findFirstPage(quest) {
    if (!quest || !quest.item)
        return '';
    if (!quest.item[0].item)
        return (0, QuestionnaireRenderer_1.questionnaireFormPath)((0, questionnaire_1.getUrlSection)(quest.item[0].linkId));
    return buildPathFirstPage(quest.item, (0, QuestionnaireRenderer_1.questionnaireFormPath)());
}
exports.findFirstPage = findFirstPage;
//# sourceMappingURL=firstPageUtils.js.map