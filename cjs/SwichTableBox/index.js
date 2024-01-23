"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwichTableBox = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const Radio_1 = require("../Input/Radio");
const TableBox_1 = require("fenextjs-svg/cjs/TableBox");
const TableList_1 = require("fenextjs-svg/cjs/TableList");
const SwichTableBox = ({ className = "", defaultValue = "list", onChange, }) => {
    const ITEMS = [
        {
            id: "fenext-table-view-list",
            label: (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", { className: `fenext-swich-table-box-item` },
                    react_1.default.createElement(TableList_1.TableList, null)))),
            data: "list",
        },
        {
            id: "fenext-table-view-box",
            label: (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", { className: `fenext-swich-table-box-item` },
                    react_1.default.createElement(TableBox_1.TableBox, null)))),
            data: "box",
        },
    ];
    return (react_1.default.createElement("div", { className: `fenext-swich-table-box ${className}` },
        react_1.default.createElement(Radio_1.InputRadio, { name: "fenext-table-view", defaultValue: ITEMS[defaultValue == "list" ? 0 : 1], items: ITEMS, onChange: (e) => {
                onChange?.(e?.data);
            } })));
};
exports.SwichTableBox = SwichTableBox;
//# sourceMappingURL=index.js.map