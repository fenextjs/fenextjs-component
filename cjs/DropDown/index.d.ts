import React, { ReactNode } from "react";
export interface DropDownClassProps {
    className?: string;
    classNameContentHeader?: string;
    classNameContentIcon?: string;
    classNameBody?: string;
}
export interface DropDownProps extends DropDownClassProps {
    loader?: boolean;
    disabled?: boolean;
    defaultActive?: boolean;
    active?: boolean;
    name?: string;
    header: ReactNode;
    onChange?: (value: boolean) => void;
    iconArrow?: ReactNode;
    children?: ReactNode;
    rotateIcon?: boolean;
    type?: "checked" | "focus";
}
export declare const DropDown: ({ className, classNameBody, classNameContentHeader, classNameContentIcon, header, active: activeProps, defaultActive, disabled, loader, onChange: onChangeProps, iconArrow, rotateIcon, name, children, type, }: DropDownProps) => React.JSX.Element;
