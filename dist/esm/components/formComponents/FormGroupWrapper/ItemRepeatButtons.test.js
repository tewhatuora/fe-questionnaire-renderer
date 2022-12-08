import { jsx as _jsx } from "react/jsx-runtime";
import { screen } from '@testing-library/react';
import { renderWithFormDataProvider } from '../../../testHelpers/componentWrappers';
import ItemRepeatButtons from './ItemRepeatButtons';
describe('Item Repeat Buttons', function () {
    it("renders nothing if no index repeat", function () {
        renderWithFormDataProvider(_jsx(ItemRepeatButtons, { input: { linkIdWithParent: 'test' } }), {}, { test: [] });
        expect(screen.queryByText('Add')).not.toBeInTheDocument();
        expect(screen.queryByText('Delete')).not.toBeInTheDocument();
    });
    it("renders only the add button if the index is 0", function () {
        renderWithFormDataProvider(_jsx(ItemRepeatButtons, { input: { linkIdWithParent: 'testId', indexRepeat: 0 } }), {}, { testId: ['Test'] });
        expect(screen.getByText('Add')).toBeInTheDocument();
        expect(screen.queryByText('Delete')).not.toBeInTheDocument();
    });
    it("renders both buttons when the index is greater than 0", function () {
        renderWithFormDataProvider(_jsx(ItemRepeatButtons, { input: { linkIdWithParent: 'testId', indexRepeat: 1 } }), {}, { testId: ['Test', 'Test2'] });
        expect(screen.getByText('Add')).toBeInTheDocument();
        expect(screen.getByText('Delete')).toBeInTheDocument();
    });
});
//# sourceMappingURL=ItemRepeatButtons.test.js.map