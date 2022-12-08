import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
export function ScrollToTop(_a) {
    var children = _a.children;
    var pathname = useLocation().pathname;
    useEffect(function () {
        window.scrollTo(0, 0);
    }, [pathname]);
    return children;
}
export default ScrollToTop;
//# sourceMappingURL=ScrollToTop.js.map