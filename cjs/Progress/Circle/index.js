"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgressCircle = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const ProgressCircle = ({ className = "", p, showP = true, }) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-progess-circle fenext-progess-circle-${showP ? "show-p" : ""} ${className} `, style: {
                ["--p"]: Math.max(0, Math.min(p, 100)),
            } })));
};
exports.ProgressCircle = ProgressCircle;
//# sourceMappingURL=index.js.map