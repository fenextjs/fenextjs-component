import React from "react";
import {
    LayoutGridMenuTop,
    LayoutGridMenuTopBaseProps,
    LayoutGridMenuTopClassProps,
} from "../GridMenuTop";
import {
    LayoutGridMenuLeft,
    LayoutGridMenuLeftBaseProps,
    LayoutGridMenuLeftClassProps,
} from "../GridMenuLeft";
import { LoaderClassProps } from "../../../Loader";
/**
 * Properties for the base button component.
 */
export interface LayoutGridMenuTopLeftBaseProps
    extends LayoutGridMenuTopBaseProps,
        LayoutGridMenuLeftBaseProps {}

/**
 * Properties for the class of the button component.
 */
export interface LayoutGridMenuTopLeftClassProps
    extends LayoutGridMenuTopClassProps,
        LayoutGridMenuLeftClassProps,
        LoaderClassProps {}

/**
 * Properties for the button component.
 */
export interface LayoutGridMenuTopLeftProps
    extends LayoutGridMenuTopLeftBaseProps,
        LayoutGridMenuTopLeftClassProps {}

export const LayoutGridMenuTopLeft = ({
    className = "",
    classNameLoader = "",
    classNameChildren = "",
    classNameMenuTop = "",
    classNameMenuLeft = "",
    classNameMenuLeftContent = "",

    children,
    menuLeft,
    menuTop,
    loader = false,
    menuLeftActive = true,
    menuLeftMovilActive = false,
    useHeaderButtonMenu = false,
    usePageProgress = true,
    alertHookProps,
    useAlertHook = true,
    target = "fenext-btn-menu-checkbox",
}: LayoutGridMenuTopLeftProps) => {
    return (
        <>
            <LayoutGridMenuTop
                className={`fenext-layout-grid fenext-layout-grid-mtl ${className}`}
                classNameMenuTop={classNameMenuTop}
                menuTop={menuTop}
                usePageProgress={false}
                useAlertHook={false}
            >
                <LayoutGridMenuLeft
                    classNameLoader={classNameLoader}
                    classNameChildren={classNameChildren}
                    classNameMenuLeft={classNameMenuLeft}
                    classNameMenuLeftContent={classNameMenuLeftContent}
                    menuLeft={menuLeft}
                    loader={loader}
                    menuLeftActive={menuLeftActive}
                    menuLeftMovilActive={menuLeftMovilActive}
                    useHeaderButtonMenu={useHeaderButtonMenu}
                    usePageProgress={usePageProgress}
                    useAlertHook={useAlertHook}
                    alertHookProps={alertHookProps}
                    target={target}
                >
                    {children}
                </LayoutGridMenuLeft>
            </LayoutGridMenuTop>
        </>
    );
};
