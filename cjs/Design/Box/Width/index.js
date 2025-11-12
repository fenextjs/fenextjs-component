"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesignBoxWidth = void 0;
const tslib_1 = require("tslib");
const fenextjs_hook_1 = require("fenextjs-hook");
const SelectT_1 = require("../../../Input/SelectT");
const NumberCount_1 = require("../../../Input/NumberCount");
const react_1 = tslib_1.__importDefault(require("react"));
const Text_1 = require("../../../Text");
const boxUnit_1 = require("../boxUnit");
const DesignBoxWidth = ({ textWidth = "Width", textMinWidth = "Min Width", textMaxWidth = "Max Width", data, onChangeData, ...props }) => {
    const { _t } = (0, fenextjs_hook_1.use_T)({ ...props });
    const _p = (e) => ({ id: `${e}`, text: `${e}`, data: e });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: ` fenext-design-box-item fenext-design-box-item-2-2` },
            react_1.default.createElement(Text_1.Text, null, _t(textWidth)),
            react_1.default.createElement(NumberCount_1.InputNumberCount, { defaultValue: data.width, onChange: onChangeData("width"), symbolInit: "", symbolFinal: data.widthUnit, placeholder: "Width" }),
            react_1.default.createElement(SelectT_1.InputSelectT, { onParse: _p, options: [...boxUnit_1.ConstDesignBoxWidthUnit], defaultValue: data.widthUnit, onChange: onChangeData("widthUnit"), placeholder: "Width" })),
        react_1.default.createElement("div", { className: `fenext-design-box-item fenext-design-box-item-2-2` },
            react_1.default.createElement(Text_1.Text, null, _t(textMaxWidth)),
            react_1.default.createElement(NumberCount_1.InputNumberCount, { defaultValue: data.maxWidth, onChange: onChangeData("maxWidth"), symbolInit: "", symbolFinal: data.maxWidthUnit, placeholder: "Max Width" }),
            react_1.default.createElement(SelectT_1.InputSelectT, { onParse: _p, options: [...boxUnit_1.ConstDesignBoxWidthUnit], defaultValue: data.maxWidthUnit, onChange: onChangeData("maxWidthUnit"), placeholder: "Max Width" })),
        react_1.default.createElement("div", { className: `fenext-design-box-item fenext-design-box-item-2-2` },
            react_1.default.createElement(Text_1.Text, null, _t(textMinWidth)),
            react_1.default.createElement(NumberCount_1.InputNumberCount, { defaultValue: data.minWidth, onChange: onChangeData("minWidth"), symbolInit: "", symbolFinal: data.minWidthUnit, placeholder: "Min Width" }),
            react_1.default.createElement(SelectT_1.InputSelectT, { onParse: _p, options: [...boxUnit_1.ConstDesignBoxWidthUnit], defaultValue: data.minWidthUnit, onChange: onChangeData("minWidthUnit"), placeholder: "Min Width" }))));
};
exports.DesignBoxWidth = DesignBoxWidth;
