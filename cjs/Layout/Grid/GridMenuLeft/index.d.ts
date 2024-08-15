import React, { PropsWithChildren, ReactNode } from "react";
import { LoaderClassProps } from "../../../Loader";
import { AlertHookProps } from "../../../AlertHook";
export interface LayoutGridMenuLeftBaseProps extends PropsWithChildren {
    useAlertHook?: boolean;
    alertHookProps?: AlertHookProps;
    loader?: boolean;
    menuLeft?: ReactNode;
    menuLeftActive?: boolean;
    menuLeftMovilActive?: boolean;
    useHeaderButtonMenu?: boolean;
    usePageProgress?: boolean;
}
export interface LayoutGridMenuLeftClassProps extends LoaderClassProps {
    className?: string;
    classNameMenuLeft?: string;
    classNameMenuLeftContent?: string;
    classNameChildren?: string;
}
export interface LayoutGridMenuLeftProps extends LayoutGridMenuLeftBaseProps, LayoutGridMenuLeftClassProps {
}
export declare const LayoutGridMenuLeft: ({ className, classNameLoader, classNameChildren, classNameMenuLeft, classNameMenuLeftContent, children, menuLeft, loader, menuLeftActive, menuLeftMovilActive, useHeaderButtonMenu, usePageProgress, useAlertHook, alertHookProps, ...props }: LayoutGridMenuLeftProps) => React.JSX.Element;
