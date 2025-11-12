"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesignBoxPadding = void 0;
const tslib_1 = require("tslib");
const fenextjs_hook_1 = require("fenextjs-hook");
const SelectT_1 = require("../../../Input/SelectT");
const Checkbox_1 = require("../../../Input/Checkbox");
const NumberCount_1 = require("../../../Input/NumberCount");
const react_1 = tslib_1.__importDefault(require("react"));
const Text_1 = require("../../../Text");
const boxUnit_1 = require("../boxUnit");
const Link_1 = require("fenextjs-svg/cjs/Link");
const DesignBoxPadding = ({ textPadding = "Padding", textPaddingBottom = "Bottom", textPaddingLeft = "Left", textPaddingRight = "Right", textPaddingTop = "Top", data, onChangeData, setDataFunction, ...props }) => {
    const { _t } = (0, fenextjs_hook_1.use_T)({ ...props });
    const _p = (e) => ({ id: `${e}`, text: `${e}`, data: e });
    const onChangePadding = (padding) => (e) => {
        setDataFunction((old) => {
            const n = { ...old };
            const v = e == "" ? undefined : e;
            n[padding] = v;
            if (n.paddingTogether) {
                n.paddingTop = v;
                n.paddingRight = v;
                n.paddingBottom = v;
                n.paddingLeft = v;
            }
            return n;
        });
    };
    const onChangePaddingTogether = (e) => {
        setDataFunction((old) => {
            const n = { ...old };
            n.paddingTogether = e;
            if (n.paddingTogether) {
                n.paddingTop = 0;
                n.paddingRight = 0;
                n.paddingBottom = 0;
                n.paddingLeft = 0;
            }
            return n;
        });
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-design-box-item` },
            react_1.default.createElement(Text_1.Text, null, _t(textPadding)),
            react_1.default.createElement(SelectT_1.InputSelectT, { onParse: _p, options: [...boxUnit_1.ConstDesignBoxPaddingUnit], defaultValue: data.paddingUnit, onChange: onChangeData("paddingUnit"), placeholder: "Unit" }),
            react_1.default.createElement(Checkbox_1.InputCheckbox, { defaultValue: data.paddingTogether, onChange: onChangePaddingTogether, label: react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(Link_1.SvgLink, null)), classNameLabel: "fenext-design-box-item-together" }),
            react_1.default.createElement("div", { className: `fenext-design-box-item fenext-design-box-item-4` },
                react_1.default.createElement(NumberCount_1.InputNumberCount, { placeholder: textPaddingTop, onChange: onChangePadding("paddingTop"), value: data.paddingTop, symbolInit: "", symbolFinal: data.paddingUnit }),
                react_1.default.createElement(NumberCount_1.InputNumberCount, { placeholder: textPaddingRight, onChange: onChangePadding("paddingRight"), value: data.paddingRight, symbolInit: "", symbolFinal: data.paddingUnit }),
                react_1.default.createElement(NumberCount_1.InputNumberCount, { placeholder: textPaddingBottom, onChange: onChangePadding("paddingBottom"), value: data.paddingBottom, symbolInit: "", symbolFinal: data.paddingUnit }),
                react_1.default.createElement(NumberCount_1.InputNumberCount, { placeholder: textPaddingLeft, onChange: onChangePadding("paddingLeft"), value: data.paddingLeft, symbolInit: "", symbolFinal: data.paddingUnit })))));
};
exports.DesignBoxPadding = DesignBoxPadding;
//# sourceMappingURL=index.js.map