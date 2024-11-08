import React from "react";
import { UserProps } from "fenextjs-interface/cjs/User";
import { Img } from "../Img";
import { LoaderUser, LoaderUserClassProps } from "../Loader/User";

/**
 * Properties for the User component.
 */
export interface UserComponentProps {
    /**
     * User data.
     */
    user?: Partial<UserProps>;
    /**
     * If loader user.
     */
    loader?: boolean;
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

export const User = ({
    className = "",
    classNameEmail = "",
    classNamePicture = "",
    classNameImg = "",
    classNameName = "",
    classNameLetter = "",
    classNameLoader = {},
    user,
    loader = false,
}: UserComponentProps) => {
    if (loader) {
        return (
            <>
                <LoaderUser {...classNameLoader} />
            </>
        );
    }
    return (
        <>
            <div className={`fenext-user ${className} `}>
                <Img
                    src=""
                    {...user?.img}
                    className={`fenext-user-picture ${classNamePicture}`}
                    classNameImg={`fenext-user-img ${classNameImg}`}
                    onErrorImg={(e) => {
                        e.currentTarget.style.display = "none";
                    }}
                />
                <div className={`fenext-user-letter ${classNameLetter} `}>
                    {user?.name?.[0]}
                </div>
                <div className={`fenext-user-name ${classNameName} `}>
                    {user?.name}
                </div>
                <div className={`fenext-user-email ${classNameEmail} `}>
                    {user?.email}
                </div>
            </div>
        </>
    );
};
