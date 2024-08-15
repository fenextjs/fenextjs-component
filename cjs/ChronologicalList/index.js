"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChronologicalList = void 0;
const tslib_1 = require("tslib");
const fenextjs_functions_1 = require("fenextjs-functions");
const fenextjs_hook_1 = require("fenextjs-hook");
const react_1 = tslib_1.__importStar(require("react"));
const ChronologicalList = ({ className = "", items, market = undefined, parseDateHHMMSS: parseDateHHMMSSProps, parseDateYYYYMMDD: parseDateYYYYMMDDProps, ...props }) => {
    const { _t } = (0, fenextjs_hook_1.use_T)({ ...props });
    const ITEMS = (0, react_1.useMemo)(() => {
        const i_ = {};
        items.forEach((element) => {
            const date = (parseDateYYYYMMDDProps ?? fenextjs_functions_1.parseDateYYYYMMDD)(element?.date);
            const time = (parseDateHHMMSSProps ?? fenextjs_functions_1.getTimeToText)(element?.date, {
                days: false,
            });
            i_[date] ??= {};
            i_[date][time] ??= [];
            i_[date][time].push(element);
        });
        return i_;
    }, [items, parseDateYYYYMMDDProps, parseDateHHMMSSProps]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-chronological-list ${className} ` }, Object.keys(ITEMS).map((key_Day, i) => {
            const items_day = ITEMS[key_Day];
            return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", { className: `fenext-chronological-list-group`, key: i },
                    react_1.default.createElement("div", { className: `fenext-chronological-list-group-day` }, key_Day),
                    react_1.default.createElement("div", { className: `fenext-chronological-list-group-list` }, Object.keys(items_day).map((key_time, j) => {
                        const itemsList = items_day[key_time];
                        return (react_1.default.createElement(react_1.default.Fragment, null, itemsList?.map((item, k) => {
                            return (react_1.default.createElement(react_1.default.Fragment, null,
                                react_1.default.createElement("div", { key: `${j}-${k}`, className: `fenext-chronological-list-item ${item?.className}` },
                                    react_1.default.createElement("div", { className: `fenext-chronological-list-item-market` }, item?.market ??
                                        market ?? (react_1.default.createElement("div", { className: `fenext-chronological-list-item-market-default` }))),
                                    react_1.default.createElement("div", { className: `fenext-chronological-list-item-children` }, _t(item?.children)),
                                    react_1.default.createElement("div", { className: `fenext-chronological-list-item-time` }, key_time))));
                        })));
                    })))));
        }))));
};
exports.ChronologicalList = ChronologicalList;
//# sourceMappingURL=index.js.map