"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoaderLine = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const LoaderLine = ({ classNameLoaderLine = "", height = 20, }) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-loader-line ${classNameLoaderLine}`, style: {
                ["--height"]: `${height / 16}rem`,
            } })));
};
exports.LoaderLine = LoaderLine;
