"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesignBoxBorderColor = void 0;
const tslib_1 = require("tslib");
const fenextjs_hook_1 = require("fenextjs-hook");
const react_1 = tslib_1.__importDefault(require("react"));
const Text_1 = require("../../../Text");
const Color_1 = require("../../../Input/Color");
const DesignBoxBorderColor = ({ textBorderColor = "Border Color", data, onChangeData, ...props }) => {
    const { _t } = (0, fenextjs_hook_1.use_T)({ ...props });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-design-box-item fenext-design-box-item-1-2` },
            react_1.default.createElement(Text_1.Text, null, _t(textBorderColor)),
            react_1.default.createElement(Color_1.InputColor, { value: data.borderColor, onChange: onChangeData("borderColor") }))));
};
exports.DesignBoxBorderColor = DesignBoxBorderColor;
