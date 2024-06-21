import { _TProps } from "fenextjs-interface";
import React, { CSSProperties } from "react";
import { CollapseProps } from "../../Collapse/Simple";
import { DesignTypographyValue } from "./fontUnit";
/**
 * Properties for the base DesignTypography component.
 */
export interface DesignTypographyValueProps extends Partial<DesignTypographyValue> {
}
/**
 * Properties for the base DesignTypography component.
 */
export interface DesignTypographyProps extends _TProps {
    /**
     * The class name for the component.
     */
    className?: string;
    defaultValue?: DesignTypographyValueProps;
    value?: DesignTypographyValueProps;
    onChange?: (data: DesignTypographyValueProps) => void;
    onChangeStyles?: (data: CSSProperties) => void;
    textTypography?: string;
    textExample?: string;
    textExampleValue?: string;
    textColor?: string;
    textSize?: string;
    textAlign?: string;
    textWeight?: string;
    textTransform?: string;
    textStyle?: string;
    textDecoration?: string;
    textLineHeight?: string;
    textLetterSpacing?: string;
    textWordSpacing?: string;
    collapseName?: CollapseProps["name"];
    collapseType?: CollapseProps["type"];
    collapseUseActiveForShowChildren?: CollapseProps["useActiveForShowChildren"];
}
export declare const DesignTypography: ({ className, _t, textTypography, textExample, textExampleValue, textColor, textSize, textAlign, textWeight, textTransform, textStyle, textDecoration, textLineHeight, textLetterSpacing, textWordSpacing, defaultValue, value, onChange, onChangeStyles, collapseName, collapseType, collapseUseActiveForShowChildren, }: DesignTypographyProps) => React.JSX.Element;
