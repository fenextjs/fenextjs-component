"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Theme = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const Theme_1 = require("fenextjs-svg/cjs/Theme");
const Theme_2 = require("fenextjs-interface/cjs/Theme");
const useTheme_1 = require("fenextjs-hook/cjs/useTheme");
const Theme = ({ className = "", classNameItem = "" }) => {
    const { setTheme, theme } = (0, useTheme_1.useTheme)({});
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-theme fenext-theme-current-${theme} ${className} ` }, Theme_2.ThemeConst.map((t, i) => {
            return (react_1.default.createElement("div", { key: i, className: `fenext-theme-item fenext-theme-item-${t} fenext-theme-item-${t == theme ? "active" : ""} ${classNameItem} `, onClick: () => {
                    setTheme(t);
                } },
                react_1.default.createElement(Theme_1.SvgTheme, null)));
        }))));
};
exports.Theme = Theme;
