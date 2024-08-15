"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrintIframe = void 0;
const tslib_1 = require("tslib");
const fenextjs_hook_1 = require("fenextjs-hook");
const react_1 = tslib_1.__importStar(require("react"));
const PrintIframe = ({ className = "", onComponent, ...props }) => {
    const { loader, onPrint } = (0, fenextjs_hook_1.usePrintIframe)(props);
    const COMPONENT = (0, react_1.useMemo)(() => onComponent?.({ loader }), [loader]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-print-iframe ${className} `, onClick: onPrint }, COMPONENT)));
};
exports.PrintIframe = PrintIframe;
//# sourceMappingURL=index.js.map