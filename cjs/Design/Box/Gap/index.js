"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesignBoxGap = void 0;
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
const DesignBoxGap = ({ _t, textGap = "Gap", textGapRow = "Gap Row", textGapColumn = "Gap Column", defaultValue = {}, value, onChange, }) => {
    const { data: data_, onChangeData, onConcatData, setDataFunction, } = (0, fenextjs_hook_1.useData)(defaultValue, {
        onChangeDataAfter: onChange,
    });
    const data = (0, react_1.useMemo)(() => value ?? data_, [value, data_]);
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
        onConcatData({
            gapTogether: e,
            ...(e
                ? {
                    gapColumn: 0,
                    gapRow: 0,
                }
                : {}),
        });
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-design-box-item` },
            react_1.default.createElement(Text_1.Text, null, (0, fenextjs_functions_1._tValidate)(textGap, _t)),
            react_1.default.createElement(SelectT_1.InputSelectT, { onParse: _p, options: [...boxUnit_1.ConstDesignBoxGapsUnit], defaultValue: data.gapUnit, onChange: onChangeData("gapUnit"), placeholder: "Unit" }),
            react_1.default.createElement(Checkbox_1.InputCheckbox, { defaultValue: data.gapTogether, onChange: onChangeGapTogether, label: react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(Link_1.SvgLink, null)), classNameLabel: "fenext-design-box-item-together" }),
            react_1.default.createElement("div", { className: `fenext-design-box-item fenext-design-box-item-2` },
                react_1.default.createElement(NumberCount_1.InputNumberCount, { placeholder: textGapRow, onChange: onChangeGap("gapRow"), value: data.gapRow, symbolInit: "", symbolFinal: data.gapUnit }),
                react_1.default.createElement(NumberCount_1.InputNumberCount, { placeholder: textGapColumn, onChange: onChangeGap("gapColumn"), value: data.gapColumn, symbolInit: "", symbolFinal: data.gapUnit })))));
};
exports.DesignBoxGap = DesignBoxGap;
//# sourceMappingURL=index.js.map