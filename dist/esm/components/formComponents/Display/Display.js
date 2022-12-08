import { __assign } from "tslib";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import parse from 'html-react-parser';
import get from 'lodash.get';
import ReactMarkdown from 'react-markdown';
import { Extensions } from '../../../types';
import { getExtension } from '../../../utils/extensions';
import { useCMS } from '../../CMSProvider';
import { FormGroupWrapper } from '..';
export default function Display(_a) {
    var _b, _c;
    var input = _a.input;
    var cms = useCMS();
    var name = input.linkIdWithParent || '';
    var cmsExtension = input.extension && getExtension(input, Extensions.cmsExtension);
    var cmsVal = (_c = get(cms, ((_b = cmsExtension === null || cmsExtension === void 0 ? void 0 : cmsExtension.valueCoding) === null || _b === void 0 ? void 0 : _b.display) || '')) === null || _c === void 0 ? void 0 : _c.toString();
    return (_jsx(FormGroupWrapper, __assign({ fieldName: name, input: input, isInvalid: false }, { children: _jsxs(_Fragment, { children: [cmsVal && _jsx("div", __assign({ className: 'content-cms cms-link' }, { children: parse(cmsVal) })), input.text && (_jsx(ReactMarkdown, __assign({ className: 'content-cms cms-link break-spaces' }, { children: input.text.replace(/\\n/g, '\n') || '' })))] }) })));
}
//# sourceMappingURL=Display.js.map