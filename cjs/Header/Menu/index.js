"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const ItemMenu_1 = require("../ItemMenu");
const arrowCollapse_1 = require("fenextjs-svg/cjs/arrowCollapse");
const Menu = ({ className = "", items = [], defaultShowSubMenu = false, iconArrow = react_1.default.createElement(arrowCollapse_1.ArrowCollapse, null), _t, }) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-menu ${className}` }, items?.map((item, i) => (react_1.default.createElement(ItemMenu_1.ItemMenu, { key: i, ...item, defaultActive: item.defaultActive ?? defaultShowSubMenu, iconArrow: item?.iconArrow ?? iconArrow, _t: _t }))))));
};
exports.Menu = Menu;
//# sourceMappingURL=index.js.map