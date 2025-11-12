"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationNPage = exports.PaginationNPageDefaultOptions = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const SelectT_1 = require("../../Input/SelectT");
const fenextjs_hook_1 = require("fenextjs-hook");
exports.PaginationNPageDefaultOptions = [10, 20, 50, 100];
const PaginationNPage = ({ className = "", options = exports.PaginationNPageDefaultOptions, onChange, paginationName, disabled, ...props }) => {
    const { setData, data: { npage = 10 }, } = (0, fenextjs_hook_1.usePagination)({
        name: paginationName,
        onChage: (e) => {
            onChange?.(e?.npage ?? 10);
        },
    });
    return (react_1.default.createElement(SelectT_1.InputSelectT, { ...props, className: `fenext-pagination-npage ${className}`, useItemMaxLengthShowOptions: false, options: options, onChange: (e) => {
            setData({
                page: 0,
                npage: e,
            });
        }, isSelectChangeText: false, value: npage, onParse: (e) => {
            return {
                id: e ?? "",
                text: `${e}`,
                data: e,
            };
        }, disabled: disabled }));
};
exports.PaginationNPage = PaginationNPage;
