"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableActionCheckbox = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const Checkbox_1 = require("../Input/Checkbox");
const TableActionCheckbox = ({ className = "", actionAllCheckbox, actions, data, }) => {
    const ACTIONS = (0, react_1.useMemo)(() => {
        return actions?.map((a) => {
            return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", { className: `fenext-table-actions-checkbox-action  ` }, a(data ?? []))));
        });
    }, [data, actions]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-table-actions-checkbox ${className} ` },
            react_1.default.createElement("div", { className: `fenext-table-actions-checkbox-select  ` },
                react_1.default.createElement(Checkbox_1.InputCheckbox, { ...actionAllCheckbox })),
            ACTIONS)));
};
exports.TableActionCheckbox = TableActionCheckbox;
