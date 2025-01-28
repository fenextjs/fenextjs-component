"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const Pagination_1 = require("../Pagination");
const Checkbox_1 = require("../Input/Checkbox");
const DropDown_1 = require("../DropDown");
const Loader_1 = require("../Loader");
const Line_1 = require("../Loader/Line");
const TableActionCheckbox_1 = require("../TableActionCheckbox");
const fenextjs_hook_1 = require("fenextjs-hook");
const Simple_1 = require("../Collapse/Simple");
const Table = ({ classNameContent = "", classNameContentTable = "", classNameTable = "", classNameTHead = "", classNameTBody = "", classNameThr = "", classNameTr = "", classNameTh = "", classNameTd = "", classNameTdLabelCollapse = "", classNameContentPagination = "", classNameLoader = "", name, items, header, pagination, showPagination = true, loader = false, typeLoader = "line", useCheckbox = true, onOrderBy, onChecked, notResult = react_1.default.createElement("div", null, "There is not results"), actionsCheckbox, actionsCheckboxSelectAll = "Select All", ...props }) => {
    const { _t } = (0, fenextjs_hook_1.use_T)({ ...props });
    const checkboxItems = (0, react_1.useMemo)(() => items.map((item) => ({ ...item, __checkbox: false })), [items]);
    const [checkbox, setCheckbox] = (0, react_1.useState)(checkboxItems);
    const onCheckedAll = (v) => {
        const itemsChange = items.map((item) => ({
            ...item,
            __checkbox: v,
        }));
        setCheckbox(itemsChange);
        onChecked?.(itemsChange?.filter((e) => e.__checkbox));
    };
    const onCheckedItem = (i) => (__checkbox) => {
        setCheckbox((pre) => {
            const itemsChange = pre.map((e, j) => {
                return {
                    ...e,
                    ...(i == j
                        ? {
                            __checkbox,
                        }
                        : {}),
                };
            });
            onChecked?.(itemsChange?.filter((e) => e.__checkbox));
            return itemsChange;
        });
    };
    (0, react_1.useEffect)(() => {
        setCheckbox(checkboxItems);
    }, [checkboxItems]);
    const headerNotTr = (0, react_1.useMemo)(() => header.filter((e) => e.colNewTr !== true || e?.isCollapse), [header]);
    const headerTr = (0, react_1.useMemo)(() => header.filter((e) => e.colNewTr === true || e?.isCollapse), [header]);
    const CONTENT = (0, react_1.useMemo)(() => {
        if (loader) {
            if (typeLoader == "spinner") {
                return (react_1.default.createElement("tr", { className: `fenext-table-content-table-tr ${classNameTr}` },
                    react_1.default.createElement("td", { className: `fenext-table-content-table-td ${classNameTd}`, colSpan: 999 },
                        react_1.default.createElement("div", { className: `${classNameLoader}` },
                            react_1.default.createElement(Loader_1.Loader, null)))));
            }
            return new Array(10).fill(1).map((item, i) => (react_1.default.createElement("tr", { key: i * item, className: `fenext-table-content-table-tr ${classNameTr}` },
                useCheckbox && (react_1.default.createElement("td", { key: `${i}-checkbox`, className: `fenext-table-content-table-td ${classNameTd}` },
                    react_1.default.createElement(Checkbox_1.InputCheckbox, { value: false, classNameLabel: "fenext-table-content-table-checkbox" }))),
                headerNotTr.map((h, j) => (react_1.default.createElement("td", { key: `${i}-${j}`, className: `fenext-table-content-table-td ${classNameTd}`, style: {
                        ["--fenext-table-head-th"]: `"${h?.thText ?? h?.th}"`,
                    }, "data-col-id": h?.id, "data-col-text": h?.thText ?? h?.th },
                    react_1.default.createElement(Line_1.LoaderLine, null)))))));
        }
        if (items.length == 0) {
            return (react_1.default.createElement("tr", { className: `fenext-table-content-table-tr ${classNameTr}` },
                react_1.default.createElement("td", { className: `fenext-table-content-table-td fenext-table-not-result ${classNameTd}`, colSpan: 999 }, _t(notResult))));
        }
        return items.map((item, i) => {
            return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("tr", { key: i, className: `fenext-table-content-table-tr ${classNameTr}` },
                    useCheckbox && (react_1.default.createElement("td", { key: `${i}-checkbox`, className: `fenext-table-content-table-td ${classNameTd}` },
                        react_1.default.createElement(Checkbox_1.InputCheckbox, { onChange: onCheckedItem(i), value: checkbox[i]?.__checkbox ?? false, classNameLabel: "fenext-table-content-table-checkbox" }))),
                    headerNotTr.map((h, j) => (react_1.default.createElement("td", { key: `${i}-${j}`, className: `
                                    fenext-table-content-table-td 
                                    fenext-table-content-table-td-${h.isCollapse ? "is-label-collapse" : ""}
                                    ${classNameTd} 
                                    ${h?.className ?? ""}
                                `, style: {
                            ["--fenext-table-head-th"]: `"${h?.thText ?? h?.th}"`,
                        }, "data-col-id": h?.id, "data-col-text": h?.thText ?? h?.th }, h.isCollapse ? (react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement("label", { htmlFor: `table-${name}-${h?.id?.toString()}-${i}`, className: `fenext-table-content-table-td-label-collapse ${classNameTdLabelCollapse}` }, h?.collapseProps?.header))) : (react_1.default.createElement(react_1.default.Fragment, null, h?.parse?.(item) ?? item[h.id] ?? "")))))),
                headerTr.map((new_tr, j) => {
                    return (react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement("tr", { key: `${i}_tr_${j}`, className: `
                                        fenext-table-content-table-tr
                                        fenext-table-content-table-tr-col-new-tr
                                        fenext-table-content-table-tr-${new_tr.isCollapse ? "is-collapse" : ""}
                                        ${classNameTr} 
                                        ${new_tr?.className ?? ""}
                                    ` },
                            react_1.default.createElement("td", { key: `${i}-${j}`, className: `
                                            fenext-table-content-table-td 
                                            fenext-table-content-table-td-col-new-tr
                                            fenext-table-content-table-td-${new_tr.isCollapse ? "is-collapse" : ""}
                                            ${classNameTd}
                                        `, style: {
                                    ["--fenext-table-head-th"]: `"${new_tr?.thText ?? new_tr?.th}"`,
                                }, colSpan: 100, "data-col-id": new_tr?.id, "data-col-text": new_tr?.thText ?? new_tr?.th }, new_tr.isCollapse ? (react_1.default.createElement(react_1.default.Fragment, null,
                                react_1.default.createElement(Simple_1.Collapse, { ...new_tr.collapseProps, header: "", id: `table-${name}-${new_tr?.id?.toString()}-${i}`, name: `table-${name}-${new_tr?.id?.toString()}-${i}`, className: `
                                                            ${new_tr.collapseProps?.className ?? ""}
                                                            fenext-table-content-table-td-collapse
                                                        ` }, new_tr?.parse?.(item) ??
                                    item[new_tr.id] ??
                                    ""))) : (react_1.default.createElement(react_1.default.Fragment, null, new_tr?.parse?.(item) ??
                                item[new_tr.id] ??
                                ""))))));
                })));
        });
    }, [
        items,
        header,
        headerNotTr,
        loader,
        classNameTr,
        classNameTd,
        useCheckbox,
        checkbox,
        typeLoader,
        notResult,
        headerTr,
    ]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-table ${classNameContent}`, style: {
                ["--fenext-table-name"]: `"${name}"`,
            } },
            useCheckbox &&
                checkbox.some((e) => e.__checkbox) &&
                actionsCheckbox && (react_1.default.createElement("div", { className: `fenext-table-content-actions` },
                react_1.default.createElement(TableActionCheckbox_1.TableActionCheckbox, { ...actionsCheckbox, actionAllCheckbox: {
                        label: actionsCheckboxSelectAll,
                        onChange: onCheckedAll,
                        value: checkbox.every((e) => e?.__checkbox ?? false),
                    }, data: checkbox.filter((e) => e.__checkbox) }))),
            react_1.default.createElement("div", { className: `fenext-table-content ${classNameContentTable}` },
                react_1.default.createElement("table", { className: `fenext-table-content-table ${classNameTable}` },
                    react_1.default.createElement("thead", { className: `fenext-table-content-table-thead ${classNameTHead}` },
                        react_1.default.createElement("tr", { className: `fenext-table-content-table-thr ${classNameThr}` },
                            useCheckbox && (react_1.default.createElement("th", { className: `fenext-table-content-table-th ${classNameTh}` },
                                react_1.default.createElement(Checkbox_1.InputCheckbox, { onChange: onCheckedAll, value: checkbox.every((e) => e?.__checkbox ?? false), _t: _t, classNameLabel: "fenext-table-content-table-checkbox" }))),
                            headerNotTr.map((h, i) => (react_1.default.createElement("th", { key: i, className: `fenext-table-content-table-th ${classNameTh} ${h?.className ?? ""}`, "data-col-id": h?.id, "data-col-text": h?.th }, Object.values(h?.columnOptions ?? {}).some((e) => e == true) ? (react_1.default.createElement(DropDown_1.DropDown, { header: react_1.default.createElement(react_1.default.Fragment, null, _t(h.th)), classNameBody: `
                                                      fenext-table-content-table-th-dropdown-body  
                                                    ` }, h?.columnOptions?.orderBy ? (react_1.default.createElement(react_1.default.Fragment, null,
                                react_1.default.createElement("div", { onClick: () => {
                                        onOrderBy?.({
                                            id: h.id,
                                            order: "ASC",
                                        });
                                    }, className: `fenext-table-content-table-th-popup-item fenext-table-content-table-th-order-by` }, _t("Order ASC")),
                                react_1.default.createElement("div", { onClick: () => {
                                        onOrderBy?.({
                                            id: h.id,
                                            order: "DESC",
                                        });
                                    }, className: `fenext-table-content-table-th-popup-item fenext-table-content-table-th-order-by` }, _t("Order DESC")))) : (react_1.default.createElement(react_1.default.Fragment, null)))) : (react_1.default.createElement(react_1.default.Fragment, null, _t(h.th)))))))),
                    react_1.default.createElement("tbody", { className: `fenext-table-content-table-tbody ${classNameTBody}` }, CONTENT))),
            pagination && showPagination && (react_1.default.createElement("div", { className: `fenext-table-content-pagination ${classNameContentPagination}` },
                react_1.default.createElement(Pagination_1.Pagination, { ...pagination, disabled: loader, _t: _t }))))));
};
exports.Table = Table;
//# sourceMappingURL=index.js.map