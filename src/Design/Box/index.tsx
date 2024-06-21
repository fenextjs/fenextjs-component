import { _tValidate } from "fenextjs-functions";
import React, { CSSProperties, useMemo } from "react";
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


    defaultValue?: DesignBoxValueProps;
    value?: DesignBoxValueProps;
    onChange?: (data: DesignBoxValueProps) => void;
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

        justifyContent:"stretch",
        alignItems:"start"
    },
    value,
    onChange,
    onChangeStyles,

    collapseName,
    collapseType,
    collapseUseActiveForShowChildren = true,
}: DesignBoxProps) => {
    const { onChangeData ,dataMemo,data:data_,setDataFunction} = useData<DesignBoxValueProps, CSSProperties>(
        defaultValue,
        {
            onChangeDataAfter: onChange,
            onChangeDataMemoAfter: onChangeStyles,
            onMemo: parseDesignBoxValueProps_to_CSSProperties,
        },
    );
    console.log({borderLeftStyle:dataMemo?.borderLeftStyle});

    const data = useMemo(() => value ?? data_, [value, data_]);
    
    return (
        <>
            <div className={`fenext-design-box ${className} `}>
                <div style={dataMemo}></div>
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
                            data={data}
                            onChangeData={onChangeData}
                            setDataFunction={setDataFunction}
                            textBackground={textBackground}
                            _t={_t}
                        />
                        <DesignBoxPadding
                            data={data}
                            onChangeData={onChangeData}
                            setDataFunction={setDataFunction}
                            textPadding={textPadding}
                            textPaddingBottom={textPaddingBottom}
                            textPaddingLeft={textPaddingLeft}
                            textPaddingRight={textPaddingRight}
                            textPaddingTop={textPaddingTop}
                            _t={_t}
                        />
                        <DesignBoxMargin
                            data={data}
                            onChangeData={onChangeData}
                            setDataFunction={setDataFunction}
                            textMargin={textMargin}
                            textMarginBottom={textMarginBottom}
                            textMarginLeft={textMarginLeft}
                            textMarginRight={textMarginRight}
                            textMarginTop={textMarginTop}
                            _t={_t}
                        />
                        <DesignBoxBorder
                            data={data}
                            onChangeData={onChangeData}
                            setDataFunction={setDataFunction}
                            textBorder={textBorder}
                            textBorderBottom={textBorderBottom}
                            textBorderLeft={textBorderLeft}
                            textBorderRight={textBorderRight}
                            textBorderTop={textBorderTop}
                            _t={_t}
                        />
                        <DesignBoxBorderRadius
                            data={data}
                            onChangeData={onChangeData}
                            setDataFunction={setDataFunction}
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
                            data={data}
                            onChangeData={onChangeData}
                            setDataFunction={setDataFunction}
                            textBorderStyle={textBorderStyle}
                            textBorderStyleBottom={textBorderStyleBottom}
                            textBorderStyleLeft={textBorderStyleLeft}
                            textBorderStyleRight={textBorderStyleRight}
                            textBorderStyleTop={textBorderStyleTop}
                            _t={_t}
                        />
                        <DesignBoxBorderColor
                            data={data}
                            onChangeData={onChangeData}
                            setDataFunction={setDataFunction}
                            textBorderColor={textBorderColor}
                            _t={_t}
                        />
                        <DesignBoxWidth
                            data={data}
                            onChangeData={onChangeData}
                            setDataFunction={setDataFunction}
                            textWidth={textWidth}
                            textMaxWidth={textMaxWidth}
                            textMinWidth={textMinWidth}
                            _t={_t}
                        />
                        <DesignBoxHeight
                            data={data}
                            onChangeData={onChangeData}
                            setDataFunction={setDataFunction}
                            textHeight={textHeight}
                            textMaxHeight={textMaxHeight}
                            textMinHeight={textMinHeight}
                            _t={_t}
                        />
                        <DesignBoxAlign
                            data={data}
                            onChangeData={onChangeData}
                            setDataFunction={setDataFunction}
                            textAlignItems={textAlignItems}
                            textJustifyContent={textJustifyContent}
                            _t={_t}
                        />
                        <DesignBoxGap
                            data={data}
                            onChangeData={onChangeData}
                            setDataFunction={setDataFunction}
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
