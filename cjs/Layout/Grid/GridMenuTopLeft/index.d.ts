import React from "react";
import { LayoutGridMenuTopBaseProps, LayoutGridMenuTopClassProps } from "../GridMenuTop";
import { LayoutGridMenuLeftBaseProps, LayoutGridMenuLeftClassProps } from "../GridMenuLeft";
import { LoaderClassProps } from "../../../Loader";
export interface LayoutGridMenuTopLeftBaseProps extends LayoutGridMenuTopBaseProps, LayoutGridMenuLeftBaseProps {
}
export interface LayoutGridMenuTopLeftClassProps extends LayoutGridMenuTopClassProps, LayoutGridMenuLeftClassProps, LoaderClassProps {
}
export interface LayoutGridMenuTopLeftProps extends LayoutGridMenuTopLeftBaseProps, LayoutGridMenuTopLeftClassProps {
}
export declare const LayoutGridMenuTopLeft: ({ className, classNameLoader, classNameChildren, classNameMenuTop, classNameMenuLeft, classNameMenuLeftContent, children, menuLeft, menuTop, loader, menuLeftActive, menuLeftMovilActive, useHeaderButtonMenu, usePageProgress, alertHookProps, useAlertHook, }: LayoutGridMenuTopLeftProps) => React.JSX.Element;
