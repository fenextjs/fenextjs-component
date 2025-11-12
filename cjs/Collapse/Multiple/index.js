"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollapseMultiple = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const Simple_1 = require("../Simple");
const CollapseMultiple = ({ classNameMultiple = "", name = "", items = [], type = "checkbox", defaultActive = [], ...props }) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-collapse-multiple ${classNameMultiple}` }, items.map((item, i) => (react_1.default.createElement(Simple_1.Collapse, { key: i, name: name, type: type, defaultActive: [defaultActive].flat(2).includes(i), ...props, ...item }))))));
};
exports.CollapseMultiple = CollapseMultiple;
