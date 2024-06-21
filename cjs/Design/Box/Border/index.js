"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesignBoxBorder = void 0;
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
const DesignBoxBorder = ({ _t, textBorder = "Border", textBorderBottom = "Bottom", textBorderLeft = "Left", textBorderRight = "Right", textBorderTop = "Top", defaultValue = {}, value, onChange, }) => {
    const { data: data_, onChangeData, onConcatData, setDataFunction, } = (0, fenextjs_hook_1.useData)(defaultValue, {
        onChangeDataAfter: onChange,
    });
    const data = (0, react_1.useMemo)(() => value ?? data_, [value, data_]);
    const _p = (e) => ({ id: `${e}`, text: `${e}`, data: e });
    const onChangeBorder = (border) => (e) => {
        setDataFunction((old) => {
            const n = { ...old };
            const v = e == "" ? undefined : e;
            n[border] = v;
            if (n.borderTogether) {
                n.borderTop = v;
                n.borderRight = v;
                n.borderBottom = v;
                n.borderLeft = v;
            }
            return n;
        });
    };
    const onChangeBorderTogether = (e) => {
        onConcatData({
            borderTogether: e,
            ...(e
                ? {
                    borderBottom: 0,
                    borderLeft: 0,
                    borderRight: 0,
                    borderTop: 0,
                }
                : {}),
        });
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-design-box-item` },
            react_1.default.createElement(Text_1.Text, null, (0, fenextjs_functions_1._tValidate)(textBorder, _t)),
            react_1.default.createElement(SelectT_1.InputSelectT, { onParse: _p, options: [...boxUnit_1.ConstDesignBoxBorderUnit], defaultValue: data.borderUnit, onChange: onChangeData("borderUnit"), placeholder: "Unit" }),
            react_1.default.createElement(Checkbox_1.InputCheckbox, { defaultValue: data.borderTogether, onChange: onChangeBorderTogether, label: react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(Link_1.SvgLink, null)), classNameLabel: "fenext-design-box-item-together" }),
            react_1.default.createElement("div", { className: `fenext-design-box-item fenext-design-box-item-4` },
                react_1.default.createElement(NumberCount_1.InputNumberCount, { placeholder: textBorderTop, onChange: onChangeBorder("borderTop"), value: data.borderTop, symbolInit: "", symbolFinal: data.borderUnit }),
                react_1.default.createElement(NumberCount_1.InputNumberCount, { placeholder: textBorderRight, onChange: onChangeBorder("borderRight"), value: data.borderRight, symbolInit: "", symbolFinal: data.borderUnit }),
                react_1.default.createElement(NumberCount_1.InputNumberCount, { placeholder: textBorderBottom, onChange: onChangeBorder("borderBottom"), value: data.borderBottom, symbolInit: "", symbolFinal: data.borderUnit }),
                react_1.default.createElement(NumberCount_1.InputNumberCount, { placeholder: textBorderLeft, onChange: onChangeBorder("borderLeft"), value: data.borderLeft, symbolInit: "", symbolFinal: data.borderUnit })))));
};
exports.DesignBoxBorder = DesignBoxBorder;
//# sourceMappingURL=index.js.map