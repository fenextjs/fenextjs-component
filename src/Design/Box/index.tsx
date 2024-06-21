import { _tValidate } from "fenextjs-functions";
import { _TProps } from "fenextjs-interface";
import React, { CSSProperties, useMemo } from "react";
import { Edit } from "fenextjs-svg";
import { Collapse, CollapseProps } from "../../Collapse/Simple";
import { Text } from "../../Text";
import {  DesignBoxValue } from "./boxUnit";
import { useData } from "fenextjs-hook";
import { parseDesignBoxValueProps_to_CSSProperties } from "./parse";
import { DesignBoxPadding,DesignBoxPaddingProps } from "./Padding";
import { DesignBoxMargin,DesignBoxMarginProps } from "./Margin";
import { DesignBoxBorder,DesignBoxBorderProps } from "./Border";
import { DesignBoxBorderRadius,DesignBoxBorderRadiusProps } from "./BorderRadius";
import { DesignBoxBorderColor,DesignBoxBorderColorProps } from "./BorderColor";
import { DesignBoxBackground,DesignBoxBackgroundProps} from "./Background";
import { DesignBoxWidth,DesignBoxWidthProps} from "./Width";
import { DesignBoxHeight,DesignBoxHeightProps} from "./Height";
import { DesignBoxGap,DesignBoxGapProps} from "./Gap";

/**
 * Properties for the base DesignBox component.
 */
export interface DesignBoxValueProps extends Partial<DesignBoxValue> {}

/**
 * Properties for the base DesignBox component.
 */
export interface DesignBoxProps extends DesignBoxPaddingProps,DesignBoxMarginProps,DesignBoxBorderProps ,DesignBoxBorderRadiusProps,DesignBoxBorderColorProps, DesignBoxBackgroundProps,DesignBoxWidthProps,DesignBoxHeightProps,DesignBoxGapProps{
    /**
     * The class name for the component.
     */
    className?: string;

    onChangeStyles?: (data: CSSProperties) => void;

    collapseName?: CollapseProps["name"];
    collapseType?: CollapseProps["type"];

    textBox?:string
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

    textBorderColor = "Border Color",

    textWidth = "Width",
    textMinWidth = "Min Width",
    textMaxWidth = "Max Width",

    textHeight = "Height",
    textMinHeight = "Min Height",
    textMaxHeight = "Max Height",

    textGap = "Gap",
    textGapRow = "Gap Row",
    textGapColumn = "Gap Column",

    defaultValue = {},
    value,
    onChange,
    onChangeStyles,

    collapseName,
    collapseType,
}: DesignBoxProps) => {
    const {
        data,
        dataMemo,
        onConcatData
    } = useData<DesignBoxValueProps, CSSProperties>(defaultValue, {
        onChangeDataAfter: onChange,
        onChangeDataMemoAfter: onChangeStyles,
        onMemo: parseDesignBoxValueProps_to_CSSProperties,
    });

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
                            textBorderRadiusBottomLeft={textBorderRadiusBottomLeft}
                            textBorderRadiusBottomRight={textBorderRadiusBottomRight}
                            textBorderRadiusTopLeft={textBorderRadiusTopLeft}
                            textBorderRadiusTopRight={textBorderRadiusTopRight}
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
                        />
                        <DesignBoxHeight
                            defaultValue={defaultValue}
                            value={value}
                            onChange={onConcatData}
                            textHeight={textHeight}
                            textMaxHeight={textMaxHeight}
                            textMinHeight={textMinHeight}
                        />
                        <DesignBoxGap
                            defaultValue={defaultValue}
                            value={value}
                            onChange={onConcatData}
                            textGap={textGap}
                            textGapRow={textGapRow}
                            textGapColumn={textGapColumn}
                        />
                    </div>
                </Collapse>
            </div>
        </>
    );
};
