"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pagination = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const PaginationItemPage_1 = require("../PaginationItemPage");
const PaginationNPage_1 = require("../PaginationNPage");
const fenextjs_hook_1 = require("fenextjs-hook");
const Pagination = ({ className = "", classNameItemPage = {}, classNameNPage = {}, showItemPage = true, showNPage = true, listNpage = [
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
], ...props }) => {
    const { _t } = (0, fenextjs_hook_1.use_T)({ ...props });
    const minPage = (0, react_1.useMemo)(() => {
        let m = Infinity;
        listNpage?.forEach((e) => {
            const n = parseInt(`${e?.id ?? ""}`);
            if (n && !Number.isNaN(n)) {
                m = Math.min(m, n);
            }
        });
        return m;
    }, [listNpage]);
    return (react_1.default.createElement("div", { className: `fenext-pagination ${className}` },
        react_1.default.createElement("div", { className: `fenext-pagination-content-item-page ${className}` }, showItemPage && (react_1.default.createElement(PaginationItemPage_1.PaginationItemPage, { ...classNameItemPage, ...props, _t: _t }))),
        react_1.default.createElement("div", { className: `fenext-pagination-content-n-page ${className}` }, showNPage && minPage < (props?.nItems ?? minPage + 1) && (react_1.default.createElement(PaginationNPage_1.PaginationNPage, { ...classNameNPage, ...props, listNpage: listNpage, defaultValue: props?.nItemsPage
                ? listNpage.find((e) => `${e.id}` == `${props?.nItemsPage}`)
                : undefined, _t: _t })))));
};
exports.Pagination = Pagination;
//# sourceMappingURL=index.js.map