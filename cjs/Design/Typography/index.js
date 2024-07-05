"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesignTypography = void 0;
const tslib_1 = require("tslib");
const fenextjs_hook_1 = require("fenextjs-hook");
const SelectT_1 = require("../../Input/SelectT");
const Color_1 = require("../../Input/Color");
const NumberCount_1 = require("../../Input/NumberCount");
const react_1 = tslib_1.__importStar(require("react"));
const fenextjs_svg_1 = require("fenextjs-svg");
const Simple_1 = require("../../Collapse/Simple");
const Text_1 = require("../../Text");
const fontUnit_1 = require("./fontUnit");
const fenextjs_hook_2 = require("fenextjs-hook");
const parse_1 = require("./parse");
const DesignTypography = ({ className = "", textTypography = "Typography", textExample = "Example", textExampleValue = "Lorem ipsum dolor sit", textColor = "Color", textSize = "Size", textAlign = "Alignment", textWeight = "Weight", textTransform = "Transform", textStyle = "Style", textDecoration = "Decoration", textLineHeight = "Line Height", textLetterSpacing = "Letter Spacing", textWordSpacing = "Word Spacing", defaultValue = {
    fontSize: 20,
    fontSizeUnit: "px",
    textAlign: "left",
    weight: 400,
    transform: "none",
    style: "normal",
    decoration: "normal",
    lineHeight: 1.2,
    lineHeightUnit: "normal",
    letterSpacing: 0,
    letterSpacingUnit: "px",
    wordSpacing: 0,
    wordSpacingUnit: "px",
}, value, onChange, onChangeStyles, collapseName, collapseType, collapseUseActiveForShowChildren = true, ...props }) => {
    const { _t } = (0, fenextjs_hook_1.use_T)({ ...props });
    const { data: data_, onChangeData, dataMemo, } = (0, fenextjs_hook_2.useData)(defaultValue, {
        onChangeDataAfter: onChange,
        onChangeDataMemoAfter: onChangeStyles,
        onMemo: parse_1.parseDesignTypographyValueProps_to_CSSProperties,
    });
    const data = (0, react_1.useMemo)(() => value ?? data_, [value, data_]);
    const _p = (e) => ({ id: `${e}`, text: `${e}`, data: e });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-design-typography ${className} ` },
            react_1.default.createElement(Simple_1.Collapse, { header: react_1.default.createElement(react_1.default.Fragment, null, _t(textTypography)), iconArrow: react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(fenextjs_svg_1.Edit, null)), rotateIcon: false, name: collapseName, type: collapseType, useActiveForShowChildren: collapseUseActiveForShowChildren },
                react_1.default.createElement("div", { className: `fenext-design-typography-content ` },
                    react_1.default.createElement("div", { className: `fenext-design-typography-item fenext-design-typography-item-2` },
                        react_1.default.createElement(Text_1.Text, null, _t(textExample)),
                        react_1.default.createElement("div", { className: `fenext-design-typography-content-example ` },
                            react_1.default.createElement(Text_1.Text, null,
                                react_1.default.createElement("div", { style: dataMemo }, _t(textExampleValue))))),
                    react_1.default.createElement("div", { className: `fenext-design-typography-item ` },
                        react_1.default.createElement(Text_1.Text, null, _t(textColor)),
                        react_1.default.createElement(Color_1.InputColor, { defaultValue: data.color, onChange: onChangeData("color") })),
                    react_1.default.createElement("div", { className: `fenext-design-typography-item fenext-design-typography-item-3` },
                        react_1.default.createElement(Text_1.Text, null, _t(textSize)),
                        react_1.default.createElement(NumberCount_1.InputNumberCount, { symbolInit: "", symbolFinal: data.fontSizeUnit, defaultValue: data.fontSize, min: 0, aplyMin: true, onChange: onChangeData("fontSize") }),
                        react_1.default.createElement(SelectT_1.InputSelectT, { onParse: _p, options: [...fontUnit_1.ConstDesignTypographyFontSizeUnit], defaultValue: data.fontSizeUnit, onChange: onChangeData("fontSizeUnit") })),
                    react_1.default.createElement("div", { className: `fenext-design-typography-item ` },
                        react_1.default.createElement(Text_1.Text, null, _t(textAlign)),
                        react_1.default.createElement(SelectT_1.InputSelectT, { onParse: _p, options: [
                                ...fontUnit_1.ConstDesignTypographyTextAlignUnit,
                            ], defaultValue: data.textAlign, onChange: onChangeData("textAlign") })),
                    react_1.default.createElement("div", { className: `fenext-design-typography-item ` },
                        react_1.default.createElement(Text_1.Text, null, _t(textWeight)),
                        react_1.default.createElement(SelectT_1.InputSelectT, { onParse: _p, options: [...fontUnit_1.ConstDesignTypographyWeightUnit], defaultValue: data.weight, onChange: onChangeData("weight") })),
                    react_1.default.createElement("div", { className: `fenext-design-typography-item ` },
                        react_1.default.createElement(Text_1.Text, null, _t(textTransform)),
                        react_1.default.createElement(SelectT_1.InputSelectT, { onParse: _p, options: [
                                ...fontUnit_1.ConstDesignTypographyTransformUnit,
                            ], defaultValue: data.transform, onChange: onChangeData("transform") })),
                    react_1.default.createElement("div", { className: `fenext-design-typography-item ` },
                        react_1.default.createElement(Text_1.Text, null, _t(textStyle)),
                        react_1.default.createElement(SelectT_1.InputSelectT, { onParse: _p, options: [...fontUnit_1.ConstDesignTypographyStyleUnit], defaultValue: data.style, onChange: onChangeData("style") })),
                    react_1.default.createElement("div", { className: `fenext-design-typography-item ` },
                        react_1.default.createElement(Text_1.Text, null, _t(textDecoration)),
                        react_1.default.createElement(SelectT_1.InputSelectT, { onParse: _p, options: [
                                ...fontUnit_1.ConstDesignTypographyDecorationUnit,
                            ], defaultValue: data.decoration, onChange: onChangeData("decoration") })),
                    react_1.default.createElement("div", { className: `fenext-design-typography-item fenext-design-typography-item-3` },
                        react_1.default.createElement(Text_1.Text, null, _t(textLineHeight)),
                        react_1.default.createElement(NumberCount_1.InputNumberCount, { symbolInit: "", symbolFinal: data.lineHeightUnit == "normal"
                                ? ""
                                : data.lineHeightUnit, defaultValue: data.lineHeight, onChange: onChangeData("lineHeight") }),
                        react_1.default.createElement(SelectT_1.InputSelectT, { onParse: _p, options: [
                                ...fontUnit_1.ConstDesignTypographyLineHeightUnit,
                            ], defaultValue: data.lineHeightUnit, onChange: onChangeData("lineHeightUnit") })),
                    react_1.default.createElement("div", { className: `fenext-design-typography-item fenext-design-typography-item-3` },
                        react_1.default.createElement(Text_1.Text, null, _t(textLetterSpacing)),
                        react_1.default.createElement(NumberCount_1.InputNumberCount, { symbolInit: "", symbolFinal: data.letterSpacingUnit, defaultValue: data.letterSpacing, onChange: onChangeData("letterSpacing") }),
                        react_1.default.createElement(SelectT_1.InputSelectT, { onParse: _p, options: [
                                ...fontUnit_1.ConstDesignTypographyLetterSpacingUnit,
                            ], defaultValue: data.letterSpacingUnit, onChange: onChangeData("letterSpacingUnit") })),
                    react_1.default.createElement("div", { className: `fenext-design-typography-item fenext-design-typography-item-3` },
                        react_1.default.createElement(Text_1.Text, null, _t(textWordSpacing)),
                        react_1.default.createElement(NumberCount_1.InputNumberCount, { symbolInit: "", symbolFinal: data.wordSpacingUnit, defaultValue: data.wordSpacing, onChange: onChangeData("wordSpacing") }),
                        react_1.default.createElement(SelectT_1.InputSelectT, { onParse: _p, options: [
                                ...fontUnit_1.ConstDesignTypographyWordSpacingUnit,
                            ], defaultValue: data.wordSpacingUnit, onChange: onChangeData("wordSpacingUnit") })))))));
};
exports.DesignTypography = DesignTypography;
//# sourceMappingURL=index.js.map