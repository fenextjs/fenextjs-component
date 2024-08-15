import React from "react";
import { ButtonProps } from "../Button";
import { TitleProps } from "../Title";
import { _TProps } from "fenextjs-interface";
export type ShareListType = "whatsapp" | "facebook" | "twitter" | "email" | "copy";
/**
 * Properties for the base Share component.
 */
export interface ShareBaseProps extends _TProps {
    /**
     * ButtonProps for the component.
     */
    ButtonProps?: ButtonProps;
    /**
     * TitleProps for the component.
     */
    TitleProps?: TitleProps;
    /**
     * share text for the component.
     */
    share?: string;
    /**
     * share text for the component.
     */
    shareList?: ShareListType[];
    /**
     * show share text for copy in the component.
     */
    showShareCopy?: boolean;
}
/**
 * Properties for the class of the Share component.
 */
export interface ShareClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
}
/**
 * Properties for the Share component.
 */
export interface ShareProps extends ShareBaseProps, ShareClassProps {
}
export declare const Share: ({ className, share, ButtonProps, TitleProps, shareList, showShareCopy, ...props }: ShareProps) => React.JSX.Element;
