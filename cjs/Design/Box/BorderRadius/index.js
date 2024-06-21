"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesignBoxBorderRadius = void 0;
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
const DesignBoxBorderRadius = ({ _t, textBorderRadius = "Border Radius", textBorderRadiusTopLeft = "Top Left", textBorderRadiusTopRight = "Top Right", textBorderRadiusBottomLeft = "Bottom Left", textBorderRadiusBottomRight = "Bottom Right", defaultValue = {}, value, onChange, }) => {
    const { data: data_, onChangeData, onConcatData, setDataFunction, } = (0, fenextjs_hook_1.useData)(defaultValue, {
        onChangeDataAfter: onChange,
    });
    const data = (0, react_1.useMemo)(() => value ?? data_, [value, data_]);
    const _p = (e) => ({ id: `${e}`, text: `${e}`, data: e });
    const onChangeBorderRadius = (borderRadius) => (e) => {
        setDataFunction((old) => {
            const n = { ...old };
            const v = e == "" ? undefined : e;
            n[borderRadius] = v;
            if (n.borderRadiusTogether) {
                n.borderTopLeftRadius = v;
                n.borderTopRightRadius = v;
                n.borderBottomLeftRadius = v;
                n.borderBottomRightRadius = v;
            }
            return n;
        });
    };
    const onChangeBorderRadiusTogether = (e) => {
        onConcatData({
            borderRadiusTogether: e,
            ...(e
                ? {
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 0,
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                }
                : {}),
        });
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-design-box-item` },
            react_1.default.createElement(Text_1.Text, null, (0, fenextjs_functions_1._tValidate)(textBorderRadius, _t)),
            react_1.default.createElement(SelectT_1.InputSelectT, { onParse: _p, options: [...boxUnit_1.ConstDesignBoxBorderRadiusUnit], defaultValue: data.borderUnitRadius, onChange: onChangeData("borderUnitRadius"), placeholder: "Unit" }),
            react_1.default.createElement(Checkbox_1.InputCheckbox, { defaultValue: data.borderRadiusTogether, onChange: onChangeBorderRadiusTogether, label: react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(Link_1.SvgLink, null)), classNameLabel: "fenext-design-box-item-together" }),
            react_1.default.createElement("div", { className: `fenext-design-box-item fenext-design-box-item-4` },
                react_1.default.createElement(NumberCount_1.InputNumberCount, { placeholder: textBorderRadiusTopLeft, onChange: onChangeBorderRadius("borderTopLeftRadius"), value: data.borderTopLeftRadius, symbolInit: "", symbolFinal: data.borderUnitRadius }),
                react_1.default.createElement(NumberCount_1.InputNumberCount, { placeholder: textBorderRadiusTopRight, onChange: onChangeBorderRadius("borderTopRightRadius"), value: data.borderTopRightRadius, symbolInit: "", symbolFinal: data.borderUnitRadius }),
                react_1.default.createElement(NumberCount_1.InputNumberCount, { placeholder: textBorderRadiusBottomLeft, onChange: onChangeBorderRadius("borderBottomLeftRadius"), value: data.borderBottomLeftRadius, symbolInit: "", symbolFinal: data.borderUnitRadius }),
                react_1.default.createElement(NumberCount_1.InputNumberCount, { placeholder: textBorderRadiusBottomRight, onChange: onChangeBorderRadius("borderBottomRightRadius"), value: data.borderBottomRightRadius, symbolInit: "", symbolFinal: data.borderUnitRadius })))));
};
exports.DesignBoxBorderRadius = DesignBoxBorderRadius;
//# sourceMappingURL=index.js.map