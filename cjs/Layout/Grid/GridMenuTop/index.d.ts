import React, { PropsWithChildren, ReactNode } from "react";
import { LoaderClassProps } from "../../../Loader";
import { AlertHookProps } from "../../../AlertHook";
export interface LayoutGridMenuTopBaseProps extends PropsWithChildren {
    useAlertHook?: boolean;
    alertHookProps?: AlertHookProps;
    loader?: boolean;
    menuTop?: ReactNode;
    usePageProgress?: boolean;
}
export interface LayoutGridMenuTopClassProps extends LoaderClassProps {
    className?: string;
    classNameMenuTop?: string;
    classNameChildren?: string;
}
export interface LayoutGridMenuTopProps extends LayoutGridMenuTopBaseProps, LayoutGridMenuTopClassProps {
}
export declare const LayoutGridMenuTop: ({ className, classNameLoader, classNameChildren, classNameMenuTop, children, menuTop, loader, usePageProgress, useAlertHook, alertHookProps, ...props }: LayoutGridMenuTopProps) => React.JSX.Element;
