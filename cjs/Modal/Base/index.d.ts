import React, { PropsWithChildren, ReactNode } from "react";
export interface ModalBaseBaseProps extends PropsWithChildren {
    active?: boolean;
    childrenUseActiveForShowHidden?: boolean;
    disabledClose?: boolean;
    useRender?: boolean;
    type?: "top" | "left" | "right" | "bottom" | "center" | "full" | "layout-grid" | "top-right" | "top-left" | "bottom-right" | "bottom-left";
    typeClose?: "out" | "inset" | "none";
    onClose?: () => void;
    name?: string;
    nameLocalStorage?: string;
    closeComponent?: ReactNode;
}
export interface ModalBaseClassProps {
    className?: string;
    classNameBg?: string;
    classNameClose?: string;
    classNameContent?: string;
}
export interface ModalBaseProps extends ModalBaseBaseProps, ModalBaseClassProps {
}
export declare const ModalBase: ({ className, classNameBg, classNameContent, classNameClose, active, childrenUseActiveForShowHidden, disabledClose, type, typeClose, onClose, children, useRender, name, closeComponent, }: ModalBaseProps) => React.JSX.Element;
