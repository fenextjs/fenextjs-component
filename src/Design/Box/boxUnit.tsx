import { _TProps } from "fenextjs-interface";

export const ConstDesignBoxMarginUnit = ["px", "em", "rem"] as const;
export type DesignBoxMarginUnit = (typeof ConstDesignBoxMarginUnit)[number];

export const ConstDesignBoxPaddingUnit = ["px", "em", "rem"] as const;
export type DesignBoxPaddingUnit = (typeof ConstDesignBoxPaddingUnit)[number];

export const ConstDesignBoxBorderUnit = ["px", "em", "rem"] as const;
export type DesignBoxBorderUnit = (typeof ConstDesignBoxBorderUnit)[number];


export const ConstDesignBoxBorderRadiusUnit = ["px", "em", "rem"] as const;
export type DesignBoxBorderRadiusUnit = (typeof ConstDesignBoxBorderRadiusUnit)[number];

export const ConstDesignBoxWidthUnit = [
    "px",
    "em",
    "rem",
    "%",
    "vw",
    "dvw",
    "auto",
] as const;
export type DesignBoxWidthUnit = (typeof ConstDesignBoxWidthUnit)[number];

export const ConstDesignBoxHeightUnit = [
    "px",
    "em",
    "rem",
    "%",
    "vw",
    "dvw",
    "auto",
] as const;
export type DesignBoxHeightUnit = (typeof ConstDesignBoxHeightUnit)[number];

export const ConstDesignBoxJustifyCountentUnit = [
    "center",
    "end",
    "start",
    "space-around",
    "space-between",
    "space-evenly",
    "stretch",
] as const;
export type DesignBoxJustifyCountentUnit =
    (typeof ConstDesignBoxJustifyCountentUnit)[number];

export const ConstDesignBoxAlignItemsUnit = [
    "baseline",
    "normal",
    "stretch",
    "center",
    "end",
    "start",
] as const;
export type DesignBoxAlignItemsUnit =
    (typeof ConstDesignBoxAlignItemsUnit)[number];

export const ConstDesignBoxGapsUnit = ["px", "em", "rem"] as const;
export type DesignBoxGapsUnit = (typeof ConstDesignBoxGapsUnit)[number];

export interface DesignBoxValue {
    background?: string;

    marginTogether?: boolean;
    marginTop?: number;
    marginRight?: number;
    marginBottom?: number;
    marginLeft?: number;
    marginUnit?: DesignBoxMarginUnit;

    paddingTogether?: boolean;
    paddingTop?: number;
    paddingRight?: number;
    paddingBottom?: number;
    paddingLeft?: number;
    paddingUnit?: DesignBoxPaddingUnit;

    borderTogether?: boolean;
    borderTop?: number;
    borderRight?: number;
    borderBottom?: number;
    borderLeft?: number;
    borderUnit?: DesignBoxBorderUnit;

    borderRadiusTogether?: boolean;
    borderRadiusTopLeft?: number;
    borderRadiusTopRight?: number;
    borderRadiusBottomLeft?: number;
    borderRadiusBottomRight?: number;
    borderRadiusUnit?: DesignBoxBorderRadiusUnit;
    
    borderColor?: string;

    width?: number;
    widthUnit?: DesignBoxWidthUnit;
    maxWidth?: number;
    maxWidthUnit?: DesignBoxWidthUnit;
    minWidth?: number;
    minWidthUnit?: DesignBoxWidthUnit;

    height?: number;
    heightUnit?: DesignBoxHeightUnit;
    maxHeight?: number;
    maxHeightUnit?: DesignBoxHeightUnit;
    minHeight?: number;
    minHeightUnit?: DesignBoxHeightUnit;

    justifyContent?: DesignBoxJustifyCountentUnit;
    alignItems?: DesignBoxAlignItemsUnit;

    rowGap?: number;
    columnGap?: number;
    gapUnit?: DesignBoxGapsUnit;
}


export type DesignBoxValueProps = Partial<DesignBoxValue>

export interface DesignBoxUseDataProps extends _TProps {
    defaultValue?: DesignBoxValueProps;
    value?: DesignBoxValueProps;
    onChange?: (data: DesignBoxValueProps) => void;
}