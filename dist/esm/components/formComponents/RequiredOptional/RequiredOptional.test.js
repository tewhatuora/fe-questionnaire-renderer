import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '../../../testHelpers/testUtils';
import { RequiredOptional } from '..';
describe('RequiredOptional', function () {
    var props;
    it("renders just the label text", function () {
        render(_jsx(RequiredOptional, __assign({}, props)));
        expect(screen.queryByText('Optional')).not.toBeInTheDocument();
        expect(screen.queryByText('Required')).not.toBeInTheDocument();
    });
    describe("when the input is 'optional'", function () {
        it("renders the 'optional' text", function () {
            render(_jsx(RequiredOptional, { required: false }));
            expect(screen.queryByText('Required')).not.toBeInTheDocument();
            expect(screen.getByText('Optional')).toBeInTheDocument();
        });
    });
    describe("when the input is 'required'", function () {
        it("renders the 'required' text", function () {
            render(_jsx(RequiredOptional, { required: true }));
            expect(screen.queryByText('Optional')).not.toBeInTheDocument();
            expect(screen.getByText('Required')).toBeInTheDocument();
        });
    });
});
//# sourceMappingURL=RequiredOptional.test.js.map