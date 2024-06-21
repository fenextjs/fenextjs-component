"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesignBoxBorderStyle = void 0;
const tslib_1 = require("tslib");
const fenextjs_functions_1 = require("fenextjs-functions");
const SelectT_1 = require("../../../Input/SelectT");
const Checkbox_1 = require("../../../Input/Checkbox");
const react_1 = tslib_1.__importStar(require("react"));
const Text_1 = require("../../../Text");
const boxUnit_1 = require("../boxUnit");
const fenextjs_hook_1 = require("fenextjs-hook");
const Link_1 = require("fenextjs-svg/cjs/Link");
const DesignBoxBorderStyle = ({ _t, textBorderStyle = "Border Style", textBorderStyleTop = "Top", textBorderStyleLeft = "Left", textBorderStyleRight = "Right", textBorderStyleBottom = "Bottom", defaultValue = {}, value, onChange, }) => {
    const { data: data_, onConcatData, setDataFunction, } = (0, fenextjs_hook_1.useData)(defaultValue, {
        onChangeDataAfter: onChange,
    });
    const data = (0, react_1.useMemo)(() => value ?? data_, [value, data_]);
    const _p = (e) => ({ id: `${e}`, text: `${e}`, data: e });
    const onChangeBorderStyle = (borderStyle) => (e) => {
        setDataFunction((old) => {
            const n = { ...old };
            const v = e;
            n[borderStyle] = v;
            if (n.borderStyleTogether) {
                n.borderTopStyle = v;
                n.borderLeftStyle = v;
                n.borderRightStyle = v;
                n.borderBottomStyle = v;
            }
            return n;
        });
    };
    const onChangeBorderStyleTogether = (e) => {
        onConcatData({
            borderStyleTogether: e,
            ...(e
                ? {
                    borderTopStyle: "hidden",
                    borderLeftStyle: "hidden",
                    borderRightStyle: "hidden",
                    borderBottomStyle: "hidden",
                }
                : {}),
        });
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-design-box-item` },
            react_1.default.createElement(Text_1.Text, null, (0, fenextjs_functions_1._tValidate)(textBorderStyle, _t)),
            react_1.default.createElement("div", null),
            react_1.default.createElement(Checkbox_1.InputCheckbox, { defaultValue: data.borderStyleTogether, onChange: onChangeBorderStyleTogether, label: react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(Link_1.SvgLink, null)), classNameLabel: "fenext-design-box-item-together" }),
            react_1.default.createElement("div", { className: `fenext-design-box-item fenext-design-box-item-4` },
                react_1.default.createElement(SelectT_1.InputSelectT, { onParse: _p, options: [...boxUnit_1.ConstDesignBoxBorderStylesUnit], placeholder: textBorderStyleTop, onChange: onChangeBorderStyle("borderTopStyle"), value: data.borderTopStyle }),
                react_1.default.createElement(SelectT_1.InputSelectT, { onParse: _p, options: [...boxUnit_1.ConstDesignBoxBorderStylesUnit], placeholder: textBorderStyleLeft, onChange: onChangeBorderStyle("borderLeftStyle"), value: data.borderLeftStyle }),
                react_1.default.createElement(SelectT_1.InputSelectT, { onParse: _p, options: [...boxUnit_1.ConstDesignBoxBorderStylesUnit], placeholder: textBorderStyleRight, onChange: onChangeBorderStyle("borderRightStyle"), value: data.borderRightStyle }),
                react_1.default.createElement(SelectT_1.InputSelectT, { onParse: _p, options: [...boxUnit_1.ConstDesignBoxBorderStylesUnit], placeholder: textBorderStyleBottom, onChange: onChangeBorderStyle("borderBottomStyle"), value: data.borderBottomStyle })))));
};
exports.DesignBoxBorderStyle = DesignBoxBorderStyle;
//# sourceMappingURL=index.js.map