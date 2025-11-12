"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwichViewTable = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const SwichViewList_1 = require("../SwichViewList");
const TableBox_1 = require("fenextjs-svg/cjs/View/TableBox");
const TableList_1 = require("fenextjs-svg/cjs/View/TableList");
const SwichViewTable = ({ className = "", defaultValue = "fenext-swich-view-table-list", ...props }) => {
    const ITEMS = [
        {
            id: "fenext-swich-view-table-box",
            icon: react_1.default.createElement(TableBox_1.SvgViewTableBox, null),
        },
        {
            id: "fenext-swich-view-table-list",
            icon: react_1.default.createElement(TableList_1.SvgViewTableList, null),
        },
    ];
    return (react_1.default.createElement(SwichViewList_1.SwichViewList, { ...props, name: "fenext-swich-view-table", className: `fenext-swich-view-table ${className}`, list: ITEMS, defaultValue: defaultValue }));
};
exports.SwichViewTable = SwichViewTable;
