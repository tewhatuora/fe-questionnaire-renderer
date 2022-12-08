import { __assign, __awaiter, __generator, __spreadArray } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import get from 'lodash.get';
import set from 'lodash.set';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { LoadingIds, useLoading } from '../LoadingProvider';
import { usePopup } from '../PopupProvider';
import { PopupType } from '../PopupProvider/PopupProvider';
import { findFirstPage } from './firstPageUtils';
import { enrichQuestionnaireData } from './utils';
export var QuestionnaireContext = createContext({});
export function QuestionnaireProvider(_a) {
    var children = _a.children, questionnaireData = _a.questionnaireData, submitQuestionnaire = _a.submitQuestionnaire;
    var setLoading = useLoading().setLoading;
    var callPopup = usePopup().callPopup;
    var _b = useState({}), questionnaire = _b[0], setQuestionnaire = _b[1];
    useEffect(function () {
        setQuestionnaire(enrichQuestionnaireData(questionnaireData));
    }, [questionnaireData]);
    function submitQuestionnaireData(quest, callBack) {
        return __awaiter(this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        setLoading({
                            isLoading: true,
                            id: LoadingIds.submit
                        });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, submitQuestionnaire(quest).then(function () {
                                callBack();
                            })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        callPopup({
                            message: error_1.message,
                            title: 'Something went wrong',
                            type: PopupType.error
                        });
                        return [3 /*break*/, 4];
                    case 4:
                        setLoading({
                            isLoading: false,
                            id: LoadingIds.submit
                        });
                        return [2 /*return*/];
                }
            });
        });
    }
    var memoized = useMemo(function () {
        function setQuestionnaireData(quest) {
            setQuestionnaire(enrichQuestionnaireData(quest));
        }
        // To add / or remove a repeatable item, we find the equivalent one and copy it in the item array
        // We also create empty values in the form data
        function addRepeatableItem(id) {
            setQuestionnaire(function (prev) {
                var split = id.split('.');
                var parentPos = split.slice(0, -1).join('.item.');
                var parent = get(prev, "item.".concat(parentPos));
                var itemInd = split[split.length - 1];
                var item = parent.item[itemInd];
                var newQuest = __assign({}, prev);
                set(newQuest, "item.".concat(parentPos), __assign(__assign({}, parent), { item: __spreadArray(__spreadArray(__spreadArray([], parent.item.slice(0, +itemInd + 1), true), [
                        item
                    ], false), parent.item.slice(+itemInd + 1), true) }));
                return enrichQuestionnaireData(newQuest);
            });
        }
        function deleteRepeatableItem(id) {
            setQuestionnaire(function (prev) {
                var split = id.split('.');
                var parentPos = split.slice(0, -1).join('.item.');
                var parent = get(prev, "item.".concat(parentPos));
                var itemInd = split[split.length - 1];
                var newQuest = __assign({}, prev);
                set(newQuest, "item.".concat(parentPos), __assign(__assign({}, parent), { item: __spreadArray(__spreadArray([], parent.item.slice(0, +itemInd), true), parent.item.slice(+itemInd + 1), true) }));
                return enrichQuestionnaireData(newQuest);
            });
        }
        return {
            addRepeatableItem: addRepeatableItem,
            deleteRepeatableItem: deleteRepeatableItem,
            formInitialPagePath: questionnaire ? findFirstPage(questionnaire) : '',
            questionnaire: questionnaire,
            setQuestionnaireData: setQuestionnaireData,
            submitQuestionnaireData: submitQuestionnaireData
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [questionnaire]);
    return (_jsx(QuestionnaireContext.Provider, __assign({ value: memoized }, { children: children })));
}
export var useQuestionnaire = function () { return useContext(QuestionnaireContext); };
//# sourceMappingURL=QuestionnaireProvider.js.map