import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '../../../testHelpers/testUtils';
import { ButtonVariantTypes } from '../../../types';
import { HrefButton } from '..';
describe('Button', function () {
    it('renders the button text', function () {
        render(_jsx(HrefButton, { buttonAttributes: {
                content: 'Click me',
                href: 'https://github.com/',
                variant: ButtonVariantTypes.primary
            } }));
        expect(screen.getByText('Click me')).toBeInTheDocument();
    });
});
//# sourceMappingURL=HrefButton.test.js.map