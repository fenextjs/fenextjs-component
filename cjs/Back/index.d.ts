import React, { ReactNode } from "react";
import { useRouter, useRouterProps } from "fenextjs-hook";
import { LoaderClassProps } from "../Loader";
import { _TProps } from "fenextjs-interface";
import { useHistoryOnBackProps } from "fenextjs-hook";
export type BackTypeOnBack = "fenextjs-history" | "history" | "router" | "link" | "none";
export interface BackBaseProps extends _TProps, useHistoryOnBackProps, useRouterProps {
    loader?: boolean;
    disabled?: boolean;
    onClick?: (e?: any) => void;
    icon?: ReactNode;
    children?: ReactNode;
    typeOnBack?: BackTypeOnBack;
    link?: string;
    useHistoryMinLenght?: boolean;
    minLenght?: number;
    useRouterCustom?: typeof useRouter;
}
export interface BackClassProps extends LoaderClassProps {
    className?: string;
    classNameDisabled?: string;
    classNameIcon?: string;
    classNameContent?: string;
}
export interface BackProps extends BackBaseProps, BackClassProps {
}
export declare const Back: ({ className, classNameLoader, classNameDisabled, classNameIcon, classNameContent, children, loader, disabled, onClick, icon, typeOnBack, link, minLenght, useHistoryMinLenght, onValidateRuteBack, useNextRouter, useRouterCustom, ...props }: BackProps) => React.JSX.Element;
