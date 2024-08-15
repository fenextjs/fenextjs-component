import { usePrintIframeProps } from "fenextjs-hook";
import React, { ReactNode } from "react";
export interface PrintIframeComponentProps {
    loader: boolean;
}
export interface PrintIframeBaseProps<T> extends usePrintIframeProps<T> {
    onComponent: (data: PrintIframeComponentProps) => ReactNode;
}
export interface PrintIframeClassProps {
    className?: string;
}
export interface PrintIframeProps<T> extends PrintIframeBaseProps<T>, PrintIframeClassProps {
}
export declare const PrintIframe: <T>({ className, onComponent, ...props }: PrintIframeProps<T>) => React.JSX.Element;
