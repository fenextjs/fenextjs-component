"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesignTypography = void 0;
const tslib_1 = require("tslib");
const fenextjs_functions_1 = require("fenextjs-functions");
const SelectT_1 = require("../../Input/SelectT");
const Color_1 = require("../../Input/Color");
const NumberCount_1 = require("../../Input/NumberCount");
const react_1 = tslib_1.__importStar(require("react"));
const fenextjs_svg_1 = require("fenextjs-svg");
const Simple_1 = require("../../Collapse/Simple");
const Text_1 = require("../../Text");
const fontUnit_1 = require("./fontUnit");
const fenextjs_hook_1 = require("fenextjs-hook");
const DesignTypography = ({ className = "", _t, textTypography = "Typography", textExample = "Example", textExampleValue = "Lorem ipsum dolor sit", textColor = "Color", textSize = "Size", textAlign = "Alignment", textWeight = "Weight", textTransform = "Transform", textStyle = "Style", textDecoration = "Decoration", textLineHeight = "Line Height", textLetterSpacing = "Letter Spacing", textWordSpacing = "Word Spacing", defaultValue = {
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
}, value, onChange, onChangeStyles, }) => {
    const { data: data_, onChangeData, dataMemo, } = (0, fenextjs_hook_1.useData)(defaultValue, {
        onChangeDataAfter: onChange,
        onChangeDataMemoAfter: onChangeStyles,
        onMemo: (d) => {
            return {
                fontSize: `${d.fontSize}${d.fontSizeUnit}`,
                textAlign: d.textAlign,
                fontWeight: d.weight,
                textTransform: d.transform,
                fontStyle: d.style,
                textDecoration: d.decoration,
                lineHeight: `${d.lineHeight}${d.lineHeightUnit == "normal" ? "" : d.lineHeightUnit}`,
                letterSpacing: `${d.letterSpacing}${d.letterSpacingUnit}`,
                wordSpacing: `${d.wordSpacing}${d.wordSpacingUnit}`,
                color: d.color,
            };
        },
    });
    const data = (0, react_1.useMemo)(() => value ?? data_, [value, data_]);
    const _p = (e) => ({ id: `${e}`, text: `${e}`, data: e });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-design-typography ${className} ` },
            react_1.default.createElement(Simple_1.Collapse, { header: react_1.default.createElement(react_1.default.Fragment, null, (0, fenextjs_functions_1._tValidate)(textTypography, _t)), iconArrow: react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(fenextjs_svg_1.Edit, null)), rotateIcon: false },
                react_1.default.createElement("div", { className: `fenext-design-typography-content ` },
                    react_1.default.createElement("div", { className: `fenext-design-typography-item fenext-design-typography-item-2` },
                        react_1.default.createElement(Text_1.Text, null, (0, fenextjs_functions_1._tValidate)(textExample, _t)),
                        react_1.default.createElement("div", { className: `fenext-design-typography-content-example ` },
                            react_1.default.createElement(Text_1.Text, null,
                                react_1.default.createElement("div", { style: dataMemo }, (0, fenextjs_functions_1._tValidate)(textExampleValue, _t))))),
                    react_1.default.createElement("div", { className: `fenext-design-typography-item ` },
                        react_1.default.createElement(Text_1.Text, null, (0, fenextjs_functions_1._tValidate)(textColor, _t)),
                        react_1.default.createElement(Color_1.InputColor, { defaultValue: data.color, onChange: onChangeData("color") })),
                    react_1.default.createElement("div", { className: `fenext-design-typography-item fenext-design-typography-item-3` },
                        react_1.default.createElement(Text_1.Text, null, (0, fenextjs_functions_1._tValidate)(textSize, _t)),
                        react_1.default.createElement(NumberCount_1.InputNumberCount, { symbolInit: "", symbolFinal: data.fontSizeUnit, defaultValue: data.fontSize, min: 0, aplyMin: true, onChange: onChangeData("fontSize") }),
                        react_1.default.createElement(SelectT_1.InputSelectT, { onParse: _p, options: [...fontUnit_1.ConstDesignTypographyFontSizeUnit], defaultValue: data.fontSizeUnit, onChange: onChangeData("fontSizeUnit") })),
                    react_1.default.createElement("div", { className: `fenext-design-typography-item ` },
                        react_1.default.createElement(Text_1.Text, null, (0, fenextjs_functions_1._tValidate)(textAlign, _t)),
                        react_1.default.createElement(SelectT_1.InputSelectT, { onParse: _p, options: [
                                ...fontUnit_1.ConstDesignTypographyTextAlignUnit,
                            ], defaultValue: data.textAlign, onChange: onChangeData("textAlign") })),
                    react_1.default.createElement("div", { className: `fenext-design-typography-item ` },
                        react_1.default.createElement(Text_1.Text, null, (0, fenextjs_functions_1._tValidate)(textWeight, _t)),
                        react_1.default.createElement(SelectT_1.InputSelectT, { onParse: _p, options: [...fontUnit_1.ConstDesignTypographyWeightUnit], defaultValue: data.weight, onChange: onChangeData("weight") })),
                    react_1.default.createElement("div", { className: `fenext-design-typography-item ` },
                        react_1.default.createElement(Text_1.Text, null, (0, fenextjs_functions_1._tValidate)(textTransform, _t)),
                        react_1.default.createElement(SelectT_1.InputSelectT, { onParse: _p, options: [
                                ...fontUnit_1.ConstDesignTypographyTransformUnit,
                            ], defaultValue: data.transform, onChange: onChangeData("transform") })),
                    react_1.default.createElement("div", { className: `fenext-design-typography-item ` },
                        react_1.default.createElement(Text_1.Text, null, (0, fenextjs_functions_1._tValidate)(textStyle, _t)),
                        react_1.default.createElement(SelectT_1.InputSelectT, { onParse: _p, options: [...fontUnit_1.ConstDesignTypographyStyleUnit], defaultValue: data.style, onChange: onChangeData("style") })),
                    react_1.default.createElement("div", { className: `fenext-design-typography-item ` },
                        react_1.default.createElement(Text_1.Text, null, (0, fenextjs_functions_1._tValidate)(textDecoration, _t)),
                        react_1.default.createElement(SelectT_1.InputSelectT, { onParse: _p, options: [
                                ...fontUnit_1.ConstDesignTypographyDecorationUnit,
                            ], defaultValue: data.decoration, onChange: onChangeData("decoration") })),
                    react_1.default.createElement("div", { className: `fenext-design-typography-item fenext-design-typography-item-3` },
                        react_1.default.createElement(Text_1.Text, null, (0, fenextjs_functions_1._tValidate)(textLineHeight, _t)),
                        react_1.default.createElement(NumberCount_1.InputNumberCount, { symbolInit: "", symbolFinal: data.lineHeightUnit == "normal"
                                ? ""
                                : data.lineHeightUnit, defaultValue: data.lineHeight, onChange: onChangeData("lineHeight") }),
                        react_1.default.createElement(SelectT_1.InputSelectT, { onParse: _p, options: [
                                ...fontUnit_1.ConstDesignTypographyLineHeightUnit,
                            ], defaultValue: data.lineHeightUnit, onChange: onChangeData("lineHeightUnit") })),
                    react_1.default.createElement("div", { className: `fenext-design-typography-item fenext-design-typography-item-3` },
                        react_1.default.createElement(Text_1.Text, null, (0, fenextjs_functions_1._tValidate)(textLetterSpacing, _t)),
                        react_1.default.createElement(NumberCount_1.InputNumberCount, { symbolInit: "", symbolFinal: data.letterSpacingUnit, defaultValue: data.letterSpacing, onChange: onChangeData("letterSpacing") }),
                        react_1.default.createElement(SelectT_1.InputSelectT, { onParse: _p, options: [
                                ...fontUnit_1.ConstDesignTypographyLetterSpacingUnit,
                            ], defaultValue: data.letterSpacingUnit, onChange: onChangeData("letterSpacingUnit") })),
                    react_1.default.createElement("div", { className: `fenext-design-typography-item fenext-design-typography-item-3` },
                        react_1.default.createElement(Text_1.Text, null, (0, fenextjs_functions_1._tValidate)(textWordSpacing, _t)),
                        react_1.default.createElement(NumberCount_1.InputNumberCount, { symbolInit: "", symbolFinal: data.wordSpacingUnit, defaultValue: data.wordSpacing, onChange: onChangeData("wordSpacing") }),
                        react_1.default.createElement(SelectT_1.InputSelectT, { onParse: _p, options: [
                                ...fontUnit_1.ConstDesignTypographyWordSpacingUnit,
                            ], defaultValue: data.wordSpacingUnit, onChange: onChangeData("wordSpacingUnit") })))))));
};
exports.DesignTypography = DesignTypography;
//# sourceMappingURL=index.js.map