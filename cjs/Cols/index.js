"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cols = void 0;
const tslib_1 = require("tslib");
const fenextjs_functions_1 = require("fenextjs-functions");
const react_1 = tslib_1.__importDefault(require("react"));
const Cols = ({ className = "", children, nCols = 2, breakInside = true, _t, }) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-cols fenext-cols-${breakInside ? "break-inside" : ""} ${className} `, style: {
                ["--nCols"]: nCols,
            } }, (0, fenextjs_functions_1._tValidate)(children, _t))));
};
exports.Cols = Cols;
//# sourceMappingURL=index.js.map