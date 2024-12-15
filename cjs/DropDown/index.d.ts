import React, { ReactNode } from "react";
export interface DropDownProps {
    className?: string;
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
export declare const DropDown: ({ className, header, active: activeProps, defaultActive, disabled, loader, onChange: onChangeProps, iconArrow, rotateIcon, name, children, type, }: DropDownProps) => React.JSX.Element;
