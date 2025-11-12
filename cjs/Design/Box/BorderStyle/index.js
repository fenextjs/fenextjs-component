"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesignBoxBorderStyle = void 0;
const tslib_1 = require("tslib");
const fenextjs_hook_1 = require("fenextjs-hook");
const SelectT_1 = require("../../../Input/SelectT");
const Checkbox_1 = require("../../../Input/Checkbox");
const react_1 = tslib_1.__importDefault(require("react"));
const Text_1 = require("../../../Text");
const boxUnit_1 = require("../boxUnit");
const Link_1 = require("fenextjs-svg/cjs/Link");
const DesignBoxBorderStyle = ({ textBorderStyle = "Border Style", textBorderStyleTop = "Top", textBorderStyleLeft = "Left", textBorderStyleRight = "Right", textBorderStyleBottom = "Bottom", data, setDataFunction, ...props }) => {
    const { _t } = (0, fenextjs_hook_1.use_T)({ ...props });
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
        setDataFunction((old) => {
            const n = { ...old };
            n.borderStyleTogether = e;
            if (e) {
                n.borderTopStyle = "hidden";
                n.borderLeftStyle = "hidden";
                n.borderRightStyle = "hidden";
                n.borderBottomStyle = "hidden";
            }
            return n;
        });
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-design-box-item` },
            react_1.default.createElement(Text_1.Text, null, _t(textBorderStyle)),
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
