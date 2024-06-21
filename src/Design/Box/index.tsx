import { _tValidate } from "fenextjs-functions";
import React, { CSSProperties } from "react";
import { Edit } from "fenextjs-svg";
import { Collapse, CollapseProps } from "../../Collapse/Simple";
import { DesignBoxValue } from "./boxUnit";
import { useData } from "fenextjs-hook";
import { parseDesignBoxValueProps_to_CSSProperties } from "./parse";
import { DesignBoxPadding, DesignBoxPaddingProps } from "./Padding";
import { DesignBoxMargin, DesignBoxMarginProps } from "./Margin";
import { DesignBoxBorder, DesignBoxBorderProps } from "./Border";
import {
    DesignBoxBorderRadius,
    DesignBoxBorderRadiusProps,
} from "./BorderRadius";
import { DesignBoxBorderStyle, DesignBoxBorderStyleProps } from "./BorderStyle";
import { DesignBoxBorderColor, DesignBoxBorderColorProps } from "./BorderColor";
import { DesignBoxBackground, DesignBoxBackgroundProps } from "./Background";
import { DesignBoxWidth, DesignBoxWidthProps } from "./Width";
import { DesignBoxHeight, DesignBoxHeightProps } from "./Height";
import { DesignBoxAlign, DesignBoxAlignProps } from "./Align";
import { DesignBoxGap, DesignBoxGapProps } from "./Gap";

/**
 * Properties for the base DesignBox component.
 */
export interface DesignBoxValueProps extends Partial<DesignBoxValue> {}

/**
 * Properties for the base DesignBox component.
 */
export interface DesignBoxProps
    extends DesignBoxPaddingProps,
        DesignBoxMarginProps,
        DesignBoxBorderProps,
        DesignBoxBorderRadiusProps,
        DesignBoxBorderColorProps,
        DesignBoxBackgroundProps,
        DesignBoxWidthProps,
        DesignBoxHeightProps,
        DesignBoxGapProps,
        DesignBoxAlignProps,
        DesignBoxBorderStyleProps {
    /**
     * The class name for the component.
     */
    className?: string;

    onChangeStyles?: (data: CSSProperties) => void;

    collapseName?: CollapseProps["name"];
    collapseType?: CollapseProps["type"];
    collapseUseActiveForShowChildren?: CollapseProps["useActiveForShowChildren"];

    textBox?: string;
}

export const DesignBox = ({
    className = "",
    _t,

    textBox = "Box",

    textBackground = "Background",

    textPadding = "Padding",
    textPaddingBottom = "Bottom",
    textPaddingLeft = "Left",
    textPaddingRight = "Right",
    textPaddingTop = "Top",

    textMargin = "Margin",
    textMarginBottom = "Bottom",
    textMarginLeft = "Left",
    textMarginRight = "Right",
    textMarginTop = "Top",

    textBorder = "Border",
    textBorderBottom = "Bottom",
    textBorderLeft = "Left",
    textBorderRight = "Right",
    textBorderTop = "Top",

    textBorderRadius = "Border Radius",
    textBorderRadiusTopLeft = "Top Left",
    textBorderRadiusTopRight = "Top Right",
    textBorderRadiusBottomLeft = "Bottom Left",
    textBorderRadiusBottomRight = "Bottom Right",

    textBorderStyle = "Border Style",
    textBorderStyleTop = "Top",
    textBorderStyleLeft = "Left",
    textBorderStyleRight = "Right",
    textBorderStyleBottom = "Bottom",

    textBorderColor = "Border Color",

    textWidth = "Width",
    textMinWidth = "Min Width",
    textMaxWidth = "Max Width",

    textHeight = "Height",
    textMinHeight = "Min Height",
    textMaxHeight = "Max Height",

    textAlignItems = "Align Vertical",
    textJustifyContent = "Align Horizontal",

    textGap = "Gap",
    textGapRow = "Gap Row",
    textGapColumn = "Gap Column",

    defaultValue = {
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
        borderTopStyle: "hidden",
        borderLeftStyle: "hidden",
        borderRightStyle: "hidden",
        borderBottomStyle: "hidden",
    },
    value,
    onChange,
    onChangeStyles,

    collapseName,
    collapseType,
    collapseUseActiveForShowChildren = true,
}: DesignBoxProps) => {
    const { onConcatData } = useData<DesignBoxValueProps, CSSProperties>(
        defaultValue,
        {
            onChangeDataAfter: onChange,
            onChangeDataMemoAfter: onChangeStyles,
            onMemo: parseDesignBoxValueProps_to_CSSProperties,
        },
    );

    return (
        <>
            <div className={`fenext-design-box ${className} `}>
                <Collapse
                    header={<>{_tValidate(textBox, _t)}</>}
                    iconArrow={
                        <>
                            <Edit />
                        </>
                    }
                    rotateIcon={false}
                    name={collapseName}
                    type={collapseType}
                    useActiveForShowChildren={collapseUseActiveForShowChildren}
                >
                    <div className={`fenext-design-box-content `}>
                        <DesignBoxBackground
                            defaultValue={defaultValue}
                            value={value}
                            onChange={onConcatData}
                            textBackground={textBackground}
                            _t={_t}
                        />
                        <DesignBoxPadding
                            defaultValue={defaultValue}
                            value={value}
                            onChange={onConcatData}
                            textPadding={textPadding}
                            textPaddingBottom={textPaddingBottom}
                            textPaddingLeft={textPaddingLeft}
                            textPaddingRight={textPaddingRight}
                            textPaddingTop={textPaddingTop}
                            _t={_t}
                        />
                        <DesignBoxMargin
                            defaultValue={defaultValue}
                            value={value}
                            onChange={onConcatData}
                            textMargin={textMargin}
                            textMarginBottom={textMarginBottom}
                            textMarginLeft={textMarginLeft}
                            textMarginRight={textMarginRight}
                            textMarginTop={textMarginTop}
                            _t={_t}
                        />
                        <DesignBoxBorder
                            defaultValue={defaultValue}
                            value={value}
                            onChange={onConcatData}
                            textBorder={textBorder}
                            textBorderBottom={textBorderBottom}
                            textBorderLeft={textBorderLeft}
                            textBorderRight={textBorderRight}
                            textBorderTop={textBorderTop}
                            _t={_t}
                        />
                        <DesignBoxBorderRadius
                            defaultValue={defaultValue}
                            value={value}
                            onChange={onConcatData}
                            textBorderRadius={textBorderRadius}
                            textBorderRadiusBottomLeft={
                                textBorderRadiusBottomLeft
                            }
                            textBorderRadiusBottomRight={
                                textBorderRadiusBottomRight
                            }
                            textBorderRadiusTopLeft={textBorderRadiusTopLeft}
                            textBorderRadiusTopRight={textBorderRadiusTopRight}
                            _t={_t}
                        />
                        <DesignBoxBorderStyle
                            defaultValue={defaultValue}
                            value={value}
                            onChange={onConcatData}
                            textBorderStyle={textBorderStyle}
                            textBorderStyleBottom={textBorderStyleBottom}
                            textBorderStyleLeft={textBorderStyleLeft}
                            textBorderStyleRight={textBorderStyleRight}
                            textBorderStyleTop={textBorderStyleTop}
                            _t={_t}
                        />
                        <DesignBoxBorderColor
                            defaultValue={defaultValue}
                            value={value}
                            onChange={onConcatData}
                            textBorderColor={textBorderColor}
                            _t={_t}
                        />
                        <DesignBoxWidth
                            defaultValue={defaultValue}
                            value={value}
                            onChange={onConcatData}
                            textWidth={textWidth}
                            textMaxWidth={textMaxWidth}
                            textMinWidth={textMinWidth}
                            _t={_t}
                        />
                        <DesignBoxHeight
                            defaultValue={defaultValue}
                            value={value}
                            onChange={onConcatData}
                            textHeight={textHeight}
                            textMaxHeight={textMaxHeight}
                            textMinHeight={textMinHeight}
                            _t={_t}
                        />
                        <DesignBoxAlign
                            defaultValue={defaultValue}
                            value={value}
                            onChange={onConcatData}
                            textAlignItems={textAlignItems}
                            textJustifyContent={textJustifyContent}
                            _t={_t}
                        />
                        <DesignBoxGap
                            defaultValue={defaultValue}
                            value={value}
                            onChange={onConcatData}
                            textGap={textGap}
                            textGapRow={textGapRow}
                            textGapColumn={textGapColumn}
                            _t={_t}
                        />
                    </div>
                </Collapse>
            </div>
        </>
    );
};
