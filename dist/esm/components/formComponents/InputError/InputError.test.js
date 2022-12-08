import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '../../../testHelpers/testUtils';
import { InputError } from '..';
describe('Button', function () {
    var props;
    beforeEach(function () {
        props = {
            message: 'Some input error',
            name: 'name'
        };
    });
    it('renders the button text', function () {
        render(_jsx(InputError, __assign({}, props)));
        expect(screen.getByText('Some input error')).toBeInTheDocument();
    });
});
//# sourceMappingURL=InputError.test.js.map