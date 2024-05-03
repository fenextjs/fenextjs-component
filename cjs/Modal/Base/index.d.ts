import React, { PropsWithChildren, ReactNode } from "react";
/**
 * Properties for the base ModalBase component.
 */
export interface ModalBaseBaseProps extends PropsWithChildren {
    /**
     * If active modal.
     */
    active?: boolean;
    /**
     * If active modal.
     */
    childrenUseActiveForShowHidden?: boolean;
    /**
     * If disabled close modal.
     */
    disabledClose?: boolean;
    /**
     * If disabled close modal.
     */
    useRender?: boolean;
    /**
     * Type of modal.
     */
    type?: "top" | "left" | "right" | "bottom" | "center" | "full" | "layout-grid";
    /**
     * Type of btn close for modal.
     */
    typeClose?: "out" | "inset" | "none";
    /**
     * onClose ModalBase.
     */
    onClose?: () => void;
    /**
     * name of Modal.
     */
    name?: string;
    /**
     * closeComponent of Modal.
     */
    closeComponent?: ReactNode;
}
/**
 * Properties for the class of the ModalBase component.
 */
export interface ModalBaseClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
    /**
     * The class name for Bg the component.
     */
    classNameBg?: string;
    /**
     * The class name for Icon Close the component.
     */
    classNameClose?: string;
    /**
     * The class name for Content the component.
     */
    classNameContent?: string;
}
/**
 * Properties for the ModalBase component.
 */
export interface ModalBaseProps extends ModalBaseBaseProps, ModalBaseClassProps {
}
export declare const ModalBase: ({ className, classNameBg, classNameContent, classNameClose, active, childrenUseActiveForShowHidden, disabledClose, type, typeClose, onClose, children, useRender, name, closeComponent, }: ModalBaseProps) => React.JSX.Element;
