import React, { PropsWithChildren, ReactNode } from "react";
import { Loader, LoaderClassProps } from "../../../Loader";
import { PageProgress } from "../../../PageProgress";
/**
 * Properties for the base button component.
 */
export interface LayoutGridMenuLeftBaseProps extends PropsWithChildren {
    /**
     * Indicates whether the page is currently in the loading state.
     */
    loader?: boolean;
    /**
     * Menu Left of Layout.
     */
    menuLeft?: ReactNode;
    /**
     * Menu Top of Layout.
     */
    menuLeftActive?: boolean;
    /**
     * Menu Top of Layout.
     */
    menuLeftMovilActive?: boolean;
    /**
     * useHeaderButtonMenu for show menu.
     */
    useHeaderButtonMenu?: boolean;
    /**
     * Use page progress bar.
     */
    usePageProgress?: boolean;
}

/**
 * Properties for the class of the button component.
 */
export interface LayoutGridMenuLeftClassProps extends LoaderClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
    /**
     * The class name for the Menu Left element.
     */
    classNameMenuLeft?: string;
    /**
     * The class name for the Menu Left element.
     */
    classNameMenuLeftContent?: string;
    /**
     * The class name for the Content Children element.
     */
    classNameChildren?: string;
}

/**
 * Properties for the button component.
 */
export interface LayoutGridMenuLeftProps
    extends LayoutGridMenuLeftBaseProps,
        LayoutGridMenuLeftClassProps {}

export const LayoutGridMenuLeft = ({
    className = "",
    classNameLoader = "",
    classNameChildren = "",
    classNameMenuLeft = "",
    classNameMenuLeftContent = "",

    children,
    menuLeft,
    loader = false,
    menuLeftActive = true,
    menuLeftMovilActive = false,
    useHeaderButtonMenu = false,
    usePageProgress = true,
    ...props
}: LayoutGridMenuLeftProps) => {
    return (
        <>
            <div
                className={`fenext-layout-grid fenext-layout-grid-ml 
                    ${className} 
                    fenext-layout-grid-ml-${
                        menuLeftActive ? "active" : "inactive"
                    }
                    fenext-layout-grid-ml-movil-${
                        menuLeftMovilActive ? "active" : "inactive"
                    }
                    fenext-layout-grid-ml-${
                        useHeaderButtonMenu ? "use-btn-menu" : ""
                    }
                `}
                {...props}
            >
                <div
                    className={`fenext-layout-grid-ml-menu-left ${classNameMenuLeft}`}
                >
                    <div
                        className={`fenext-layout-grid-ml-menu-left-content ${classNameMenuLeftContent}`}
                    >
                        {menuLeft}
                    </div>
                </div>
                <div
                    className={`fenext-layout-grid-ml-children ${classNameChildren}`}
                >
                    {usePageProgress && <PageProgress />}
                    {loader ? (
                        <Loader
                            classNameLoader={`${classNameLoader} fenext-layout-grid-loader`}
                        />
                    ) : (
                        <>{children}</>
                    )}
                </div>
            </div>
        </>
    );
};
