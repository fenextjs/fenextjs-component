"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputUnitWeight = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const Base_1 = require("../Base");
const Unit_1 = require("fenextjs-interface/cjs/Unit");
const InputUnitWeight = ({ options = Object.keys(Unit_1.Unit_Weight).map((e) => Unit_1.Unit_Weight[e]), ...props }) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Base_1.InputUnitBase, { ...props, options: options })));
};
exports.InputUnitWeight = InputUnitWeight;
