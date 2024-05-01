"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationNPage = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const Select_1 = require("../../Input/Select");
const PaginationNPage = ({ className = "", defaultValueNpage, listNpage = [
    {
        id: "10",
        text: "10",
    },
    {
        id: "20",
        text: "20",
    },
    {
        id: "50",
        text: "50",
    },
    {
        id: "100",
        text: "100",
    },
    {
        id: "all",
        text: "All",
    },
], onChangeNPage, ...props }) => {
    return (react_1.default.createElement("div", { className: `fenext-pagination-npage ${className}` },
        react_1.default.createElement(Select_1.InputSelect, { ...props, options: listNpage, onChange: onChangeNPage, isSelectChangeText: false, defaultValue: defaultValueNpage ?? listNpage[0] })));
};
exports.PaginationNPage = PaginationNPage;
//# sourceMappingURL=index.js.map