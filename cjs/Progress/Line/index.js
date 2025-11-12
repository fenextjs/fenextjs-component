"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgressLine = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const ProgressLine = ({ className = "", classNameBar = "", p, showP = true, }) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-progess-line fenext-progess-line-${showP ? "show-p" : ""} ${className} `, style: {
                ["--p"]: Math.max(0, Math.min(p, 100)),
            } },
            react_1.default.createElement("div", { className: `
                    fenext-progess-line-bar ${classNameBar}
                    ` }))));
};
exports.ProgressLine = ProgressLine;
//# sourceMappingURL=index.js.map