import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { screen } from '@testing-library/react';
import { renderWithQuestionnaireProvider } from '../../../testHelpers/componentWrappers';
import { ProgressIndicator } from '..';
jest.mock('react-router-dom', function () { return (__assign(__assign({}, jest.requireActual('react-router-dom')), { useParams: function () { return ({
        stepId: 'step1',
        pageId: 'page1'
    }); } })); });
describe('Progress Indicator', function () {
    it("renders the 3 steps indicators", function () {
        renderWithQuestionnaireProvider(_jsx(ProgressIndicator, {}));
        expect(screen.getByText('1')).toBeInTheDocument();
        expect(screen.getByText('2')).toBeInTheDocument();
        expect(screen.getByText('3')).toBeInTheDocument();
    });
});
//# sourceMappingURL=ProgressIndicator.test.js.map