import React, { ReactNode, useMemo, useState } from "react";
import { Loader } from "../../Loader";
import { Arrow } from "fenextjs-svg/cjs/Arrow";
import { useAction } from "fenextjs-hook";
import { sleep } from "fenextjs-functions";

/**
 * Properties for the base Collapse component.
 */
export interface CollapseBaseProps {
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
     * The id for the component.
     */
    id?: string;
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

    /**
     * children of Collapse.
     */
    children?: ReactNode;

    /**
     * rotateIcon of Collapse.
     */
    rotateIcon?: boolean;

    /**
     * useActiveForShowChildren of Collapse.
     */
    useActiveForShowChildren?: boolean;
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
    active: activeProps = undefined,
    id,
    name = "",
    type = "checkbox",
    show = "checked",
    status = "none",
    onChange,
    iconArrow = <Arrow />,
    rotateIcon = true,
    useActiveForShowChildren = false,
}: CollapseProps) => {
    const [active_, setActive_] = useState(defaultActive);

    const active = useMemo(
        () => activeProps ?? active_,
        [activeProps, active_],
    );

    const { onAction } = useAction({
        name: `fenext-collapse-${name}`,
        onActionExecute: () => {
            if (type == "radio") {
                setActive_(false);
                onChange?.(false);
            }
        },
    });

    const setActive = async (e: boolean) => {
        onAction();
        if (type == "radio") {
            await sleep(50);
        }
        setActive_(e);
        onChange?.(e);
    };
    return (
        <>
            <div
                className={`
                    fenext-collapse
                    fenext-collapse-status-${status}
                    fenext-collapse-rotate-icon-${rotateIcon ? "yes" : "no"}
                    fenext-collapse-${show}
                    fenext-collapse-${useActiveForShowChildren ? "active-for-show-children" : ""}
                    ${className}
                `}
            >
                <label className={`fenext-collapse-header ${classNameHeader}`}>
                    <input
                        type={type}
                        className={`fenext-collapse-header-checkbox`}
                        id={id}
                        name={name}
                        disabled={disabled || loader}
                        defaultChecked={defaultActive}
                        {...(active !== undefined
                            ? {
                                  checked: active,
                              }
                            : {})}
                        onChange={(e) => {
                            setActive?.(e.target.checked);
                        }}
                    />
                    <div
                        className={`fenext-collapse-header-content ${classNameHeaderContent}`}
                    >
                        {header}
                        {type == "radio" && !disabled ? (
                            <>
                                <input
                                    type={type}
                                    className={`fenext-collapse-header-uncheck`}
                                    name={name}
                                    disabled={loader}
                                    onChange={() => {
                                        setActive?.(false);
                                    }}
                                />
                            </>
                        ) : (
                            <></>
                        )}
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
                </label>
                <div className={`fenext-collapse-body ${classNameBody}`}>
                    {useActiveForShowChildren ? (
                        <>{active && <>{children}</>}</>
                    ) : (
                        <>{children}</>
                    )}
                </div>
            </div>
        </>
    );
};
