import React, { PropsWithChildren } from "react";
import { _TProps } from "fenextjs-interface";
export interface TextBaseProps extends PropsWithChildren, _TProps {
    tag?: "p" | "strong" | "small" | "em" | "b" | "del" | "i" | "mark" | "ins" | "sub" | "sup";
    loader?: boolean;
    nLineLoader?: number;
}
export interface TextClassProps {
    className?: string;
}
export interface TextProps extends TextBaseProps, TextClassProps {
}
export declare const Text: ({ className, tag, loader, children, nLineLoader, ...props }: TextProps) => React.JSX.Element;
