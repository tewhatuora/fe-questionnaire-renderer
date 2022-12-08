"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useQuestionnaire = exports.QuestionnaireProvider = exports.QuestionnaireContext = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var lodash_get_1 = tslib_1.__importDefault(require("lodash.get"));
var lodash_set_1 = tslib_1.__importDefault(require("lodash.set"));
var react_1 = require("react");
var LoadingProvider_1 = require("../LoadingProvider");
var PopupProvider_1 = require("../PopupProvider");
var PopupProvider_2 = require("../PopupProvider/PopupProvider");
var firstPageUtils_1 = require("./firstPageUtils");
var utils_1 = require("./utils");
exports.QuestionnaireContext = (0, react_1.createContext)({});
function QuestionnaireProvider(_a) {
    var children = _a.children, questionnaireData = _a.questionnaireData, submitQuestionnaire = _a.submitQuestionnaire;
    var setLoading = (0, LoadingProvider_1.useLoading)().setLoading;
    var callPopup = (0, PopupProvider_1.usePopup)().callPopup;
    var _b = (0, react_1.useState)({}), questionnaire = _b[0], setQuestionnaire = _b[1];
    (0, react_1.useEffect)(function () {
        setQuestionnaire((0, utils_1.enrichQuestionnaireData)(questionnaireData));
    }, [questionnaireData]);
    function submitQuestionnaireData(quest, callBack) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        setLoading({
                            isLoading: true,
                            id: LoadingProvider_1.LoadingIds.submit
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
                            type: PopupProvider_2.PopupType.error
                        });
                        return [3 /*break*/, 4];
                    case 4:
                        setLoading({
                            isLoading: false,
                            id: LoadingProvider_1.LoadingIds.submit
                        });
                        return [2 /*return*/];
                }
            });
        });
    }
    var memoized = (0, react_1.useMemo)(function () {
        function setQuestionnaireData(quest) {
            setQuestionnaire((0, utils_1.enrichQuestionnaireData)(quest));
        }
        // To add / or remove a repeatable item, we find the equivalent one and copy it in the item array
        // We also create empty values in the form data
        function addRepeatableItem(id) {
            setQuestionnaire(function (prev) {
                var split = id.split('.');
                var parentPos = split.slice(0, -1).join('.item.');
                var parent = (0, lodash_get_1.default)(prev, "item.".concat(parentPos));
                var itemInd = split[split.length - 1];
                var item = parent.item[itemInd];
                var newQuest = tslib_1.__assign({}, prev);
                (0, lodash_set_1.default)(newQuest, "item.".concat(parentPos), tslib_1.__assign(tslib_1.__assign({}, parent), { item: tslib_1.__spreadArray(tslib_1.__spreadArray(tslib_1.__spreadArray([], parent.item.slice(0, +itemInd + 1), true), [
                        item
                    ], false), parent.item.slice(+itemInd + 1), true) }));
                return (0, utils_1.enrichQuestionnaireData)(newQuest);
            });
        }
        function deleteRepeatableItem(id) {
            setQuestionnaire(function (prev) {
                var split = id.split('.');
                var parentPos = split.slice(0, -1).join('.item.');
                var parent = (0, lodash_get_1.default)(prev, "item.".concat(parentPos));
                var itemInd = split[split.length - 1];
                var newQuest = tslib_1.__assign({}, prev);
                (0, lodash_set_1.default)(newQuest, "item.".concat(parentPos), tslib_1.__assign(tslib_1.__assign({}, parent), { item: tslib_1.__spreadArray(tslib_1.__spreadArray([], parent.item.slice(0, +itemInd), true), parent.item.slice(+itemInd + 1), true) }));
                return (0, utils_1.enrichQuestionnaireData)(newQuest);
            });
        }
        return {
            addRepeatableItem: addRepeatableItem,
            deleteRepeatableItem: deleteRepeatableItem,
            formInitialPagePath: questionnaire ? (0, firstPageUtils_1.findFirstPage)(questionnaire) : '',
            questionnaire: questionnaire,
            setQuestionnaireData: setQuestionnaireData,
            submitQuestionnaireData: submitQuestionnaireData
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [questionnaire]);
    return ((0, jsx_runtime_1.jsx)(exports.QuestionnaireContext.Provider, tslib_1.__assign({ value: memoized }, { children: children })));
}
exports.QuestionnaireProvider = QuestionnaireProvider;
var useQuestionnaire = function () { return (0, react_1.useContext)(exports.QuestionnaireContext); };
exports.useQuestionnaire = useQuestionnaire;
//# sourceMappingURL=QuestionnaireProvider.js.map