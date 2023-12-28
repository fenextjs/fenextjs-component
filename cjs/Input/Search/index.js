"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputSearch = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const search_1 = require("fenextjs-svg/cjs/search");
const close_1 = require("fenextjs-svg/cjs/close");
const fenextjs_hook_1 = require("fenextjs-hook");
const Title_1 = require("../../Title");
const SelectOption_1 = require("../SelectOption");
const Text_1 = require("../Text");
const Button_1 = require("../../Button");
const fenextjs_functions_1 = require("fenextjs-functions");
const InputSearch = ({ classNameSearch = "", classNameSearchBg = "", classNameSearchContentResult = "", classNameSearchResult = "", placeholder = "Search", icon = react_1.default.createElement(search_1.SVGSearch, null), loader = false, onSearch, onChange, onClickSearch, onEnterSearch, useLoseFocusInEnter = true, defaultValue = undefined, value = undefined, useResult = false, useLoadMore = true, ButtonLoadMoreProps = {
    children: "Load More",
}, onLoadMore: onLoadMore_, useSearchFixed = false, useTabFilter = false, resultList = undefined, resultEmpty = (react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement(Title_1.Title, { tag: "h4" }, "Not Results"))), resultPreSearch = (react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement(Title_1.Title, { tag: "h4" }, "Search"))), listTabFilter = [], defaultTabFilterSelected = [], onChangeTabFilterSelected, selectMultipleTabFilter = false, iconPos = "left", _t, ...props }) => {
    const SEARCH = (0, react_1.useRef)(null);
    const BG = (0, react_1.useRef)(null);
    const { data: listTabFilterSelected, onDeleteData: onDeleteTabFilter, onConcatData: onAddTabFilter, setData: setTabFilter, } = (0, fenextjs_hook_1.useData)(defaultTabFilterSelected, {
        onChangeDataAfter: (d) => {
            onChangeTabFilterSelected?.(d);
        },
    });
    const [searchText, setSearchText] = (0, react_1.useState)(defaultValue);
    const [loaderSearch, setLoaderSearch] = (0, react_1.useState)(false);
    const { dataMemo: resultSearch, setData: setResultSearch } = (0, fenextjs_hook_1.useData)(resultList ?? [], {
        data: resultList,
        onMemo: (d) => {
            return resultList ?? d ?? [];
        },
    });
    const onSearchFetch = async (v, l = undefined) => {
        if (onSearch) {
            const r = await onSearch(v, l ?? listTabFilterSelected);
            setResultSearch(r);
        }
    };
    const onSearch_ = async (v, l = undefined) => {
        onChange?.(v);
        setSearchText(v);
        if (onSearch) {
            setLoaderSearch(true);
            try {
                await onSearchFetch(v, l);
            }
            finally {
                setLoaderSearch(false);
            }
        }
    };
    const onSearchTabFilter = async (l = undefined) => {
        setResultSearch([]);
        await onSearch_("", l);
    };
    const onFocusClickSearch = () => {
        if (SEARCH) {
            const input = SEARCH.current?.querySelector(".fenext-input-content-input");
            input?.click();
            input?.focus();
        }
    };
    const onClickTabFilter = (tab) => () => {
        if (selectMultipleTabFilter) {
            onAddTabFilter([tab]);
            onSearchTabFilter([...listTabFilterSelected, tab]);
        }
        else {
            setTabFilter([tab]);
            onSearchTabFilter([tab]);
        }
        onFocusClickSearch();
    };
    const onClickDeleteTabFilter = (i) => () => {
        const n = [...listTabFilterSelected];
        onDeleteTabFilter(i);
        onSearchTabFilter(n.filter((e, j) => e && j != i));
        onFocusClickSearch();
    };
    const onClearSearh = () => {
        setTabFilter([]);
        setSearchText("");
        onSearchTabFilter([]);
        onFocusClickSearch();
    };
    const onLoadMore = () => {
        onLoadMore_?.();
        onFocusClickSearch();
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { ref: SEARCH, className: `fenext-input-search ${classNameSearch} ${useResult
                ? "fenext-input-search-use-result"
                : "fenext-input-search-not-use-result"} 
                    ${selectMultipleTabFilter
                ? "fenext-input-search-multiple-tabs"
                : "fenext-input-search-single-tabs"}
                
                    ${useSearchFixed ? "fenext-input-search-fixed-focus" : ""}
                ` },
            react_1.default.createElement("input", { type: "checkbox", ref: BG, className: "fenext-input-search-checkbox" }),
            react_1.default.createElement("div", { className: `fenext-input-search-bg ${classNameSearchBg} ` }),
            react_1.default.createElement(Text_1.InputText, { ...props, _t: _t, placeholder: placeholder, iconPos: iconPos, icon: icon, onChange: onSearch_, loader: loaderSearch || loader, value: value ?? searchText, onEnter: () => {
                    onEnterSearch?.(searchText ?? "");
                    if (useLoseFocusInEnter) {
                        BG?.current?.click?.();
                        BG?.current?.focus?.();
                    }
                    props?.onEnter?.();
                }, extraInContentInput: react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("div", { className: "fenext-input-search-content-tabs fenext-input-search-content-tabs-selected" }, listTabFilterSelected.map((item, i) => {
                        if (!item) {
                            return react_1.default.createElement(react_1.default.Fragment, null);
                        }
                        return (react_1.default.createElement(SelectOption_1.InputSelectOption, { key: `${i}_item_selected_${item.id}`, onDelete: onClickDeleteTabFilter(i), onClick: onFocusClickSearch, type: "multiple", iconDelete: react_1.default.createElement(close_1.Close, null), ...item, _t: _t }));
                    })),
                    react_1.default.createElement("div", { className: "fenext-input-search-clear", onClick: onClearSearh },
                        react_1.default.createElement(close_1.Close, null))) }),
            useResult && (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", { className: `fenext-input-search-content-result ${classNameSearchContentResult} ` },
                    useTabFilter ? (react_1.default.createElement("div", { className: "fenext-input-search-content-tabs" }, listTabFilter.map((item, i) => {
                        const existTab = listTabFilterSelected.find((e) => e && e?.id == item?.id) != undefined;
                        if (existTab) {
                            return react_1.default.createElement(react_1.default.Fragment, null);
                        }
                        return (react_1.default.createElement(SelectOption_1.InputSelectOption, { key: `${i}_item_${item.id}`, onClick: onClickTabFilter(item), ...item, _t: _t }));
                    }))) : (react_1.default.createElement(react_1.default.Fragment, null)),
                    resultSearch.map((item, i) => {
                        return (react_1.default.createElement("div", { key: i, className: `fenext-input-search-result ${classNameSearchResult} `, onClick: () => {
                                onClickSearch?.(item);
                                setSearchText(item.text);
                            } }, (0, fenextjs_functions_1._tValidate)(item?.content ?? item?.text, _t)));
                    }),
                    resultSearch.length == 0 ? (react_1.default.createElement(react_1.default.Fragment, null, searchText === undefined ||
                        loader ||
                        loaderSearch ? (react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement("div", { className: `fenext-input-search-content-result-pre-search ` }, (0, fenextjs_functions_1._tValidate)(resultPreSearch, _t)))) : (react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement("div", { className: `fenext-input-search-content-result-empty ` }, (0, fenextjs_functions_1._tValidate)(resultEmpty, _t)))))) : (react_1.default.createElement(react_1.default.Fragment, null, useLoadMore ? (react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement("div", { className: "fenext-input-search-content-load-more " },
                            react_1.default.createElement(Button_1.Button, { ...ButtonLoadMoreProps, onClick: onLoadMore, _t: _t, className: `fenext-input-search-load-more ${ButtonLoadMoreProps?.className ??
                                    ""}` })))) : (react_1.default.createElement(react_1.default.Fragment, null))))))))));
};
exports.InputSearch = InputSearch;
//# sourceMappingURL=index.js.map