import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '../../../testHelpers/testUtils';
import { Label } from '..';
describe('Label', function () {
    var props;
    beforeEach(function () {
        props = {
            htmlFor: 'testInput'
        };
    });
    it("renders just the label text", function () {
        render(_jsx(Label, __assign({}, props, { children: "Test label" })));
        expect(screen.getByText('Test label')).toBeInTheDocument();
    });
});
//# sourceMappingURL=Label.test.js.map