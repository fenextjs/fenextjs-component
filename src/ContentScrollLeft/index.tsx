import { use_T } from "fenextjs-hook";
import { _TProps } from "fenextjs-interface";
import React, { PropsWithChildren } from "react";

/**
 * Properties for the ContentScrollLeft component.
 */
export interface ContentScrollLeftProps extends PropsWithChildren, _TProps {
    /**
     * The Custom Size of ContentScrollLeft / 16 * rem.
     */
    customSize?: number;
    /**
     * Use Padding Inline in ContentScrollLeft.
     */
    usePaddingInline?: boolean;
    /**
     * The class name for the component.
     */
    className?: string;
}

export const ContentScrollLeft = ({
    className = "",
    customSize = undefined,
    usePaddingInline = true,
    children,
    ...props
}: ContentScrollLeftProps) => {
    const { _t } = use_T({ ...props });
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
