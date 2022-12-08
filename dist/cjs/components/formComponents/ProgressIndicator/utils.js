"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTitlePage = exports.getStepPageIds = void 0;
var questionnaire_1 = require("../../../utils/questionnaire");
// Returns the ids of all the steps of the form
function getStepPageIds(questionnaire) {
    if (!questionnaire.item)
        return [];
    return questionnaire.item
        .filter(function (i) { return i.item; })
        .map(function (i) { return (0, questionnaire_1.getUrlSection)(i.linkId); });
}
exports.getStepPageIds = getStepPageIds;
// Returns the title of the current page
function getTitlePage(params, quest) {
    if (!quest || !quest.item)
        return null;
    var stepId = params.stepId, pageId = params.pageId;
    var step = quest.item.find(function (i) { return (0, questionnaire_1.getUrlSection)(i.linkId) === stepId; });
    if (step && step.item && pageId) {
        var page = step.item.find(function (i) { return (0, questionnaire_1.getUrlSection)(i.linkId) === pageId; });
        if (page && page.text)
            return page.text;
    }
    if (step && step.text && step.item)
        return step.text;
    return null;
}
exports.getTitlePage = getTitlePage;
//# sourceMappingURL=utils.js.map