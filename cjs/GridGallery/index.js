"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridGallery = void 0;
const tslib_1 = require("tslib");
const fenextjs_functions_1 = require("fenextjs-functions");
const react_1 = tslib_1.__importDefault(require("react"));
const GridGallery = ({ className = "", classNameItem = "", items, _t, }) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-grid-gallery ${className} ` }, items.map((item, i) => {
            return (react_1.default.createElement("div", { key: i, className: `fenext-grid-gallery-item ${classNameItem} ` }, (0, fenextjs_functions_1._tValidate)(item, _t)));
        }))));
};
exports.GridGallery = GridGallery;
//# sourceMappingURL=index.js.map