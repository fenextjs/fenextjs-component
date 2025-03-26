import React, { useState, useEffect } from "react";

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

    useEffect(() => {
        const handleStart = () => onStart();
        const handleDone = () => onDone();

        // Interceptar cambios en la URL
        const originalPushState = history.pushState;
        const originalReplaceState = history.replaceState;

        history.pushState = function (...args) {
            handleStart();
            originalPushState.apply(this, args);
            handleDone();
        };

        history.replaceState = function (...args) {
            handleStart();
            originalReplaceState.apply(this, args);
            handleDone();
        };

        window.addEventListener("popstate", handleDone);

        return () => {
            history.pushState = originalPushState;
            history.replaceState = originalReplaceState;
            window.removeEventListener("popstate", handleDone);
        };
    }, []);

    return (
        <div
            className={`fenext-page-progress fenext-page-progress-${statusBar} ${className}`}
        ></div>
    );
};
