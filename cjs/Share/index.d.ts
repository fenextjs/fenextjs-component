import React from "react";
import { ButtonProps } from "../Button";
import { TitleProps } from "../Title";
import { _TProps } from "fenextjs-interface";
export type ShareListType = "whatsapp" | "facebook" | "x" | "email" | "copy";
export interface ShareBaseProps extends _TProps {
    ButtonProps?: ButtonProps;
    TitleProps?: TitleProps;
    share?: string;
    shareList?: ShareListType[];
    showShareCopy?: boolean;
}
export interface ShareClassProps {
    className?: string;
}
export interface ShareProps extends ShareBaseProps, ShareClassProps {
}
export declare const Share: ({ className, share, ButtonProps, TitleProps, shareList, showShareCopy, ...props }: ShareProps) => React.JSX.Element;
