import { CSSProperties } from "react";
import { DesignBoxValue } from "./fontUnit";

export const parseDesignBoxValueProps_to_CSSProperties = (
    d: Partial<DesignBoxValue>,
): CSSProperties => {
    return {
        fontSize: `${d.fontSize}${d.fontSizeUnit}`,
        textAlign: d.textAlign,
        fontWeight: d.weight,
        textTransform: d.transform,
        fontStyle: d.style,
        textDecoration: d.decoration,
        lineHeight: `${d.lineHeight}${d.lineHeightUnit == "normal" ? "" : d.lineHeightUnit}`,
        letterSpacing: `${d.letterSpacing}${d.letterSpacingUnit}`,
        wordSpacing: `${d.wordSpacing}${d.wordSpacingUnit}`,
        color: d.color,
    };
};
