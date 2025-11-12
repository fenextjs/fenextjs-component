"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwichViewList = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const Radio_1 = require("../../Input/Radio");
const SwichViewList = ({ className = "", defaultValue, onChange, list = [], name = "fenext-swich-view", }) => {
    const ITEMS = (0, react_1.useMemo)(() => {
        return list.map((e) => {
            return {
                id: `fenext-swich-view-${e.id}`,
                label: (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("div", { className: `fenext-swich-view-item` }, e.icon))),
                data: e.id,
            };
        });
    }, [defaultValue, list]);
    return (react_1.default.createElement("div", { className: `fenext-swich-view ${className}` },
        react_1.default.createElement(Radio_1.InputRadio, { name: name, defaultValue: ITEMS.find((e) => e.data == defaultValue), items: ITEMS, onChange: (e) => {
                onChange?.(e?.data);
            } })));
};
exports.SwichViewList = SwichViewList;
