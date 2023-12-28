import React from "react";
import { LayoutGridMenuTopBaseProps, LayoutGridMenuTopClassProps } from "../GridMenuTop";
import { LayoutGridMenuLeftBaseProps, LayoutGridMenuLeftClassProps } from "../GridMenuLeft";
import { LoaderClassProps } from "../../../Loader";
/**
 * Properties for the base button component.
 */
export interface LayoutGridMenuTopLeftBaseProps extends LayoutGridMenuTopBaseProps, LayoutGridMenuLeftBaseProps {
}
/**
 * Properties for the class of the button component.
 */
export interface LayoutGridMenuTopLeftClassProps extends LayoutGridMenuTopClassProps, LayoutGridMenuLeftClassProps, LoaderClassProps {
}
/**
 * Properties for the button component.
 */
export interface LayoutGridMenuTopLeftProps extends LayoutGridMenuTopLeftBaseProps, LayoutGridMenuTopLeftClassProps {
}
export declare const LayoutGridMenuTopLeft: ({ className, classNameLoader, classNameChildren, classNameMenuTop, classNameMenuLeft, classNameMenuLeftContent, children, menuLeft, menuTop, loader, menuLeftActive, menuLeftMovilActive, useHeaderButtonMenu, usePageProgress, }: LayoutGridMenuTopLeftProps) => React.JSX.Element;
