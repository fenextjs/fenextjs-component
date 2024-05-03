import React, { ReactNode } from "react";
import { ModalBaseBaseProps, ModalBaseClassProps } from "../Base";
/**
 * Properties for the class of the Modal component.
 */
export interface ModalClassProps {
    /**
     * The class name for the component.
     */
    classNameElementActionModalActive?: string;
    /**
     * Objet for className Modal.
     */
    classNameModal?: ModalBaseClassProps;
}
/**
 * Properties for the Modal component.
 */
export interface ModalProps extends Pick<ModalBaseBaseProps, "children" | "type" | "active" | "onClose" | "typeClose" | "disabledClose" | "useRender" | "name" | "closeComponent">, ModalClassProps {
    /**
     * The element with onClick for active modal.
     */
    ElementActionModalActive?: ReactNode;
    /**
     * If The element with onClick for active modal is disabled.
     */
    disabledElementActionModalActive?: boolean;
    /**
     * onActive Modal.
     */
    onActive?: () => void;
    /**
     * onActive Modal.
     */
    activeByNameLocalStorage?: boolean;
}
export declare const Modal: ({ classNameElementActionModalActive, classNameModal, ElementActionModalActive, disabledElementActionModalActive, children, active: activeProps, disabledClose, onClose: onCloseProps, onActive: onActiveProps, type, typeClose, useRender, name, activeByNameLocalStorage, closeComponent, }: ModalProps) => React.JSX.Element;
