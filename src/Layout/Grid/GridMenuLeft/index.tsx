import React, { PropsWithChildren, ReactNode } from "react";
import { Loader, LoaderClassProps } from "../../../Loader";
import { PageProgress } from "../../../PageProgress";
import { AlertHook, AlertHookProps } from "../../../AlertHook";

/**
 * Properties for the base button component.
 */
export interface LayoutGridMenuLeftBaseProps extends PropsWithChildren {
    /**
     * Indicates if render componenet alert hook.
     */
    useAlertHook?: boolean;
    /**
     * props for alert hook.
     */
    alertHookProps?: AlertHookProps;
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
    /**
     * target for btn.
     */
    target?: string;
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
    useAlertHook = true,
    alertHookProps = {},
    target = "fenext-btn-menu-checkbox",
    ...props
}: LayoutGridMenuLeftProps) => {
    const t = `[name="${target}"]:checked`;
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
                data-target={target}
                {...props}
            >
                <div
                    className={`fenext-layout-grid-ml-menu-left ${classNameMenuLeft}`}
                >
                    <div
                        className={`fenext-layout-grid-ml-menu-left-content ${classNameMenuLeftContent}`}
                    >
                        {menuLeft}
                        {target}
                    </div>
                </div>
                <div
                    className={`fenext-layout-grid-ml-children ${classNameChildren}`}
                >
                    {usePageProgress && <PageProgress />}
                    {useAlertHook && (
                        <AlertHook
                            {...alertHookProps}
                            className={`fenext-layout-grid-alert ${alertHookProps?.className ?? ""}`}
                        />
                    )}
                    {loader ? (
                        <Loader
                            classNameLoader={`${classNameLoader} fenext-layout-grid-loader`}
                        />
                    ) : (
                        <>{children}</>
                    )}
                </div>
                {target != "fenext-btn-menu-checkbox" && (
                    <>
                        <style>
                            {`
                                body:has(${t}) .fenext-layout-grid-ml-use-btn-menu[data-target=${target}] {
                                    @media (min-width: 576px) {
                                        --size-menu : var(--fenext-size-menu-left, auto);
                                    }
                                    @media (max-width: 575px) {
                                        --clip-path: circle(200% at 0% 0%);
                                    }
                                }
                                body:not(:has(${t})) .fenext-layout-grid-ml-use-btn-menu[data-target=${target}] {
                                    @media (min-width: 576px) {
                                        --size-menu : var(--fenext-size-menu-left-close, 0px);
                                    }
                                    @media (max-width: 575px) {
                                        --clip-path: circle(0% at 0% 0%);
                                    }
                                }
                            `}
                        </style>
                    </>
                )}
            </div>
        </>
    );
};
