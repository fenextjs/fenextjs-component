import React, { PropsWithChildren, ReactNode } from "react";
import { Loader } from "../Loader";
import { _TProps } from "fenextjs-interface";
import { use_T } from "fenextjs-hook";

export type ButtonBaseSize =
    | "extra-small"
    | "small"
    | "normal"
    | "strong"
    | "extra-strong";

export type ButtonOnClick = React.MouseEventHandler<HTMLButtonElement> &
    React.MouseEventHandler<HTMLDivElement>;
/**
 * Properties for the base button component.
 */
export interface ButtonBaseProps extends PropsWithChildren, _TProps {
    /**
     * Indicates whether the button is currently in the loading state.
     */
    loader?: boolean;
    invert?: boolean;
    /**
     * Indicates whether the button is disabled or not.
     */
    disabled?: boolean;
    /**
     * The callback function that is called when the button is clicked.
     */
    onClick?: ButtonOnClick;
    /**
     * The callback function that is called when the button is clicked as disabled.
     */
    onClickDisabled?: ButtonOnClick;
    /**
     * The icon to display in the button.
     */
    icon?: ReactNode;
    /**
     * The icon to display in the button.
     */
    iconLoader?: ReactNode;
    /**
     * Indicates whether the component should render as a button element.
     */
    isBtn?: boolean;
    /**
     * The Size of Button.
     */
    size?: ButtonBaseSize;
    /**
     * The Size  Full of Button.
     */
    full?: boolean;
}

/**
 * Properties for the class of the button component.
 */
export interface ButtonClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
    /**
     * The class name for the component.
     */
    classNameDisabled?: string;
    /**
     * The class name for the component.
     */
    classNameLoader?: string;
    /**
     * The class name for the component.
     */
    classNameInvert?: string;
    /**
     * The class name for the component.
     */
    classNameContentLoaderElement?: string;
    /**
     * The class name for the component.
     */
    classNameLoaderElement?: string;
}

/**
 * Properties for the button component.
 */
export interface ButtonProps extends ButtonBaseProps, ButtonClassProps {}

export const Button = ({
    className = "",
    classNameLoader = "",
    classNameInvert = "",
    classNameDisabled = "",
    classNameContentLoaderElement = "",
    classNameLoaderElement = "",

    children,
    loader = false,
    invert = false,
    disabled = false,
    onClick = () => {},
    onClickDisabled: onClickDisabledProps,
    icon = "",
    iconLoader = undefined,
    isBtn = true,
    full = false,
    size = "normal",
    ...props
}: ButtonProps) => {
    const { _t } = use_T({ ...props });
    const Tag = isBtn ? "button" : "div";

    const onClickDisabled = (e) => {
        e?.preventDefault?.();
        onClickDisabledProps?.(e);
    };

    return (
        <>
            <Tag
                onClick={disabled ? onClickDisabled : onClick}
                className={`
                    fenext-btn
                    fenext-btn-${loader ? `loader ${classNameLoader}` : ""}
                    fenext-btn-${invert ? `invert ${classNameInvert}` : ""}
                    fenext-btn-${disabled ? `disabled ${classNameDisabled}` : ""}
                    fenext-btn-size-${size}
                    fenext-btn-${icon != "" ? "icon" : ""}
                    ${full ? "fenext-btn-size-full" : ""}
                    ${className}
                `}
                disabled={loader}
            >
                {loader && (
                    <>
                        <div
                            className={`fenext-btn-content-loader-element ${classNameContentLoaderElement}`}
                        >
                            {iconLoader ?? (
                                <Loader
                                    classNameLoader={`fenext-btn-loader-element ${classNameLoaderElement}`}
                                />
                            )}
                        </div>
                    </>
                )}

                {icon}
                {_t(children)}
            </Tag>
        </>
    );
};
