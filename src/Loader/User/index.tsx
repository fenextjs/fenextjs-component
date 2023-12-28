import React from "react";
import { LoaderLine } from "../Line";
/**
 * Properties for the base LoaderUser component.
 */
export interface LoaderUserBaseProps {}

/**
 * Properties for the class of the LoaderUser component.
 */
export interface LoaderUserClassProps {
    /**
     * The class name for the component.
     */
    classNameLoaderUser?: string;
    /**
     * The class name for img the component.
     */
    classNameLoaderUserImg?: string;
    /**
     * The class name for Name the component.
     */
    classNameLoaderUserName?: string;
    /**
     * The class name for email the component.
     */
    classNameLoaderUserEmail?: string;
}

/**
 * Properties for the LoaderUser component.
 */
export interface LoaderUserProps
    extends LoaderUserBaseProps,
        LoaderUserClassProps {}

export const LoaderUser = ({
    classNameLoaderUser = "",
    classNameLoaderUserImg = "",
    classNameLoaderUserName = "",
    classNameLoaderUserEmail = "",
}: LoaderUserProps) => {
    return (
        <>
            <div className={`fenext-loader-user ${classNameLoaderUser}`}>
                <LoaderLine
                    classNameLoaderLine={`fenext-loader-user-img ${classNameLoaderUserImg}`}
                />
                <LoaderLine
                    classNameLoaderLine={`fenext-loader-user-name ${classNameLoaderUserName}`}
                />
                <LoaderLine
                    classNameLoaderLine={`fenext-loader-user-email ${classNameLoaderUserEmail}`}
                />
            </div>
        </>
    );
};
