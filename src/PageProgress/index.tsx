import React, { useState } from "react";

import Router from "next/router";
/**
 * Properties for the base PageProgress component.
 */
export interface PageProgressBaseProps {}

/**
 * Properties for the class of the PageProgress component.
 */
export interface PageProgressClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
}

/**
 * Properties for the PageProgress component.
 */
export interface PageProgressProps
    extends PageProgressBaseProps,
        PageProgressClassProps {}

export const PageProgress = ({ className = "" }: PageProgressProps) => {
    const [statusBar, setStatusBar] = useState<"none" | "start" | "done">(
        "none",
    );

    const onNone = () => {
        setStatusBar("none");
    };
    const onDone = () => {
        setStatusBar("done");
        setTimeout(onNone, 250);
    };
    const onStart = () => {
        setStatusBar("start");
    };

    Router?.events?.on?.("routeChangeStart", onStart);
    Router?.events?.on?.("routeChangeComplete", onDone);
    Router?.events?.on?.("routeChangeError", onDone);
    return (
        <>
            <div
                className={`fenext-page-progress fenext-page-progress-${statusBar} ${className} `}
            ></div>
        </>
    );
};
