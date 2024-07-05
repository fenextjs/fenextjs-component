import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import { Loader, LoaderClassProps } from "../Loader";
import { PaginationPre } from "fenextjs-svg/cjs/Pagination";
import { _TProps } from "fenextjs-interface";
import { use_T } from "fenextjs-hook";

export type BackTypeOnBack = "history" | "router" | "link" | "none";

/**
 * Properties for the base Back component.
 */
export interface BackBaseProps extends _TProps {
    /**
     * Indicates whether the Back is currently in the loading state.
     */
    loader?: boolean;
    /**
     * Indicates whether the Back is disabled or not.
     */
    disabled?: boolean;
    /**
     * The callback function that is called when the Back is clicked.
     */
    onClick?: (e?: any) => void;
    /**
     * The icon to display in the Back.
     */
    icon?: ReactNode;
    /**
     * The icon to display in the Back.
     */
    children?: ReactNode;
    /**
     * The type of onBack in component.
     */
    typeOnBack?: BackTypeOnBack;
    /**
     * The link to redirect if typeOnBack is link.
     */
    link?: string;
    /**
     * useHistoryMinLenght for show back.
     * @default false
     */
    useHistoryMinLenght?: boolean;
    /**
     * minLenght for show back.
     * @default 2
     */
    minLenght?: number;
}

/**
 * Properties for the class of the Back component.
 */
export interface BackClassProps extends LoaderClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
    /**
     * The class name for the Disabled Back element.
     */
    classNameDisabled?: string;
    /**
     * The class name for the Icon Back element.
     */
    classNameIcon?: string;
    /**
     * The class name for the Content Back element.
     */
    classNameContent?: string;
}

/**
 * Properties for the Back component.
 */
export interface BackProps extends BackBaseProps, BackClassProps {}

export const Back = ({
    className = "",
    classNameLoader = "",
    classNameDisabled = "",
    classNameIcon = "",
    classNameContent = "",

    children = "Back",
    loader = false,
    disabled = false,
    onClick = undefined,
    icon = <PaginationPre />,
    typeOnBack = "history",
    link = "",
    minLenght = 2,
    useHistoryMinLenght = false,
    ...props
}: BackProps) => {
    const { _t } = use_T({ ...props });
    const router = useRouter();
    const onBack = () => {
        if (loader || disabled) {
            return;
        }
        onClick?.();
        const actions: {
            [id in BackTypeOnBack]: () => void;
        } = {
            history: () => {
                history.back();
            },
            router: () => {
                router.back();
            },
            link: () => {
                router.push(link);
            },
            none: () => 1,
        };
        actions[typeOnBack]();
    };

    if (useHistoryMinLenght && typeof window != "undefined" && window) {
        if (window.history.length < minLenght) {
            return <></>;
        }
    }

    return (
        <>
            <div
                onClick={onBack}
                className={`fenext-back ${className} ${
                    disabled ? `${classNameDisabled} fenext-back-disabled` : ""
                }`}
            >
                <div className={`fenext-back-icon ${classNameIcon}`}>
                    {loader ? (
                        <Loader classNameLoader={classNameLoader} />
                    ) : (
                        <>{icon}</>
                    )}
                </div>
                <div className={`fenext-back-content ${classNameContent}`}>
                    {_t(children)}
                </div>
            </div>
        </>
    );
};
