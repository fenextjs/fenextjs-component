"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageProgress = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const router_1 = tslib_1.__importDefault(require("next/router"));
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
    router_1.default?.events?.on?.("routeChangeStart", onStart);
    router_1.default?.events?.on?.("routeChangeComplete", onDone);
    router_1.default?.events?.on?.("routeChangeError", onDone);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-page-progress fenext-page-progress-${statusBar} ${className} ` })));
};
exports.PageProgress = PageProgress;
//# sourceMappingURL=index.js.map