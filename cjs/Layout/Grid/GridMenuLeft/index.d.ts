import React, { PropsWithChildren, ReactNode } from "react";
import { LoaderClassProps } from "../../../Loader";
import { AlertHookProps } from "../../../AlertHook";
import { AlertComponentProps } from "../../../Alert";
export interface LayoutGridMenuLeftBaseProps extends PropsWithChildren {
    useAlertHook?: boolean;
    alertHookProps?: AlertHookProps;
    alert?: AlertComponentProps;
    loader?: boolean;
    menuLeft?: ReactNode;
    menuLeftActive?: boolean;
    menuLeftMovilActive?: boolean;
    useHeaderButtonMenu?: boolean;
    usePageProgress?: boolean;
    target?: string;
}
export interface LayoutGridMenuLeftClassProps extends LoaderClassProps {
    className?: string;
    classNameMenuLeft?: string;
    classNameMenuLeftContent?: string;
    classNameChildren?: string;
}
export interface LayoutGridMenuLeftProps extends LayoutGridMenuLeftBaseProps, LayoutGridMenuLeftClassProps {
}
export declare const LayoutGridMenuLeft: ({ className, classNameLoader, classNameChildren, classNameMenuLeft, classNameMenuLeftContent, children, menuLeft, loader, menuLeftActive, menuLeftMovilActive, useHeaderButtonMenu, usePageProgress, useAlertHook, alertHookProps, alert, target, ...props }: LayoutGridMenuLeftProps) => React.JSX.Element;
