"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesignBoxHeight = void 0;
const tslib_1 = require("tslib");
const fenextjs_functions_1 = require("fenextjs-functions");
const SelectT_1 = require("../../../Input/SelectT");
const NumberCount_1 = require("../../../Input/NumberCount");
const react_1 = tslib_1.__importDefault(require("react"));
const Text_1 = require("../../../Text");
const boxUnit_1 = require("../boxUnit");
const DesignBoxHeight = ({ _t, textHeight = "Height", textMinHeight = "Min Height", textMaxHeight = "Max Height", data, onChangeData, }) => {
    const _p = (e) => ({ id: `${e}`, text: `${e}`, data: e });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-design-box-item fenext-design-box-item-2-2` },
            react_1.default.createElement(Text_1.Text, null, (0, fenextjs_functions_1._tValidate)(textHeight, _t)),
            react_1.default.createElement(NumberCount_1.InputNumberCount, { defaultValue: data.height, onChange: onChangeData("height"), symbolInit: "", symbolFinal: data.heightUnit, placeholder: "Height" }),
            react_1.default.createElement(SelectT_1.InputSelectT, { onParse: _p, options: [...boxUnit_1.ConstDesignBoxHeightUnit], defaultValue: data.heightUnit, onChange: onChangeData("heightUnit"), placeholder: "Height" })),
        react_1.default.createElement("div", { className: `fenext-design-box-item fenext-design-box-item-2-2` },
            react_1.default.createElement(Text_1.Text, null, (0, fenextjs_functions_1._tValidate)(textMaxHeight, _t)),
            react_1.default.createElement(NumberCount_1.InputNumberCount, { defaultValue: data.maxHeight, onChange: onChangeData("maxHeight"), symbolInit: "", symbolFinal: data.maxHeightUnit, placeholder: "Max Height" }),
            react_1.default.createElement(SelectT_1.InputSelectT, { onParse: _p, options: [...boxUnit_1.ConstDesignBoxHeightUnit], defaultValue: data.maxHeightUnit, onChange: onChangeData("maxHeightUnit"), placeholder: "Max Height" })),
        react_1.default.createElement("div", { className: `fenext-design-box-item fenext-design-box-item-2-2` },
            react_1.default.createElement(Text_1.Text, null, (0, fenextjs_functions_1._tValidate)(textMinHeight, _t)),
            react_1.default.createElement(NumberCount_1.InputNumberCount, { defaultValue: data.minHeight, onChange: onChangeData("minHeight"), symbolInit: "", symbolFinal: data.minHeightUnit, placeholder: "Min Height" }),
            react_1.default.createElement(SelectT_1.InputSelectT, { onParse: _p, options: [...boxUnit_1.ConstDesignBoxHeightUnit], defaultValue: data.minHeightUnit, onChange: onChangeData("minHeightUnit"), placeholder: "Min Height" }))));
};
exports.DesignBoxHeight = DesignBoxHeight;
//# sourceMappingURL=index.js.map