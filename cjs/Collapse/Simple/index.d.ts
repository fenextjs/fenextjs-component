import React, { ReactNode } from "react";
export interface CollapseBaseProps {
    loader?: boolean;
    disabled?: boolean;
    defaultActive?: boolean;
    active?: boolean;
    id?: string;
    name?: string;
    status?: "none" | "error" | "ok";
    type?: "radio" | "checkbox";
    show?: "checked" | "focus";
    header: ReactNode;
    onChange?: (value: boolean) => void;
    iconArrow?: ReactNode;
    children?: ReactNode;
    rotateIcon?: boolean;
    useActiveForShowChildren?: boolean;
}
export interface CollapseClassProps {
    className?: string;
    classNameHeader?: string;
    classNameHeaderContent?: string;
    classNameHeaderIcon?: string;
    classNameBody?: string;
}
export interface CollapseProps extends CollapseBaseProps, CollapseClassProps {
}
export declare const Collapse: ({ className, classNameHeader, classNameHeaderContent, classNameHeaderIcon, classNameBody, children, loader, header, disabled, defaultActive, active: activeProps, id, name, type, show, status, onChange, iconArrow, rotateIcon, useActiveForShowChildren, }: CollapseProps) => React.JSX.Element;
