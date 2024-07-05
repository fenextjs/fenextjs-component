import { use_T } from "fenextjs-hook";
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
export interface ContainerProps
    extends ContainerBaseProps,
        ContainerClassProps {}

export const Container = ({
    className = "",
    customSize = undefined,
    usePaddingInline = true,
    children,
    ...props
}: ContainerProps) => {
    const {_t} = use_T({...props})
    return (
        <>
            <div
                className={`fenext-container ${className} ${
                    usePaddingInline
                        ? "fenext-container-p"
                        : "fenext-container-notp"
                }`}
                style={
                    customSize
                        ? ({
                              ["--fenext-size-container-custom"]: `${
                                  customSize / 16
                              }rem`,
                          } as React.CSSProperties)
                        : {}
                }
            >
                {_t(children)}
            </div>
        </>
    );
};
