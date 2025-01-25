import React, { PropsWithChildren } from "react";
import { LoaderLine } from "../Loader/Line";
import { _TProps } from "fenextjs-interface";
import { use_T } from "fenextjs-hook";

export type TextTypeProps =
    | "span"
    | "p"
    | "strong"
    | "small"
    | "em"
    | "b"
    | "del"
    | "i"
    | "mark"
    | "ins"
    | "sub"
    | "sup";

/**
 * Properties for the base Text component.
 */
export interface TextBaseProps extends PropsWithChildren, _TProps {
    /**
     * The class name for the component.
     */
    tag?: TextTypeProps;

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
export interface TextProps extends TextBaseProps, TextClassProps {}

export const Text = ({
    className = "",
    tag = "p",
    loader = false,
    children,
    nLineLoader = 3,
    ...props
}: TextProps) => {
    const { _t } = use_T({ ...props });
    const Tag = tag;
    return (
        <>
            <Tag className={`fenext-text fenext-text-${tag} ${className} `}>
                {loader ? (
                    <>
                        <div className="fenext-text-loader">
                            {new Array(nLineLoader).fill(<LoaderLine />)}
                        </div>
                    </>
                ) : (
                    <>{_t(children)}</>
                )}
            </Tag>
        </>
    );
};
