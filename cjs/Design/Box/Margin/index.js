"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesignBoxMargin = void 0;
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
const DesignBoxMargin = ({ _t, textMargin = "Margin", textMarginBottom = "Bottom", textMarginLeft = "Left", textMarginRight = "Right", textMarginTop = "Top", defaultValue = {}, value, onChange, }) => {
    const { data: data_, onChangeData, onConcatData, setDataFunction, } = (0, fenextjs_hook_1.useData)(defaultValue, {
        onChangeDataAfter: onChange,
    });
    const data = (0, react_1.useMemo)(() => value ?? data_, [value, data_]);
    const _p = (e) => ({ id: `${e}`, text: `${e}`, data: e });
    const onChangeMargin = (margin) => (e) => {
        setDataFunction((old) => {
            const n = { ...old };
            const v = e == "" ? undefined : e;
            n[margin] = v;
            if (n.marginTogether) {
                n.marginTop = v;
                n.marginRight = v;
                n.marginBottom = v;
                n.marginLeft = v;
            }
            return n;
        });
    };
    const onChangeMarginTogether = (e) => {
        onConcatData({
            marginTogether: e,
            ...(e
                ? {
                    marginBottom: 0,
                    marginLeft: 0,
                    marginRight: 0,
                    marginTop: 0,
                }
                : {}),
        });
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-design-box-item` },
            react_1.default.createElement(Text_1.Text, null, (0, fenextjs_functions_1._tValidate)(textMargin, _t)),
            react_1.default.createElement(SelectT_1.InputSelectT, { onParse: _p, options: [...boxUnit_1.ConstDesignBoxMarginUnit], defaultValue: data.marginUnit, onChange: onChangeData("marginUnit"), placeholder: "Unit" }),
            react_1.default.createElement(Checkbox_1.InputCheckbox, { defaultValue: data.marginTogether, onChange: onChangeMarginTogether, label: react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(Link_1.SvgLink, null)), classNameLabel: "fenext-design-box-item-together" }),
            react_1.default.createElement("div", { className: `fenext-design-box-item fenext-design-box-item-4` },
                react_1.default.createElement(NumberCount_1.InputNumberCount, { placeholder: textMarginTop, onChange: onChangeMargin("marginTop"), value: data.marginTop, symbolInit: "", symbolFinal: data.marginUnit }),
                react_1.default.createElement(NumberCount_1.InputNumberCount, { placeholder: textMarginRight, onChange: onChangeMargin("marginRight"), value: data.marginRight, symbolInit: "", symbolFinal: data.marginUnit }),
                react_1.default.createElement(NumberCount_1.InputNumberCount, { placeholder: textMarginBottom, onChange: onChangeMargin("marginBottom"), value: data.marginBottom, symbolInit: "", symbolFinal: data.marginUnit }),
                react_1.default.createElement(NumberCount_1.InputNumberCount, { placeholder: textMarginLeft, onChange: onChangeMargin("marginLeft"), value: data.marginLeft, symbolInit: "", symbolFinal: data.marginUnit })))));
};
exports.DesignBoxMargin = DesignBoxMargin;
//# sourceMappingURL=index.js.map