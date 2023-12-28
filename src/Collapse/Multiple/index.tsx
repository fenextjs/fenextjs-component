import React from "react";
import { Collapse, CollapseClassProps, CollapseBaseProps } from "..";

/**
 * Properties for the base CollapseMultiple component.
 */
export interface CollapseMultipleBaseProps
    extends Pick<CollapseBaseProps, "name" | "type" | "_t"> {
    /**
     * items of Collapse.
     */
    items?: Omit<CollapseBaseProps, "checkbox" | "name">[];

    /**
     * defaultActive of Collapse.
     */
    defaultActive?: number | number[];
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
    ...props
}: CollapseMultipleProps) => {
    return (
        <>
            <div className={`fenext-collapse-multiple ${classNameMultiple}`}>
                {items.map((item, i) => (
                    <Collapse
                        key={i}
                        name={name}
                        type={type}
                        defaultActive={[defaultActive].flat(2).includes(i)}
                        {...props}
                        {...item}
                    />
                ))}
            </div>
        </>
    );
};
