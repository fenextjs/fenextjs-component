import { _TProps } from "fenextjs-interface";
import React, { PropsWithChildren } from "react";
/**
 * Properties for the base Container component.
 */
export interface ContainerBaseProps extends PropsWithChildren, _TProps {
    /**
     * The Custom Size of Container / 16 * rem.
     */
    customSize?: number;
    /**
     * Use Padding Inline in Container.
     */
    usePaddingInline?: boolean;
}
/**
 * Properties for the class of the Container component.
 */
export interface ContainerClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
}
/**
 * Properties for the Container component.
 */
export interface ContainerProps extends ContainerBaseProps, ContainerClassProps {
}
export declare const Container: ({ className, customSize, usePaddingInline, children, _t, }: ContainerProps) => React.JSX.Element;
