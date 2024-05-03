import React from "react";
import { UserProps as UserInterfaceProps } from "fenextjs-interface/cjs/User";
import { LoaderUserClassProps } from "../Loader/User";
/**
 * Properties for the base User component.
 */
export interface UserBaseProps {
    /**
     * User data.
     */
    user?: Partial<UserInterfaceProps>;
    /**
     * If loader user.
     */
    loader?: boolean;
}
/**
 * Properties for the class of the User component.
 */
export interface UserClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
    /**
     * The class name  for picture the component.
     */
    classNamePicture?: string;
    /**
     * The class name  for img the component.
     */
    classNameImg?: string;
    /**
     * The class name for name the component.
     */
    classNameName?: string;
    /**
     * The class name for letter the component.
     */
    classNameLetter?: string;
    /**
     * The class name for email the component.
     */
    classNameEmail?: string;
    /**
     * The class name for Loader the component.
     */
    classNameLoader?: LoaderUserClassProps;
}
/**
 * Properties for the User component.
 */
export interface UserComponentProps extends UserBaseProps, UserClassProps {
}
export declare const User: ({ className, classNameEmail, classNamePicture, classNameImg, classNameName, classNameLetter, classNameLoader, user, loader, }: UserComponentProps) => React.JSX.Element;
