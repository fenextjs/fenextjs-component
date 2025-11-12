"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loader = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const Loader = ({ classNameLoader = "" }) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-loader ${classNameLoader}` })));
};
exports.Loader = Loader;
