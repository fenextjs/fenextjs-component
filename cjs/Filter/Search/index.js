"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterSearch = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const fenextjs_hook_1 = require("fenextjs-hook");
const Search_1 = require("../../Input/Search");
const FilterSearch = ({ className = "", classNameSearch = {}, onChange, defaultValue = {}, nameFilter, ...p }) => {
    const { onChangeData } = (0, fenextjs_hook_1.useFilter)({ name: nameFilter });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `
                    fenext-filter-search  
                    ${className}
                ` },
            react_1.default.createElement(Search_1.InputSearch, { ...classNameSearch, ...p, defaultValue: defaultValue?.search, onEnterSearch: (search) => {
                    onChangeData("search")(search);
                    onChange?.({ search });
                } }))));
};
exports.FilterSearch = FilterSearch;
//# sourceMappingURL=index.js.map