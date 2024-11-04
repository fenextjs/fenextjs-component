import { _TProps } from "fenextjs-interface";
import React, { PropsWithChildren } from "react";
export interface ContainerProps extends PropsWithChildren, _TProps {
    customSize?: number;
    usePaddingInline?: boolean;
    className?: string;
}
export declare const Container: ({ className, customSize, usePaddingInline, children, ...props }: ContainerProps) => React.JSX.Element;
