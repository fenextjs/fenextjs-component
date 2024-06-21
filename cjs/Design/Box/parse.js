"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseDesignBoxValueProps_to_CSSProperties = void 0;
const parseDesignBoxValueProps_to_CSSProperties = (d) => {
    return {
        display: "grid",
        background: `${d.background ?? "initial"}`,
        paddingTop: `${d.paddingTop ?? 0}${d.paddingUnit ?? "px"}`,
        paddingLeft: `${d.paddingLeft ?? 0}${d.paddingUnit ?? "px"}`,
        paddingRight: `${d.paddingRight ?? 0}${d.paddingUnit ?? "px"}`,
        paddingBottom: `${d.paddingBottom ?? 0}${d.paddingUnit ?? "px"}`,
        marginTop: `${d.marginTop ?? 0}${d.marginUnit ?? "px"}`,
        marginLeft: `${d.marginLeft ?? 0}${d.marginUnit ?? "px"}`,
        marginRight: `${d.marginRight ?? 0}${d.marginUnit ?? "px"}`,
        marginBottom: `${d.marginBottom ?? 0}${d.marginUnit ?? "px"}`,
        borderTopWidth: `${d.borderTop ?? 0}${d.borderUnit ?? "px"}`,
        borderLeftWidth: `${d.borderLeft ?? 0}${d.borderUnit ?? "px"}`,
        borderRightWidth: `${d.borderRight ?? 0}${d.borderUnit ?? "px"}`,
        borderBottomWidth: `${d.borderBottom ?? 0}${d.borderUnit ?? "px"}`,
        borderTopStyle: `${d.borderTopStyle ?? "hidden"}`,
        borderLeftStyle: `${d.borderLeftStyle ?? "hidden"}`,
        borderRightStyle: `${d.borderRightStyle ?? "hidden"}`,
        borderBottomStyle: `${d.borderBottomStyle ?? "hidden"}`,
        borderTopLeftRadius: `${d.borderTopLeftRadius ?? 0}${d.borderUnitRadius ?? "px"}`,
        borderTopRightRadius: `${d.borderTopRightRadius ?? 0}${d.borderUnitRadius ?? "px"}`,
        borderBottomLeftRadius: `${d.borderBottomLeftRadius ?? 0}${d.borderUnitRadius ?? "px"}`,
        borderBottomRightRadius: `${d.borderBottomRightRadius ?? 0}${d.borderUnitRadius ?? "px"}`,
        borderColor: `${d.borderColor ?? "initial"}`,
        width: `${d.widthUnit == "auto" ? "auto" : `${d.width ?? 0}${d.widthUnit ?? "px"}`}`,
        minWidth: `${d.minWidthUnit == "auto" ? "auto" : `${d.minWidth ?? 0}${d.minWidthUnit ?? "px"}`}`,
        maxWidth: `${d.maxWidthUnit == "auto" ? "auto" : `${d.maxWidth ?? 0}${d.maxWidthUnit ?? "px"}`}`,
        height: `${d.heightUnit == "auto" ? "auto" : `${d.height ?? 0}${d.heightUnit ?? "px"}`}`,
        minHeight: `${d.minHeightUnit == "auto" ? "auto" : `${d.minHeight ?? 0}${d.minHeightUnit ?? "px"}`}`,
        maxHeight: `${d.maxHeightUnit == "auto" ? "auto" : `${d.maxHeight ?? 0}${d.maxHeightUnit ?? "px"}`}`,
        justifyContent: `${d.justifyContent ?? "start"}`,
        alignItems: `${d.alignItems ?? "start"}`,
        rowGap: `${d.gapRow ?? 0}${d.gapUnit ?? "px"}`,
        columnGap: `${d.gapColumn ?? 0}${d.gapUnit ?? "px"}`,
    };
};
exports.parseDesignBoxValueProps_to_CSSProperties = parseDesignBoxValueProps_to_CSSProperties;
//# sourceMappingURL=parse.js.map