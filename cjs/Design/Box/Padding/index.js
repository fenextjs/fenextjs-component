"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesignBoxPadding = void 0;
const tslib_1 = require("tslib");
const fenextjs_functions_1 = require("fenextjs-functions");
const SelectT_1 = require("../../../Input/SelectT");
const Checkbox_1 = require("../../../Input/Checkbox");
const NumberCount_1 = require("../../../Input/NumberCount");
const react_1 = tslib_1.__importStar(require("react"));
const Text_1 = require("../../../Text");
const boxUnit_1 = require("../boxUnit");
const fenextjs_hook_1 = require("fenextjs-hook");
const Link_1 = require("fenextjs-svg/cjs/Link");
const DesignBoxPadding = ({ _t, textPadding = "Padding", textPaddingBottom = "Bottom", textPaddingLeft = "Left", textPaddingRight = "Right", textPaddingTop = "Top", defaultValue = {}, value, onChange, }) => {
    const { data: data_, onChangeData, onConcatData, setDataFunction, } = (0, fenextjs_hook_1.useData)(defaultValue, {
        onChangeDataAfter: onChange,
    });
    const data = (0, react_1.useMemo)(() => value ?? data_, [value, data_]);
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
        onConcatData({
            paddingTogether: e,
            ...(e
                ? {
                    paddingBottom: 0,
                    paddingLeft: 0,
                    paddingRight: 0,
                    paddingTop: 0,
                }
                : {}),
        });
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-design-box-item` },
            react_1.default.createElement(Text_1.Text, null, (0, fenextjs_functions_1._tValidate)(textPadding, _t)),
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