import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '../../../testHelpers/testUtils';
import Accordion from './Accordion';
describe("Accordion", function () {
    var props;
    beforeEach(function () {
        props = {
            data: [
                {
                    id: 'summary1',
                    summary: 'Summary 1',
                    details: 'A bit of detail for the first summary'
                },
                {
                    id: 'summary2',
                    summary: 'Summary 2',
                    details: 'Expanding further on the second summary'
                }
            ]
        };
    });
    it("renders the summary points and their details", function () {
        render(_jsx(Accordion, __assign({}, props)));
        expect(screen.getByRole('button', { name: 'Summary 1' })).toBeInTheDocument();
        expect(screen.getByText('A bit of detail for the first summary')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Summary 2' })).toBeInTheDocument();
        expect(screen.getByText('Expanding further on the second summary')).toBeInTheDocument();
    });
    it("renders an element as accordion details", function () {
        props = {
            data: [
                {
                    id: 'summaryTest',
                    summary: 'Summary test element',
                    details: _jsx("span", { children: "Test details element" })
                }
            ]
        };
        render(_jsx(Accordion, __assign({}, props)));
        expect(screen.getByRole('button', { name: 'Summary test element' })).toBeInTheDocument();
        expect(screen.getByText('Test details element')).toBeInTheDocument();
    });
});
//# sourceMappingURL=Accordion.test.js.map