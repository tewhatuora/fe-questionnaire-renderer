import { getUrlSection } from '../../../utils/questionnaire';
// Returns the ids of all the steps of the form
export function getStepPageIds(questionnaire) {
    if (!questionnaire.item)
        return [];
    return questionnaire.item
        .filter(function (i) { return i.item; })
        .map(function (i) { return getUrlSection(i.linkId); });
}
// Returns the title of the current page
export function getTitlePage(params, quest) {
    if (!quest || !quest.item)
        return null;
    var stepId = params.stepId, pageId = params.pageId;
    var step = quest.item.find(function (i) { return getUrlSection(i.linkId) === stepId; });
    if (step && step.item && pageId) {
        var page = step.item.find(function (i) { return getUrlSection(i.linkId) === pageId; });
        if (page && page.text)
            return page.text;
    }
    if (step && step.text && step.item)
        return step.text;
    return null;
}
//# sourceMappingURL=utils.js.map