"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("@testing-library/react");
var componentWrappers_1 = require("../../../testHelpers/componentWrappers");
var fhir_1 = require("../../../types/fhir");
var __1 = require("..");
describe('DayPicker', function () {
    var props;
    beforeEach(function () {
        props = {
            input: {
                id: 'symptomsStartDate',
                text: 'When did you first start experiencing any of these symptoms?',
                required: true,
                // eslint-disable-next-line no-underscore-dangle
                type: fhir_1.Questionnaire_ItemTypeKind._date
            }
        };
    });
    it('renders the label and input', function () {
        (0, componentWrappers_1.renderWithFormDataProvider)((0, jsx_runtime_1.jsx)(__1.DayPicker, tslib_1.__assign({}, props)));
        expect(react_1.screen.getByText('When did you first start experiencing any of these symptoms?')).toBeInTheDocument();
        // React-dates day picker has the following attribute `aria-label="Calendar"`
        expect(react_1.screen.getByLabelText('Calendar')).toBeInTheDocument();
    });
});
//# sourceMappingURL=DayPicker.test.js.map