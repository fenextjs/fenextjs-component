"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwoColSticky = void 0;
const tslib_1 = require("tslib");
const fenextjs_hook_1 = require("fenextjs-hook");
const react_1 = tslib_1.__importDefault(require("react"));
/**
 * TwoColSticky Component
 *
 * A component that renders two columns: one sticky column and one children column.
 * The sticky column will stay fixed while the children column will be scrollable.
 *
 * @param {TwoColStickyProps} props - The props for the TwoColSticky component.
 * @returns {JSX.Element} - The TwoColSticky JSX Element.
 */
const TwoColSticky = ({ className = "", classNameChildren = "", classNameColSticky = "", children, colSticky, posCol = "left", ...props }) => {
    const { _t } = (0, fenextjs_hook_1.use_T)({ ...props });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-two-col-sticky fenext-two-col-sticky-pos-${posCol} ${className} ` },
            react_1.default.createElement("div", { className: `fenext-two-col-sticky-col-sticky ${classNameColSticky} ` }, _t(colSticky)),
            react_1.default.createElement("div", { className: `fenext-two-col-sticky-children ${classNameChildren} ` }, _t(children)))));
};
exports.TwoColSticky = TwoColSticky;
//# sourceMappingURL=index.js.map