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
export interface ModalProps extends Pick<ModalBaseBaseProps, "children" | "type" | "active" | "onClose" | "_t">, ModalClassProps {
    /**
     * The element with onClick for active modal.
     */
    ElementActionModalActive?: ReactNode;
    /**
     * onActive Modal.
     */
    onActive?: () => void;
}
export declare const Modal: ({ classNameElementActionModalActive, classNameModal, ElementActionModalActive, children, active: activeProps, onClose: onCloseProps, onActive: onActiveProps, type, _t, }: ModalProps) => React.JSX.Element;
