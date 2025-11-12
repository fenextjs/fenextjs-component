"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pagination = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const PaginationItemPage_1 = require("../PaginationItemPage");
const PaginationNPage_1 = require("../PaginationNPage");
const fenextjs_hook_1 = require("fenextjs-hook");
const Pagination = ({ className = "", PaginationItemPageProps, PaginationNPageProps = {}, showItemPage = true, showNPage = true, disabled = false, paginationName, ...props }) => {
    const { _t } = (0, fenextjs_hook_1.use_T)({ ...props });
    const minPage = (0, react_1.useMemo)(() => {
        let m = Infinity;
        (PaginationNPageProps?.options ?? PaginationNPage_1.PaginationNPageDefaultOptions)?.forEach((e) => {
            const n = parseInt(`${e ?? ""}`);
            if (n && !Number.isNaN(n)) {
                m = Math.min(m, n);
            }
        });
        return m;
    }, [PaginationNPageProps?.options]);
    return (react_1.default.createElement("div", { className: `fenext-pagination ${className}` },
        react_1.default.createElement("div", { className: `fenext-pagination-content-item-page ${className}` }, showItemPage && (react_1.default.createElement(PaginationItemPage_1.PaginationItemPage, { ...PaginationItemPageProps, _t: _t, disabled: disabled, paginationName: paginationName }))),
        react_1.default.createElement("div", { className: `fenext-pagination-content-n-page ${className}` }, showNPage &&
            minPage <
                (PaginationItemPageProps?.nItems ?? minPage + 1) && (react_1.default.createElement(PaginationNPage_1.PaginationNPage, { ...PaginationNPageProps, ...props, _t: _t, disabled: disabled, paginationName: paginationName })))));
};
exports.Pagination = Pagination;
//# sourceMappingURL=index.js.map