import React from "react";

/**
 * Properties for the base ProgressLine component.
 */
export interface ProgressLineBaseProps {
    /**
     * Progress Number.
     */
    p: number;
    /**
     * Show Number Progress.
     */
    showP: boolean;
}

/**
 * Properties for the class of the ProgressLine component.
 */
export interface ProgressLineClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
}

/**
 * Properties for the ProgressLine component.
 */
export interface ProgressLineProps
    extends ProgressLineBaseProps,
        ProgressLineClassProps {}

export const ProgressLine = ({
    className = "",
    p,
    showP = true,
}: ProgressLineProps) => {
    return (
        <>
            <div
                className={`fenext-progess-line fenext-progess-line-${
                    showP ? "show-p" : ""
                } ${className} `}
                style={
                    {
                        ["--p"]: Math.max(0, Math.min(p, 100)),
                    } as React.CSSProperties
                }
            ></div>
        </>
    );
};
