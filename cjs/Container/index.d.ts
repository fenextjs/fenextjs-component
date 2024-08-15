import { _TProps } from "fenextjs-interface";
import React, { PropsWithChildren } from "react";
export interface ContainerBaseProps extends PropsWithChildren, _TProps {
    customSize?: number;
    usePaddingInline?: boolean;
}
export interface ContainerClassProps {
    className?: string;
}
export interface ContainerProps extends ContainerBaseProps, ContainerClassProps {
}
export declare const Container: ({ className, customSize, usePaddingInline, children, ...props }: ContainerProps) => React.JSX.Element;
