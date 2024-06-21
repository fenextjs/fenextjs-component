"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesignBox = void 0;
const tslib_1 = require("tslib");
const fenextjs_functions_1 = require("fenextjs-functions");
const react_1 = tslib_1.__importDefault(require("react"));
const fenextjs_svg_1 = require("fenextjs-svg");
const Simple_1 = require("../../Collapse/Simple");
const fenextjs_hook_1 = require("fenextjs-hook");
const parse_1 = require("./parse");
const Padding_1 = require("./Padding");
const Margin_1 = require("./Margin");
const Border_1 = require("./Border");
const BorderRadius_1 = require("./BorderRadius");
const BorderColor_1 = require("./BorderColor");
const Background_1 = require("./Background");
const Width_1 = require("./Width");
const Height_1 = require("./Height");
const Align_1 = require("./Align");
const Gap_1 = require("./Gap");
const DesignBox = ({ className = "", _t, textBox = "Box", textBackground = "Background", textPadding = "Padding", textPaddingBottom = "Bottom", textPaddingLeft = "Left", textPaddingRight = "Right", textPaddingTop = "Top", textMargin = "Margin", textMarginBottom = "Bottom", textMarginLeft = "Left", textMarginRight = "Right", textMarginTop = "Top", textBorder = "Border", textBorderBottom = "Bottom", textBorderLeft = "Left", textBorderRight = "Right", textBorderTop = "Top", textBorderRadius = "Border Radius", textBorderRadiusTopLeft = "Top Left", textBorderRadiusTopRight = "Top Right", textBorderRadiusBottomLeft = "Bottom Left", textBorderRadiusBottomRight = "Bottom Right", textBorderColor = "Border Color", textWidth = "Width", textMinWidth = "Min Width", textMaxWidth = "Max Width", textHeight = "Height", textMinHeight = "Min Height", textMaxHeight = "Max Height", textAlignItems = "Align Vertical", textJustifyContent = "Align Horizontal", textGap = "Gap", textGapRow = "Gap Row", textGapColumn = "Gap Column", defaultValue = {
    widthUnit: "auto",
    minWidthUnit: "auto",
    maxWidthUnit: "auto",
    heightUnit: "auto",
    minHeightUnit: "auto",
    maxHeightUnit: "auto",
    paddingUnit: "px",
    marginUnit: "px",
    borderUnit: "px",
    borderUnitRadius: "px",
    gapUnit: "px",
}, value, onChange, onChangeStyles, collapseName, collapseType, }) => {
    const { onConcatData } = (0, fenextjs_hook_1.useData)(defaultValue, {
        onChangeDataAfter: onChange,
        onChangeDataMemoAfter: onChangeStyles,
        onMemo: parse_1.parseDesignBoxValueProps_to_CSSProperties,
    });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-design-box ${className} ` },
            react_1.default.createElement(Simple_1.Collapse, { header: react_1.default.createElement(react_1.default.Fragment, null, (0, fenextjs_functions_1._tValidate)(textBox, _t)), iconArrow: react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(fenextjs_svg_1.Edit, null)), rotateIcon: false, name: collapseName, type: collapseType },
                react_1.default.createElement("div", { className: `fenext-design-box-content ` },
                    react_1.default.createElement(Background_1.DesignBoxBackground, { defaultValue: defaultValue, value: value, onChange: onConcatData, textBackground: textBackground, _t: _t }),
                    react_1.default.createElement(Padding_1.DesignBoxPadding, { defaultValue: defaultValue, value: value, onChange: onConcatData, textPadding: textPadding, textPaddingBottom: textPaddingBottom, textPaddingLeft: textPaddingLeft, textPaddingRight: textPaddingRight, textPaddingTop: textPaddingTop, _t: _t }),
                    react_1.default.createElement(Margin_1.DesignBoxMargin, { defaultValue: defaultValue, value: value, onChange: onConcatData, textMargin: textMargin, textMarginBottom: textMarginBottom, textMarginLeft: textMarginLeft, textMarginRight: textMarginRight, textMarginTop: textMarginTop, _t: _t }),
                    react_1.default.createElement(Border_1.DesignBoxBorder, { defaultValue: defaultValue, value: value, onChange: onConcatData, textBorder: textBorder, textBorderBottom: textBorderBottom, textBorderLeft: textBorderLeft, textBorderRight: textBorderRight, textBorderTop: textBorderTop, _t: _t }),
                    react_1.default.createElement(BorderRadius_1.DesignBoxBorderRadius, { defaultValue: defaultValue, value: value, onChange: onConcatData, textBorderRadius: textBorderRadius, textBorderRadiusBottomLeft: textBorderRadiusBottomLeft, textBorderRadiusBottomRight: textBorderRadiusBottomRight, textBorderRadiusTopLeft: textBorderRadiusTopLeft, textBorderRadiusTopRight: textBorderRadiusTopRight, _t: _t }),
                    react_1.default.createElement(BorderColor_1.DesignBoxBorderColor, { defaultValue: defaultValue, value: value, onChange: onConcatData, textBorderColor: textBorderColor, _t: _t }),
                    react_1.default.createElement(Width_1.DesignBoxWidth, { defaultValue: defaultValue, value: value, onChange: onConcatData, textWidth: textWidth, textMaxWidth: textMaxWidth, textMinWidth: textMinWidth, _t: _t }),
                    react_1.default.createElement(Height_1.DesignBoxHeight, { defaultValue: defaultValue, value: value, onChange: onConcatData, textHeight: textHeight, textMaxHeight: textMaxHeight, textMinHeight: textMinHeight, _t: _t }),
                    react_1.default.createElement(Align_1.DesignBoxAlign, { defaultValue: defaultValue, value: value, onChange: onConcatData, textAlignItems: textAlignItems, textJustifyContent: textJustifyContent, _t: _t }),
                    react_1.default.createElement(Gap_1.DesignBoxGap, { defaultValue: defaultValue, value: value, onChange: onConcatData, textGap: textGap, textGapRow: textGapRow, textGapColumn: textGapColumn, _t: _t }))))));
};
exports.DesignBox = DesignBox;
//# sourceMappingURL=index.js.map