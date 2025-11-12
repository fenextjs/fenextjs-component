"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesignBoxGap = void 0;
const tslib_1 = require("tslib");
const fenextjs_hook_1 = require("fenextjs-hook");
const SelectT_1 = require("../../../Input/SelectT");
const Checkbox_1 = require("../../../Input/Checkbox");
const NumberCount_1 = require("../../../Input/NumberCount");
const react_1 = tslib_1.__importDefault(require("react"));
const Text_1 = require("../../../Text");
const boxUnit_1 = require("../boxUnit");
const Link_1 = require("fenextjs-svg/cjs/Link");
const DesignBoxGap = ({ textGap = "Gap", textGapRow = "Gap Row", textGapColumn = "Gap Column", data, onChangeData, setDataFunction, ...props }) => {
    const { _t } = (0, fenextjs_hook_1.use_T)({ ...props });
    const _p = (e) => ({ id: `${e}`, text: `${e}`, data: e });
    const onChangeGap = (gap) => (e) => {
        setDataFunction((old) => {
            const n = { ...old };
            const v = e == "" ? undefined : e;
            n[gap] = v;
            if (n.gapTogether) {
                n.gapColumn = v;
                n.gapRow = v;
            }
            return n;
        });
    };
    const onChangeGapTogether = (e) => {
        setDataFunction((old) => {
            const n = { ...old };
            n.gapTogether = e;
            if (n.gapTogether) {
                n.gapColumn = 0;
                n.gapRow = 0;
            }
            return n;
        });
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-design-box-item` },
            react_1.default.createElement(Text_1.Text, null, _t(textGap)),
            react_1.default.createElement(SelectT_1.InputSelectT, { onParse: _p, options: [...boxUnit_1.ConstDesignBoxGapsUnit], defaultValue: data.gapUnit, onChange: onChangeData("gapUnit"), placeholder: "Unit" }),
            react_1.default.createElement(Checkbox_1.InputCheckbox, { defaultValue: data.gapTogether, onChange: onChangeGapTogether, label: react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(Link_1.SvgLink, null)), classNameLabel: "fenext-design-box-item-together" }),
            react_1.default.createElement("div", { className: `fenext-design-box-item fenext-design-box-item-2` },
                react_1.default.createElement(NumberCount_1.InputNumberCount, { placeholder: textGapRow, onChange: onChangeGap("gapRow"), value: data.gapRow, symbolInit: "", symbolFinal: data.gapUnit }),
                react_1.default.createElement(NumberCount_1.InputNumberCount, { placeholder: textGapColumn, onChange: onChangeGap("gapColumn"), value: data.gapColumn, symbolInit: "", symbolFinal: data.gapUnit })))));
};
exports.DesignBoxGap = DesignBoxGap;
