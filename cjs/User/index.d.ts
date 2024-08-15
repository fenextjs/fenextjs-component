import React from "react";
import { UserProps as UserInterfaceProps } from "fenextjs-interface/cjs/User";
import { LoaderUserClassProps } from "../Loader/User";
export interface UserBaseProps {
    user?: Partial<UserInterfaceProps>;
    loader?: boolean;
}
export interface UserClassProps {
    className?: string;
    classNamePicture?: string;
    classNameImg?: string;
    classNameName?: string;
    classNameLetter?: string;
    classNameEmail?: string;
    classNameLoader?: LoaderUserClassProps;
}
export interface UserComponentProps extends UserBaseProps, UserClassProps {
}
export declare const User: ({ className, classNameEmail, classNamePicture, classNameImg, classNameName, classNameLetter, classNameLoader, user, loader, }: UserComponentProps) => React.JSX.Element;
