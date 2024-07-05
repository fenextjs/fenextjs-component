import React, { ReactNode } from "react";
import { LoaderSpinner } from "../Loader/Spinner";
import { use_T } from "fenextjs-hook";
import { _TProps } from "fenextjs-interface";
/**
 * Properties for the base ContentLoading component.
 */
export interface ContentLoadingBaseProps extends _TProps {
    /**
     * children for the component.
     */
    children?: ReactNode;
    /**
     * componentLoader for the component.
     * @default <LoaderSpinner/>
     */
    componentLoader?: ReactNode;
    /**
     * loader for the component.
     * @default false
     */
    loader?: boolean;
    /**
     * isPage for the component.
     * @default false
     */
    isPage?: boolean;
}

/**
 * Properties for the class of the ContentLoading component.
 */
export interface ContentLoadingClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
}

/**
 * Properties for the ContentLoading component.
 */
export interface ContentLoadingProps
    extends ContentLoadingBaseProps,
        ContentLoadingClassProps {}

export const ContentLoading = ({
    className = "",
    children,
    componentLoader = <LoaderSpinner />,
    loader = false,
    isPage = false,
    ...props
}: ContentLoadingProps) => {
    const { _t } = use_T({ ...props });
    return (
        <>
            <div
                className={`fenext-content-loading fenext-content-loading-${
                    loader ? "loader" : ""
                } fenext-content-loading-${isPage ? "page" : ""} ${className} `}
            >
                {loader ? componentLoader : _t(children)}
            </div>
        </>
    );
};
