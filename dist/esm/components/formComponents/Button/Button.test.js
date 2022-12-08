import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '../../../testHelpers/testUtils';
import { ButtonVariantTypes } from '../../../types';
import { Button } from '..';
describe('Button', function () {
    var props;
    beforeEach(function () {
        props = {
            onClick: jest.fn(),
            type: 'button',
            variant: ButtonVariantTypes.primary
        };
    });
    it('renders the button text', function () {
        render(_jsx(Button, __assign({}, props, { children: "Click me" })));
        expect(screen.getByText('Click me')).toBeInTheDocument();
    });
});
//# sourceMappingURL=Button.test.js.map