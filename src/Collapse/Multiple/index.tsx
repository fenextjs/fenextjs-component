import React, { useMemo, useState } from "react";
import { Collapse, CollapseClassProps, CollapseBaseProps } from "../Simple";

/**
 * Properties for the base CollapseMultiple component.
 */
export interface CollapseMultipleBaseProps
    extends Pick<
        CollapseBaseProps,
        "name" | "type" | "renderContentDependingOnActive"
    > {
    /**
     * items of Collapse.
     */
    items?: Omit<
        CollapseBaseProps,
        "checkbox" | "name" | "renderContentDependingOnActive"
    >[];

    /**
     * defaultActive of Collapse.
     */
    defaultActive?: number | number[];
    /**
     * defaultActive of Collapse.
     */
    active?: number | number[];
}

/**
 * Properties for the class of the CollapseMultiple component.
 */
export interface CollapseMultipleClassProps extends CollapseClassProps {
    /**
     * The class name for the component.
     */
    classNameMultiple?: string;
}

/**
 * Properties for the CollapseMultiple component.
 */
export interface CollapseMultipleProps
    extends CollapseMultipleBaseProps,
        CollapseMultipleClassProps {}

export const CollapseMultiple = ({
    classNameMultiple = "",
    name = "",
    items = [],
    type = "checkbox",
    defaultActive = [],
    active: activeProps = undefined,
    ...props
}: CollapseMultipleProps) => {
    const [_active, setActive] = useState([defaultActive].flat(2));
    const active = useMemo(
        () => [activeProps ?? _active].flat(2),
        [activeProps, _active],
    );

    return (
        <>
            <div className={`fenext-collapse-multiple ${classNameMultiple}`}>
                {items.map((item, i) => (
                    <Collapse
                        key={i}
                        name={name}
                        type={type}
                        active={active.includes(i)}
                        onChange={(e) => {
                            
                            setActive((old) => {
                                console.log({e,i,old,active});
                                if (e) {
                                    if (type == "checkbox") {
                                        return [...old, i];
                                    }
                                    if (type == "radio") {
                                        return [i];
                                    }
                                } else {
                                    if (type == "checkbox") {
                                        return [...old].filter(
                                            (a) => a != i,
                                        );
                                    }
                                    if (type == "radio") {
                                        return [];
                                    }
                                }
                                return old;
                            });
                        }}
                        {...props}
                        {...item}
                    />
                ))}
            </div>
        </>
    );
};
