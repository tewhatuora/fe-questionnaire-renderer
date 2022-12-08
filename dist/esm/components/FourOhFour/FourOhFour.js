import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
import { ButtonVariantTypes } from '../../types';
import { Button } from '../formComponents';
export default function FourOhFour(_a) {
    var basePath = _a.basePath;
    var navigate = useNavigate();
    function handleClick() {
        navigate(basePath);
    }
    return (_jsxs("div", __assign({ className: 'form' }, { children: [_jsxs("div", __assign({ className: 'margin-bottom-6' }, { children: [_jsx("h2", { children: "We\u2019re sorry. Aroha mai." }), _jsx("h2", { children: "We can\u2019t find that page anywhere." })] })), _jsx(Button, __assign({ variant: ButtonVariantTypes.tertiary, type: 'button', onClick: handleClick }, { children: "Back to home page" }))] })));
}
//# sourceMappingURL=FourOhFour.js.map