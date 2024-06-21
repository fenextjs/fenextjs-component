import { _tValidate } from "fenextjs-functions";
import { InputSelectT } from "../../Input/SelectT";
import { InputCheckbox } from "../../Input/Checkbox";
import { InputNumberCount } from "../../Input/NumberCount";
import { _TProps } from "fenextjs-interface";
import React, { CSSProperties, useMemo } from "react";
import { Edit } from "fenextjs-svg";
import { Collapse, CollapseProps } from "../../Collapse/Simple";
import { Text } from "../../Text";
import { ConstDesignBoxPaddingUnit, DesignBoxValue } from "./boxUnit";
import { useData } from "fenextjs-hook";
import { parseDesignBoxValueProps_to_CSSProperties } from "./parse";
import { DesignBoxPadding,DesignBoxPaddingProps } from "./Padding";
import { DesignBoxMargin,DesignBoxMarginProps } from "./Margin";
import { DesignBoxBorder,DesignBoxBorderProps } from "./Border";
import { DesignBoxBorderRadius,DesignBoxBorderRadiusProps } from "./BorderRadius";
import { DesignBoxBorderColor,DesignBoxBorderColorProps } from "./BorderColor";
import { DesignBoxBackground,DesignBoxBackgroundProps} from "./Background";

/**
 * Properties for the base DesignBox component.
 */
export interface DesignBoxValueProps extends Partial<DesignBoxValue> {}

/**
 * Properties for the base DesignBox component.
 */
export interface DesignBoxProps extends DesignBoxPaddingProps,DesignBoxMarginProps,DesignBoxBorderProps ,DesignBoxBorderRadiusProps,DesignBoxBorderColorProps, DesignBoxBackgroundProps{
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

    defaultValue = {},
    value,
    onChange,
    onChangeStyles,

    collapseName,
    collapseType,
}: DesignBoxProps) => {
    const {
        data: data_,
        onChangeData,
        dataMemo,
        onConcatData,
        setDataFunction
    } = useData<DesignBoxValueProps, CSSProperties>(defaultValue, {
        onChangeDataAfter: onChange,
        onChangeDataMemoAfter: onChangeStyles,
        onMemo: parseDesignBoxValueProps_to_CSSProperties,
    });

    const data = useMemo(() => value ?? data_, [value, data_]);

    const _p = (e) => ({ id: `${e}`, text: `${e}`, data: e });

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
                    </div>
                </Collapse>
            </div>
        </>
    );
};
