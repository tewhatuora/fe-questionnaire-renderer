import { questionnaireFormPath } from '../../QuestionnaireRenderer';
import { getUrlSection } from '../../utils/questionnaire';
// Recursively builds the path to the first page of the form
export function buildPathFirstPage(items, currentPath) {
    if (items[0].item) {
        return buildPathFirstPage(items[0].item, "".concat(currentPath, "/").concat(getUrlSection(items[0].linkId)));
    }
    return currentPath;
}
// Returns the first page of the form
export function findFirstPage(quest) {
    if (!quest || !quest.item)
        return '';
    if (!quest.item[0].item)
        return questionnaireFormPath(getUrlSection(quest.item[0].linkId));
    return buildPathFirstPage(quest.item, questionnaireFormPath());
}
//# sourceMappingURL=firstPageUtils.js.map