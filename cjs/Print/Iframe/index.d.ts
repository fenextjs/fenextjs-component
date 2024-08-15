import { usePrintIframeProps } from "fenextjs-hook";
import React, { ReactNode } from "react";
export interface PrintIframeComponentProps {
    loader: boolean;
}
/**
 * Properties for the base PrintIframe component.
 */
export interface PrintIframeBaseProps<T> extends usePrintIframeProps<T> {
    /**
     * The class name for the component.
     */
    onComponent: (data: PrintIframeComponentProps) => ReactNode;
}
/**
 * Properties for the class of the PrintIframe component.
 */
export interface PrintIframeClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
}
/**
 * Properties for the PrintIframe component.
 */
export interface PrintIframeProps<T> extends PrintIframeBaseProps<T>, PrintIframeClassProps {
}
export declare const PrintIframe: <T>({ className, onComponent, ...props }: PrintIframeProps<T>) => React.JSX.Element;
