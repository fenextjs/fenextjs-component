import React, { PropsWithChildren } from "react";
import { _TProps } from "fenextjs-interface";
/**
 * Properties for the base Text component.
 */
export interface TextBaseProps extends PropsWithChildren, _TProps {
    /**
     * The class name for the component.
     */
    tag?: "p" | "strong" | "small" | "em" | "b" | "del" | "i" | "mark" | "ins" | "sub" | "sup";
    /**
     * The loader for the component.
     */
    loader?: boolean;
    /**
     * The nLineLoader for the component.
     */
    nLineLoader?: number;
}
/**
 * Properties for the class of the Text component.
 */
export interface TextClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
}
/**
 * Properties for the Text component.
 */
export interface TextProps extends TextBaseProps, TextClassProps {
}
export declare const Text: ({ className, tag, loader, children, nLineLoader, ...props }: TextProps) => React.JSX.Element;
