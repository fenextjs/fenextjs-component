import React from "react";
export interface LoaderUserBaseProps {
}
export interface LoaderUserClassProps {
    classNameLoaderUser?: string;
    classNameLoaderUserImg?: string;
    classNameLoaderUserName?: string;
    classNameLoaderUserEmail?: string;
}
export interface LoaderUserProps extends LoaderUserBaseProps, LoaderUserClassProps {
}
export declare const LoaderUser: ({ classNameLoaderUser, classNameLoaderUserImg, classNameLoaderUserName, classNameLoaderUserEmail, }: LoaderUserProps) => React.JSX.Element;
