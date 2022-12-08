import { __assign } from "tslib";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Extensions } from '../../../types';
import { getExtension } from '../../../utils/extensions';
import { useQuestionnaire } from '../../QuestionnaireProvider';
import { getStepPageIds, getTitlePage } from './utils';
export default function ProgressIndicator() {
    var questionnaire = useQuestionnaire().questionnaire;
    var params = useParams();
    var stepId = params.stepId;
    var title = useMemo(function () {
        if (!questionnaire)
            return null;
        return getTitlePage(params, questionnaire);
    }, [params, questionnaire]);
    var _a = useMemo(function () {
        return {
            displayProgressIndicator: questionnaire &&
                !!(questionnaire.extension &&
                    !!getExtension(questionnaire, Extensions.progressIndicatorExtension)),
            arrayIds: questionnaire ? getStepPageIds(questionnaire) : []
        };
    }, [questionnaire]), displayProgressIndicator = _a.displayProgressIndicator, arrayIds = _a.arrayIds;
    var currentStepIndex = arrayIds.indexOf(stepId || '');
    if (!questionnaire || !title)
        return null;
    return (_jsxs(_Fragment, { children: [_jsx("h1", __assign({ className: 'size-h1 page-title' }, { children: title })), displayProgressIndicator ? (_jsx("nav", __assign({ "aria-hidden": true }, { children: _jsx("ul", __assign({ className: 'step-list' }, { children: arrayIds.map(function (id, i) {
                        var isStepComplete = currentStepIndex >= i;
                        return (_jsx("li", __assign({ className: "step".concat(isStepComplete ? ' step-complete' : '') }, { children: _jsx("span", __assign({ className: 'step-text' }, { children: i + 1 })) }), id));
                    }) })) }))) : null] }));
}
//# sourceMappingURL=ProgressIndicator.js.map