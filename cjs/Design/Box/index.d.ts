import React, { CSSProperties } from "react";
import { CollapseProps } from "../../Collapse/Simple";
import { DesignBoxValueProps } from "./boxUnit";
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
export interface DesignBoxTextProps extends DesignBoxPaddingProps, DesignBoxMarginProps, DesignBoxBorderProps, DesignBoxBorderRadiusProps, DesignBoxBorderColorProps, DesignBoxBackgroundProps, DesignBoxWidthProps, DesignBoxHeightProps, DesignBoxGapProps, DesignBoxAlignProps, DesignBoxBorderStyleProps {
}
export interface DesignBoxProps extends Omit<DesignBoxTextProps, "setDataFunction" | "data" | "onChangeData"> {
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
export declare const DesignBox: ({ className, textBox, textBackground, textPadding, textPaddingBottom, textPaddingLeft, textPaddingRight, textPaddingTop, textMargin, textMarginBottom, textMarginLeft, textMarginRight, textMarginTop, textBorder, textBorderBottom, textBorderLeft, textBorderRight, textBorderTop, textBorderRadius, textBorderRadiusTopLeft, textBorderRadiusTopRight, textBorderRadiusBottomLeft, textBorderRadiusBottomRight, textBorderStyle, textBorderStyleTop, textBorderStyleLeft, textBorderStyleRight, textBorderStyleBottom, textBorderColor, textWidth, textMinWidth, textMaxWidth, textHeight, textMinHeight, textMaxHeight, textAlignItems, textJustifyContent, textGap, textGapRow, textGapColumn, defaultValue, value, onChange, onChangeStyles, collapseName, collapseType, collapseUseActiveForShowChildren, ...props }: DesignBoxProps) => React.JSX.Element;
