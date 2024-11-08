import React from "react";
import { UserProps } from "fenextjs-interface/cjs/User";
import { LoaderUserClassProps } from "../Loader/User";
export interface UserComponentProps {
    user?: Partial<UserProps>;
    loader?: boolean;
    className?: string;
    classNamePicture?: string;
    classNameImg?: string;
    classNameName?: string;
    classNameLetter?: string;
    classNameEmail?: string;
    classNameLoader?: LoaderUserClassProps;
}
export declare const User: ({ className, classNameEmail, classNamePicture, classNameImg, classNameName, classNameLetter, classNameLoader, user, loader, }: UserComponentProps) => React.JSX.Element;
