import React, { PropsWithChildren, ReactNode } from "react";
import { Loader, LoaderClassProps } from "../../../Loader";
import { PageProgress } from "../../../PageProgress";
/**
 * Properties for the base button component.
 */
export interface LayoutGridMenuTopBaseProps extends PropsWithChildren {
    /**
     * Indicates whether the page is currently in the loading state.
     */
    loader?: boolean;
    /**
     * Menu Top of Layout.
     */
    menuTop?: ReactNode;
    /**
     * Use page progress bar.
     */
    usePageProgress?: boolean;
}

/**
 * Properties for the class of the button component.
 */
export interface LayoutGridMenuTopClassProps extends LoaderClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
    /**
     * The class name for the Menu Top element.
     */
    classNameMenuTop?: string;
    /**
     * The class name for the Content Children element.
     */
    classNameChildren?: string;
}

/**
 * Properties for the button component.
 */
export interface LayoutGridMenuTopProps
    extends LayoutGridMenuTopBaseProps,
        LayoutGridMenuTopClassProps {}

export const LayoutGridMenuTop = ({
    className = "",
    classNameLoader = "",
    classNameChildren = "",
    classNameMenuTop = "",

    children,
    menuTop,
    loader = false,
    usePageProgress = true,
    ...props
}: LayoutGridMenuTopProps) => {
    return (
        <>
            <div
                className={`fenext-layout-grid fenext-layout-grid-mt ${className}`}
                {...props}
            >
                <div
                    className={`fenext-layout-grid-mt-menu-top ${classNameMenuTop}`}
                >
                    {menuTop}
                </div>
                <div
                    className={`fenext-layout-grid-mt-children ${classNameChildren}`}
                >
                    {usePageProgress && <PageProgress />}
                    {loader ? (
                        <Loader classNameLoader={classNameLoader} />
                    ) : (
                        <>{children}</>
                    )}
                </div>
            </div>
        </>
    );
};
