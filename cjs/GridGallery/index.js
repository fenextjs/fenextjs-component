"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridGallery = void 0;
const tslib_1 = require("tslib");
const fenextjs_hook_1 = require("fenextjs-hook");
const react_1 = tslib_1.__importDefault(require("react"));
const GridGallery = ({ className = "", classNameItem = "", items, ...props }) => {
    const { _t } = (0, fenextjs_hook_1.use_T)({ ...props });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-grid-gallery ${className} ` }, items.map((item, i) => {
            return (react_1.default.createElement("div", { key: i, className: `fenext-grid-gallery-item ${classNameItem} ` }, _t(item)));
        }))));
};
exports.GridGallery = GridGallery;
