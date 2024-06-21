import React, { CSSProperties } from "react";
import { CollapseProps } from "../../Collapse/Simple";
import { DesignBoxValue } from "./boxUnit";
import { DesignBoxPaddingProps } from "./Padding";
import { DesignBoxMarginProps } from "./Margin";
import { DesignBoxBorderProps } from "./Border";
import { DesignBoxBorderRadiusProps } from "./BorderRadius";
import { DesignBoxBorderStyleProps } from "./BorderStyle";
import { DesignBoxBorderColorProps } from "./BorderColor";
import { DesignBoxBackgroundProps } from "./Background";
import { DesignBoxWidthProps } from "./Width";
import { DesignBoxHeightProps } from "./Height";
import { DesignBoxAlignProps } from "./Align";
import { DesignBoxGapProps } from "./Gap";
/**
 * Properties for the base DesignBox component.
 */
export interface DesignBoxValueProps extends Partial<DesignBoxValue> {
}
/**
 * Properties for the base DesignBox component.
 */
export interface DesignBoxProps extends DesignBoxPaddingProps, DesignBoxMarginProps, DesignBoxBorderProps, DesignBoxBorderRadiusProps, DesignBoxBorderColorProps, DesignBoxBackgroundProps, DesignBoxWidthProps, DesignBoxHeightProps, DesignBoxGapProps, DesignBoxAlignProps, DesignBoxBorderStyleProps {
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
export declare const DesignBox: ({ className, _t, textBox, textBackground, textPadding, textPaddingBottom, textPaddingLeft, textPaddingRight, textPaddingTop, textMargin, textMarginBottom, textMarginLeft, textMarginRight, textMarginTop, textBorder, textBorderBottom, textBorderLeft, textBorderRight, textBorderTop, textBorderRadius, textBorderRadiusTopLeft, textBorderRadiusTopRight, textBorderRadiusBottomLeft, textBorderRadiusBottomRight, textBorderStyle, textBorderStyleTop, textBorderStyleLeft, textBorderStyleRight, textBorderStyleBottom, textBorderColor, textWidth, textMinWidth, textMaxWidth, textHeight, textMinHeight, textMaxHeight, textAlignItems, textJustifyContent, textGap, textGapRow, textGapColumn, defaultValue, value, onChange, onChangeStyles, collapseName, collapseType, collapseUseActiveForShowChildren, }: DesignBoxProps) => React.JSX.Element;
