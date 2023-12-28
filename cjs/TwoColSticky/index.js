"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwoColSticky = void 0;
const tslib_1 = require("tslib");
const fenextjs_functions_1 = require("fenextjs-functions");
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
const TwoColSticky = ({ className = "", classNameChildren = "", classNameColSticky = "", children, colSticky, posCol = "left", _t, }) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-two-col-sticky fenext-two-col-sticky-pos-${posCol} ${className} ` },
            react_1.default.createElement("div", { className: `fenext-two-col-sticky-col-sticky ${classNameColSticky} ` }, (0, fenextjs_functions_1._tValidate)(colSticky, _t)),
            react_1.default.createElement("div", { className: `fenext-two-col-sticky-children ${classNameChildren} ` }, (0, fenextjs_functions_1._tValidate)(children, _t)))));
};
exports.TwoColSticky = TwoColSticky;
//# sourceMappingURL=index.js.map