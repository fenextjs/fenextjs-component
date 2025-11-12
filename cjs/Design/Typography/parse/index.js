"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseDesignTypographyValueProps_to_CSSProperties = void 0;
const parseDesignTypographyValueProps_to_CSSProperties = (d) => {
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
exports.parseDesignTypographyValueProps_to_CSSProperties = parseDesignTypographyValueProps_to_CSSProperties;
