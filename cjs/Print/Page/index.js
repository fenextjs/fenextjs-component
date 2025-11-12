"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrintPage = void 0;
const tslib_1 = require("tslib");
const fenextjs_hook_1 = require("fenextjs-hook");
const react_1 = tslib_1.__importStar(require("react"));
const PrintPage = ({ className = "", onComponent, ...props }) => {
    const { data, load } = (0, fenextjs_hook_1.usePrintData)(props);
    const COMPONENT = (0, react_1.useMemo)(() => onComponent?.({ data, load }), [data, load]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-print-page ${className} ` }, COMPONENT)));
};
exports.PrintPage = PrintPage;
