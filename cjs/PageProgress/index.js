"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageProgress = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const PageProgress = ({ className = "" }) => {
    const [statusBar, setStatusBar] = (0, react_1.useState)("none");
    const onNone = () => {
        setStatusBar("none");
    };
    const onDone = () => {
        setStatusBar("done");
        setTimeout(onNone, 250);
    };
    const onStart = () => {
        setStatusBar("start");
    };
    (0, react_1.useEffect)(() => {
        const handleStart = () => onStart();
        const handleDone = () => onDone();
        const originalPushState = history.pushState;
        const originalReplaceState = history.replaceState;
        history.pushState = function (...args) {
            handleStart();
            originalPushState.apply(this, args);
            handleDone();
        };
        history.replaceState = function (...args) {
            handleStart();
            originalReplaceState.apply(this, args);
            handleDone();
        };
        window.addEventListener("popstate", handleDone);
        return () => {
            history.pushState = originalPushState;
            history.replaceState = originalReplaceState;
            window.removeEventListener("popstate", handleDone);
        };
    }, []);
    return (react_1.default.createElement("div", { className: `fenext-page-progress fenext-page-progress-${statusBar} ${className}` }));
};
exports.PageProgress = PageProgress;
//# sourceMappingURL=index.js.map