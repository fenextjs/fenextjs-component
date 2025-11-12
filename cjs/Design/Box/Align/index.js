"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesignBoxAlign = void 0;
const tslib_1 = require("tslib");
const fenextjs_hook_1 = require("fenextjs-hook");
const SelectT_1 = require("../../../Input/SelectT");
const react_1 = tslib_1.__importDefault(require("react"));
const Text_1 = require("../../../Text");
const boxUnit_1 = require("../boxUnit");
const DesignBoxAlign = ({ textAlignItems = "Align Vertical", textJustifyContent = "Align Horizontal", data, onChangeData, ...props }) => {
    const { _t } = (0, fenextjs_hook_1.use_T)({ ...props });
    const _p = (e) => ({ id: `${e}`, text: `${e}`, data: e });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: ` fenext-design-box-item fenext-design-box-item-1-2` },
            react_1.default.createElement(Text_1.Text, null, _t(textAlignItems)),
            react_1.default.createElement(SelectT_1.InputSelectT, { onParse: _p, options: [...boxUnit_1.ConstDesignBoxAlignItemsUnit], defaultValue: data.alignItems, onChange: onChangeData("alignItems"), placeholder: textAlignItems })),
        react_1.default.createElement("div", { className: ` fenext-design-box-item fenext-design-box-item-1-2` },
            react_1.default.createElement(Text_1.Text, null, _t(textJustifyContent)),
            react_1.default.createElement(SelectT_1.InputSelectT, { onParse: _p, options: [...boxUnit_1.ConstDesignBoxJustifyContentUnit], defaultValue: data.justifyContent, onChange: onChangeData("justifyContent"), placeholder: textJustifyContent }))));
};
exports.DesignBoxAlign = DesignBoxAlign;
