import React, { PropsWithChildren, ReactNode } from "react";
import { Loader } from "../../Loader";
import { Arrow } from "fenextjs-svg/cjs/Arrow";
import { _TProps } from "fenextjs-interface";
import { _tValidate } from "fenextjs-functions";

/**
 * Properties for the base Collapse component.
 */
export interface CollapseBaseProps extends PropsWithChildren, _TProps {
    /**
     * Indicates whether the Collapse is currently in the loading state.
     */
    loader?: boolean;
    /**
     * Indicates whether the Collapse is disabled or not.
     */
    disabled?: boolean;
    /**
     * Indicates whether the Collapse is defaultActive for show.
     */
    defaultActive?: boolean;
    /**
     * Indicates whether the Collapse is active for show.
     */
    active?: boolean;
    /**
     * The name for the component.
     */
    name?: string;
    /**
     * status of collapse.
     */
    status?: "none" | "error" | "ok";
    /**
     * type of collapse.
     */
    type?: "radio" | "checkbox";
    /**
     * type of show content collapse.
     */
    show?: "checked" | "focus";
    /**
     * Header of Collapse.
     */
    header: ReactNode;
    /**
     * onChange of Collapse.
     */
    onChange?: (value: boolean) => void;
    /**
     * iconArrow of Collapse.
     * @default ArrowCollapse
     */
    iconArrow?: ReactNode;
}

/**
 * Properties for the class of the Collapse component.
 */
export interface CollapseClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
    /**
     * The class name for Header the component.
     */
    classNameHeader?: string;
    /**
     * The class name for Header Content the component.
     */
    classNameHeaderContent?: string;
    /**
     * The class name for Header Icon the component.
     */
    classNameHeaderIcon?: string;
    /**
     * The class name for Body the component.
     */
    classNameBody?: string;
}

/**
 * Properties for the Collapse component.
 */
export interface CollapseProps extends CollapseBaseProps, CollapseClassProps {}

export const Collapse = ({
    className = "",
    classNameHeader = "",
    classNameHeaderContent = "",
    classNameHeaderIcon = "",
    classNameBody = "",

    children,
    loader = false,
    header,
    disabled = false,
    defaultActive = false,
    active = undefined,
    name = "",
    type = "checkbox",
    show = "checked",
    status = "none",
    onChange,
    iconArrow = <Arrow />,
    _t,
}: CollapseProps) => {
    return (
        <>
            <div
                className={`fenext-collapse fenext-collapse-status-${status} fenext-collapse-${show} ${className}`}
            >
                <label className={`fenext-collapse-header ${classNameHeader}`}>
                    <input
                        type={type}
                        className={`fenext-collapse-header-checkbox`}
                        name={name}
                        disabled={disabled || loader}
                        defaultChecked={defaultActive}
                        {...(active !== undefined
                            ? {
                                  checked: active,
                              }
                            : {})}
                        onChange={(e) => {
                            onChange?.(e.target.checked);
                        }}
                    />
                    <div
                        className={`fenext-collapse-header-content ${classNameHeaderContent}`}
                    >
                        {_tValidate(header, _t)}
                    </div>
                    <div
                        className={`fenext-collapse-header-icon ${classNameHeaderIcon}`}
                    >
                        {loader ? (
                            <>
                                <Loader />
                            </>
                        ) : (
                            <>{iconArrow}</>
                        )}
                    </div>
                    {type == "radio" ? (
                        <>
                            <input
                                type={type}
                                className={`fenext-collapse-header-uncheck`}
                                name={name}
                                disabled={disabled || loader}
                                onChange={(e) => {
                                    onChange?.(e.target.checked);
                                }}
                            />
                        </>
                    ) : (
                        <></>
                    )}
                </label>
                <div className={`fenext-collapse-body ${classNameBody}`}>
                    {children}
                </div>
            </div>
        </>
    );
};
