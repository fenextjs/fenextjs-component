import React from "react";

/**
 * Properties for the base ProgressCircle component.
 */
export interface ProgressCircleBaseProps {
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
 * Properties for the class of the ProgressCircle component.
 */
export interface ProgressCircleClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
}

/**
 * Properties for the ProgressCircle component.
 */
export interface ProgressCircleProps
    extends ProgressCircleBaseProps,
        ProgressCircleClassProps {}

export const ProgressCircle = ({
    className = "",
    p,
    showP = true,
}: ProgressCircleProps) => {
    return (
        <>
            <div
                className={`fenext-progess-circle fenext-progess-circle-${
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
