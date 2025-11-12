"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesignBoxBorder = void 0;
const tslib_1 = require("tslib");
const fenextjs_hook_1 = require("fenextjs-hook");
const SelectT_1 = require("../../../Input/SelectT");
const Checkbox_1 = require("../../../Input/Checkbox");
const NumberCount_1 = require("../../../Input/NumberCount");
const react_1 = tslib_1.__importStar(require("react"));
const Text_1 = require("../../../Text");
const boxUnit_1 = require("../boxUnit");
const Link_1 = require("fenextjs-svg/cjs/Link");
const DesignBoxBorder = ({ textBorder = "Border", textBorderBottom = "Bottom", textBorderLeft = "Left", textBorderRight = "Right", textBorderTop = "Top", data, setDataFunction, onChangeData, ...props }) => {
    const { _t } = (0, fenextjs_hook_1.use_T)({ ...props });
    const _p = (e) => ({ id: `${e}`, text: `${e}`, data: e });
    const onChangeBorder = (0, react_1.useCallback)((border) => (e) => {
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
    }, [data]);
    const onChangeBorderTogether = (e) => {
        setDataFunction((old) => {
            const n = { ...old };
            n.borderTogether = e;
            if (e) {
                n.borderBottom = 0;
                n.borderLeft = 0;
                n.borderRight = 0;
                n.borderTop = 0;
            }
            return n;
        });
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-design-box-item` },
            react_1.default.createElement(Text_1.Text, null, _t(textBorder)),
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
