"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
const tslib_1 = require("tslib");
const fenextjs_functions_1 = require("fenextjs-functions");
const react_1 = tslib_1.__importDefault(require("react"));
const Container = ({ className = "", customSize = undefined, usePaddingInline = true, children, _t, }) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-container ${className} ${usePaddingInline
                ? "fenext-container-p"
                : "fenext-container-notp"}`, style: customSize
                ? {
                    ["--fenext-size-container-custom"]: `${customSize / 16}rem`,
                }
                : {} }, (0, fenextjs_functions_1._tValidate)(children, _t))));
};
exports.Container = Container;
//# sourceMappingURL=index.js.map