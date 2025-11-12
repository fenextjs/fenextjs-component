"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridCols = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const GridCols = ({ className = "", children, colsMin1920, colsMin1680, colsMin1440, colsMin1024, colsMin992, colsMin768, colsMin575, cols = "1fr", }) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-grid-cols ${className} `, style: {
                ["--grid-cols-1920"]: colsMin1920,
                ["--grid-cols-1680"]: colsMin1680,
                ["--grid-cols-1440"]: colsMin1440,
                ["--grid-cols-1024"]: colsMin1024,
                ["--grid-cols-992"]: colsMin992,
                ["--grid-cols-768"]: colsMin768,
                ["--grid-cols-575"]: colsMin575,
                ["--grid-cols"]: cols,
            } }, children)));
};
exports.GridCols = GridCols;
