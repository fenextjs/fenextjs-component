import React, { PropsWithChildren } from "react";
import { LoaderLine } from "../Loader/Line";
import { _TProps } from "fenextjs-interface";
import { use_T } from "fenextjs-hook";

/**
 * Properties for the base Title component.
 */
export interface TitleBaseProps extends PropsWithChildren, _TProps {
    /**
     * The class name for the component.
     */
    tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    /**
     * The loader for the component.
     */
    loader?: boolean;
}

/**
 * Properties for the class of the Title component.
 */
export interface TitleClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
}

/**
 * Properties for the Title component.
 */
export interface TitleProps extends TitleBaseProps, TitleClassProps {}

export const Title = ({
    className = "",
    tag = "h1",
    loader = false,
    children,
    ...props
}: TitleProps) => {
    const {_t} = use_T({...props})
    const Tag = tag;
    return (
        <>
            <Tag className={`fenext-title fenext-title-${tag} ${className} `}>
                {loader ? <LoaderLine /> : <>{_t(children)}</>}
            </Tag>
        </>
    );
};
