import { CSSProperties } from "react";
import { DesignBoxValue } from "./boxUnit";

export const parseDesignBoxValueProps_to_CSSProperties = (
    d: Partial<DesignBoxValue>,
): CSSProperties => {
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

        borderTop: `${d.borderTop ?? 0}${d.borderUnit ?? "px"}`,
        borderLeft: `${d.borderLeft ?? 0}${d.borderUnit ?? "px"}`,
        borderRight: `${d.borderRight ?? 0}${d.borderUnit ?? "px"}`,
        borderBottom: `${d.borderBottom ?? 0}${d.borderUnit ?? "px"}`,

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
