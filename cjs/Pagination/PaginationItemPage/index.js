"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationItemPage = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const PaginationDown_1 = require("fenextjs-svg/cjs/PaginationDown");
const PaginationNext_1 = require("fenextjs-svg/cjs/PaginationNext");
const PaginationPre_1 = require("fenextjs-svg/cjs/PaginationPre");
const PaginationUp_1 = require("fenextjs-svg/cjs/PaginationUp");
const PaginationItemPage = ({ classNameContent = "", classNameUp = "", classNamePre = "", classNameCurrent = "", classNameCurrentItem = "", classNameNext = "", classNameDown = "", icons = {
    up: react_1.default.createElement(PaginationUp_1.SvgPaginationUp, null),
    pre: react_1.default.createElement(PaginationPre_1.SvgPaginationPre, null),
    next: react_1.default.createElement(PaginationNext_1.SvgPaginationNext, null),
    down: react_1.default.createElement(PaginationDown_1.SvgPaginationDown, null),
}, defaultPage = 0, nItems, nItemsPage = 10, disabled = false, onChangePage, hiddenIfNItemsSmallerThanOrEqualNItemsPage = true, }) => {
    const [page, setPage_] = (0, react_1.useState)(defaultPage);
    const maxPage = (0, react_1.useMemo)(() => (nItemsPage == 0 ? 0 : Math.ceil(nItems / nItemsPage) - 1), [nItems, nItemsPage]);
    const minMaxValue = (v) => {
        return Math.max(0, Math.min(maxPage, v));
    };
    const setPage = (v) => {
        if (disabled) {
            return;
        }
        const Value = minMaxValue(v);
        setPage_(Value);
        onChangePage?.(Value);
    };
    const onSetPage = (e) => () => setPage(e);
    const addPage = (add) => () => {
        setPage(page + add);
    };
    return (react_1.default.createElement("div", { className: `fenext-pagination-item-page ${hiddenIfNItemsSmallerThanOrEqualNItemsPage &&
            nItems <= nItemsPage
            ? "fenext-pagination-item-page-hidden"
            : ""} ${classNameContent} ` },
        page > 0 && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { key: `fenext-pagination-item-page-up`, className: `fenext-pagination-item-page-current-item fenext-pagination-item-page-up ${classNameUp}`, onClick: onSetPage(0) }, icons.up),
            react_1.default.createElement("div", { key: `fenext-pagination-item-page-pre`, className: `fenext-pagination-item-page-current-item fenext-pagination-item-page-pre ${classNamePre}`, onClick: addPage(-1) }, icons.pre))),
        react_1.default.createElement("div", { className: `fenext-pagination-item-page-current ${classNameCurrent}` },
            page > 2 ? (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", { key: `fenext-pagination-item-page-current-item-init`, className: `fenext-pagination-item-page-current-item fenext-pagination-item-page-current-item-init ${classNameCurrentItem}`, onClick: onSetPage(0) }, 1),
                react_1.default.createElement("div", { key: `fenext-pagination-item-page-current-item-init-dog`, className: `fenext-pagination-item-page-current-item fenext-pagination-item-page-current-item-dog ${classNameCurrentItem}` }, "..."))) : (react_1.default.createElement(react_1.default.Fragment, null)),
            new Array(5).fill(1).map((e, i) => {
                const n = e * i - 2 + page;
                if (n < 0 || n > maxPage) {
                    return react_1.default.createElement(react_1.default.Fragment, null);
                }
                return (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("div", { key: `fenext-pagination-item-page-current-item-${i}`, className: `fenext-pagination-item-page-current-item ${n == page
                            ? "fenext-pagination-item-page-current-item-active"
                            : ""} ${classNameCurrentItem}`, onClick: onSetPage(n) }, n + 1)));
            }),
            page < maxPage - 2 ? (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", { key: `fenext-pagination-item-page-current-item-final-dog`, className: `fenext-pagination-item-page-current-item fenext-pagination-item-page-current-item-dog ${classNameCurrentItem}` }, "..."),
                react_1.default.createElement("div", { key: `fenext-pagination-item-page-current-item-final`, className: `fenext-pagination-item-page-current-item  fenext-pagination-item-page-current-item-final ${classNameCurrentItem}`, onClick: onSetPage(maxPage) }, maxPage + 1))) : (react_1.default.createElement(react_1.default.Fragment, null))),
        page < maxPage && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { key: `fenext-pagination-item-page-next`, className: `fenext-pagination-item-page-current-item fenext-pagination-item-page-next ${classNameNext}`, onClick: addPage(1) }, icons.next),
            react_1.default.createElement("div", { key: `fenext-pagination-item-page-down`, className: `fenext-pagination-item-page-current-item fenext-pagination-item-page-down ${classNameDown}`, onClick: onSetPage(maxPage) }, icons.down)))));
};
exports.PaginationItemPage = PaginationItemPage;
//# sourceMappingURL=index.js.map