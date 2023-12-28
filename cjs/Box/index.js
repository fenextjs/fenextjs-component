"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Box = void 0;
const tslib_1 = require("tslib");
const fenextjs_functions_1 = require("fenextjs-functions");
const react_1 = tslib_1.__importDefault(require("react"));
const Box = ({ className = "", children, _t }) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-box ${className} ` }, (0, fenextjs_functions_1._tValidate)(children, _t))));
};
exports.Box = Box;
//# sourceMappingURL=index.js.map