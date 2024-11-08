"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwichViewSelect = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const SwichViewList_1 = require("../SwichViewList");
const SelectBox_1 = require("fenextjs-svg/cjs/View/SelectBox");
const SelectList_1 = require("fenextjs-svg/cjs/View/SelectList");
const SelectNormal_1 = require("fenextjs-svg/cjs/View/SelectNormal");
const SwichViewSelect = ({ className = "", defaultValue = "fenext-swich-view-select-normal", ...props }) => {
    const ITEMS = [
        {
            id: "fenext-swich-view-select-box",
            icon: react_1.default.createElement(SelectBox_1.SvgSelectBox, null),
        },
        {
            id: "fenext-swich-view-select-list",
            icon: react_1.default.createElement(SelectList_1.SvgSelectList, null),
        },
        {
            id: "fenext-swich-view-select-normal",
            icon: react_1.default.createElement(SelectNormal_1.SvgSelectNormal, null),
        },
    ];
    return (react_1.default.createElement(SwichViewList_1.SwichViewList, { ...props, name: "fenext-swich-view-select", className: `fenext-swich-view-select ${className}`, list: ITEMS, defaultValue: defaultValue }));
};
exports.SwichViewSelect = SwichViewSelect;
//# sourceMappingURL=index.js.map