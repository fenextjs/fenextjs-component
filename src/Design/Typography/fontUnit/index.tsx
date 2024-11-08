export const ConstDesignTypographyFontSizeUnit = ["px", "em", "rem"] as const;
export type DesignTypographyFontSizeUnit =
    (typeof ConstDesignTypographyFontSizeUnit)[number];

export const ConstDesignTypographyTextAlignUnit = [
    "center",
    "justify",
    "left",
    "right",
] as const;
export type DesignTypographyTextAlignUnit =
    (typeof ConstDesignTypographyTextAlignUnit)[number];

export const ConstDesignTypographyWeightUnit = [
    100, 200, 300, 400, 500, 600, 700, 800, 900,
] as const;
export type DesignTypographyWeightUnit =
    (typeof ConstDesignTypographyWeightUnit)[number];

export const ConstDesignTypographyTransformUnit = [
    "none",
    "uppercase",
    "lowercase",
    "capitalize",
] as const;
export type DesignTypographyTransformUnit =
    (typeof ConstDesignTypographyTransformUnit)[number];

export const ConstDesignTypographyStyleUnit = [
    "normal",
    "italic",
    "oblique",
] as const;
export type DesignTypographyStyleUnit =
    (typeof ConstDesignTypographyStyleUnit)[number];

export const ConstDesignTypographyDecorationUnit = [
    "normal",
    "underline",
    "overline",
    "line-through",
] as const;
export type DesignTypographyDecorationUnit =
    (typeof ConstDesignTypographyDecorationUnit)[number];

export const ConstDesignTypographyLineHeightUnit = [
    "normal",
    "px",
    "em",
    "rem",
] as const;
export type DesignTypographyLineHeightUnit =
    (typeof ConstDesignTypographyLineHeightUnit)[number];

export const ConstDesignTypographyLetterSpacingUnit = [
    "px",
    "em",
    "rem",
] as const;
export type DesignTypographyLetterSpacingUnit =
    (typeof ConstDesignTypographyLetterSpacingUnit)[number];

export const ConstDesignTypographyWordSpacingUnit = [
    "px",
    "em",
    "rem",
] as const;
export type DesignTypographyWordSpacingUnit =
    (typeof ConstDesignTypographyWordSpacingUnit)[number];

export interface DesignTypographyValue {
    fontFamily: string;
    fontSize: number;
    textAlign: DesignTypographyTextAlignUnit;
    color: string;
    fontSizeUnit: DesignTypographyFontSizeUnit;
    weight: DesignTypographyWeightUnit;
    transform: DesignTypographyTransformUnit;
    style: DesignTypographyStyleUnit;
    decoration: DesignTypographyDecorationUnit;
    lineHeight: number;
    lineHeightUnit: DesignTypographyLineHeightUnit;
    letterSpacing: number;
    letterSpacingUnit: DesignTypographyLetterSpacingUnit;
    wordSpacing: number;
    wordSpacingUnit: DesignTypographyWordSpacingUnit;
}
