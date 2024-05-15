import React, { ReactNode } from "react";
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
export interface CollapseProps extends CollapseBaseProps, CollapseClassProps {
}
export declare const Collapse: ({ className, classNameHeader, classNameHeaderContent, classNameHeaderIcon, classNameBody, children, loader, header, disabled, defaultActive, active, name, type, show, status, onChange, iconArrow, }: CollapseProps) => React.JSX.Element;
